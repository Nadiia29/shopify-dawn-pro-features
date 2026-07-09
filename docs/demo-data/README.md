# Demo data — import instructions

We tried automating this via the Admin API (custom app + `shopify app execute`), but Shopify's current Dev Dashboard has no way to link an already-existing dev store to the Partner org that owns the app — the CLI errors with "Could not find store for domain ... in organization ...", and the Dev Dashboard's "Stores" page only offers "Create new store", not "Connect existing store". So this is a manual CSV import instead. Still fast — about 15-20 minutes total.

## 1. Import products (5 min)

Admin → **Products** → **Import** → upload `bloom-home-products.csv` → Import. This creates all 10 products with their variants, prices, inventory levels, and one photo each (fetched live from Unsplash by Shopify during import — give it a minute).

One variant is intentionally set to 0 inventory (Terracotta Ribbed Vase / Large, Woven Cotton Pillow Cover / 20x20 Terracotta, Soy Candle Amber & Sandalwood / 12oz) to demo the sold-out / notify-me UI.

## 2. Create the 4 collections (5 min)

Admin → **Products → Collections → Create collection**, four times, each as an **Automated** collection with condition **Product tag is equal to**:

| Collection title | Tag condition |
|---|---|
| Vases & Vessels | `vases-vessels` |
| Textiles | `textiles` |
| Candles | `candles` |
| New Arrivals | `new-arrivals` |

The CSV already tagged every product correctly, so each collection populates itself immediately.

## 3. Metafield values (5-10 min)

First create the metafield definitions if you haven't yet (see the main [README.md](../../README.md#metafield-setup-for-product-tabs) — `custom.care_instructions`, `custom.materials`, `custom.shipping_returns`, all Rich text).

Then Admin → **Products** → select all 10 → **Bulk edit** → add those 3 metafield columns → paste values. Suggested copy, reusable across most products:

- **custom.materials**: varies per product — e.g. "Stoneware ceramic", "100% French linen", "Soy wax, cotton wick", "Hand-woven seagrass", "Acacia wood"
- **custom.care_instructions**: "Wipe clean with a soft, dry cloth. Avoid harsh chemicals." (ceramics/wood) or "Machine wash cold, tumble dry low." (textiles)
- **custom.shipping_returns**: same for all — "Ships within 1-2 business days. Free returns within 30 days."

## 4. Homepage banner

The hero photo suggestion (warm, neutral living room) is `https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=1600&q=80&fit=crop&auto=format` — download it and upload through the theme editor's Image Banner section (can't be set from code, same reasoning as the logo in `docs/branding.md`).

## Licensing note

All photos are from Unsplash, whose license permits commercial use with no attribution required. URLs point directly at Unsplash's CDN with resize params (`?w=1200&q=80&fit=crop&auto=format`) so Shopify pulls a reasonably sized file instead of the full original.
