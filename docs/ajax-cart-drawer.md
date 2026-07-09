# AJAX Cart Drawer — Free Shipping Bar

## Problem

Dawn's cart drawer is already a solid AJAX implementation (Ajax Cart API, quantity stepper with volume pricing, live regions, empty state). What it doesn't have: any incentive to push customers toward a free-shipping threshold, which is one of the highest-leverage conversion levers on a cart drawer.

## Approach

A merchant-configurable progress bar rendered above the cart line items:

- Two new theme settings under **Theme settings → Cart**: a checkbox to enable it and a range for the free-shipping threshold (in the store's default currency).
- `snippets/free-shipping-bar.liquid` computes the remaining amount and progress percentage from `cart.total_price` and renders either "You're $X away from free shipping" or a success state.
- The snippet is rendered as the **first child inside `<cart-drawer-items>`**, not as a sibling. That placement matters: Dawn's `cart.js` refreshes the drawer two different ways depending on what changed —
  - adding an item replaces the whole `#CartDrawer` innerHTML (`CartDrawer.renderContents`)
  - changing a line's quantity replaces only `cart-drawer-items` and `.cart-drawer__footer` (`CartItems.onCartUpdate`)

  Placing the bar inside `<cart-drawer-items>` means it gets fresh data from the server in both cases, with no extra JS.

## Key files

- `snippets/free-shipping-bar.liquid`
- `assets/free-shipping-bar.css`
- `snippets/cart-drawer.liquid` (render call + conditional stylesheet)
- `config/settings_schema.json` (`cart_free_shipping_bar`, `cart_free_shipping_threshold`)

## Setup

Theme editor → Theme settings → Cart → turn on "Show free shipping progress bar" and set a threshold.
