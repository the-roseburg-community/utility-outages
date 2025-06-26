from flask import Flask, jsonify, render_template, send_from_directory
from flask_cors import CORS
import requests
import re
import json
import os

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

# --- CLPUD Calibration (your new points) ---
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
