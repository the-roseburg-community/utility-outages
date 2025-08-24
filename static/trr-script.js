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
 */
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
 *  - Map Initialization
 *  - Popup State Logic
 *  - Layer Management
 *  - SVG Icon Helpers
 *  - County Polygons & Styling
 *  - Outage Fetch/Render
 *  - ODOT Incidents, Cameras, DMS Signs
 *  - Mileposts
 *
 *  (c) The Roseburg Receiver Community – Open Source, GPL-3.0
 * =============================================================================
 */

// ---- Legend toggle logic with localStorage ----
const legend = document.getElementById('map-legend');
const legendToggle = document.getElementById('legend-toggle');
const toggleBox = document.getElementById('toggle-legend-box');

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

// Basemap layers (OSM + Satellite) with localStorage persistence
const BASEMAP_KEY = 'trr_basemap_choice_v1';
const osmBase = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
});
const satelliteBase = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Imagery © Esri, Maxar, Earthstar Geographics, and the GIS User Community'
  }
);

function getSavedBasemap() {
  const v = localStorage.getItem(BASEMAP_KEY);
  return v === 'sat' ? 'sat' : 'osm';
}
let currentBase = getSavedBasemap() === 'sat' ? satelliteBase.addTo(map) : osmBase.addTo(map);

function setBasemap(which) {
  const desired = which === 'sat' ? satelliteBase : osmBase;
  if (currentBase !== desired) {
    map.removeLayer(currentBase);
    currentBase = desired.addTo(map);
  }
  localStorage.setItem(BASEMAP_KEY, which === 'sat' ? 'sat' : 'osm');
}

// ---------------------------------------------------------------------------------
// Robust popup persistence across refreshes
// ---------------------------------------------------------------------------------
let closeGuard = 0;

function beginGuard() {
  closeGuard++;
}

function endGuard() {
  setTimeout(() => {
    closeGuard = Math.max(0, closeGuard - 1);
  }, 0);
}

function isGuarded() {
  return closeGuard > 0;
}

let currentOpen = null; // { layer: 'power'|'odot'|'cctv'|'dms'|'pin', key: string }
const userClosedKeys = new Set();

map.on('popupopen', (e) => {
  const src = e.popup && e.popup._source;
  if (!src || !src.options) return;
  const key = src.options.popupKey;
  const layerType = src.options.layerType;
  if (key && layerType) {
    currentOpen = {
      layer: layerType,
      key
    };
    userClosedKeys.delete(`${layerType}|${key}`);
  }
});
map.on('popupclose', (e) => {
  if (isGuarded()) return;
  const src = e.popup && e.popup._source;
  if (!src || !src.options) return;
  const key = src.options.popupKey;
  const layerType = src.options.layerType;
  if (key && layerType) {
    userClosedKeys.add(`${layerType}|${key}`);
    if (currentOpen && currentOpen.layer === layerType && currentOpen.key === key) {
      currentOpen = null;
    }
  }
});

// =========================
// User-placed pins (Leaflet)
// =========================
const userPinsLayer = L.layerGroup().addTo(map);
const PINS_KEY = 'trr_user_pins_v1';
let pinMode = false;

// Inject CSS to FORCE layout: Layers button above Pins menu (bottom-left)
(function injectPositionCSS() {
  if (document.getElementById('trr-positions-css')) return;
  const s = document.createElement('style');
  s.id = 'trr-positions-css';
  s.textContent = `
    /* Layers button ABOVE pins (bottom-left), panel pops UP */
    #layers-button{
      position:absolute !important;
      left:16px !important;
      right:auto !important;
      top:auto !important;
      bottom:86px !important;      /* button above pins */
      z-index:1001 !important;
    }
    #layers-panel{
      position:absolute !important;
      left:16px !important;
      right:auto !important;
      top:auto !important;
      bottom:144px !important;     /* panel above button (popping UP) */
      z-index:1002 !important;     /* above pins control */
    }
    #pins-menu{
      position:absolute !important;
      left:16px !important;
      right:auto !important;
      bottom:16px !important;      /* pins at the very bottom-left */
      z-index:1001 !important;
    }
  `;
  document.head.appendChild(s);
})();

// Minimal CSS for pin labels (permanent tooltips above pin) + geocoder control
// Minimal CSS for pin labels + geocoder control (drop-in)
(function injectPinAndGeocoderCSS() {
  if (document.getElementById('pin-label-css')) return;
  const s = document.createElement('style');
  s.id = 'pin-label-css';
  s.textContent = `
    /* Geocoder control (top-right) */
    #geocoder-control{
      position:absolute;
      top:16px;
      right:16px;
      z-index:1003;
      background:#fff;
      border-radius:10px;
      box-shadow:0 2px 10px rgba(0,0,0,0.15);
      padding:8px;
      width:min(320px, 90vw);   /* original length */
      max-width:none;
    }

    /* collapse header */
    #geocoder-control .gc-head{
      display:flex;
      justify-content:flex-end;
      margin-bottom:4px;
    }
    #geocoder-collapse{
      border:1px solid #d0d0d0;
      background:#f6f6f6;
      border-radius:8px;
      padding:2px 8px;
      font-weight:700;
      cursor:pointer;
      line-height:1.2;
    }

    /* Main row */
    #geocoder-control .row{
      display:flex;
      align-items:stretch;
      gap:6px;
      min-width:0;
    }

    #geocoder-input{
      display:block;
      box-sizing:border-box;
      flex:1 1 200px;     /* original base */
      min-width:0;
      width:auto;
      max-width:100%;
      border:1px solid #d0d0d0;
      border-radius:8px;
      padding:8px 10px;   /* original padding */
      font-size:14px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      -webkit-appearance:none;
      appearance:none;
    }

    @media (max-width:600px){
      #geocoder-control { top:12px; right:12px; width:min(320px, 90vw); }
      #geocoder-input   { flex-basis:200px; font-size:14px; padding:8px 10px; }
    }

    #geocoder-search, #geocoder-clear{
      border:none;
      border-radius:8px;
      padding:8px 10px;
      font-weight:600;
      cursor:pointer;
      box-shadow:0 1px 3px rgba(0,0,0,0.08);
    }
    #geocoder-search{ background:#7ea253; color:#fff; }
    #geocoder-clear { background:#f1f1f1; color:#333; }

    #geocoder-results{
      margin-top:6px;
      max-height:240px;
      overflow:auto;
      border:1px solid #eee;
      border-radius:8px;
      display:none;
      background:#fff;
    }
    .geocoder-item{
      padding:8px 10px;
      border-bottom:1px solid #f2f2f2;
      cursor:pointer;
    }
    .geocoder-item:last-child{ border-bottom:none; }
    .geocoder-item:hover{ background:#f7fbf4; }
    .geocoder-empty{ padding:8px 10px; color:#666; }

    /* Collapsed state — shrink to just the "+" button */
    #geocoder-control.collapsed{
      padding:4px;
      width:auto !important;
      max-width:none !important;
      display:inline-block;
      background:#fff;
    }
    #geocoder-control.collapsed .gc-head{
      display:inline-flex;
      justify-content:flex-end;
      align-items:center;
      margin:0;
    }
    #geocoder-control.collapsed #geocoder-collapse{
      display:inline-block;
      padding:2px 8px;
      background:#7ea253; color:#fff; border-color:#6a8d47;
    }
    #geocoder-control.collapsed .row,
    #geocoder-control.collapsed #geocoder-results{
      display:none !important;
    }

    /* Pin label tooltip */
    .pin-label{
      background:#fff;
      color:#333;
      border:1px solid #ccc;
      border-radius:6px;
      padding:2px 6px;
      box-shadow:0 1px 3px rgba(0,0,0,0.1);
      font-weight:600;
    }
  `;
  document.head.appendChild(s);
})();


// Crisp red teardrop pin (SVG) + helpers
const redPinIcon = L.divIcon({
  html: `
    <svg viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg" width="26" height="38" aria-hidden="true">
      <path d="M12 1
               C6 1 1 6 1 12
               c0 3 1.1 5.6 3.2 7.7L12 35
               l7.8-15.3C21 17.7 23 15 23 12
               C23 6 18 1 12 1z"
            fill="#e53935" stroke="#b71c1c" stroke-width="1.5" />
      <circle cx="12" cy="12" r="4.2" fill="#ffffff" stroke="#b71c1c" stroke-width="1"/>
    </svg>
  `,
  className: "",
  iconSize: [26, 38],
  iconAnchor: [13, 37],
  popupAnchor: [0, -32]
});

function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, s => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  } [s]));
}

function serializePins() {
  const pins = [];
  userPinsLayer.eachLayer(m => {
    const {
      lat,
      lng
    } = m.getLatLng();
    pins.push({
      lat: +lat.toFixed(6),
      lng: +lng.toFixed(6),
      label: m.pinLabel || ''
    });
  });
  localStorage.setItem(PINS_KEY, JSON.stringify(pins));
}

function setMarkerLabel(marker, label) {
  marker.pinLabel = (label || '').trim();
  marker.unbindTooltip();
  if (marker.pinLabel) {
    marker.bindTooltip(escapeHtml(marker.pinLabel), {
      permanent: true,
      direction: 'top',
      className: 'pin-label',
      offset: [0, -46] // label clearly ABOVE the pin
    });
  }
  serializePins();
}

function addUserPin(latlng, open = true) {
  const id = `pin:${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const marker = L.marker(latlng, {
    draggable: true,
    autoPan: true,
    riseOnHover: true,
    title: 'Custom pin',
    layerType: 'pin',
    popupKey: id,
    icon: redPinIcon
  }).bindPopup(() => {
    const {
      lat,
      lng
    } = marker.getLatLng();
    const pretty = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    const safeName = escapeHtml(marker.pinLabel || '');
    return `
      <div class="pin-popup" style="min-width:220px;">
        <strong>Custom Pin</strong>${marker.pinLabel ? `<div><em>${safeName}</em></div>` : '' }
        <div><code>${pretty}</code></div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;">
          <input type="text" class="pin-name" placeholder="Name (optional)" value="${safeName}"
                 style="padding:4px 6px; border:1px solid #ccc; border-radius:6px; min-width:160px;">
          <button type="button" class="pin-save">Save name</button>
          <button type="button" class="pin-copy">Copy coords</button>
          <button type="button" class="pin-delete">Remove pin</button>
        </div>
      </div>`;
  });

  marker.on('dragend', serializePins);

  marker.on('popupopen', (e) => {
    const el = e.popup.getElement();
    const copyBtn = el.querySelector('.pin-copy');
    const delBtn = el.querySelector('.pin-delete');
    const saveBtn = el.querySelector('.pin-save');
    const nameInput = el.querySelector('.pin-name');

    copyBtn?.addEventListener('click', async () => {
      const {
        lat,
        lng
      } = marker.getLatLng();
      try {
        await navigator.clipboard.writeText(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => (copyBtn.textContent = 'Copy coords'), 900);
      } catch {}
    });

    delBtn?.addEventListener('click', () => {
      userPinsLayer.removeLayer(marker);
      serializePins();
    });

    saveBtn?.addEventListener('click', () => {
      setMarkerLabel(marker, nameInput?.value || '');
      saveBtn.textContent = 'Saved';
      setTimeout(() => (saveBtn.textContent = 'Save name'), 800);
    });

    nameInput?.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        saveBtn?.click();
      }
    });
  });

  userPinsLayer.addLayer(marker);
  serializePins();
  if (open) setTimeout(() => marker.openPopup(), 0);
  return marker;
}

function loadPins() {
  try {
    const raw = localStorage.getItem(PINS_KEY);
    if (!raw) return;
    const arr = JSON.parse(raw);
    arr.forEach(item => {
      if (Array.isArray(item)) {
        addUserPin({
          lat: item[0],
          lng: item[1]
        }, false);
      } else if (item && typeof item === 'object' && 'lat' in item && 'lng' in item) {
        const m = addUserPin({
          lat: item.lat,
          lng: item.lng
        }, false);
        if (item.label) setMarkerLabel(m, item.label);
      }
    });
  } catch {}
}
loadPins();

// ---- LayerGroups for toggling ----
let powerLayer = L.layerGroup();
const odotLayer = L.layerGroup();
const cctvLayer = L.layerGroup();
const dmsLayer = L.layerGroup();
const milepostLayer = L.layerGroup();

// ---- SVG ICON HELPERS ----
function svgIcon(svgString, size = [24, 24]) {
  return L.divIcon({
    html: svgString,
    className: "",
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2]
  });
}
const incidentIcons = {
  noDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#fff" stroke="#444" stroke-width="4"/>
    </svg>
  `, [18, 18]),
  minorDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#fff" stroke="#444" stroke-width="4"/>
      <rect x="12" y="32" width="40" height="12" fill="#e74c3c"/>
    </svg>
  `, [18, 18]),
  majorDelay: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="4"/>
    </svg>
  `, [18, 18]),
  closed: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="12" y="12" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="4"/>
      <line x1="18" y1="18" x2="46" y2="46" stroke="#fff" stroke-width="6"/>
      <line x1="46" y1="18" x2="18" y2="46" stroke="#fff" stroke-width="6"/>
    </svg>
  `, [18, 18]),
  crash: svgIcon(`
    <svg viewBox="0 0 64 64">
      <rect x="16" y="32" width="32" height="14" rx="4" fill="#666"/>
      <rect x="24" y="26" width="16" height="10" rx="2" fill="#bbb"/>
      <circle cx="22" cy="50" r="4" fill="#222"/>
      <circle cx="42" cy="50" r="4" fill="#222"/>
      <polygon points="14,38 8,34 12,32 8,28 15,31 18,26 19,33 26,31 21,36 25,40 18,38 17,45"
        fill="#ff5252" stroke="#a00" stroke-width="1"/>
    </svg>
  `, [32, 32]),
  cone: svgIcon(`
    <svg viewBox="0 0 64 64">
      <polygon points="32,8 16,56 48,56" fill="#f39c12" stroke="#e67e22" stroke-width="4"/>
      <rect x="24" y="36" width="16" height="4" fill="#fff"/>
      <rect x="28" y="44" width="8"  height="4" fill="#fff"/>
    </svg>
  `, [18, 18]),
  default: svgIcon(`
    <svg viewBox="0 0 64 64">
      <polygon points="32,4 4,60 60,60" fill="#f1c40f" stroke="#f39c12" stroke-width="4"/>
      <rect x="30" y="20" width="4" height="18" fill="#fff"/>
      <circle cx="32" cy="50" r="4" fill="#fff"/>
    </svg>
  `, [22, 22])
};

function getIconForIncident(inc) {
  const desc = inc['impact-desc'] || '';
  const hl = (inc.headline || '').toLowerCase();
  if (hl.includes('closed')) return incidentIcons.closed;
  if (hl.includes('crash')) return incidentIcons.crash;
  if ((inc['event-type-id'] || '').includes("RW")) return incidentIcons.cone;
  if (hl.includes('disabled') || hl.includes('obstruction') || hl.includes('hazard')) return incidentIcons.default;
  if (desc.includes('No to Minimum Delay') || desc.includes('Informational Only')) return incidentIcons.noDelay;
  if (desc.includes('Estimated delay under 20 minutes')) return incidentIcons.minorDelay;
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
const countyStyles = [{
    name: 'douglas',
    color: '#7ea253',
    fill: '#a9c995'
  },
  {
    name: 'jackson',
    color: '#068D9D',
    fill: '#7ed6df'
  },
  {
    name: 'josephine',
    color: '#53599A',
    fill: '#b5b4e3'
  },
  {
    name: 'klamath',
    color: '#E67E22',
    fill: '#FDEBD0'
  },
  {
    name: 'coos',
    color: '#e74c3c',
    fill: '#fdecec'
  }
];
const polygons = {};
const totals = {
  coos: {
    pacific: 0,
    cce: 0,
    clpud: 0
  },
  douglas: {
    pacific: 0,
    dec: 0,
    clpud: 0
  },
  jackson: {
    pacific: 0
  },
  josephine: {
    pacific: 0
  },
  klamath: {
    pacific: 0
  }
};

function updateTotalsDisplay() {
  // Coos
  document.getElementById('meters-pacific-coos').textContent = totals.coos.pacific.toLocaleString();
  document.getElementById('meters-cce-coos').textContent = totals.coos.cce.toLocaleString();
  document.getElementById('meters-clpud-coos').textContent = totals.coos.clpud.toLocaleString();
  document.getElementById('meters-total-coos').textContent =
    (totals.coos.pacific + totals.coos.cce + totals.coos.clpud).toLocaleString();

  // Douglas
  document.getElementById('meters-pacific-douglas').textContent = totals.douglas.pacific.toLocaleString();
  document.getElementById('meters-dec-douglas').textContent = totals.douglas.dec.toLocaleString();
  document.getElementById('meters-clpud-douglas').textContent = totals.douglas.clpud.toLocaleString();
  document.getElementById('meters-total-douglas').textContent =
    (totals.douglas.pacific + totals.douglas.dec + totals.douglas.clpud).toLocaleString();

  // Jackson
  document.getElementById('meters-pacific-jackson').textContent = totals.jackson.pacific.toLocaleString();
  document.getElementById('meters-total-jackson').textContent = totals.jackson.pacific.toLocaleString();

  // Josephine
  document.getElementById('meters-pacific-josephine').textContent = totals.josephine.pacific.toLocaleString();
  document.getElementById('meters-total-josephine').textContent = totals.josephine.pacific.toLocaleString();

  // Klamath
  document.getElementById('meters-pacific-klamath').textContent = totals.klamath.pacific.toLocaleString();
  document.getElementById('meters-total-klamath').textContent = totals.klamath.pacific.toLocaleString();
}

function pointInCounty(lat, lon, county) {
  const poly = polygons[county];
  return poly ? turf.booleanPointInPolygon(turf.point([lon, lat]), poly) : false;
}

// ---- OUTAGE DATA ----
function fetchOutages() {
  Object.keys(totals).forEach(cty => Object.keys(totals[cty]).forEach(u => totals[cty][u] = 0));

  let markersByKey = new Map();

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
      const popupKey = o.id || `${o.latitude},${o.longitude}`;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8,
        fillColor: '#007bff',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.85,
        outageId: popupKey,
        popupKey,
        layerType: 'power'
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
      markersByKey.set(popupKey, marker);

      ['douglas', 'jackson', 'josephine', 'klamath', 'coos'].forEach(cty => {
        if (pointInCounty(o.latitude, o.longitude, cty)) {
          totals[cty].pacific += Number(o.custOut) || 0;
        }
      });
    });

    // Douglas Electric
    decData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const popupKey = o.id || `${o.latitude},${o.longitude}`;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8,
        fillColor: '#ffa500',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.85,
        outageId: popupKey,
        popupKey,
        layerType: 'power'
      }).bindPopup(`
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
        <strong>ID:</strong> ${o.id}<br/>
        <strong>Utility:</strong> <a href="https://douglaselectric.outagemap.coop/">Douglas Electric</a>
      `);
      markerList.push(marker);
      markersByKey.set(popupKey, marker);

      if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
        totals.douglas.dec += Number(o.custOut) || 0;
      }
    });

    // CLPUD
    clpudData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const popupKey = o.id || `${o.latitude},${o.longitude}`;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8,
        fillColor: '#AA40FF',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.85,
        outageId: popupKey,
        popupKey,
        layerType: 'power'
      }).bindPopup(`
        <strong>Impacted Meters:</strong> ${o.custOut}<br/>
        <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
        <strong>ID:</strong> ${o.id}<br/>
        <strong>Utility:</strong> <a href="https://clpud.org/customer-information/outages/outage-map/">Central Lincoln PUD</a>
      `);
      markerList.push(marker);
      markersByKey.set(popupKey, marker);

      if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
        totals.douglas.clpud += Number(o.custOut) || 0;
      }
      if (pointInCounty(o.latitude, o.longitude, 'coos')) {
        totals.coos.clpud += Number(o.custOut) || 0;
      }
    });

    // Coos-Curry Electric
    cceData.forEach(o => {
      if (!o.latitude || !o.longitude) return;
      const popupKey = o.id || `${o.latitude},${o.longitude}`;
      const marker = L.circleMarker([o.latitude, o.longitude], {
        radius: 8,
        fillColor: '#e74c3c',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.85,
        outageId: popupKey,
        popupKey,
        layerType: 'power'
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
      markersByKey.set(popupKey, marker);

      if (pointInCounty(o.latitude, o.longitude, 'coos')) {
        totals.coos.cce += Number(o.custOut) || 0;
      }
    });

    updateTotalsDisplay();

    beginGuard();
    powerLayer.clearLayers();
    markerList.forEach(m => powerLayer.addLayer(m));

    if (currentOpen && currentOpen.layer === 'power' &&
      !userClosedKeys.has(`power|${currentOpen.key}`)) {
      const m = markersByKey.get(currentOpen.key);
      if (m) setTimeout(() => m.openPopup(), 0);
    }

    endGuard();
  }).catch(console.error);
}

// ---- ODOT INCIDENTS ----
function formatLaneInfo(inc) {
  const tl = inc['travel-lanes'] || {};
  const decDir = tl['decreasing-direction'] || 'N/A';
  const decCount = tl['decreasing-lane-count'] ?? 0;
  const incDir = tl['increasing-direction'] || 'N/A';
  const incCount = tl['increasing-lane-count'] ?? 0;
  let summary = `${decDir}: ${decCount} lane${decCount !== 1 ? 's' : ''}, ` +
    `${incDir}: ${incCount} lane${incCount !== 1 ? 's' : ''}`;
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
      const markersByKey = new Map();

      beginGuard();
      odotLayer.clearLayers();

      (data.incidents || []).forEach(inc => {
        if (inc['is-active'] !== 'true') return;
        const loc = inc.location['start-location'];
        if (!loc?.['start-lat'] || !loc?.['start-long']) return;
        const lat = loc['start-lat'];
        const lon = loc['start-long'];
        const popupKey = inc['incident-id'];
        const marker = L.marker([lat, lon], {
          icon: getIconForIncident(inc),
          incidentId: popupKey,
          popupKey,
          layerType: 'odot'
        });
        const startMP = loc['start-milepost'] ?? 'N/A';
        const endMP = inc.location['end-location']?.['end-milepost'];
        const mpRange = endMP ? `${startMP} – ${endMP}` : startMP;
        const laneHtml = formatLaneInfo(inc);
        const popup = `
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
        markersByKey.set(popupKey, marker);
      });

      if (currentOpen && currentOpen.layer === 'odot' &&
        !userClosedKeys.has(`odot|${currentOpen.key}`)) {
        const m = markersByKey.get(currentOpen.key);
        if (m) setTimeout(() => m.openPopup(), 0);
      }

      endGuard();
    })
    .catch(console.error);
}

// ---- ODOT CAMERAS ----
function fetchCameras() {
  const markersByKey = new Map();

  beginGuard();
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
        const popupKey = cam['device-id'] || cam['device-name'];
        const marker = L.marker([cam.latitude, cam.longitude], {
          icon: cameraIcon,
          deviceId: popupKey,
          popupKey,
          layerType: 'cctv'
        });
        marker.bindPopup(`
          <div style="max-width:340px;">
            <strong>${cam['device-name']}</strong><br/>
            <img src="${(cam['cctv-url']||'').replace(/^http:/, 'https:')}"
                alt="Camera image"
                style="width:320px; height:auto; border:2px solid #7ea253; display:block; margin:6px auto;" />
            <em>${cam['cctv-other'] || ''}</em><br/>
            <small>Last update: ${cam['last-update-time'] ? new Date(cam['last-update-time']).toLocaleString() : 'n/a'}</small>
          </div>
        `, {
          maxWidth: 340
        });
        cctvLayer.addLayer(marker);
        markersByKey.set(popupKey, marker);
      });

      if (currentOpen && currentOpen.layer === 'cctv' &&
        !userClosedKeys.has(`cctv|${currentOpen.key}`)) {
        const m = markersByKey.get(currentOpen.key);
        if (m) setTimeout(() => m.openPopup(), 0);
      }

      endGuard();
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
  const markersByKey = new Map();

  Promise.all([
    fetch('/odot-dms-inventory').then(r => r.json()),
    fetch('/odot-dms-status').then(r => r.json())
  ]).then(([inventory, status]) => {
    beginGuard();
    dmsLayer.clearLayers();

    if (!inventory["dms-inventory-items"] || !status["dmsItems"]) {
      endGuard();
      return;
    }
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
        dmsId: sid,
        popupKey: sid,
        layerType: 'dms'
      }).bindPopup(popup, {
        maxWidth: 340
      });
      dmsLayer.addLayer(marker);
      markersByKey.set(sid, marker);
    });

    if (currentOpen && currentOpen.layer === 'dms' &&
      !userClosedKeys.has(`dms|${currentOpen.key}`)) {
      const m = markersByKey.get(currentOpen.key);
      if (m) setTimeout(() => m.openPopup(), 0);
    }

    endGuard();
  }).catch(console.error);
}

// ---- DRAW LINE UTILITY (if needed) ----
function drawLine(wkt) {
  const geojson = wellknown.parse(wkt);
  L.geoJSON(geojson, {
    style: {
      color: '#e74c3c',
      weight: 4,
      opacity: 0.7
    }
  }).addTo(odotLayer);
}

// ---- LOAD COUNTY POLYGONS, SETUP LAYERS, INIT DATA LOOPS ----
fetch('/static/filtered_counties.geojson')
  .then(r => r.json())
  .then(geojson => {
    countyStyles.forEach(cfg => {
      const feat = geojson.features.find(f =>
        (f.properties.COUNTY_NAME || '').toLowerCase() === cfg.name
      );
      if (!feat) return;
      polygons[cfg.name] = feat;
      L.geoJSON(feat, {
        style: {
          color: cfg.color,
          weight: 4,
          fillColor: cfg.fill,
          fillOpacity: 0.3
        }
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
  const MIN_DIST_DEGREES = 0.00175; // ~1/8 mile at Oregon latitude
  allMilepostFeatures.forEach(f => {
    const [lon, lat] = f.geometry.coordinates;
    if (!bounds.contains([lat, lon])) return;
    const props = f.properties;
    let mpLabel = '';
    if (props.MP_DISP != null && props.MP_DISP !== '' && props.MP_DISP !== undefined) {
      mpLabel = String(props.MP_DISP);
    } else if (props.MP != null && props.MP !== '' && props.MP !== undefined) {
      mpLabel = String(props.MP);
    }
    if (mpLabel.endsWith('.00')) mpLabel = mpLabel.slice(0, -3);
    if (!mpLabel) return;
    if (!placed[mpLabel]) placed[mpLabel] = [];
    const near = placed[mpLabel].some(([plat, plon]) => {
      const dLat = lat - plat,
        dLon = lon - plon;
      return (dLat * dLat + dLon * dLon) < (MIN_DIST_DEGREES * MIN_DIST_DEGREES);
    });
    if (near) return;
    placed[mpLabel].push([lat, lon]);
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
fetch('/static/mileposts.geojson')
  .then(res => res.json())
  .then(geojson => {
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
  power: document.getElementById('layer-toggle-power'),
  odot: document.getElementById('layer-toggle-odot'),
  cctv: document.getElementById('layer-toggle-cctv'),
  dms: document.getElementById('layer-toggle-dms'),
  mileposts: document.getElementById('layer-toggle-mileposts')
};

// Stop Layers UI events from reaching the map
(function shieldLayersUI() {
  if (layersButton) {
    L.DomEvent.disableClickPropagation(layersButton);
    L.DomEvent.disableScrollPropagation(layersButton);
    L.DomEvent.on(layersButton, 'contextmenu', L.DomEvent.stop);
    L.DomEvent.on(layersButton, 'dblclick', L.DomEvent.stop);
    // IMPORTANT: no touchstart/mousedown preventDefault on the button
  }

  if (layersPanel) {
    L.DomEvent.disableClickPropagation(layersPanel);
    L.DomEvent.disableScrollPropagation(layersPanel);

    // Only stop propagation so clicks still "work" on inputs/labels
    ['touchstart', 'touchmove', 'touchend', 'pointerdown', 'pointerup', 'mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu'].forEach(ev => {
      L.DomEvent.on(layersPanel, ev, L.DomEvent.stopPropagation);
    });

    // Do NOT call L.DomEvent.stop (which prevents default) on the panel
  }
})();


// Add Basemap toggle inside Layers panel
(function injectBasemapToggle() {
  if (!layersPanel) return;
  const section = document.createElement('div');
  section.style.borderTop = '1px solid #eee';
  section.style.margin = '10px 0 0';
  section.style.paddingTop = '8px';
  section.innerHTML = `
    <div style="font-weight:600;margin-bottom:6px;">Basemap</div>
    <label style="display:block;margin-bottom:6px;">
      <input type="radio" name="trr-basemap" id="basemap-osm" value="osm"> Standard Map
    </label>
    <label style="display:block;">
      <input type="radio" name="trr-basemap" id="basemap-sat" value="sat"> Satellite (Esri)
    </label>
  `;
  layersPanel.appendChild(section);

  const saved = getSavedBasemap();
  const osmRadio = section.querySelector('#basemap-osm');
  const satRadio = section.querySelector('#basemap-sat');
  if (saved === 'sat') satRadio.checked = true;
  else osmRadio.checked = true;

  section.addEventListener('change', (e) => {
    const v = (e.target && e.target.value) || 'osm';
    setBasemap(v === 'sat' ? 'sat' : 'osm');
  });
})();

function setLayerVisible(layer, visible) {
  if (layer === 'mileposts') {
    if (visible) {
      map.addLayer(milepostLayer);
    } else {
      map.removeLayer(milepostLayer);
    }
    updateMilepostsLayer();
  } else if (layer === 'power') visible ? powerLayer.addTo(map) : map.removeLayer(powerLayer);
  else if (layer === 'odot') visible ? odotLayer.addTo(map) : map.removeLayer(odotLayer);
  else if (layer === 'cctv') visible ? cctvLayer.addTo(map) : map.removeLayer(cctvLayer);
  else if (layer === 'dms') visible ? dmsLayer.addTo(map) : map.removeLayer(dmsLayer);
  localStorage.setItem(layer + 'Visible', visible ? '1' : '0');
}

function updateLayerTogglesFromStorage() {
  Object.keys(layerToggles).forEach(layer => {
    const stored = localStorage.getItem(layer + 'Visible');
    const visible = stored === '1';   // defaults to false if null (disables all layers by default)
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

// -----------------------------
// Pins menu BELOW Layers button
// -----------------------------
(function addPinsMenuBelowLayers() {
  const container = map.getContainer();
  const pinsMenu = document.createElement('div');
  pinsMenu.id = 'pins-menu';
  Object.assign(pinsMenu.style, {
    position: 'absolute',
    left: '16px',
    bottom: '16px',
    zIndex: 1001
  });
  pinsMenu.innerHTML = `
    <div class="leaflet-bar leaflet-control pin-control" style="display:flex; gap:6px; align-items:center; padding:4px 6px; background:#fff; border-radius:8px; box-shadow:0 2px 7px #0002;">
      <a class="pin-toggle" href="#" title="Drop a pin (then click map)" style="padding:6px 8px; font-size:16px; text-decoration:none;">📍</a>
      <a class="pin-clear"  href="#" title="Clear all pins" style="padding:6px 8px; font-size:16px; text-decoration:none;">🗑</a>
    </div>
  `;
  container.appendChild(pinsMenu);

  const toggle = pinsMenu.querySelector('.pin-toggle');
  const clear = pinsMenu.querySelector('.pin-clear');

  L.DomEvent.disableClickPropagation(pinsMenu);
  L.DomEvent.disableScrollPropagation(pinsMenu);

  function setMode(on) {
    pinMode = on;
    toggle.classList.toggle('active', pinMode);
    toggle.style.outline = pinMode ? '2px solid #7ea253' : 'none';
    map.getContainer().classList.toggle('map-pin-mode', pinMode);
    if (pinMode) map.doubleClickZoom.disable();
    else map.doubleClickZoom.enable();
  }

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    setMode(!pinMode);
  });
  clear.addEventListener('click', (e) => {
    e.preventDefault();
    userPinsLayer.clearLayers();
    serializePins();
  });
})();

// Add pin on left-click when in pin mode (guard against UI-originated clicks)
map.on('click', (e) => {
  if (!pinMode) return;
  const t = e.originalEvent?.target;
  if (t && (t.closest('#layers-button') || t.closest('#layers-panel') || t.closest('#pins-menu'))) return;
  addUserPin(e.latlng);
});

// Quick-add on right-click even if pinMode is off
map.on('contextmenu', (e) => {
  const t = e.originalEvent?.target;
  if (t && (t.closest('#layers-button') || t.closest('#layers-panel') || t.closest('#pins-menu'))) return;
  addUserPin(e.latlng);
});

// Long-press add on touch (≈650ms)
let _longPressTimer = null;
map.on('touchstart', (e) => {
  if (!e.originalEvent || e.originalEvent.touches?.length !== 1) return;
  const t = e.originalEvent.target;
  if (t && (t.closest('#layers-button') || t.closest('#layers-panel') || t.closest('#pins-menu'))) return;
  const latlng = e.latlng;
  _longPressTimer = setTimeout(() => addUserPin(latlng), 650);
});
map.on('touchend touchmove', () => {
  if (_longPressTimer) {
    clearTimeout(_longPressTimer);
    _longPressTimer = null;
  }
});

/* ==========================================================
   Address Search (Nominatim / OpenStreetMap) – Top Right
   - Type an address, click Search (or press Enter)
   - See a small result list; click one to zoom & drop a pin
   - Pin popup opens with Name (optional) field pre-filled
========================================================== */
(function addGeocoderControl() {
  const container = map.getContainer();

  // Build UI
  const gc = document.createElement('div');
  gc.id = 'geocoder-control';
  gc.innerHTML = `
    <div class="gc-head">
      <button id="geocoder-collapse" type="button" aria-expanded="true" title="Hide search">–</button>
    </div>
    <div class="row">
      <input id="geocoder-input" type="text" placeholder="Find an address or place…" aria-label="Search address">
      <button id="geocoder-search" type="button" title="Search">Search</button>
      <button id="geocoder-clear"  type="button" title="Clear">Clear</button>
    </div>
    <div id="geocoder-results" role="listbox" aria-label="Search results"></div>
  `;
  container.appendChild(gc);

  // Prevent map drag/zoom while interacting
  L.DomEvent.disableClickPropagation(gc);
  L.DomEvent.disableScrollPropagation(gc);

  const input = gc.querySelector('#geocoder-input');
  const searchB = gc.querySelector('#geocoder-search');
  const clearB = gc.querySelector('#geocoder-clear');
  const results = gc.querySelector('#geocoder-results');

  const collapseBtn = gc.querySelector('#geocoder-collapse');
  const COLLAPSE_KEY = 'trr_gc_collapsed_v1';

  function setCollapsed(on){
    gc.classList.toggle('collapsed', on);
    collapseBtn.setAttribute('aria-expanded', String(!on));
    collapseBtn.textContent = on ? '+' : '–';
    localStorage.setItem(COLLAPSE_KEY, on ? '1' : '0');
  }

  // INIT — collapsed by default unless a prior choice exists
  const stored = localStorage.getItem(COLLAPSE_KEY);
  setCollapsed(stored ? stored === '1' : true);   // ← default collapsed

  collapseBtn.addEventListener('click', () =>
    setCollapsed(!gc.classList.contains('collapsed'))
  );


  // Basic helper to shorten address for label
  function prettyLabelFromNominatim(item) {
    // Prefer house number + road + city
    const a = item.address || {};
    const parts = [];
    if (a.house_number && a.road) {
      parts.push(`${a.house_number} ${a.road}`);
    } else if (a.road) {
      parts.push(a.road);
    } else if (a.neighbourhood) {
      parts.push(a.neighbourhood);
    }
    const cityish = a.city || a.town || a.village || a.hamlet || a.county;
    if (cityish) parts.push(cityish);
    if (!parts.length) {
      // fallback: first bit of display_name
      return (item.display_name || '').split(',')[0].trim();
    }
    return parts.join(', ');
  }

  async function nominatimSearch(q) {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=5&q=${encodeURIComponent(q)}`;
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!res.ok) throw new Error('Geocoding failed');
    return res.json(); // array
  }

  function clearResults() {
    results.innerHTML = '';
    results.style.display = 'none';
  }

  function showEmpty(msg) {
    results.innerHTML = `<div class="geocoder-empty">${escapeHtml(msg)}</div>`;
    results.style.display = 'block';
  }

  function showResults(list) {
    if (!list || !list.length) {
      showEmpty('No results found.');
      return;
    }
    results.innerHTML = list.map((it, idx) => `
      <div class="geocoder-item" role="option" data-idx="${idx}">
        ${escapeHtml(it.display_name || 'Unnamed place')}
      </div>
    `).join('');
    results.style.display = 'block';
  }

  function chooseResult(item) {
    clearResults();
    input.blur();

    // Prefer fitting to bounding box if available
    if (item.boundingbox && item.boundingbox.length === 4) {
      const bb = item.boundingbox.map(parseFloat);
      const south = bb[0],
        north = bb[1],
        west = bb[2],
        east = bb[3];
      const bounds = L.latLngBounds([south, west], [north, east]);
      map.fitBounds(bounds.pad(0.05));
    } else {
      map.setView([+item.lat, +item.lon], 16);
    }

    const marker = addUserPin({
      lat: +item.lat,
      lng: +item.lon
    }, true);
    // Pre-fill a tidy label (user can change in popup)
    const label = prettyLabelFromNominatim(item);
    if (label) setMarkerLabel(marker, label);
  }

  async function doSearch() {
    const q = (input.value || '').trim();
    if (!q) {
      clearResults();
      return;
    }
    searchB.disabled = true;
    searchB.textContent = '…';
    try {
      const data = await nominatimSearch(q);
      showResults(data);
      // Click handler for list
      results.querySelectorAll('.geocoder-item').forEach(div => {
        div.addEventListener('click', () => {
          const idx = +div.getAttribute('data-idx');
          const chosen = data[idx];
          if (chosen) chooseResult(chosen);
        });
      });
      // If exactly one result, auto-select
      if (data.length === 1) chooseResult(data[0]);
    } catch (e) {
      showEmpty('Search error. Try refining your address.');
      console.error(e);
    } finally {
      searchB.disabled = false;
      searchB.textContent = 'Search';
    }
  }

  // Wire up UI
  searchB.addEventListener('click', doSearch);
  clearB.addEventListener('click', () => {
    input.value = '';
    clearResults();
    input.focus();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearch();
    }
    if (e.key === 'Escape') {
      clearResults();
    }
  });
})();