# Ashutosh Mishra — Portfolio

Personal website of **Ashutosh Mishra** — Founder & CEO of ReasonateAI, Sehatra and EduTech.

Pure HTML / CSS / JavaScript — no build step, no dependencies.

## Sections

- Hero with positioning, credentials and profile card
- Key figures
- Ventures — ReasonateAI, Sehatra and EduTech (tabbed detail view)
- Technology — the Dual-Twin Architecture with a live engine log
- Selected work (filterable), track record, about, experience and expertise
- Contact

Dark and light themes (follows the system, with a toggle), fully responsive, keyboard accessible,
and respects `prefers-reduced-motion`. Press `/` for the hidden console.

## Edit content

All text, projects, ventures, stack and contact links live in [`js/data.js`](js/data.js).

## Run locally

```bash
python -m http.server 5500
```

Then open http://localhost:5500

## Deploy

- **Vercel / Netlify:** import this repo, no build command, output directory `/`.
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root.
