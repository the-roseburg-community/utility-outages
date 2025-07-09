# Map Front-End Script Overview

This script (`trr-script.js`) provides the interactive logic for The Roseburg Receiver’s outage & incident map. It is responsible for:

- Initializing and rendering the Leaflet map (with OpenStreetMap tiles)
- Fetching, displaying, and refreshing layers for:
  - Power outages (Pacific Power, Douglas Electric, Central Lincoln, Coos-Curry)
  - ODOT traffic incidents
  - Road cameras (CCTV)
  - Dynamic message signs (DMS)
  - Oregon mileposts (text markers)
- Handling custom SVG marker icons for incidents, cameras, signs, etc.
- Managing map legend state, tabs, and user toggles (persisted with localStorage)
- Drawing county polygons and summarizing outage counts by county/utility
- Providing a responsive, mobile-friendly experience
- Efficiently updating data and UI in real time without overwhelming the browser

**Customization:**  
Developers can easily add/modify county styles, SVG icons, polling rates, and new data sources by adjusting parameters in this script.  
All UI states are persisted, so user preferences remain after reload.

See inline comments for more details!
