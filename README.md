# React Portfolio

A frontend-only portfolio built with React, Vite, Tailwind CSS, and Lucide icons. Portfolio profile, project, and skill content is stored locally in `frontend/src/data/portfolio.js`; no backend or database is required.

## Run locally

From the project root:

```bash
npm run install:frontend
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Alternatively, run the frontend directly:

```bash
cd frontend
npm install
npm run dev
```

## Build and lint

From the project root:

```bash
npm run build
npm run lint
```

## Customize

- Update profile, project, and skill details in `frontend/src/data/portfolio.js`.
- Update the layout and appearance in `frontend/src/components/` and `frontend/src/`.
- The contact form opens the visitor's email app with a prepared message. Sending requires the visitor to complete the action in that app; this frontend does not store or send messages itself.
