---
name: frontend-expert
description: Build and modify UI for this Astro 6 + Tailwind CSS 4 + daisyUI 5 bilingual (EN/UK) portfolio so everything stays consistent with the design system, theming, i18n, and accessibility conventions. Use this skill whenever: writing or editing a `.astro` component, adding or changing Tailwind classes, touching daisyUI tokens or theme variables in `global.css`, adding or renaming an i18n key (both `en` and `uk` must be defined), designing a new page section or layout, making an element interactive, or after an accessibility complaint. Also use it when unsure whether to reuse a shared primitive or create a new component — the default is always reuse first. Examples: "add a testimonials section", "style this card with dark-mode support", "translate this button label", "fix the contrast on the nav link".
---

# Frontend expert

Produce UI that looks and behaves like the rest of the app — consistent, themeable, translated, accessible, and built from small reusable pieces.

## Design system & tokens

- Use the project's semantic design tokens (color, spacing, typography) instead of literal values. No raw hex/rgb, no magic numbers where a token/scale exists.
- Define/adjust palette and themes in the central theme source, not inline. Keep markup theme-agnostic so every theme (light/dark/…) renders correctly.
- If a utility-class framework enforces class ordering/formatting, run its linter/formatter after editing classes.

## Components & state

- Build UI as small, single-purpose components placed in the layer matching their purpose (see `architecture`): primitive/no-logic → shared; reusable-with-logic → widget; user-facing functionality → feature.
- Each component exposes a clear public entry (barrel) and keeps internals private.
- **Reuse existing primitives before creating new ones** — search the shared UI library first.
- Keep state as local as possible; lift it only when genuinely shared.

## Internationalization (i18n)

- **No hard-coded user-facing strings.** Route every string through the translation layer with a stable key.
- **Key parity:** every supported language defines the **same set of keys**. Add/rename/remove a key in _every_ language at once.
- Don't rely on the lookup's fallback (other language → default → raw key) — a missing translation renders wrong text, not an error. Fill every key, and translate meaningfully (no placeholder source-language text).
- Placement by scope: component-local copy beside the component; cross-page/shared copy in the shared i18n area, exported from its barrel.

## Accessibility

- Semantic HTML, labels for controls, alt text, sufficient contrast, keyboard operability. Treat automated a11y checks as a gate.

## Before done

Run lint, format-check, and type-check; for visual/a11y/i18n changes run the e2e/a11y suite and check each locale.

---

## In this repo (portfolio)

- Stack: **Astro 6 + Tailwind CSS 4 + daisyUI 5**, bilingual **EN/UK**, Cloudflare prod.
- **Tokens:** daisyUI semantic tokens only (`bg-base-100/200/300`, `text-base-content`, `primary`/`primary-content`, `secondary`, `accent`, `neutral`, `info`/`success`/`warning`/`error`). Themes `portfolio-light`/`portfolio-dark` (**dark default**) as OKLCH `@plugin 'daisyui/theme'` blocks in `src/features/layout/global.css`; wiring in `Layout.astro` (`theme-init.js`, `remove-transitions.js`).
- **Class order** enforced by Biome `useSortedClasses` (**error**, incl. `.astro`); run `pnpm lint`. Formatting via `pnpm prettier` (`prettier-plugin-tailwindcss`).
- **Slice:** `Component.astro` + barrel `index.ts` (`export { default } from './Component.astro'`) + optional `*-i18n.ts`, `*.ts`, `helpers/`, `icons/`. Reuse `src/shared/components/` (Button, Card, IconCard, Heading, SectionHeader, PageIntro, TextSection, Prose, ProseList, EmailLink, Schema).
- **i18n:** type `I18N = { en, uk }` (`src/shared/interfaces/i18n.ts`); `uk` required. Access: `const t = useI18n(Astro.url, X_I18N)` then `t('key')` (`src/shared/helpers/use-i18n/use-i18n.ts`), fallback current → `DEFAULT_LANGUAGE` (`en`) → raw key. Component-local → sibling `*-i18n.ts`; page/shared → `src/shared/i18n/<area>-i18n.ts` re-exported from `src/shared/i18n/index.ts`. Page-level dicts carry `title`/`description`/`language` (SEO + `schema-dts` JSON-LD via `Schema.astro`). Suggested guard: a `*.unit.ts` asserting `Object.keys(en)` deep-equals `Object.keys(uk)`.
- **a11y gate:** `src/accessibility.e2e.ts` (axe) — `pnpm e2e`. Finish with `pnpm lint && pnpm prettier --check . && pnpm astro check`.
