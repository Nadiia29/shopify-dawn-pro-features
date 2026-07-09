# Performance Notes

Dawn already ships with strong performance defaults (deferred scripts, responsive `srcset`/`sizes`, `loading="lazy"` on below-the-fold images, per-section scoped CSS instead of one giant bundle). The goal here was to add features without regressing any of that. Concretely, this covers what changed and what was checked.

## Fixes made during this pass

- **Hoisted quick-view's CSS/JS out of the product-card loop.** They were originally emitted once per card (`quick-add.css`, `quick-view.css`, `quick-view.js`) — on a 24-product grid that's 24 duplicate `<link>`/`<script>` tags for the same URL. Moved to the section level (`main-collection-product-grid.liquid`, `featured-collection.liquid`), gated by the same `enable_quick_view` setting, matching the convention Dawn itself uses for `quick-add.css`/`quick-add.js`.
- **Gated `free-shipping-bar.css`** behind the `cart_free_shipping_bar` setting instead of loading it unconditionally on every page (the cart drawer renders on every page via the header).

## Conventions followed for every new file

- Every new `<script>` tag uses `defer`.
- Every new/edited `<img>` has explicit `width`/`height` (or is generated via `image_tag`, which sets them) to avoid layout shift, and `loading="lazy"` unless it's expected above the fold (e.g. the sticky add-to-cart thumbnail, which only ever appears after scroll, is lazy).
- New CSS/JS files are one-feature-per-file and loaded conditionally from the snippet/section that needs them — never from `theme.liquid` — so a store that doesn't use a given feature doesn't pay for it.
- The logo slider intentionally uses a CSS-only marquee instead of a JS slider component: no custom element, no observer, nothing to hydrate for a purely decorative, non-interactive strip.

## Left to the merchant/dev to measure

Actual Lighthouse/PageSpeed numbers depend on the live store's images, apps, and content — run Lighthouse against the dev store URL after adding real product images and content to get a meaningful before/after.
