# Pokémon Fracture & Revolt

A cinematic showcase site for the **Pokémon Fracture & Revolt** fan game concept. The experience presents the dual-version identity, core story arc, Team Bastion conflict, friendship and faith themes, visual direction, soundtrack, and future Poke Economy systems layer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the final production origin when deploying so Open Graph and Twitter image URLs resolve to the live site.

## Project structure

- `src/app/page.tsx` — page content and semantic structure
- `src/app/globals.css` — responsive art direction, layout, and motion
- `src/components/version-selector.tsx` — interactive Fracture/Revolt experience
- `src/components/ambient-experience.tsx` — scroll progress and reveal behavior
- `public/logo.png` — supplied concept key art
- `docs/project-context/` — original brief, art direction, and project resources

## Attribution

This is an independent, non-commercial fan concept. Pokémon and related trademarks belong to Nintendo, Game Freak, and The Pokémon Company.
