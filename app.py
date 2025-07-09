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

@app.route("/outages")
def get_pacific_power_outages():
    try:
        raw = requests.get(PACIFIC_POWER_URL, timeout=10).text.strip()
        fixed = "[" + re.sub(r'}\s*{', '},{', raw).rstrip(',') + "]"
        data = json.loads(fixed)
        if not data or not data[0].get("outages"):
            return jsonify([])
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/dec-outages")
def get_dec_outages():
    try:
        r = requests.get(DEC_SUMMARY_URL, timeout=10)
        summary = r.json()
        if not summary or not summary.get("outages"):
            return jsonify([])
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
        return jsonify(outages)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/clpud-outages")
def get_clpud_outages():
    try:
        r = requests.get(CLPUD_SUMMARY_URL, timeout=10)
        summary = r.json()
        if not summary or not summary.get("outages"):
            return jsonify([])
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
        return jsonify(outages)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/cce-outages")
def get_cce_outages():
    try:
        r = requests.get(CCE_URL, timeout=10)
        root = ET.fromstring(r.content)
        ns = {"ns": "http://tempuri.org/"}
        outages = []
        for outage in root.find('ns:Outages', ns):
            # XML keys: CaseNumber, CutomersAffected, X, Y, OutageTime, RestorationTime, PoleNumber, ElementName, CaseStatus, Cause
            outages.append({
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
        return jsonify(outages)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

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
