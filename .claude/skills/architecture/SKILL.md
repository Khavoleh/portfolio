---
name: architecture
description: Enforce Feature-Sliced Design (FSD) layer rules — downward-only imports, barrel-only cross-slice access, and strict `index.ts` placement — in this Astro portfolio codebase. Use this skill the moment any of these questions arise: "Where does this new file go?", "Can I import X from Y?", "Should this be a feature, widget, or shared?", "Does this slice need a barrel?", or "How do I move this without breaking depcruise?" Always use it before creating a component, helper, constant, icon, or i18n file — don't guess the layer. Also trigger on refactors that cross slice boundaries or when `pnpm depcruise` is failing. Examples: adding a new `src/features/projects/` slice, lifting a helper to shared, creating a sub-component inside an existing feature.
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
2. **Cross-slice/cross-layer imports go through the slice's public barrel (`index.ts`)** — never a deep internal path. The barrel is the public API; everything else is private.
3. **No circular dependencies.**
4. Prefer path aliases over long relative `../../..` chains.

## Where `index.ts` lives — the exact rule

`index.ts` exists at **exactly two levels**, nowhere else:

| Location                         | Purpose                                                              |
| -------------------------------- | -------------------------------------------------------------------- |
| `src/features/<slice>/index.ts`  | Public API for a feature slice                                       |
| `src/widgets/<slice>/index.ts`   | Public API for a widget slice                                        |
| `src/shared/<category>/index.ts` | Public API for a shared category (components, helpers, constants, …) |

**Never add `index.ts` to any inner/nested folder.** Sub-components and sub-folders inside a slice are private implementation details imported with direct relative paths by their one parent file.

## Feature / widget slice structure

Each slice is a self-contained folder at the layer root. Everything inside stays private behind the single top-level barrel:

```
src/features/contacts/
  Contacts.*             ← root component (entry point for the slice)
  index.ts               ← barrel: export { default } from './Contacts'
  contacts-i18n.ts       ← slice-local translations
  direct-contact/        ← sub-component folder — NO index.ts here
    DirectContact.*
    direct-contact-i18n.ts
    helpers.ts
    helpers.unit.ts
    icons/
```

`Contacts.*` imports its sub-component via a direct relative path:

```ts
import DirectContact from './direct-contact/DirectContact';
```

Nothing outside `src/features/contacts/` ever imports from inside it — only through `index.ts`.

## Shared category structure

Each category in `src/shared/` is a flat folder with one `index.ts` that re-exports everything by name. Items that need more than one file (e.g. implementation + test) get their own sub-folder, but that sub-folder has **no** `index.ts`; the category barrel exports it directly.

```
src/shared/components/
  Button.*
  Card.*
  use-hook/              ← sub-folder for multi-file items — NO index.ts here
    use-hook.ts
    use-hook.unit.ts
  index.ts               ← re-exports everything
```

```ts
// src/shared/components/index.ts
export { default as Button } from './Button';
export { default as Card } from './Card';
export { useHook } from './use-hook/use-hook';
```

**Don't create a category folder for a single occupant.** Add the category folder only once a second item appears; until then place the single file directly at the slice/shared root.

## Push down on shared access

When **two or more** slices need the same thing (component, helper, constant, type, icon, copy), **don't duplicate and don't sideways-import** — move it down to the lowest layer that fits:

- pure / no business logic → **shared**
- reused and carries business logic → **widget**
- still specific to one feature's sub-parts → keep in that feature but lift to its top level

Promote only what's actually shared; keep single-use code local.

## Verify

Run the project's dependency-boundary linter after changing imports or moving files.

---

## In this repo (portfolio)

- **Linter:** `.dependency-cruiser.mjs` (`pnpm depcruise`, run on pre-push and in `pnpm validate`); violations fail CI.
- **Aliases:** `@shared/*`, `@widgets/*`, `@features/*`, `@assets/*` (configured in `tsconfig.json` + `vitest.config.ts`).
- **Allowed cross-boundary targets:** only `src/<layer>/<slice>/index.ts`. `import { useI18n } from '@shared/helpers'` ✅ — `'@shared/helpers/use-i18n/use-i18n'` ❌
- **`src/shared` import constraint:** nothing imports into it from outside except `@assets`.
- **Existing slices:** features `home`/`experience`/`contacts`/`projects`/`layout`/`not-found`; widgets `skill`/`view-cv`; shared categories `components`/`helpers`/`constants`/`i18n`/`interfaces`.
- **File extension:** `.astro` for components, `.ts` for logic/i18n/helpers.
