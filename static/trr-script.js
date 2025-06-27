// Legend toggle logic with localStorage
const legend       = document.getElementById('map-legend');
const legendToggle = document.getElementById('legend-toggle');
const toggleBox    = document.getElementById('toggle-legend-box');

function getInitialLegendState() {
  const stored = localStorage.getItem('legendVisible');
  if (stored !== null) return stored === '1';
  // Hide on small screens by default
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

// Initialize legend visibility
setLegendState(getInitialLegendState());

// Create the map
const map = L.map('map').setView([42.75, -122.90], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// County style configurations
const countyStyles = [
  { name: 'douglas',   color: '#7ea253', fill: '#a9c995' },
  { name: 'jackson',   color: '#068D9D', fill: '#7ed6df' },
  { name: 'josephine', color: '#53599A', fill: '#b5b4e3' },
  { name: 'klamath',   color: '#E67E22', fill: '#FDEBD0' },
  { name: 'coos',      color: '#e74c3c', fill: '#fdecec' }
];

// Storage for turf polygons
const polygons = {};

// Totals per county & utility
const totals = {
  coos:   { pacific: 0, cce: 0, clpud: 0 },
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
  document.getElementById('meters-clpud-douglas').textContent  = totals.douglas.clpud.toLocaleString();
  document.getElementById('meters-total-douglas').textContent  =
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
  if (!poly) return false;
  return turf.booleanPointInPolygon(turf.point([lon, lat]), poly);
}

function fetchOutages() {
  // reset totals
  Object.keys(totals).forEach(county => {
    Object.keys(totals[county]).forEach(util => totals[county][util] = 0);
  });

  // Pacific Power
  fetch('/outages')
    .then(r => r.json())
    .then(data => {
      const list = data[0]?.outages || [];
      // I dont think this is needed since this is only for Pacific power... so it doesn't make sense..
      // document.getElementById('last-updated').textContent =
      //   'Last Updated: ' + (data[0]?.last_upd || 'Unknown');

      list.forEach(o => {
        if (!o.latitude || !o.longitude) return;
        // draw marker
        L.circleMarker([o.latitude, o.longitude], {
          radius: 8, fillColor: '#007bff', color: '#000',
          weight: 1, opacity: 1, fillOpacity: 0.85
        })
          .bindPopup(`
            <strong>ZIP:</strong> ${o.zip}<br/>
            <strong>Impacted Meters:</strong> ${o.custOut}<br/>
            <strong>Cause:</strong> ${o.cause}<br/>
            <strong>Crew Status:</strong> ${o.crewStatus || 'Unknown'}<br/>
            <strong>ETR:</strong> ${o.etr}<br/>
            <small>First Reported: ${o.reported}</small><br/>
            <strong>Utility:</strong> Pacific Power
          `)
          .addTo(map);

        // tally by county
        ['douglas','jackson','josephine','klamath','coos'].forEach(county => {
          if (pointInCounty(o.latitude, o.longitude, county)) {
            totals[county].pacific += Number(o.custOut) || 0;
          }
        });
      });
      updateTotalsDisplay();
    })
    .catch(console.error);

  // Douglas Electric
  fetch('/dec-outages')
    .then(r => r.json())
    .then(list => {
      list.forEach(o => {
        if (!o.latitude || !o.longitude) return;
        L.circleMarker([o.latitude, o.longitude], {
          radius: 8, fillColor: '#ffa500', color: '#000',
          weight: 1, opacity: 1, fillOpacity: 0.85
        })
          .bindPopup(`
            <strong>Impacted Meters:</strong> ${o.custOut}<br/>
            <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
            <strong>ID:</strong> ${o.id}<br/>
            <strong>Utility:</strong> Douglas Electric
          `)
          .addTo(map);

        if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
          totals.douglas.dec += Number(o.custOut) || 0;
        }
      });
      updateTotalsDisplay();
    })
    .catch(console.error);

  // Central Lincoln PUD
  fetch('/clpud-outages')
    .then(r => r.json())
    .then(list => {
      list.forEach(o => {
        if (!o.latitude || !o.longitude) return;
        L.circleMarker([o.latitude, o.longitude], {
          radius: 8, fillColor: '#AA40FF', color: '#000',
          weight: 1, opacity: 1, fillOpacity: 0.85
        })
          .bindPopup(`
            <strong>Impacted Meters:</strong> ${o.custOut}<br/>
            <strong>Status:</strong> ${o.planned ? 'Planned' : 'Unplanned'}<br/>
            <strong>ID:</strong> ${o.id}<br/>
            <strong>Utility:</strong> Central Lincoln PUD
          `)
          .addTo(map);

        if (pointInCounty(o.latitude, o.longitude, 'douglas')) {
          totals.douglas.clpud += Number(o.custOut) || 0;
        }
      });
      updateTotalsDisplay();
    })
    .catch(console.error);

  // Coos-Curry Electric
  fetch('/cce-outages')
    .then(r => r.json())
    .then(list => {
      list.forEach(o => {
        if (!o.latitude || !o.longitude) return;
        L.circleMarker([o.latitude, o.longitude], {
          radius: 8, fillColor: '#e74c3c', color: '#000',
          weight: 1, opacity: 1, fillOpacity: 0.85
        })
        .bindPopup(`
          <strong>Case Number:</strong> ${o.id}<br/>
          <strong>Impacted Meters:</strong> ${o.custOut}<br/>
          <strong>Pole:</strong> ${o.poleNumber}<br/>
          <strong>Element:</strong> ${o.elementName}<br/>
          <strong>Status:</strong> ${o.status}<br/>
          <strong>Cause:</strong> ${o.cause}<br/>
          <strong>Outage Time:</strong> ${o.outageTime}<br/>
          <strong>Restoration:</strong> ${o.restorationTime}<br/>
          <strong>Utility:</strong> Coos-Curry Electric
        `)
        .addTo(map);

        if (pointInCounty(o.latitude, o.longitude, 'coos')) {
          totals.coos.cce += Number(o.custOut) || 0;
        }
      });
      updateTotalsDisplay();
    })
    .catch(console.error);

}

// Fetch and draw all county polygons, then start outage polling
fetch('/static/dc.geojson')
  .then(r => r.json())
  .then(geojson => {
    countyStyles.forEach(cfg => {
      const feat = geojson.features.find(f =>
        (f.properties.COUNTY_NAM||f.properties.COUNTY_NAME||'').toLowerCase() === cfg.name
      );
      if (feat) {
        polygons[cfg.name] = feat;
        L.geoJSON(feat, {
          style: {
            color: cfg.color,
            weight: 4,
            fillColor: cfg.fill,
            fillOpacity: 0.3
          }
        }).addTo(map);
      }
    });
    // all polygons in place → fetch outages
    fetchOutages();
  })
  .catch(console.error);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('details[id]').forEach(det => {
    const key = 'legend_' + det.id;
    // Restore state
    if (localStorage.getItem(key) === 'true') {
      det.open = true;
    }
    // Listen for toggles and save
    det.addEventListener('toggle', () => {
      localStorage.setItem(key, det.open);
    });
  });
});
