# Privacy Policy

## Purpose

Renders the `/privacy-policy` legal page: a single static page explaining to visitors what data this portfolio site does and doesn't collect, why, and how to request removal of content. Composed of an ordered sequence of sub-slices — heading, intro, data collection, data use, cookies/tracking, external links, contact/rights, last-updated — each a thin wrapper rendering one `TextSection` of i18n copy. There's no interactivity: visitors read it, optionally follow the email link in the contact section.

## Implementation nuances

- `last-updated/LastUpdated.astro` shows a **hardcoded date string** (`"Last updated: March 28, 2026"` / uk equivalent) — not derived from git history or a CMS field. Any edit to a legal section's substance should come with a manual bump of this date in both locales.
- The cookies and data-collection sections make factual claims (Local Storage for theme/language, a cookie for language, Umami Analytics with no tracking cookies/persistent IP/cross-site tracking) — these must stay accurate if storage or analytics behavior changes elsewhere in the app; they aren't generated from actual runtime behavior.
