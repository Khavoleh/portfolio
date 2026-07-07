# Home

## Purpose

The landing page (`/`). Introduces Oleh Khavar to a visitor in four stacked sections, top to bottom:

- **Hero** — name, headshot, title, and a one-paragraph pitch.
- **Goal** — a summary of focus areas with CTA buttons routing to the Experience and Projects pages.
- **Metrics** — four headline stats (years of experience, performance gain, team size, delivery model) as a quick-scan credibility strip.
- **Reviews** — a carousel of LinkedIn-sourced colleague testimonials, with a link out to all recommendations on LinkedIn.

## Data model

```mermaid
erDiagram
    METRIC {
        string value "hardcoded display value, e.g. '3+', '5x' — not i18n"
        string name "i18n key for the stat label"
        string description "i18n key for the stat caption"
    }
    REVIEW {
        string name "i18n key for reviewer name"
        string position "i18n key for reviewer job title"
        string company "hardcoded literal, same for all 4 reviews"
        string text "i18n key for testimonial body"
        ImageMetadata image "imported local headshot asset"
    }
```

`Metric` and `Review` are independent — no relation between them. Each is a flat, hardcoded array (`METRICS`, `REVIEWS`) with no backing store or CMS.

## Sequence diagram

Reviews are translated then shuffled **once per server render** — order is fixed for that response but varies between requests/reloads.

```mermaid
sequenceDiagram
    participant Browser
    participant Reviews.astro as Reviews (SSR)
    participant i18n
    participant shuffleArray

    Browser->>Reviews.astro: GET / (render)
    Reviews.astro->>i18n: t(review.name/position/text) for each REVIEW
    i18n-->>Reviews.astro: translated Review[]
    Reviews.astro->>shuffleArray: shuffle(translatedReviews)
    shuffleArray-->>Reviews.astro: shuffled Review[] (Fisher-Yates)
    Reviews.astro-->>Browser: HTML with shuffled order baked in
```

## Implementation nuances

- **Metrics are static, untranslated values paired with translated labels**: `value` is a hardcoded string in `metrics-data.ts`; only `name`/`description` go through i18n. Updating a stat means editing the data file, not the i18n dict.
- **The carousel has no JS framework** — it's daisyUI's CSS `carousel` plus an inline `<script>` wiring `click` → `scrollIntoView` on each prev/next button, using a `data-target` id computed at render time with wraparound (last slide's "next" → slide 0, slide 0's "previous" → last slide).
- Carousel click handlers are re-bound on `astro:page-load` (Astro view-transitions), in addition to first load, since the inline script body only runs once per real navigation otherwise.
- Review `name`/`position`/`text`/`image` are 1:1 per entry — swapping a testimonial's photo means editing `reviews-data.ts`, not just the i18n dict.
