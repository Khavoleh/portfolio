---
name: testing-strategy
description: Decide where to test, what to test, and how to run tests in this Astro + Vitest + Playwright portfolio. Use this skill when: writing a new test, a test is failing, deciding whether a helper or component needs a unit test, adding accessibility checks, running the a11y e2e suite, or verifying a change before calling it done. Trigger on: "write a test for X", "does this need a test?", "my vitest test is failing", "playwright is broken", "add accessibility coverage", "check a11y on this page", "run the tests". Also use it when adding a pure helper (ships with a unit test) or a new page section (a11y e2e at minimum). Examples: "test the get-language helper", "add axe checks for the /uk/home route", "my unit test for the timezone util is broken", "what's the test command?".
---

# Testing strategy

Two levels: fast **unit** tests for logic, and **end-to-end (e2e)** tests for real rendered behavior and accessibility. Put each at the right level and keep them deterministic.

## What to test where

- **Unit** — pure logic: helpers, transformations, computed values, edge cases. Colocate next to the unit under test. Don't unit-test rendered UI.
- **E2E** — real user-visible behavior across the target browsers/viewports; cover each supported locale where relevant.
- **Accessibility** — a gated test (e.g. axe): assert zero violations; extend the existing a11y suite rather than forking it.

## Conventions

- Test the behavior/contract, not the implementation.
- Make tests deterministic: fake timers/clock, fixed inputs; anchor time-zone-sensitive values in UTC.
- Style: one `describe` per function; behavior-named cases; loop/table over inputs.
- Mocks/fakes only at real boundaries (time, network, env) — prefer real code over mocks when cheap.
- A new pure helper ships with a unit test; a new page/section is covered by the a11y e2e at minimum.
- Run the relevant single test while iterating; run the full suite before claiming done, and report results plainly.

---

## In this repo (portfolio)

- **Unit (vitest, `*.unit.ts`):** `vitest.config.ts` — `globals: true` (existing files still import `describe/it/expect` from `vitest`; match the neighbor), `include: ['src/**/*.unit.ts']`; aliases work. Place beside source (e.g. `src/shared/helpers/get-language/get-language.unit.ts`). See `get-ukraine-timezone.unit.ts` for fake-timer/UTC patterns.
  - Run: `pnpm unit` · `pnpm vitest run src/path/file.unit.ts` · `pnpm vitest run -t "name"`.
- **E2E (Playwright, `*.e2e.ts`):** `playwright.config.ts` — `testDir: ./src`, `testMatch: **/*.e2e.ts`, 5 projects (Desktop Chrome/Firefox/Safari, Mobile Chrome/Safari); auto-starts `pnpm preview` on `:4321` unless `PLAYWRIGHT_BASE_URL` is set.
  - A11y gate: `src/accessibility.e2e.ts` (`@axe-core/playwright`) — extend it; visit `/en/...` and `/uk/...`.
  - Run: `pnpm e2e` · `pnpm e2e src/accessibility.e2e.ts` · add `--project=chromium`. First run: `pnpm exec playwright install --with-deps`.
- CI runs `unit` + `e2e` on PRs; `pnpm validate` includes `unit`.
