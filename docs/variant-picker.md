# Variant Picker — Notify Me When Available

## Why this and not swatch/sold-out styling

The original plan here was sold-out swatches (crossed out, disabled) and image-based swatches. Turned out Dawn's variant picker already does both natively: `swatch-input.liquid` already renders a diagonal crossed-out line over unavailable swatches (`component-swatch-input.css`), button/dropdown pickers already show a "sold out/unavailable" label, and Shopify's native product option swatches already support images, not just colors. Rebuilding any of that would just be duplicate code with no real improvement — so this got redirected to an actual gap instead.

## Problem

When every variant matching a customer's selection is sold out, Dawn shows "Sold out" / "Unavailable" and... that's it. No way to capture that interest for a restock.

## Approach

- `snippets/notify-me-form.liquid` renders an email field + submit button, but only when `product.selected_or_first_available_variant` is unavailable (or `null`, i.e. no combination exists for the current selection).
- It uses Shopify's **built-in contact form** (`{% form 'contact' %}`) rather than a third-party app or custom backend — the merchant gets a normal contact notification email with the product, variant, and URL baked into the message body. No app install required for this to work end to end.
- Same as the sticky add-to-cart bar, this lives inside `<product-info>`, so switching variants automatically shows/hides it through Dawn's existing swap-on-variant-change mechanism.

## Key files

- `snippets/notify-me-form.liquid`
- `assets/notify-me-form.css`
- `sections/main-product.liquid` (render call, right after the variant picker block)

## Limitation

This captures leads via a generic contact-form email — it does not automate the actual "email me when restocked" send. Wiring that up would need either a Shopify app (Klaviyo, Back in Stock, etc.) or a backend of your own; that's out of scope for a theme-only build.
