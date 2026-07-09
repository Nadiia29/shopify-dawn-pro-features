# Bloom Home — Brand Guide

A warm, botanical home-decor brand. This doc covers what's already applied in the theme vs. what needs a manual step from you.

## Color palette (already applied in `config/settings_data.json`)

| Role | Color | Hex |
|---|---|---|
| Background (light) | Warm ivory | `#F7F3EC` |
| Background (card) | Soft beige | `#EFE7DA` |
| Background (dark) | Deep espresso | `#2F2A25` |
| Text | Warm charcoal | `#2B2622` |
| Primary accent (buttons) | Terracotta | `#C1694F` |
| Secondary accent | Sage green | `#8A9A82` |

Mapped to Dawn's 5 color schemes: scheme-1 = ivory/terracotta (default), scheme-2 = beige card background, scheme-3 = espresso dark (footer/banners), scheme-4 = sage accent (sale badges, testimonials), scheme-5 = bold terracotta (banner overlays).

Corner radii were softened across buttons, inputs, cards, and popups (6-8px instead of Dawn's default sharp 0px) — small detail, but it's what makes a color change actually read as "designed" rather than "default theme with a new color swapped in."

## Typography (needs a manual pick — see below)

I didn't hand-edit the font IDs in `settings_data.json` — guessing Shopify's internal font handle strings wrong fails silently (theme just falls back, no error), so it's not worth the risk. Pick these visually instead:

1. Theme editor → Theme settings → Typography.
2. **Headings**: something serif and a little editorial — try **Fraunces**, **Forum**, or **Cormorant**.
3. **Body**: something clean — try **Assistant** (current default, already fits fine) or **Jost**.

Takes 30 seconds and you get a live preview before committing, which is safer than me guessing.

## Logo

Two SVGs are in `docs/brand/`:
- `bloom-home-logo.svg` — full wordmark + mark, for the header.
- `bloom-home-mark.svg` — icon only, square, for the favicon.

**To use them**: Theme editor → Theme settings → Logo → upload `bloom-home-logo.svg`. Same for Favicon → `bloom-home-mark.svg`. This has to be done through the theme editor UI (or the Admin API, if you'd rather I do it once the custom app token is set up) — a theme's `image_picker` settings can only point at files already uploaded to your store's asset library, not a path inside the theme's code files.

## Store name

The shop name shown in the header/browser tab comes from **Admin → Settings → General → Store details**, not from theme code. Rename it there to "Bloom Home" if you want it fully consistent.

## Banners & product photography

Covered separately in `docs/content-plan.md` — once you share the custom app token, I'll create the products/collections and pull in properly licensed stock photography (Unsplash, whose license permits commercial use with no attribution required) that fits the palette above.
