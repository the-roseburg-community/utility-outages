from flask import Flask, jsonify, render_template, send_from_directory
from flask_cors import CORS
import xml.etree.ElementTree as ET
import requests
import re
import json
import os
import threading
import time

app = Flask(
    __name__,
    static_folder='static',
    template_folder='templates'
)
CORS(app)

# ---- Pacific Power ----
PACIFIC_POWER_URL = "https://www.pacificpower.net/etc/pcorp/datafiles/outagemap/mapOR.json"
# ---- Douglas Electric ----
DEC_SUMMARY_URL = "https://outagemap-data.cloud.coop/douglaselectric/Hosted_Outage_Map/summary.json"
# ---- Central Lincoln ----
CLPUD_SUMMARY_URL = "https://outagemap-data.cloud.coop/clpud/Hosted_Outage_Map/summary.json"
# ---- Coos Curry Electric ----
CCE_URL = "https://outagemap.cooscurryelectric.com/OMSWebMap/MobileMap/OMSMobileService.asmx/GetAllOutages"
# ODOT Incidents URL
ODOT_URL = (
    "https://api.odot.state.or.us/tripcheck/Incidents"
)
ODOT_CCTV_URL = "https://api.odot.state.or.us/tripcheck/Cctv/Inventory"
odot_cctv_cache = {"data": None, "timestamp": 0, "error": None}
ODOT_CCTV_POLL_INTERVAL = 86400  # seconds

# --- ODOT DMS ---
ODOT_DMS_INVENTORY_URL = "https://api.odot.state.or.us/tripcheck/Dms/Inventory"
ODOT_DMS_STATUS_URL = "https://api.odot.state.or.us/tripcheck/Dms/Status"
dms_inventory_cache = {"data": None, "timestamp": 0, "error": None}
dms_status_cache = {"data": None, "timestamp": 0, "error": None}
DMS_INVENTORY_POLL_INTERVAL = 86400  # 24 hours
DMS_STATUS_POLL_INTERVAL = 30        # seconds

ODOT_KEY = os.getenv("ODOT_SUBSCRIPTION_KEY") # Required - pass in env file

# --- Douglas Electric Calibration ---
dec_x1, dec_y1 = 80642, 80827
dec_lat1, dec_lon1 = 43.48518340719974, -123.48087790358299

dec_x2, dec_y2 = 87107, 35420
dec_lat2, dec_lon2 = 43.19329710460463, -123.42784569895913

dec_a = (dec_lat2 - dec_lat1) / (dec_y2 - dec_y1)
dec_b = dec_lat1 - dec_a * dec_y1
dec_c = (dec_lon2 - dec_lon1) / (dec_x2 - dec_x1)
dec_d = dec_lon1 - dec_c * dec_x1

def map_dec_xy_to_latlon(x, y):
    lat = dec_a * y + dec_b
    lon = dec_c * x + dec_d
    return lat, lon

# --- CLPUD Calibration ---
clpud_x1, clpud_y1 = 21181, 43585
clpud_lat1, clpud_lon1 = 43.47878393579475, -124.22129431060301

clpud_x2, clpud_y2 = 35957, 192616
clpud_lat2, clpud_lon2 = 44.44270935878297, -124.08033686199173

clpud_a = (clpud_lat2 - clpud_lat1) / (clpud_y2 - clpud_y1)
clpud_b = clpud_lat1 - clpud_a * clpud_y1
clpud_c = (clpud_lon2 - clpud_lon1) / (clpud_x2 - clpud_x1)
clpud_d = clpud_lon1 - clpud_c * clpud_x1

def map_clpud_xy_to_latlon(x, y):
    lat = clpud_a * y + clpud_b
    lon = clpud_c * x + clpud_d
    return lat, lon

# -------- ODOT CACHE (and poller) --------
# This is a MUST!! Otherwise the ODOT API will be loaded on each user request. Don't want that.
odot_cache = {"data": None, "timestamp": 0, "error": None}
ODOT_POLL_INTERVAL = 30  # seconds

def poll_odot():
    while True:
        try:
            print("[ODOT] Fetching live data from API")
            headers = {
                "Cache-Control": "no-cache",
                "Ocp-Apim-Subscription-Key": ODOT_KEY,
            }
            resp = requests.get(ODOT_URL, headers=headers, timeout=10)
            resp.raise_for_status()
            odot_cache["data"] = resp.json()
            odot_cache["timestamp"] = time.time()
            odot_cache["error"] = None
            print(f"[ODOT] Cache updated at {time.ctime(odot_cache['timestamp'])}")
        except Exception as e:
            odot_cache["error"] = str(e)
            print(f"[ODOT] Error updating cache: {e}")
        time.sleep(ODOT_POLL_INTERVAL)

threading.Thread(target=poll_odot, daemon=True).start()
# -------- END ODOT CACHE --------

# ===================== POWER PROVIDER CACHES & POLLER (NEW) =====================

# Per-provider caches
pacific_cache = {"data": None, "timestamp": 0, "error": None}  # shape: same as original /outages (list with [ { outages: [...] } ])
dec_cache     = {"data": None, "timestamp": 0, "error": None}  # shape: list of normalized outage dicts
clpud_cache   = {"data": None, "timestamp": 0, "error": None}  # shape: list of normalized outage dicts
cce_cache     = {"data": None, "timestamp": 0, "error": None}  # shape: list of normalized outage dicts

# Optional aggregated cache (not required by current frontend; provided for future use)
power_cache   = {"data": None, "timestamp": 0, "error": None}  # shape: list of normalized outage dicts from all providers

POWER_POLL_INTERVAL = 10  # seconds
_session = requests.Session()

def _fetch_pacific_power():
    # Returns list with same structure your frontend expects under /outages
    resp = _session.get(PACIFIC_POWER_URL, timeout=10)
    resp.raise_for_status()
    raw = resp.text.strip()
    fixed = "[" + re.sub(r'}\s*{', '},{', raw).rstrip(',') + "]"
    data = json.loads(fixed)
    return data

def _fetch_dec():
    resp = _session.get(DEC_SUMMARY_URL, timeout=10)
    resp.raise_for_status()
    summary = resp.json()
    outages = []
    for o in summary.get("outages", []):
        lat, lon = map_dec_xy_to_latlon(o["x"], o["y"])
        outages.append({
            "id": o.get("id"),
            "latitude": lat,
            "longitude": lon,
            "custOut": o.get("nbrOut"),
            "planned": o.get("planned", False),
            "source": "DEC"
        })
    return outages

def _fetch_clpud():
    resp = _session.get(CLPUD_SUMMARY_URL, timeout=10)
    resp.raise_for_status()
    summary = resp.json()
    outages = []
    for o in summary.get("outages", []):
        lat, lon = map_clpud_xy_to_latlon(o["x"], o["y"])
        outages.append({
            "id": o.get("id"),
            "latitude": lat,
            "longitude": lon,
            "custOut": o.get("nbrOut"),
            "planned": "Planned" in str(o.get("lifeCycleStatus", "")),
            "status": o.get("lifeCycleStatus", ""),
            "source": "CLPUD"
        })
    return outages

def _fetch_cce():
    resp = _session.get(CCE_URL, timeout=10)
    resp.raise_for_status()
    root = ET.fromstring(resp.content)
    ns = {"ns": "http://tempuri.org/"}
    items = []
    outages_elem = root.find('ns:Outages', ns)
    if outages_elem is not None:
        for outage in outages_elem:
            items.append({
                "id": outage.findtext('ns:CaseNumber', default='', namespaces=ns),
                "latitude": float(outage.findtext('ns:Y', default='0', namespaces=ns)),
                "longitude": float(outage.findtext('ns:X', default='0', namespaces=ns)),
                "custOut": int(outage.findtext('ns:CutomersAffected', default='0', namespaces=ns)),
                "poleNumber": outage.findtext('ns:PoleNumber', default='', namespaces=ns),
                "elementName": outage.findtext('ns:ElementName', default='', namespaces=ns),
                "cause": outage.findtext('ns:Cause', default='', namespaces=ns),
                "status": outage.findtext('ns:CaseStatus', default='', namespaces=ns),
                "outageTime": outage.findtext('ns:OutageTime', default='', namespaces=ns),
                "restorationTime": outage.findtext('ns:RestorationTime', default='', namespaces=ns),
                "source": "CCE"
            })
    return items

def _build_aggregated_power():
    combined = []

    # Pacific: flatten to normalized objects if we have it
    try:
        p = pacific_cache["data"]
        if isinstance(p, list) and p and isinstance(p[0], dict):
            for o in (p[0].get("outages") or []):
                if not o.get("latitude") or not o.get("longitude"):
                    continue
                combined.append({
                    "id": o.get("id") or f"{o.get('latitude')},{o.get('longitude')}",
                    "latitude": o.get("latitude"),
                    "longitude": o.get("longitude"),
                    "custOut": o.get("custOut"),
                    "planned": False,
                    "status": o.get("crewStatus"),
                    "cause": o.get("cause"),
                    "zip": o.get("zip"),
                    "etr": o.get("etr"),
                    "reported": o.get("reported"),
                    "source": "PACIFIC"
                })
    except Exception:
        pass

    # DEC
    try:
        for o in (dec_cache["data"] or []):
            combined.append(o)
    except Exception:
        pass

    # CLPUD
    try:
        for o in (clpud_cache["data"] or []):
            combined.append(o)
    except Exception:
        pass

    # CCE
    try:
        for o in (cce_cache["data"] or []):
            combined.append(o)
    except Exception:
        pass

    return combined

def poll_power_providers():
    # Do an immediate fetch before entering the steady loop, so caches warm ASAP
    while True:
        now = time.time()
        try:
            # PACIFIC
            try:
                data = _fetch_pacific_power()
                pacific_cache["data"] = data
                pacific_cache["timestamp"] = time.time()
                pacific_cache["error"] = None
                print(f"[POWER] Pacific cache updated at {time.ctime(pacific_cache['timestamp'])} items={len(data[0].get('outages', [])) if data and isinstance(data, list) and data[0] else 0}")
            except Exception as e:
                pacific_cache["error"] = str(e)
                print(f"[POWER] Pacific error: {e}")

            # DEC
            try:
                data = _fetch_dec()
                dec_cache["data"] = data
                dec_cache["timestamp"] = time.time()
                dec_cache["error"] = None
                print(f"[POWER] DEC cache updated at {time.ctime(dec_cache['timestamp'])} items={len(data)}")
            except Exception as e:
                dec_cache["error"] = str(e)
                print(f"[POWER] DEC error: {e}")

            # CLPUD
            try:
                data = _fetch_clpud()
                clpud_cache["data"] = data
                clpud_cache["timestamp"] = time.time()
                clpud_cache["error"] = None
                print(f"[POWER] CLPUD cache updated at {time.ctime(clpud_cache['timestamp'])} items={len(data)}")
            except Exception as e:
                clpud_cache["error"] = str(e)
                print(f"[POWER] CLPUD error: {e}")

            # CCE
            try:
                data = _fetch_cce()
                cce_cache["data"] = data
                cce_cache["timestamp"] = time.time()
                cce_cache["error"] = None
                print(f"[POWER] CCE cache updated at {time.ctime(cce_cache['timestamp'])} items={len(data)}")
            except Exception as e:
                cce_cache["error"] = str(e)
                print(f"[POWER] CCE error: {e}")

            # Aggregated
            try:
                combined = _build_aggregated_power()
                power_cache["data"] = combined
                power_cache["timestamp"] = time.time()
                power_cache["error"] = None
                print(f"[POWER] Aggregated cache updated at {time.ctime(power_cache['timestamp'])} items={len(combined)}")
            except Exception as e:
                power_cache["error"] = str(e)
                print(f"[POWER] Aggregated error: {e}")

        except Exception as outer:
            # catch-all so the thread never dies
            print(f"[POWER] Poller outer error: {outer}")

        # Maintain ~10s cadence from the start of the cycle
        elapsed = time.time() - now
        sleep_for = max(1.0, POWER_POLL_INTERVAL - elapsed)
        time.sleep(sleep_for)

# Start the power poller in a background thread
threading.Thread(target=poll_power_providers, daemon=True).start()

# ===================== END POWER PROVIDER CACHES & POLLER =====================

@app.route("/outages")
def get_pacific_power_outages():
    # Serve from cache only
    if pacific_cache["data"] is not None:
        return jsonify(pacific_cache["data"])
    elif pacific_cache["error"]:
        return jsonify({"error": pacific_cache["error"]}), 503
    else:
        return jsonify({"error": "No Pacific Power data cached yet."}), 503

@app.route("/dec-outages")
def get_dec_outages():
    # Serve from cache only
    if dec_cache["data"] is not None:
        return jsonify(dec_cache["data"])
    elif dec_cache["error"]:
        return jsonify({"error": dec_cache["error"]}), 503
    else:
        return jsonify({"error": "No DEC data cached yet."}), 503

@app.route("/clpud-outages")
def get_clpud_outages():
    # Serve from cache only
    if clpud_cache["data"] is not None:
        return jsonify(clpud_cache["data"])
    elif clpud_cache["error"]:
        return jsonify({"error": clpud_cache["error"]}), 503
    else:
        return jsonify({"error": "No CLPUD data cached yet."}), 503

@app.route("/cce-outages")
def get_cce_outages():
    # Serve from cache only
    if cce_cache["data"] is not None:
        return jsonify(cce_cache["data"])
    elif cce_cache["error"]:
        return jsonify({"error": cce_cache["error"]}), 503
    else:
        return jsonify({"error": "No CCE data cached yet."}), 503

# -------- Optional aggregated route (non-breaking) --------
@app.route("/power-outages")
def get_power_outages():
    if power_cache["data"] is not None:
        # Mark stale if older than 120 seconds
        age = time.time() - (power_cache["timestamp"] or 0)
        return jsonify({
            "updated": int(power_cache["timestamp"] or 0),
            "stale": age > 120,
            "outages": power_cache["data"]
        })
    elif power_cache["error"]:
        return jsonify({"error": power_cache["error"]}), 503
    else:
        return jsonify({"error": "No power data cached yet."}), 503

@app.route("/odot-incidents")
def get_odot_incidents():
    # Serve only the cached data
    if odot_cache["data"]:
        return jsonify(odot_cache["data"])
    elif odot_cache["error"]:
        return jsonify({"error": odot_cache["error"]}), 503
    else:
        return jsonify({"error": "No ODOT data cached yet."}), 503

def poll_odot_cctv():
    while True:
        try:
            print("[ODOT CCTV] Fetching camera data from API")
            headers = {
                "Cache-Control": "no-cache",
                "Ocp-Apim-Subscription-Key": ODOT_KEY  # Make sure this is set!
            }
            resp = requests.get(ODOT_CCTV_URL, headers=headers, timeout=15)
            resp.raise_for_status()
            odot_cctv_cache["data"] = resp.json()
            odot_cctv_cache["timestamp"] = time.time()
            odot_cctv_cache["error"] = None
            print(f"[ODOT CCTV] Cache updated at {time.ctime(odot_cctv_cache['timestamp'])}")
        except Exception as e:
            odot_cctv_cache["error"] = str(e)
            print(f"[ODOT CCTV] Error updating cache: {e}")
        time.sleep(ODOT_CCTV_POLL_INTERVAL)

# Start the poller in a thread
threading.Thread(target=poll_odot_cctv, daemon=True).start()

@app.route("/odot-cctv")
def get_odot_cctv():
    if odot_cctv_cache["data"]:
        return jsonify(odot_cctv_cache["data"])
    elif odot_cctv_cache["error"]:
        return jsonify({"error": odot_cctv_cache["error"]}), 503
    else:
        return jsonify({"error": "No ODOT CCTV data cached yet."}), 503

def poll_dms_inventory():
    while True:
        try:
            print("[ODOT DMS] Fetching inventory...")
            headers = {
                "Cache-Control": "no-cache",
                "Ocp-Apim-Subscription-Key": ODOT_KEY
            }
            r = requests.get(ODOT_DMS_INVENTORY_URL, headers=headers, timeout=20)
            r.raise_for_status()
            dms_inventory_cache["data"] = r.json()
            dms_inventory_cache["timestamp"] = time.time()
            dms_inventory_cache["error"] = None
            print(f"[ODOT DMS] Inventory cache updated at {time.ctime(dms_inventory_cache['timestamp'])}")
        except Exception as e:
            dms_inventory_cache["error"] = str(e)
            print(f"[ODOT DMS] Inventory error: {e}")
        time.sleep(DMS_INVENTORY_POLL_INTERVAL)

def poll_dms_status():
    while True:
        try:
            print("[ODOT DMS] Fetching status...")
            headers = {
                "Cache-Control": "no-cache",
                "Ocp-Apim-Subscription-Key": ODOT_KEY
            }
            r = requests.get(ODOT_DMS_STATUS_URL, headers=headers, timeout=20)
            r.raise_for_status()
            dms_status_cache["data"] = r.json()
            dms_status_cache["timestamp"] = time.time()
            dms_status_cache["error"] = None
            print(f"[ODOT DMS] Status cache updated at {time.ctime(dms_status_cache['timestamp'])}")
        except Exception as e:
            dms_status_cache["error"] = str(e)
            print(f"[ODOT DMS] Status error: {e}")
        time.sleep(DMS_STATUS_POLL_INTERVAL)

threading.Thread(target=poll_dms_inventory, daemon=True).start()
threading.Thread(target=poll_dms_status, daemon=True).start()

@app.route("/odot-dms-inventory")
def get_odot_dms_inventory():
    if dms_inventory_cache["data"]:
        return jsonify(dms_inventory_cache["data"])
    elif dms_inventory_cache["error"]:
        return jsonify({"error": dms_inventory_cache["error"]}), 503
    else:
        return jsonify({"error": "No ODOT DMS inventory cached yet."}), 503

@app.route("/odot-dms-status")
def get_odot_dms_status():
    if dms_status_cache["data"]:
        return jsonify(dms_status_cache["data"])
    elif dms_status_cache["error"]:
        return jsonify({"error": dms_status_cache["error"]}), 503
    else:
        return jsonify({"error": "No ODOT DMS status cached yet."}), 503

@app.route("/")
def serve_index():
    return render_template("index.html")

@app.route("/static/<path:filename>")
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html"), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
