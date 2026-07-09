# Bloom Home — Demo Content Plan

Ready to execute via the Admin API as soon as the custom app token is available (see `docs/custom-app-setup.md`). Listed here so the plan is reviewable before anything gets created.

## Collections (4)

1. **Vases & Vessels**
2. **Candles**
3. **Textiles**
4. **New Arrivals** (smart/automated collection — most recently created)

## Products (10)

| # | Title | Collection | Variants | Price |
|---|---|---|---|---|
| 1 | Terracotta Ribbed Vase | Vases & Vessels | Size: Small / Medium / Large | $38–$68 |
| 2 | Sage Ceramic Vase | Vases & Vessels | Color: Sage / Ivory / Terracotta | $42 |
| 3 | Linen Throw Blanket | Textiles | Color: Oat / Sage / Charcoal | $89 |
| 4 | Woven Cotton Pillow Cover | Textiles | Size: 18"x18" / 20"x20" · Color: Natural / Terracotta | $34–$39 |
| 5 | Soy Candle — Fig & Cedar | Candles | Size: 8oz / 12oz | $24–$32 |
| 6 | Soy Candle — Amber & Sandalwood | Candles | Size: 8oz / 12oz | $24–$32 |
| 7 | Handwoven Storage Basket | Vases & Vessels | Size: Small / Medium / Large | $46–$78 |
| 8 | Ceramic Table Lamp | New Arrivals | Color: Ivory / Terracotta | $96 |
| 9 | Wooden Serving Board | New Arrivals | (single variant) | $52 |
| 10 | Linen Napkin Set (4-pack) | Textiles | Color: Oat / Sage | $36 |

Each variant gets sold-out on at least one option value across the catalog (to demo the notify-me form) and at least 3 products get an inventory quantity low enough to trigger Dawn's low-stock messaging.

## Metafields (namespace `custom`, per product)

These map directly to the three tabs already pre-wired in `templates/product.json`:

- `custom.materials` (single line text) — e.g. "Stoneware ceramic", "100% French linen", "Soy wax, cotton wick"
- `custom.care_instructions` (rich text) — short care/cleaning blurb
- `custom.shipping_returns` (rich text) — shared boilerplate: ships in 1-2 days, 30-day returns

## Product photography

Sourced from Unsplash (license permits commercial use, no attribution required) — neutral, warm-toned home/ceramics/textile photography that fits the palette in `docs/branding.md`. 2-3 images per product (main + detail/lifestyle shot).

## Homepage banner

Hero banner image: a warm, styled home-interior shot (Unsplash), swapped in for the current `image_banner` section on `templates/index.json`, headline copy updated to match Bloom Home's tone.
