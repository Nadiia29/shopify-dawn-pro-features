# Sticky Add to Cart

## Problem

On long product pages (big description, several metafield tabs, a big gallery) the Add to Cart button scrolls out of view quickly. Dawn has "sticky content" for the whole info column on desktop, but nothing that keeps the buy action reachable on mobile once the customer has scrolled past it.

## Approach

- `snippets/sticky-add-to-cart.liquid` renders a condensed bar (thumbnail, title, price, Add to cart button) fixed to the bottom of the viewport.
- The button doesn't run its own add-to-cart logic. It's a plain `<button form="{product_form_id}">`, so clicking it **submits the exact same `<form>`** the main buy buttons use — one code path for the actual cart mutation, no duplicated fetch/error-handling logic.
- Visibility is driven by a small custom element (`assets/sticky-add-to-cart.js`) using an `IntersectionObserver` on the main submit button (`#ProductSubmitButton-{section.id}`): visible once that button is scrolled above the viewport, hidden otherwise.
- The bar lives inside `<product-info>`, so when the customer changes variants, Dawn's own swap mechanism (`HTMLUpdateUtility.viewTransition`, see `assets/product-info.js`) re-renders it with the correct price/availability automatically — no extra event wiring needed.

## Key files

- `snippets/sticky-add-to-cart.liquid`
- `assets/sticky-add-to-cart.css`
- `assets/sticky-add-to-cart.js`
- `sections/main-product.liquid` (render call + `enable_sticky_add_to_cart` setting)

## Setup

On, by default. Toggle per product-page section from the theme editor ("Sticky add to cart bar").
