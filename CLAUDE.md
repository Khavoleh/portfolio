# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The first part is general guidance that holds for any project of this shape; the **This project (portfolio)** section at the end pins down the concrete stack, commands, and paths.

## Working principles

- **Smallest viable diff.** Solve exactly what's asked; don't refactor adjacent code unless required.
- **Reuse before adding.** Look for an existing component/helper/constant/type before writing a new one. Each new dependency is a long-term liability.
- **Match surrounding patterns.** New code should be indistinguishable from the code next to it.
- **Extend existing systems** (i18n, theming, config) rather than inventing parallel ones.
- **Verify before claiming done** — run the project's full validation gate and report results plainly.

## Architecture: Feature-Sliced Design

Code is organized into layers forming a one-way dependency chain — a layer may import only from layers **below** it, never upward and never sideways into another slice's internals.

Layer purpose (top → bottom):

- **pages** — render pages / route entry points; compose features and widgets, little logic of their own.
- **features** — a feature (unit of user-facing functionality); not necessarily a whole page, preferably kept small and focused.
- **widgets** — reusable elements **with** business logic.
- **shared** — reusable elements **without** business logic (UI primitives, helpers, constants, types, config); the leaf layer.

```
pages → features → widgets → shared
```

Rules:

- **Cross-slice/cross-layer imports go through a slice's public barrel (`index.ts`)**, never a deep internal path. The barrel is the slice's public API; internals stay private.
- A slice is a folder with a barrel re-exporting what it exposes (component + optional i18n, types, helpers, sub-slices).
- No circular dependencies. Prefer path aliases over long relative chains. Push shared code **down** to the lowest fitting layer.

## Conventions

- **i18n** — no hard-coded user-facing strings; every string goes through the translation layer with a stable key, and **every supported language defines the same key set**. Component-local copy lives beside the component; shared copy lives in the shared i18n area.
- **Design tokens** — use semantic theme tokens, not raw colors/values; define palette/themes centrally and keep markup theme-agnostic. Run the class linter/formatter after editing utility classes.
- **Testing** — unit tests for pure logic (colocated, deterministic); end-to-end tests for rendered behavior; accessibility is a gated test. Test behavior, not implementation.
- **Git** — follow the enforced branch-naming pattern; use Conventional Commits (releases are automated from commit history); don't commit/push/open PRs unless asked.

---

## This project (portfolio)

Personal portfolio for Oleh Khavar: **Astro 6 + Tailwind CSS 4 + daisyUI 5**, deployed to **Vercel**, bilingual (EN/UK). Package manager **pnpm**.

### Commands

```bash
pnpm dev        # dev server via astro.config.local.ts (HTTPS, node adapter, localhost certs)
pnpm build      # production build via astro.config.ts (Vercel adapter)
pnpm preview    # build + preview with the local config
pnpm lint       # biome check (lint only — formatting is disabled in biome)
pnpm prettier   # prettier . --write (formatting is owned by prettier, not biome)
pnpm unit       # vitest run — matches src/**/*.unit.ts
pnpm e2e        # playwright — matches src/**/*.e2e.ts (auto-starts `pnpm preview`)
pnpm depcruise  # dependency-cruiser — enforces the layer import rules
pnpm astro check  # type-check .astro/.ts
pnpm validate   # full gate: build + unit + lint + prettier --check + astro-check + depcruise
```

Consult the most specific project skill under `.claude/skills/` for a task: `frontend-expert` (UI, design system, i18n, a11y), `architecture` (FSD layers, slice structure), `libraries` (which dep to use, when), `testing-strategy` (unit/e2e), `project-workflow` (branches, PRs, issues), `specification` (per-feature specs).

- Single unit test: `pnpm vitest run src/path/file.unit.ts` (or `-t "name"`).
- Single e2e: `pnpm e2e src/accessibility.e2e.ts --project=chromium`.
- Two Astro configs share `SHARED_ASTRO_CONFIG` (`src/shared/constants/shared-astro-config.ts`): `astro.config.ts` = production/Vercel; `astro.config.local.ts` = local dev (node adapter + HTTPS). Changing shared config affects both.

### Layers in `src/`

Boundaries enforced by `.dependency-cruiser.mjs` (`pnpm depcruise`, run on pre-push and in `pnpm validate`). Aliases (`tsconfig.json` + `vitest.config.ts`): `@shared/*`, `@widgets/*`, `@features/*`, `@assets/*`.

- `src/pages/` — routes (`[lang]/*.astro`); `src/pages/index.ts` is the only SSR route (`prerender = false`): redirects `/` → `/<lang>/` from cookie / `Accept-Language`.
- `src/features/` — e.g. `home`, `experience`, `contacts`, `projects`, `terms-and-conditions`, `privacy-policy`, `layout`, `not-found`.
- `src/widgets/` — e.g. `skill`, `view-cv`.
- `src/shared/` — `components`, `helpers`, `constants`, `i18n`, `interfaces`. Nothing imports into `src/shared` from outside except `@assets`. Cross-boundary imports must target `src/<layer>/<slice>/index.ts`.
- Slice = `Component.astro` + barrel `index.ts` (`export { default } from './Component.astro'`) + optional `*-i18n.ts`, `*.ts`, `helpers/`, `icons/`; tests colocated (`*.unit.ts`, `*.e2e.ts`). **`index.ts` exists only at the slice root (features/widgets) and at each shared category root — never inside any sub-folder.**

### i18n

- Languages EN + UK (`uk` required). Type `I18N = { en, uk }` (`src/shared/interfaces/i18n.ts`).
- In a component: `const t = useI18n(Astro.url, X_I18N)` then `t('key')`. Fallback: current lang → `DEFAULT_LANGUAGE` (`en`) → raw key.
- Component-local dicts → sibling `*-i18n.ts`; page/shared dicts → `src/shared/i18n/` (re-exported from its `index.ts`). Pages use `getStaticPaths = getLanguageStaticPaths` to emit `en`+`uk`. Page-level dicts carry `title`/`description`/`language` (SEO + `schema-dts` JSON-LD via `Schema.astro`).

### Theming & UI

- daisyUI semantic tokens only (`bg-base-100`, `text-base-content`, `primary`, `accent`, …); themes `portfolio-light`/`portfolio-dark` (**dark default**) as OKLCH `@plugin 'daisyui/theme'` blocks in `src/features/layout/global.css`; wiring in `Layout.astro`.
- Biome `useSortedClasses` is an **error** (incl. `.astro`); Prettier handles formatting (`prettier-plugin-tailwindcss`).
- Reuse `src/shared/components/` (Button, Card, IconCard, Heading, SectionHeader, PageIntro, TextSection, Prose, EmailLink, Schema…).

### Testing

- Unit: vitest, `src/**/*.unit.ts`, colocated; `globals: true` but existing files import from `vitest` — match the neighbor.
- E2E: Playwright, `**/*.e2e.ts`, 5 browser projects, auto-starts `pnpm preview` on `:4321`. A11y gate `src/accessibility.e2e.ts` (`@axe-core/playwright`).

### Tooling & process

- **Git hooks** (lefthook, skipped on `main`): pre-commit `gitleaks`; pre-push runs lint, prettier --check, astro check, unit, depcruise, branch-name check.
- **Branch naming enforced**: `[id]/[task-name]` (e.g. `284/redesign-theme-brand-colors`).
- **Releases**: semantic-release on push to `main` — use Conventional Commits. PRs base on `develop`; CI runs build, unit, e2e, lint, type-check, CodeQL, DAST.
- No Cursor/Copilot rule files in the repo.
