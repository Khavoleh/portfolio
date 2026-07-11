---
name: libraries
description: Pick the right dependency and use existing ones correctly in this deliberately minimal Astro portfolio (only 2 runtime deps: `astro` + `@astrojs/cloudflare`). Use this skill before running `pnpm add`, when deciding "is there already something that does X?", or when choosing between tools already in the project. Trigger on any of these: "install X", "add a package for Y", "how do I handle animations / icons / dates / forms / image optimization", "which test runner / linter / formatter should I use?", "can I use Z library here?". Also use it when an existing dep might already solve the problem — this skill has the full catalog. Examples: "add a date picker", "install framer-motion", "do we have an icon library?", "should this go in devDependencies?".
---

# Libraries — what to use, and when

Prefer the tools already in the project; add a dependency only when it clearly earns its place.

## Choosing

- **Reuse first.** Check existing dependencies and in-repo helpers before adding anything. The best dependency is often one you already have.
- **Justify a new dep** against: does the platform/stdlib already do this? is it small, maintained, and well-licensed? does it pull a large/transitive tree? A new dep is a long-term liability (bundle, security, maintenance) — see `pragmatic` principles in the core guidance.
- **Right tool for the job, not the trendiest.** Match the library to the actual need and the existing stack; don't introduce a competing solution to one already present.
- **Production vs dev.** Anything imported by shipped code goes in runtime dependencies; tooling/tests go in dev dependencies. Don't import dev-only packages into shipped code.
- **Pin/lockfile.** Respect the lockfile; let the configured update tooling handle bumps.

## Using

- Import through the library's documented public entry; don't reach into internals.
- Keep usage centralized/wrapped when it's likely to change or is used widely, so swaps are cheap.
- Read the version's own docs (APIs change between majors) rather than relying on memory.

---

## In this repo (portfolio)

Runtime deps are deliberately minimal — **only `astro` + `@astrojs/cloudflare`**. Everything else is build/dev tooling.

- **Framework:** `astro` (v7) — pages, components (`.astro`), routing, SSG + the one SSR redirect.
- **Adapters:** `@astrojs/cloudflare` (prod build, `astro.config.ts`); `@astrojs/node` (local dev/preview, `astro.config.local.ts`).
- **Styling:** `tailwindcss` v4 + `@tailwindcss/vite` + `daisyui` v5 (themes/components). Use daisyUI semantic tokens (see `frontend-expert`).
- **SEO:** `@astrojs/sitemap` (sitemap), `schema-dts` (typed JSON-LD via `Schema.astro`).
- **Images:** `sharp` (Astro image optimization).
- **Lint/format:** `@biomejs/biome` (lint + class sorting) and `prettier` (+ `prettier-plugin-astro`, `prettier-plugin-tailwindcss`) for formatting. Don't duplicate roles.
- **Types:** `@astrojs/check` (`astro check`).
- **Tests:** `vitest` (unit), `@playwright/test` + `@axe-core/playwright` (e2e + a11y). See `testing-strategy`.
- **Architecture:** `dependency-cruiser` (layer rules). **Hooks:** `lefthook`. **Releases:** `semantic-release` (+ `@semantic-release/git`, `@semantic-release/github`).

Before adding a library: confirm none of the above already covers it; if it ships to users, weigh it against the "only two runtime deps" baseline and put it in the right `package.json` section (depcruise enforces this).
