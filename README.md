# Shopify Dawn — Pro Features

A Shopify theme built on top of [Dawn](https://github.com/Shopify/dawn) (v15.5.0, Online Store 2.0) with a set of custom, production-style features layered on top — built as a portfolio piece to demonstrate real Shopify theme-development skills: Liquid, the Ajax Cart/Section-Rendering APIs, metafields, theme editor schema, and performance-conscious front-end JS.

Live dev store preview: ask for a link. Repo: `Nadiia29/shopify-dawn-pro-features`.

## Why build on Dawn instead of from scratch

Nearly every modern Shopify store is a Dawn-based child theme. Building on Dawn — reusing its existing components, JS custom elements, and CSS conventions instead of reinventing them — is the realistic day-to-day work of a Shopify theme developer, and it's what this repo is meant to demonstrate. Every feature below either extends something Dawn already ships, or fills a gap that's genuinely missing, documented in each linked write-up.

## Features

| Feature | What it does | Docs |
|---|---|---|
| AJAX Cart Drawer | Free-shipping progress bar in the cart drawer, merchant-configurable threshold | [docs/ajax-cart-drawer.md](docs/ajax-cart-drawer.md) |
| Predictive Search | "Popular searches" suggestions shown before the customer types anything | [docs/predictive-search.md](docs/predictive-search.md) |
| Product Tabs on Metafields | Accordion tabs driven by product metafields instead of manually-typed content per product | [docs/product-tabs-metafields.md](docs/product-tabs-metafields.md) |
| Sticky Add to Cart | Condensed buy bar fixed to the bottom of the screen once the main CTA scrolls out of view | [docs/sticky-add-to-cart.md](docs/sticky-add-to-cart.md) |
| Quick View Modal | Eye-icon preview modal on every product card, not just multi-variant ones | [docs/quick-view-modal.md](docs/quick-view-modal.md) |
| Variant Picker | "Notify me" email capture when the selected variant is sold out | [docs/variant-picker.md](docs/variant-picker.md) |
| Homepage sections | New FAQ, Testimonials, and Logo Slider sections | [docs/homepage-sections.md](docs/homepage-sections.md) |
| Speed optimization | Audit + fixes for duplicate assets, lazy loading, deferred scripts | [docs/performance.md](docs/performance.md) |

Each doc explains the problem, the approach, the key files touched, and — importantly — calls out where Dawn *already* solved part of the problem, so the write-up is honest about what's actually new versus what's reused.

## Tech stack

- Shopify Liquid, Online Store 2.0 (JSON templates, sections, blocks)
- Ajax Cart API + Section Rendering API (no full-page reloads for cart/quick-view/variant changes)
- Vanilla JS (custom elements, `IntersectionObserver`, no framework/build step — same as Dawn itself)
- CSS custom properties, no preprocessor — same convention as Dawn

## Local development

Requires the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) and a development store.

```bash
shopify theme dev --store=your-store.myshopify.com
```

Runs a local server with live reload against your dev store's data.

```bash
shopify theme check
```

Lints the theme (also runs in CI on every push/PR — see `.github/workflows/theme-check.yml`).

## Metafield setup (for Product Tabs)

The metafield-driven tabs need metafield definitions to exist before they show anything:

1. Admin → Settings → Custom data → Products → Add definition.
2. Create `custom.care_instructions`, `custom.materials`, `custom.shipping_returns` (or whatever keys you point the blocks at) as Rich text fields.
3. Fill in values per product, or bulk-edit from the product list.

Details in [docs/product-tabs-metafields.md](docs/product-tabs-metafields.md).

## Project structure

Standard Dawn OS 2.0 layout:

```
assets/       # CSS/JS, one file per component/feature
config/       # settings_schema.json, settings_data.json
layout/       # theme.liquid
locales/      # translations
sections/     # page sections (schema + Liquid)
snippets/     # reusable Liquid partials
templates/    # JSON templates
docs/         # write-up per custom feature (this repo's own documentation)
```

## License

Built on Shopify's [Dawn](https://github.com/Shopify/dawn) theme — see [LICENSE.md](LICENSE.md) for Dawn's original license terms. This repository is a portfolio/demo project, not intended for Theme Store distribution.
