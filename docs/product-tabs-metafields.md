# Product Tabs on Metafields

## Problem

Dawn's built-in "Collapsible row" block is manual: content is typed directly into each block, per product, in the theme editor. Fine for one-off content, painful for anything a merchant wants to keep consistent across a whole catalog (care instructions, materials, shipping policy) — that means re-typing (or copy-pasting) into a block on every single product.

## Approach

A new block type, `metafield_tab`, added to `main-product`'s block list, styled identically to Dawn's `collapsible_tab` (same `.accordion`/`<details>` markup, same icon picker) but sourcing its content from a **product metafield** instead of a per-block text field:

- Merchant adds the block once, points it at a metafield (`namespace.key`, e.g. `custom.care_instructions`), picks a heading and icon.
- The block reads `product.metafields[namespace][key]` and renders it through the `metafield_tag` filter (handles rich text, plain text, etc. correctly without manual type-checking).
- If that product has no value for the metafield, the tab **doesn't render at all** — no empty accordion rows.

Because it's a metafield, the merchant fills it in once per product (or bulk-edits many products at once from Admin → Products → bulk editor), and every product using that template automatically gets the right tab content.

## Key files

- `sections/main-product.liquid` (`metafield_tab` block schema + case branch)
- `templates/product.json` (three example tabs pre-wired: care instructions, materials, shipping & returns)

## Setup

1. Admin → Settings → Custom data → Products → Add definition. Create definitions matching whatever metafields you want to expose (e.g. `custom.care_instructions`, type Rich text).
2. Fill in values per product (or bulk-edit).
3. In the theme editor, on a product page, add a "Tab (from metafield)" block under the product info, set its heading/metafield/icon.

The three tabs pre-configured in `templates/product.json` (`custom.care_instructions`, `custom.materials`, `custom.shipping_returns`) will start showing content as soon as those metafield definitions exist and have values — no further block setup needed for those three.
