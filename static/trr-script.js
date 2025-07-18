/**
 * ============================================================================
 *               The Roseburg Receiver - Utility Outage & Incident Map 
 *                  https://github.com/the-roseburg-community/utility-outages
 *                   (c) The Roseburg Receiver Community, 2024-2025+
 * ============================================================================
 *
 *  Live Power Outages • ODOT Traffic Incidents • Road Cameras • Mileposts
 *  For Douglas County, Oregon and surrounding communities
 *
 * ----------------------------------------------------------------------------
 *  This file provides the main client-side logic for the interactive map at
 *  https://outages.roseburgscanner.com
 *
 *  FEATURES:
 *   - Layer toggling and persistent UI settings with localStorage
 *   - Live Leaflet map with custom SVG markers for outages/incidents/cameras/signs
 *   - Restores last popup after auto-refresh (unless user closed it)
 *   - Responsive, mobile-friendly design
 *   - Efficient, debounced updates for large datasets (e.g. mileposts)
 *   - County overlays and utility statistics
 *   - Extensible design for new data layers
 *
 * ----------------------------------------------------------------------------
 *  OPEN SOURCE LICENSE:
 *
 *  This project is licensed under the GNU General Public License v3.0.
 *  You are free to use, modify, and redistribute it under the terms of the GPL-3.0.
 *  See LICENSE or https://www.gnu.org/licenses/gpl-3.0.en.html for details.
 *
 *  Contributions are welcome! Please see:
 *     https://github.com/the-roseburg-community/utility-outages
 *  for issue tracking, documentation, and how to get involved.
 *
 * ----------------------------------------------------------------------------
 *  PROJECT OWNERSHIP:
 *
 *      The Roseburg Receiver
 *      Douglas County Community Emergency Information Project
 *      Roseburg, Oregon — https://roseburgscanner.com
 *      Community, not-for-profit, and open to public contribution.
 *
 *  Contact & Info: https://www.roseburgscanner.com/about/#contact-the-roseburg-receiver
 *
 * ============================================================================
 /**
 * =============================================================================
 *    The Roseburg Receiver – Outage & Incident Map (Front-End Logic)  
 * =============================================================================
 *
 *  This script powers the interactive Leaflet.js-based utility map at
 *  https://outages.roseburgscanner.com, providing real-time visualization
 *  of power outages, ODOT traffic incidents, road cameras, DMS message boards,
 *  and Oregon mileposts for Douglas County and surrounding regions.
 *
 *  MAJOR COMPONENTS:
 *  -----------------
 *  - Legend Toggle & Persistence
 *      • Shows/hides the map legend, remembers user preference (localStorage)
 *  - Map Initialization
 *      • Sets up Leaflet map, default center/zoom, and OSM tile layer
 *  - Popup State Logic
 *      • Remembers the last opened popup so it can be restored after refresh
 *      • Detects when user closes popups (so we don't re-open them automatically)
 *  - Layer Management
 *      • Uses Leaflet LayerGroups for power, ODOT, camera, DMS, and milepost data
 *      • Custom toggle UI for enabling/disabling each layer (with state persistence)
 *  - SVG Icon Helpers
 *      • Provides reusable SVG marker icons for incidents, power, cameras, etc.
 *  - County Polygons & Styling
 *      • Loads and styles GeoJSON county boundaries
 *      • Tracks outage totals by county/utility (and updates legend)
 *  - Outage Fetch/Render
 *      • Aggregates and displays power outage data from multiple utilities
 *      • Supports custom coordinate transforms for DEC/CLPUD proprietary formats
 *      • Automatically updates (polls) every 30 seconds
 *  - ODOT Incidents, Cameras, DMS Signs
 *      • Fetches and displays traffic events, road cams, and dynamic signs from ODOT
 *      • Each type has custom icon, popup, and update interval
 *  - Mileposts
 *      • Loads Oregon milepost locations as GeoJSON
 *      • Only renders labels at high zoom, within current map bounds, and if toggled on
 *      • Uses a debounce for fast, smooth user interaction
 *  - UI/UX
 *      • Supports mobile/responsive layout
 *      • Remembers legend tabs, <details> panel state, and layer toggles
 *      • Hides or shows map layers and legends based on user actions and saved settings
 *
 *  DEPENDENCIES:
 *  -------------
 *    - Leaflet.js
 *    - Turf.js (for point-in-polygon/county matching)
 *    - Browser localStorage for UI state
 *
 *  DATA SOURCES:
 *  -------------
 *    - Backend API endpoints (`/outages`, `/dec-outages`, `/clpud-outages`, `/cce-outages`)
 *    - ODOT incident/camera/sign endpoints proxied by Flask server
 *    - County/milepost GeoJSON static assets
 *
 *  CUSTOMIZATION POINTS:
 *  --------------------
 *    - Adjust `countyStyles` for different county/utility coloring
 *    - Edit SVG markup in `svgIcon()` and `incidentIcons` for branding
 *    - Change polling intervals for fresher/slower data
 *    - Extend with new utilities, counties, or incident types as needed
 *
 *  (c) The Roseburg Receiver Community – Open Source, GPL-3.0
 * =============================================================================
 */

// ---- Legend toggle logic with localStorage ----
const legend       = document.getElementById('map-legend');
const legendToggle = document.getElementById('legend-toggle');
const toggleBox    = document.getElementById('toggle-legend-box');

function getInitialLegendState() {
  const stored = localStorage.getItem('legendVisible');
  if (stored !== null) return stored === '1';
  return window.innerWidth > 500;
}
function setLegendState(show) {
  legend.style.display = show ? 'block' : 'none';
  toggleBox.checked = show;
  legendToggle.querySelector('label').textContent = show ? 'Hide Legend' : 'Show Legend';
  localStorage.setItem('legendVisible', show ? '1' : '0');
}
toggleBox.addEventListener('change', () => setLegendState(toggleBox.checked));
legendToggle.addEventListener('click', e => {
  if (e.target.tagName !== 'INPUT') {
    toggleBox.checked = !toggleBox.checked;
    setLegendState(toggleBox.checked);
  }
});
setLegendState(getInitialLegendState());

// ---- MAP SETUP ----
const map = L.map('map').setView([42.75, -122.90], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

let lastOpenedLatLng = null;
let popupManuallyClosed = false;
let programmaticClose = false;

map.on('popupclose', function(e) {
  if (programmaticClose) {
    // This close event was triggered by our code, NOT the user.
    programmaticClose = false;
    return;
  }
  if (
    lastOpenedLatLng &&
    e.popup._latlng &&
    Math.abs(e.popup._latlng.lat - lastOpenedLatLng.lat) < 0.0001 &&
    Math.abs(e.popup._latlng.lng - lastOpenedLatLng.lng) < 0.0001
  ) {
    popupManuallyClosed = true;
    lastOpenedLatLng = null;
  }
});
map.on('popupopen', function(e) {
  // Only reset popupManuallyClosed if this popup is for a different marker than before
  if (
    !lastOpenedLatLng ||
    Math.abs(e.popup._latlng.lat - lastOpenedLatLng.lat) > 0.0001 ||
    Math.abs(e.popup._latlng.lng - lastOpenedLatLng.lng) > 0.0001
  ) {
    popupManuallyClosed = false;
    lastOpenedLatLng = e.popup._latlng;
  }
});

// ---- LayerGroups for toggling ----
let powerLayer = L.layerGroup();
const odotLayer = L.layerGroup();
const cctvLayer = L.layerGroup();
const dmsLayer  = L.layerGroup();
const milepostLayer = L.layerGroup();

// ---- SVG ICON HELPERS ----
function svgIcon(svgString, size = [24,24]) {
  return L.divIcon({
    html: svgString,
    className: "",
    iconSize:   size,
    iconAnchor: [size[0]/2, size[1]/2]
  });
}
const incidentIcons = {
  noDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#fff" stroke="#444" stroke-width="4"/>
    </svg>
  `, [18,18]),
  minorDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#fff" stroke="#444" stroke-width="4"/>
      <rect x="12" y="32" width="40" height="12" fill="#e74c3c"/>
    </svg>
  `, [18,18]),
  majorDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="4"/>
    </svg>
  `, [18,18]),
  closed: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="4"/>
      <line x1="18" y1="18" x2="46" y2="46" stroke="#fff" stroke-width="6"/>
      <line x1="46" y1="18" x2="18" y2="46" stroke="#fff" stroke-width="6"/>
    </svg>
  `, [18,18]),
  crash: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="16" y="32" width="32" height="14" rx="4" fill="#666"/>
      <rect x="24" y="26" width="16" height="10" rx="2" fill="#bbb"/>
      <circle cx="22" cy="50" r="4" fill="#222"/>
      <circle cx="42" cy="50" r="4" fill="#222"/>
      <polygon points="14,38 8,34 12,32 8,28 15,31 18,26 19,33 26,31 21,36 25,40 18,38 17,45"
        fill="#ff5252" stroke="#a00" stroke-width="1"/>
    </svg>
  `, [32,32]),
  cone: svgIcon(`
    <svg viewBox="0 0 64 64">
      <polygon points="32,8 16,56 48,56" fill="#f39c12" stroke="#e67e22" stroke-width="4"/>
      <rect x="24" y="36" width="16" height="4" fill="#fff"/>
      <rect x="28" y="44" width="8"  height="4" fill="#fff"/>
    </svg>
  `, [18,18]),
  default: svgIcon(`
    <svg viewBox="0 0 64 64">
      <polygon points="32,4 4,60 60,60" fill="#f1c40f" stroke="#f39c12" stroke-width="4"/>
      <rect x="30" y="20" width="4" height="18" fill="#fff"/>
      <circle cx="32" cy="50" r="4" fill="#fff"/>
    </svg>
  `, [22,22])
};
function getIconForIncident(inc) {
  const desc = inc['impact-desc'] || '';
  const hl   = (inc.headline || '').toLowerCase();
  if (hl.includes('closed'))                                return incidentIcons.closed;
  if (hl.includes('crash'))                                 return incidentIcons.crash;
  if (inc['event-type-id'].includes("RW")) return incidentIcons.cone;
  if (hl.includes('disabled') || hl.includes('obstruction') || hl.includes('hazard')) return incidentIcons.default;
  if (desc.includes('No to Minimum Delay') || desc.includes('Informational Only')) return incidentIcons.noDelay;
  if (desc.includes('Estimated delay under 20 minutes'))    return incidentIcons.minorDelay;
  if (/hours/i.test(desc) || desc.toLowerCase().includes('closure with detour')) return incidentIcons.majorDelay;
  return incidentIcons.default;
}
function dmsIcon(isOn) {
  return L.divIcon({
    html: `<svg width="38" height="22" viewBox="0 0 38 22">
      <rect x="2" y="2" width="34" height="18" rx="4" fill="${isOn ? '#FFD600' : '#222'}" stroke="#333" stroke-width="3"/>
      <rect x="6" y="7" width="26" height="8" rx="2" fill="#111" />
      <rect x="14" y="16" width="10" height="2" rx="1" fill="#555"/>
    </svg>`,
    iconSize: [38, 22],
    iconAnchor: [19, 11],
    className: ""
  });
}

// ---- COUNTY STYLES ----
const countyStyles = [
  { name: 'douglas',   color: '#7ea253', fill: '#a9c995' },
  { name: 'jackson',   color: '#068D9D', fill: '#7ed6df' },
  { name: 'josephine', color: '#53599A', fill: '#b5b4e3' },
  { name: 'klamath',   color: '#E67E22', fill: '#FDEBD0' },
  { name: 'coos',      color: '#e74c3c', fill: '#fdecec' }
];
const polygons = {};
const totals = {
  coos:      { pacific: 0, cce: 0, clpud: 0 },
  douglas:   { pacific: 0, dec: 0, clpud: 0 },
  jackson:   { pacific: 0 },
  josephine: { pacific: 0 },
  klamath:   { pacific: 0 }
};
function updateTotalsDisplay() {
  // Coos
  document.getElementById('meters-pacific-coos').textContent = totals.coos.pacific.toLocaleString();
  document.getElementById('meters-cce-coos').textContent     = totals.coos.cce.toLocaleString();
  document.getElementById('meters-clpud-coos').textContent  = totals.coos.clpud.toLocaleString();
  document.getElementById('meters-total-coos').textContent  =
    (totals.coos.pacific + totals.coos.cce + totals.coos.clpud).toLocaleString();

 // Douglas
  document.getElementById('meters-pacific-douglas').textContent = totals.douglas.pacific.toLocaleString();
  document.getElementById('meters-dec-douglas').textContent     = totals.douglas.dec.toLocaleString();
  document.getElementById('meters-clpud-douglas').textContent   = totals.douglas.clpud.toLocaleString();
  document.getElementById('meters-total-douglas').textContent   =
    (totals.douglas.pacific + totals.douglas.dec + totals.douglas.clpud).toLocaleString();

  // Jackson
  document.getElementById('meters-pacific-jackson').textContent = totals.jackson.pacific.toLocaleString();
  document.getElementById('meters-total-jackson').textContent   = totals.jackson.pacific.toLocaleString();

  // Josephine
  document.getElementById('meters-pacific-josephine').textContent = totals.josephine.pacific.toLocaleString();
  document.getElementById('meters-total-josephine').textContent   = totals.josephine.pacific.toLocaleString();

  // Klamath
  document.getElementById('meters-pacific-klamath').textContent = totals.klamath.pacific.toLocaleString();
  document.getElementById('meters-total-klamath').textContent   = totals.klamath.pacific.toLocaleString();
}
function pointInCounty(lat, lon, county) {
  const poly = polygons[county];
  return poly ? turf.booleanPointInPolygon(turf.point([lon, lat]), poly) : false;
}

// ---- OUTAGE DATA ----
function fetchOutages() {
  Object.keys(totals).forEach(cty => Object.keys(totals[cty]).forEach(u => totals[cty][u] = 0));
  let openPopup = map._popup;
  let openLatLng = null;
  if (openPopup && openPopup._source && openPopup._source.getLatLng) {
    openLatLng = openPopup._source.getLatLng();
  }
  let lastOpenedMarker = null;

  Promise.all([
    fetch('/outages').then(r => r.json()),
    fetch('/dec-outages').then(r => r.json()),
    fetch('/clpud-outages').then(r => r.json()),
    fetch('/cce-outages').then(r => r.json())
  ]).then(([pacificData, decData, clpudData, cceData]) => {
    const markerList = [];

    // Pacific Power
    (pacificData[0]?.outages || []).forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8, fillColor: '#007bff', color: '#000', weight: 1, opacity: 1, fillOpacity: 0.85
      }).bindPopup(`
        <strong>ZIP:</strong> ${o.zip}<br/>
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Cause:</strong> ${o.cause}<br/>
        <strong>Crew Status:</strong> ${o.crewStatus || 'Unknown'}<br/>
        <strong>ETR:</strong> ${o.etr}<br/>
        <small>First Reported: ${o.reported}</small><br/>
        <strong>Utility:</strong> <a href="https://www.pacificpower.net/outages-safety.html">Pacific Power</a>
      `);
      markerList.push(marker);
      if (openLatLng && Math.abs(o.latitude - openLatLng.lat) < 0.0001 && Math.abs(o.longitude - openLatLng.lng) < 0.0001) {
        lastOpenedMarker = marker;
        lastOpenedLatLng = openLatLng;
      }
      ['douglas','jackson','josephine','klamath','coos'].forEach(cty => {
        if (pointInCounty(o.latitude, o.longitude, cty)) {
          totals[cty].pacific += Number(o.custOut) || 0;
        }
      });
    });

    // Douglas Electric
    decData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8, fillColor: '#ffa500', color: '#000', weight: 1, opacity: 1, fillOpacity: 0.85
      }).bindPopup(`
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
        <strong>ID:</strong> ${o.id}<br/>
        <strong>Utility:</strong> <a href="https://douglaselectric.outagemap.coop/">Douglas Electric</a>
      `);
      markerList.push(marker);
      if (openLatLng && Math.abs(o.latitude - openLatLng.lat) < 0.0001 && Math.abs(o.longitude - openLatLng.lng) < 0.0001) {
        lastOpenedMarker = marker;
        lastOpenedLatLng = openLatLng;
      }
      if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
        totals.douglas.dec += Number(o.custOut) || 0;
      }
    });

    clpudData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8, fillColor: '#AA40FF', color: '#000', weight: 1, opacity: 1, fillOpacity: 0.85
      }).bindPopup(`
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
        <strong>ID:</strong> ${o.id}<br/>
        <strong>Utility:</strong> <a href="https://clpud.org/customer-information/outages/outage-map/">Central Lincoln PUD</a>
      `);
      markerList.push(marker);
      if (openLatLng && Math.abs(o.latitude - openLatLng.lat) < 0.0001 && Math.abs(o.longitude - openLatLng.lng) < 0.0001) {
        lastOpenedMarker = marker;
      }
      if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
        totals.douglas.clpud += Number(o.custOut) || 0;
      }
      if (pointInCounty(o.latitude, o.longitude, 'coos')) {
        totals.coos.clpud += Number(o.custOut) || 0;
      }
    });

    cceData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8, fillColor: '#e74c3c', color: '#000', weight: 1, opacity: 1, fillOpacity: 0.85
      }).bindPopup(`
        <strong>Case Number:</strong> ${o.id}<br/>
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Pole:</strong> ${o.poleNumber || ''}<br/>
        <strong>Element:</strong> ${o.elementName || ''}<br/>
        <strong>Status:</strong> ${o.status || ''}<br/>
        <strong>Cause:</strong> ${o.cause || ''}<br/>
        <strong>Outage Time:</strong> ${o.outageTime || ''}<br/>
        <strong>Restoration:</strong> ${o.restorationTime || ''}<br/>
        <strong>Utility:</strong> <a href="https://outagemap.cooscurryelectric.com/" target="_blank">Coos-Curry Electric Cooperative</a>
      `);
      markerList.push(marker);
      if (openLatLng && Math.abs(o.latitude - openLatLng.lat) < 0.0001 && Math.abs(o.longitude - openLatLng.lng) < 0.0001) {
        lastOpenedMarker = marker;
      }
      if (pointInCounty(o.latitude, o.longitude, 'coos')) {
        totals.coos.cce += Number(o.custOut) || 0;
      }
    });

    updateTotalsDisplay();
    programmaticClose = true;
    powerLayer.clearLayers();
    markerList.forEach(m => powerLayer.addLayer(m));
    if (lastOpenedMarker && !popupManuallyClosed) {
      setTimeout(() => lastOpenedMarker.openPopup(), 10);
    } else {
      // When manually closed, forget the marker so it's not "remembered" forever.
      lastOpenedLatLng = null;
    }
  }).catch(console.error);
}

// ---- ODOT INCIDENTS ----
function formatLaneInfo(inc) {
  const tl       = inc['travel-lanes'] || {};
  const decDir   = tl['decreasing-direction']  || 'N/A';
  const decCount = tl['decreasing-lane-count'] ?? 0;
  const incDir   = tl['increasing-direction']  || 'N/A';
  const incCount = tl['increasing-lane-count'] ?? 0;
  let summary = `${decDir}: ${decCount} lane${decCount !== 1 ? 's' : ''}, `
              + `${incDir}: ${incCount} lane${incCount !== 1 ? 's' : ''}`;
  const affected = tl['affected-lanes'] || [];
  if (affected.length) {
    const list = affected.map(a =>
      `${a['lane-id']} (${a['lane-type']}, ${a.direction})`
    ).join('; ');
    summary += `<br/><strong>Specific lanes:</strong> ${list}`;
  }
  return summary;
}
function fetchOdotIncidents() {
  fetch('/odot-incidents')
    .then(r => r.json())
    .then(data => {
      const openPopup = map._popup;
      const openId    = openPopup
        ? openPopup._source.options.incidentId
        : null;
      odotLayer.clearLayers();
      (data.incidents || []).forEach(inc => {
        if (inc['is-active'] !== 'true') return;
        const loc = inc.location['start-location'];
        if (!loc?.['start-lat'] || !loc?.['start-long']) return;
        const lat = loc['start-lat'];
        const lon = loc['start-long'];
        const marker = L.marker([lat, lon], {
          icon: getIconForIncident(inc),
          incidentId: inc['incident-id']
        });
        const startMP  = loc['start-milepost'] ?? 'N/A';
        const endMP    = inc.location['end-location']?.['end-milepost'];
        const mpRange  = endMP ? `${startMP} – ${endMP}` : startMP;
        const laneHtml = formatLaneInfo(inc);
        const popup   = `
          <strong>${inc.headline}</strong><br/>
          <em>${inc['impact-desc']}</em><br/><br/>
          <strong>Location:</strong> ${loc['location-desc']}<br/>
          <strong>Milepost:</strong> ${mpRange}<br/>
          <strong>Lane Summary:</strong><br/>${laneHtml}<br/><br/>
          <strong>Comments:</strong> ${inc.comments || 'None'}<br/>
          <strong>Created:</strong> ${new Date(inc['create-time']).toLocaleString()}<br/>
          <strong>Updated:</strong> ${new Date(inc['update-time']).toLocaleString()}
        `;
        marker.bindPopup(popup);
        odotLayer.addLayer(marker);
        if (inc['incident-id'] === openId) {
          marker.openPopup();
        }
      });
    })
    .catch(console.error);
}

// ---- ODOT CAMERAS ----
function fetchCameras() {
  cctvLayer.clearLayers();
  fetch('/odot-cctv')
    .then(r => r.json())
    .then(data => {
      (data.CCTVInventoryRequest || []).forEach(cam => {
        const cameraIcon = L.divIcon({
          html: `<svg viewBox="0 0 32 32" width="38" height="38">
            <rect x="7" y="10" width="18" height="10" rx="3" fill="#fff" stroke="#333" stroke-width="2"/>
            <circle cx="16" cy="15" r="3" fill="#7ea253" stroke="#555" stroke-width="1"/>
            <rect x="13" y="22" width="6" height="2" rx="1" fill="#333"/>
            <rect x="14" y="24" width="4" height="2" rx="1" fill="#555"/>
          </svg>`,
          className: "",
          iconSize: [38, 38],
          iconAnchor: [19, 19]
        });
        const marker = L.marker([cam.latitude, cam.longitude], { icon: cameraIcon });
        marker.bindPopup(`
          <div style="max-width:340px;">
            <strong>${cam['device-name']}</strong><br/>
            <img src="${cam['cctv-url'].replace(/^http:/, 'https:')}"
                alt="Camera image"
                style="width:320px; height:auto; border:2px solid #7ea253; display:block; margin:6px auto;" />
            <em>${cam['cctv-other'] || ''}</em><br/>
            <small>Last update: ${cam['last-update-time'] ? new Date(cam['last-update-time']).toLocaleString() : 'n/a'}</small>
          </div>
        `, { maxWidth: 340 });
        cctvLayer.addLayer(marker);
      });
    })
    .catch(console.error);
}

// ---- DMS SIGNS (Dynamic Message Signs) ----
if (!document.getElementById('dms-board-css')) {
  const style = document.createElement('style');
  style.id = 'dms-board-css';
  style.textContent = `
  .dms-board { display:inline-block; background:#111; border-radius:5px; padding:8px 12px; margin:6px 0; font-size:20px; }
  .dms-row {
    white-space:pre;
    font-family:'Roboto Mono','Consolas','Courier New',monospace;
    letter-spacing:2px;
    color:#FFD600;
    font-weight:bold;
    text-shadow:0 0 2px #FFD600, 0 0 6px #222;
    display:block;
    line-height:1.3;
    text-align:center;
  }
`;
  document.head.appendChild(style);
}
function formatDmsReaderBoard(st) {
  if (!st || !st.dmsCurrentMessage) return "";
  let lines = [
    st.dmsCurrentMessage.phase1Line1 || "",
    st.dmsCurrentMessage.phase1Line2 || "",
    st.dmsCurrentMessage.phase1Line3 || "",
    st.dmsCurrentMessage.phase2Line1 || "",
    st.dmsCurrentMessage.phase2Line2 || "",
    st.dmsCurrentMessage.phase2Line3 || "",
  ];
  const maxLen = 20;
  let processed = [];
  for (const l of lines) {
    let t = (l || "").trim();
    if (t.length === 0) {
      processed.push("");
    } else {
      while (t.length > 0) {
        processed.push(t.slice(0, maxLen));
        t = t.slice(maxLen);
      }
    }
  }
  while (processed.length > 0 && processed[0].trim() === "") processed.shift();
  while (processed.length > 0 && processed[processed.length - 1].trim() === "") processed.pop();
  let n = processed.length;
  let padTop = Math.floor((6 - n) / 2);
  let padBot = 6 - n - padTop;
  let centered = [
    ...Array(padTop).fill(""),
    ...processed,
    ...Array(padBot).fill("")
  ];
  for (let i = 1; i < 5; ++i) {
    if (
      centered[i].trim() === "" &&
      centered.slice(0, i).some(x => x.trim() !== "") &&
      centered.slice(i + 1).some(x => x.trim() !== "")
    ) {
      centered[i] = "-".repeat(maxLen);
    }
  }
  function centerPad(str) {
    str = (str || "");
    let pad = maxLen - str.length;
    let left = Math.floor(pad / 2);
    let right = pad - left;
    return "\u00A0".repeat(left) + str + "\u00A0".repeat(right);
  }
  let rendered = centered
    .map(l => `<span class="dms-row">${centerPad(l)}</span>`)
    .join("");
  return `<div class="dms-board">${rendered}</div>`;
}
function fetchDmsLayer() {
  let openPopup = map._popup;
  let openDmsId = null;
  let openLatLng = null;
  if (openPopup && openPopup._source && openPopup._source.options && openPopup._source.options.dmsId) {
    openDmsId = openPopup._source.options.dmsId;
    openLatLng = openPopup._source.getLatLng();
  }
  Promise.all([
    fetch('/odot-dms-inventory').then(r => r.json()),
    fetch('/odot-dms-status').then(r => r.json())
  ]).then(([inventory, status]) => {
    dmsLayer.clearLayers();
    if (!inventory["dms-inventory-items"] || !status["dmsItems"]) return;
    const statusMap = {};
    status["dmsItems"].forEach(d => statusMap[d["device-id"]] = d);
    inventory["dms-inventory-items"].forEach(sign => {
      const sid = sign["device-id"];
      const st = statusMap[sid];
      let isOn = false;
      if (st && st["dms-device-status"] === "in service") {
        const lines = [
          st.dmsCurrentMessage?.phase1Line1,
          st.dmsCurrentMessage?.phase1Line2,
          st.dmsCurrentMessage?.phase1Line3,
          st.dmsCurrentMessage?.phase2Line1,
          st.dmsCurrentMessage?.phase2Line2,
          st.dmsCurrentMessage?.phase2Line3,
        ].filter(Boolean);
        isOn = lines.some(l => l && l.trim().length > 0);
      }
      let popup = `
        <strong>${sign["device-name"] || "DMS Sign"}</strong><br/>
        <b>Route:</b> ${sign["route-id"] || ""} @ MP ${sign["milepoint"] || ""}<br/>
        <b>Elevation:</b> ${sign["elevation"]} ft<br/>
        <b>Status:</b> ${st ? st["dms-device-status"] : "Unknown"}<br/>
      `;
      if (isOn) {
        popup += `<div style="margin-top:4px;"><b>Message:</b><br/>${formatDmsReaderBoard(st)}</div>`;
      } else {
        popup += `<div style="margin-top:4px;color:#888;">No message displayed</div>`;
      }
      const marker = L.marker([sign.latitude, sign.longitude], {
        icon: dmsIcon(isOn),
        dmsId: sid
      }).bindPopup(popup, {maxWidth: 340});
      dmsLayer.addLayer(marker);
      if (openDmsId && sid === openDmsId && openLatLng &&
          Math.abs(sign.latitude - openLatLng.lat) < 0.0001 &&
          Math.abs(sign.longitude - openLatLng.lng) < 0.0001) {
        marker.openPopup();
      }
    });
  }).catch(console.error);
}

// ---- DRAW LINE UTILITY (if needed) ----
function drawLine(wkt) {
  const geojson = wellknown.parse(wkt);
  L.geoJSON(geojson, {
    style: { color: '#e74c3c', weight: 4, opacity: 0.7 }
  }).addTo(odotLayer);
}

// ---- LOAD COUNTY POLYGONS, SETUP LAYERS, INIT DATA LOOPS ----
fetch('/static/filtered_counties.geojson')
  .then(r => r.json())
  .then(geojson => {
    countyStyles.forEach(cfg => {
      const feat = geojson.features.find(f =>
        (f.properties.COUNTY_NAME||'').toLowerCase() === cfg.name
      );
      if (!feat) return;
      polygons[cfg.name] = feat;
      L.geoJSON(feat, {
        style: { color: cfg.color, weight: 4, fillColor: cfg.fill, fillOpacity: 0.3 }
      }).addTo(map);
    });
    fetchOutages();
    fetchOdotIncidents();
    fetchCameras();
    fetchDmsLayer();
    setInterval(fetchOutages, 30000);
    setInterval(fetchOdotIncidents, 60000);
    setInterval(fetchCameras, 5 * 60 * 1000);
    setInterval(fetchDmsLayer, 30000);
  })
  .catch(console.error);

// ---- MILEPOSTS LAYER (SHOWS ONLY TEXT WHEN ZOOMED IN) ----
let allMilepostFeatures = [];
let milepostMarkersLayer = L.layerGroup();
function updateMilepostsLayer() {
  milepostMarkersLayer.clearLayers();
  if (!map.hasLayer(milepostLayer)) return;
  if (map.getZoom() < 13) return;
  const bounds = map.getBounds();
  const placed = {};
  // We need an offset because there are duplicate mileposts from the ODOT data.
  // Instead, get the first one and remove the one nearest it if its 1/8 of a mile
  // or closer.
  const MIN_DIST_DEGREES = 0.00175; // About 1/8 mile at Oregon latitude

  allMilepostFeatures.forEach(f => {
    const [lon, lat] = f.geometry.coordinates;
    if (!bounds.contains([lat, lon])) return;

    const props = f.properties;
    // Label logic
    let mpLabel = '';
    if (props.MP_DISP != null && props.MP_DISP !== '' && props.MP_DISP !== undefined) {
      mpLabel = String(props.MP_DISP);
    } else if (props.MP != null && props.MP !== '' && props.MP !== undefined) {
      mpLabel = String(props.MP);
    }
    if (mpLabel.endsWith('.00')) mpLabel = mpLabel.slice(0, -3);
    if (!mpLabel) return;

    // Deduplication logic
    if (!placed[mpLabel]) placed[mpLabel] = [];
    const near = placed[mpLabel].some(([plat, plon]) => {
      const dLat = lat - plat, dLon = lon - plon;
      return (dLat * dLat + dLon * dLon) < (MIN_DIST_DEGREES * MIN_DIST_DEGREES);
    });
    if (near) return;

    placed[mpLabel].push([lat, lon]);

    // Marker rendering
    const marker = L.marker([lat, lon], {
      icon: L.divIcon({
        className: 'milepost-number-label',
        html: `<span style="
          display:inline-block;
          min-width:18px;
          font-size:11px;
          color:#2185d0;
          font-weight:bold;
          background:rgba(255,255,255,0.92);
          border:1px solid #e0e0e0;
          border-radius:5px;
          padding:1px 3px;
          box-shadow: 0 1px 3px #0002;
          text-align:center;
        ">${mpLabel}</span>`,
        iconSize: [24, 16],
        iconAnchor: [12, 8]
      }),
      interactive: false
    });
    milepostMarkersLayer.addLayer(marker);
  });
  milepostLayer.clearLayers();
  milepostLayer.addLayer(milepostMarkersLayer);
}

// Fetch milepost GeoJSON, store all features, update when needed
fetch('/static/mileposts.geojson')
  .then(res => res.json())
  .then(geojson => {
    // Deduplicate by rounded (lon, lat, mp)
    const seen = new Set();
    allMilepostFeatures = geojson.features.filter(f => {
      const p = f.properties;
      const coords = f.geometry.coordinates;
      const key = [
        coords[0].toFixed(6),
        coords[1].toFixed(6),
        p.MP !== undefined ? p.MP : (p.MILEPOST || p.milepost || p.MILE || '')
      ].join('|');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    updateMilepostsLayer();
  });

let milepostDebounce;
function debouncedMilepostsUpdate() {
  clearTimeout(milepostDebounce);
  milepostDebounce = setTimeout(updateMilepostsLayer, 250);
}
map.on('zoomend moveend', debouncedMilepostsUpdate);

// ---- Persist <details> state (county accordions) ----
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('details[id]').forEach(det => {
    const key = 'legend_' + det.id;
    if (localStorage.getItem(key) === 'true') det.open = true;
    det.addEventListener('toggle', () => localStorage.setItem(key, det.open));
  });
});

// ---- Legend tab logic ----
const tabPower = document.getElementById('tab-power');
const tabOdot = document.getElementById('tab-odot');
const contentPower = document.getElementById('legend-content-power');
const contentOdot = document.getElementById('legend-content-odot');
function showTab(which) {
  if (which === 'power') {
    contentPower.style.display = '';
    contentOdot.style.display = 'none';
    tabPower.classList.add('legend-tab-active');
    tabOdot.classList.remove('legend-tab-active');
    localStorage.setItem('legendTab', 'power');
  } else {
    contentPower.style.display = 'none';
    contentOdot.style.display = '';
    tabPower.classList.remove('legend-tab-active');
    tabOdot.classList.add('legend-tab-active');
    localStorage.setItem('legendTab', 'odot');
  }
}
if (tabPower && tabOdot && contentPower && contentOdot) {
  tabPower.addEventListener('click', () => showTab('power'));
  tabOdot.addEventListener('click', () => showTab('odot'));
  const lastTab = localStorage.getItem('legendTab') || 'power';
  showTab(lastTab);
}

// ---- Custom Layers Button/Panel Logic ----
const layersButton = document.getElementById('layers-button');
const layersPanel = document.getElementById('layers-panel');
const layerToggles = {
  power:  document.getElementById('layer-toggle-power'),
  odot:   document.getElementById('layer-toggle-odot'),
  cctv:   document.getElementById('layer-toggle-cctv'),
  dms:    document.getElementById('layer-toggle-dms'),
  mileposts: document.getElementById('layer-toggle-mileposts')
};
function setLayerVisible(layer, visible) {
  if (layer === 'mileposts') {
    if (visible) {
      map.addLayer(milepostLayer);
    } else {
      map.removeLayer(milepostLayer);
    }
    updateMilepostsLayer(); // Always update to match zoom/toggle state
  } else if (layer === 'power')  visible ? powerLayer.addTo(map)   : map.removeLayer(powerLayer);
  else if (layer === 'odot')     visible ? odotLayer.addTo(map)    : map.removeLayer(odotLayer);
  else if (layer === 'cctv')     visible ? cctvLayer.addTo(map)    : map.removeLayer(cctvLayer);
  else if (layer === 'dms')      visible ? dmsLayer.addTo(map)     : map.removeLayer(dmsLayer);
  localStorage.setItem(layer + 'Visible', visible ? '1' : '0');
}
function updateLayerTogglesFromStorage() {
  Object.keys(layerToggles).forEach(layer => {
    const stored = localStorage.getItem(layer + 'Visible');
    const visible = stored === null ? true : stored === '1';
    layerToggles[layer].checked = visible;
    setLayerVisible(layer, visible);
  });
}
updateLayerTogglesFromStorage();
Object.entries(layerToggles).forEach(([layer, checkbox]) => {
  checkbox.addEventListener('change', () => {
    setLayerVisible(layer, checkbox.checked);
  });
});
let panelOpen = localStorage.getItem('layersPanelOpen') === '1';
function setPanel(open) {
  panelOpen = open;
  layersPanel.style.display = open ? 'block' : 'none';
  localStorage.setItem('layersPanelOpen', open ? '1' : '0');
}
setPanel(panelOpen);
layersButton.onclick = e => setPanel(!panelOpen);
document.addEventListener('click', e => {
  if (!layersPanel.contains(e.target) && !layersButton.contains(e.target)) setPanel(false);
});
