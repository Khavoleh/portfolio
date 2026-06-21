---
name: architecture
description: Enforce Feature-Sliced Design layer boundaries, import rules, and modular slice structure when adding files, adding imports, or moving code. Use before introducing any new import, creating a component, or relocating modules.
---

# Architecture

Keep the codebase on a layered **Feature-Sliced Design (FSD)** architecture: one-way dependency chain, small modular slices, code pushed to the lowest layer that fits.

## Layer purpose (top → bottom)

- **pages** — render pages / route entry points. Compose features and widgets; little logic of their own.
- **features** — a feature (unit of user-facing functionality). Not necessarily a whole page; prefer small, focused features.
- **widgets** — reusable elements **with** business logic.
- **shared** — reusable elements **without** business logic (UI primitives, helpers, constants, types, config). The leaf layer.

```
pages → features → widgets → shared
```

## Hard rules

1. **Downward imports only.** Never import a higher layer from a lower one; never reach sideways into another slice's internals.
2. **Cross-slice/cross-layer imports go through a slice's public barrel (`index.ts`)** — never a deep internal path. The barrel is the slice's public API; everything else is private.
3. **No circular dependencies.**
4. Prefer path aliases over long relative `../../..` chains.

## Modular slice structure

This per-item barrel structure applies to **layers built from business-logic slices** (features, widgets, and any layer above shared) — each slice is a self-contained folder with its own `index.ts`. Keep everything a slice owns **inside it, maximally modular**, behind one public barrel:

- `Component.*` — the UI/entry.
- `index.ts` — the public API (barrel); the only thing other slices import.
- `*-i18n.ts` — translations for this slice's copy.
- `*.ts` — local types, data, and constants used only here.
- `helpers/` — local helper functions (each in its own file, ideally with a colocated unit test).
- `icons/` — local assets used only by this slice.
- `*.unit.ts` / `*.e2e.ts` — tests colocated with what they cover.

**A folder only earns its own `index.ts` when something outside its single immediate parent file needs to import it** — i.e. it's re-exported from its feature/widget's own top-level barrel, or two or more sibling slices import it directly. That's what makes it a "slice" with a public API in the first place.

A component folder nested inside a slice and used **only** by that slice's own parent component — no other file ever imports it — is a **private internal**, not a slice: leave it as a plain folder (component file, optional colocated test/i18n) and import it with a direct relative path from that one parent. This holds **no matter how deep the nesting is**: do not add a barrel at every level "for consistency" — a barrel is for crossing a boundary, and a folder with exactly one consumer never crosses one. Only add the barrel the moment a second consumer (a sibling slice, or the feature's own public barrel) needs the same folder.

**Plain component exporting** — the leaf/shared layer, and any other layer that just hosts standalone components, helpers, or constants with no business logic — does **not** get one folder + barrel per item. Instead each category (e.g. components, helpers, constants) is a single flat folder holding the individual files side by side, with **one barrel `index.ts`** that re-exports all of them by name.

Only give an item its own subfolder here when it needs more than one file (e.g. an implementation file plus its colocated test). Even then there's no nested `index.ts`; the category-level barrel exports it directly.

**Don't create a category folder for a single occupant.** A category folder (`helpers/`, `constants/`, `icons/`, etc.) exists to hold multiple files side by side. If a slice or shared area only has one constant, one helper, or one component to expose, skip the folder — place that one file directly at the slice's/shared area's top level (still exported from the existing barrel) instead of wrapping it in a folder that contains nothing else. Add the category folder only once a second item shows up to share it with.

## Push down on shared access

When **two or more** slices need the same thing (component, helper, constant, type, icon, copy), **don't duplicate and don't sideways-import** — move it **down** to the lowest layer that fits:

- pure / no business logic → **shared**;
- reused and carries business logic → **widget**;
- still specific to one feature's sub-parts → keep in that feature but lift to its top level.

Promote only what's actually shared; keep single-use code local.

## Verify

Run the project's dependency-boundary linter after changing imports or moving files.

---

## In this repo (portfolio)

- Enforced by `.dependency-cruiser.mjs` (`pnpm depcruise`, run on pre-push and in `pnpm validate`); violations fail CI.
- Aliases (`tsconfig.json` + `vitest.config.ts`): `@shared/*`, `@widgets/*`, `@features/*`, `@assets/*`.
- Cross-boundary targets allowed by depcruise: only `src/<layer>/<slice>/index.ts`. E.g. `import { useI18n } from '@shared/helpers'` ✅ — `'@shared/helpers/use-i18n/use-i18n'` ❌.
- `src/shared` must not be imported into from outside except `@assets`.
- Examples: features `home`/`experience`/`contacts`/`projects`; widgets `skill`/`view-cv`; shared `components`/`helpers`/`constants`/`i18n`/`interfaces`. Slice barrel: `export { default } from './Component.astro'`.
- Real slice layout, e.g. `src/features/contacts/direct-contact/`: `DirectContact.astro`, `direct-contact-i18n.ts`, `get-ukraine-timezone.ts`, `get-ukraine-timezone.unit.ts`, `icons/`, `index.ts`.
- Real plain-export layout, e.g. `src/shared/components/`: flat `Button.astro`, `Card.astro`, … plus one `index.ts`:
  ```ts
  export { default as Button } from './Button.astro';
  export { default as Card } from './Card.astro';
  ```
  Same pattern for `src/shared/helpers/` (e.g. `use-i18n/use-i18n.ts`, re-exported from `src/shared/helpers/index.ts`) and `src/shared/constants/`, `src/shared/i18n/`, `src/shared/interfaces/`.
- Keep deps in the correct `package.json` section — no `devDependencies` in shipped `src`. Branch names must match `[id]/[task-name]`.
