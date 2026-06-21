---
name: project-workflow
description: Handle GitHub workflow — branches, commits, pull requests, and issues/tasks (including labels/tags) — following the project's naming, commit-message, and release conventions and automation. Use when branching, committing, opening PRs, or creating/triaging issues.
---

# Project workflow

Work with GitHub in line with the repo's conventions and automation. Don't fight the hooks or CI.

## Safety

- **Don't commit, push, open PRs, or create issues unless the user explicitly asks.**
- Never commit directly to the default/protected branch — branch first.
- Pre-commit secret scanning may run; never introduce secrets.

## Branches

- Follow the enforced branch-naming pattern exactly (a non-matching name is rejected on push).
- Branch off the correct base for the workflow.

## Commits

- Use **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`, `style:`) when releases are automated from commit history — the type drives the version bump and changelog. Keep messages accurate; they become release notes.

## Pull requests

- Target the correct base branch. Title in Conventional-Commit style; body summarizes what + why + test results. Let CI run; fix failures rather than bypassing.

## Issues / tasks (with labels & tags)

- Create issues with a clear, action-oriented title and a body covering context, acceptance criteria, and links.
- **Always apply labels/tags.** Pick from the repo's existing label set (don't invent new ones unless asked) — typically a *type* (`feat`/`fix`/`chore`/`docs`/`bug`/`enhancement`), and where relevant a *scope/area*, *priority*, and *status*. List the repo's labels before assigning if unsure.
- Tie work together: reference related issues/PRs, set milestone/assignee when relevant, and close issues from PRs via `Closes #N`.
- Keep the issue title's prefix consistent with the branch id (`[id]/[task-name]`) so the task ↔ branch ↔ PR chain is traceable.

## Tooling

- Prefer the `gh` CLI or GitHub MCP tools (load deferred ones via tool-search, e.g. `+github ...`) for PRs and issues, including label management.

---

## In this repo (portfolio)

- Repo: `Khavoleh/portfolio`. CI runs for PRs to `main` and `develop`.
- **Branch name:** `[id]/[task-name]`, lowercase + hyphens, e.g. `284/redesign-theme-brand-colors`. Pre-push hook (lefthook) rejects anything else; hooks are skipped on `main` by design.
- **Releases:** `semantic-release` on push to `main` derives the version from commit types — `feat:` → minor, `fix:` → patch, `feat!:`/`BREAKING CHANGE:` → major; `chore:`/`docs:`/`refactor:`/`test:`/`ci:`/`style:` → no release.
- **PR base = `develop`.**
- CI on PRs: build, unit, e2e (Playwright), lint, type-check, CodeQL, DAST. Pre-commit runs `gitleaks` (note `localhost*.pem` are committed dev certs). Pre-push runs lint, prettier --check, astro check, unit, depcruise.
- **Labels:** list current ones with `gh label list` before assigning; map the commit type to the matching label and add an area label for the touched feature/widget when one exists.
