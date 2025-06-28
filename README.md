# Roseburg Receiver – Utility Outage Map

A real-time web application that visualizes power outages across multiple utilities in Southwest Oregon. Built with Flask, Leaflet.js, and Turf.js, this project aggregates outage data from:

- **Pacific Power**
- **Douglas Electric Cooperative**
- **Central Lincoln PUD**
- **Coos-Curry Electric Cooperative**

and renders them on an interactive county map, complete with per-utility customer outage counts.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the App Locally](#running-the-app-locally)
  - [Docker](#docker)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Live outage markers** for each utility, color-coded by source
- **County polygons** with configurable styles and legend toggle
- **Per-county outage summaries** by utility, with localStorage state persistence
- **Automated page refresh** and data polling for near-real-time updates
- **Responsive design** and accessibility considerations

---

## Demo

Access the live map at:  
[https://outages.roseburgscanner.com](https://outages.roseburgscanner.com)

---

## Architecture

1. **Frontend**
   - **Leaflet.js** for map rendering
   - **Turf.js** for point-in-polygon detection
   - **Vanilla JavaScript** for legend toggle, details panels, and data polling

2. **Backend**
   - **Flask** application serving static assets and JSON REST endpoints
   - **Requests** to external outage data sources
   - **Custom calibration** functions to convert proprietary (x, y) coordinates to WGS84 lat/lon for DEC and CLPUD

---

## Getting Started

### Prerequisites

- Python 3.8+
- pip

### Installation

```bash
git clone https://github.com/your-org/roseburg-receiver-outage-map.git
cd roseburg-receiver-outage-map
pip install -r requirements.txt
```

### Configuration

No secrets are required. External data sources are hard-coded:

- `PACIFIC_POWER_URL`
- `DEC_SUMMARY_URL`
- `CLPUD_SUMMARY_URL`
- `CCE_URL`

Adjust coordinate calibration constants in `app.py` if utilities change their feed formats.

### Running the App Locally

```bash
export FLASK_APP=app.py
flask run --host=0.0.0.0 --port=5001
```

Or:

```bash
python app.py
```

Open your browser at `http://localhost:5001`.

### Docker

Build the Docker image:

```bash
docker build -t roseburg-outage-map .
```

Run the container:

```bash
docker run -d -p 5001:5001   --name outage-map   roseburg-outage-map
```

Access the application at `http://localhost:5001`.

---

## Project Structure

```
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── Dockerfile             # Container build instructions
├── static/
│   ├── favicon.ico
│   ├── styles.css
│   ├── trr-script.js      # Leaflet + data-fetch logic
│   └── dc.geojson         # County boundaries
└── templates/
    ├── index.html         # Main page template
    └── 404.html           # Custom 404 page
```

---

## API Endpoints

| Route            | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `/`              | Renders the outage map UI                                          |
| `/outages`       | Pacific Power JSON feed                                            |
| `/dec-outages`   | Douglas Electric Cooperative outages (with x/y → lat/lon mapping)  |
| `/clpud-outages` | Central Lincoln PUD outages (with x/y → lat/lon mapping)           |
| `/cce-outages`   | Coos-Curry Electric XML feed parsed into JSON                      |
| `/static/<path>` | Serves CSS, JS, geoJSON, and other static assets                   |

---

## Customization

- **Styling**: update `styles.css` and adjust `countyStyles` in `trr-script.js`
- **County GeoJSON**: swap out `dc.geojson` for any other region
- **Polling Interval**: modify the `setInterval` duration in `trr-script.js` and the `<meta http-equiv="refresh">` tag in `index.html`

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes
4. Open a pull request

Please ensure all changes include appropriate tests and documentation updates.

---

## License

Distributed under the GNU General Public License. See `LICENSE` for details.
