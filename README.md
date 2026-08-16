# DigitalFuzed

Marketing site for [DigitalFuzed](https://digitalfuzed.com) — live product demos for school, hospital, real estate, restaurant, salon, CRM, ERP, and QR pages.

## Stack

- React 18
- Vite 6
- Tailwind CSS

## Setup

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Layout

```
src/
  components/   Page sections (header, hero, products, contact)
  data/         Live product list and URLs
```

Product links live in `src/data/liveProducts.js`.

## Deploy

Production path: `/home/digitalfuzed/htdocs/digitalfuzed.com`

Push to `digitalfuzed-landing-page` (or run **Actions → Deploy to Server**) to:

1. Run `npm ci` and `npm run build`
2. Copy `dist/` to the server over SSH

GitHub repository secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`. Optional: `DEPLOY_PORT` (defaults to `22`).
