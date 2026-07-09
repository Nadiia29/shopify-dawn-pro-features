# Quick View Modal

## Problem

Dawn already has a "Quick add" feature, but it only opens a modal for products with **more than one variant** (so the customer has something to choose before adding to cart). A single-variant product gets no preview at all from the collection grid — the only way to see it is a full page navigation.

## Approach

Rather than building a parallel modal system, this reuses Dawn's own plumbing:

- `modal-dialog` / `modal-opener` (in `assets/global.js`) already provide focus-trap, ESC-to-close, backdrop-click-to-close, and move-to-`<body>`-on-connect. `QuickViewModal extends ModalDialog` and only overrides `show`/`hide`.
- The fetch-and-inject approach mirrors Dawn's own `QuickAddModal` (`assets/quick-add.js`): fetch the product page, pull out `<product-info>`, dedupe its ids against the ones already on the page, strip nested modals/pickup-availability, and inject it.
- The modal's CSS **reuses Dawn's `.quick-add-modal`/`.quick-add-modal__content`/`.quick-add-modal__toggle` classes** directly (same positioning, sizing, responsive breakpoints) instead of duplicating them. `quick-view.css` only adds the handful of rules Dawn scopes to the `quick-add-modal` tag name specifically, re-scoped to `quick-view-modal`.
- A new eye-icon trigger is added to **every** product card (not just multi-variant ones), gated by a per-section "Enable quick view" setting.

## Key files

- `snippets/card-product.liquid` (trigger + modal markup)
- `assets/quick-view.js`
- `assets/quick-view.css`
- `sections/main-collection-product-grid.liquid`, `sections/featured-collection.liquid` (setting + asset loading, hoisted to section level — see `docs/performance.md`)

## Setup

Theme editor → Collection list / Featured collection section → "Enable quick view".
