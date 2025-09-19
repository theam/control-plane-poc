# Landing Page — Frontend Implementation (CTPPOC-80)

This directory contains a minimal static frontend to list environments and trigger actions against a backend API.

- index.html — basic layout and components following the style guide
- styles.css — tokens and components (buttons, cards, sections)
- main.js — data fetching from API and UI wiring

API
- GET /api/environments -> [{ id, name, description }]
- POST /api/environments/:id/actions { action: "deploy" | "promote" | "rollback" }

Configure API base by exposing window.env.API_BASE before main.js loads if not using /api.
