# Recording script — video & screenshots

Do this after the demo content (`docs/demo-data/`) is imported and the theme is published/previewed with real products. No voiceover needed — smooth, deliberate mouse movement, pause ~1s after each action so it doesn't feel rushed.

## Video (1-2 minutes, screen recording e.g. Windows Snipping Tool / OBS / Loom)

Record at 1920x1080 if possible, one continuous take is fine (or a few clips stitched — doesn't need to be perfect).

1. **Homepage** (5s) — load the homepage, slow scroll down through Hero → Logo Slider → Testimonials → FAQ.
2. **Collection page** (10s) — open "Vases & Vessels" (or any collection with 3+ products). Hover a product card to show the **Quick View eye icon** appearing.
3. **Quick View** (10s) — click the eye icon, show the modal opening with product image/price/variant picker, pick a variant, close it (X or click outside).
4. **Product page** (20s):
   - Land on a product with multiple variants (e.g. Terracotta Ribbed Vase).
   - Click through Size options, show price/availability updating.
   - Scroll down to the **metafield tabs** (Care instructions / Materials / Shipping), click one open.
   - Keep scrolling until the **sticky add-to-cart bar** slides in from the bottom.
   - Click "Add to cart" from the sticky bar.
5. **Cart Drawer** (10s) — drawer opens automatically after add-to-cart, show the **free shipping progress bar**, adjust quantity with the stepper.
6. **Predictive Search** (10s) — open search, click into the empty input to show **"Popular searches"** suggestions, then type 2-3 letters of a real product name and show live results with price.
7. **Sold-out variant** (10s) — go to a product with a 0-stock variant (Terracotta Ribbed Vase / Large), select it, show the **"Notify me"** form appearing instead of Add to cart.
8. **Mobile view** (15s) — resize browser to ~390px wide (or use device toolbar in DevTools), repeat a quick pass: homepage → collection → cart drawer, to show responsiveness.

## Screenshots for README (PNG, browser at ~1440px wide unless noted)

Save into `docs/screenshots/` with these exact names so they drop straight into the README placeholders:

| Filename | What to capture |
|---|---|
| `hero-banner.png` | Homepage hero section, full width |
| `product-page.png` | Full product page — media, price, variant picker, tabs, all visible |
| `cart-drawer.png` | Open cart drawer with 2+ items and the free-shipping bar visible |
| `predictive-search.png` | Search dropdown open, mid-query, showing product results with price |
| `quick-view-modal.png` | Quick View modal open on top of a collection page |
| `sticky-add-to-cart.png` | Product page scrolled down, sticky bar visible at the bottom |
| `mobile-view.png` | Any page (ideally homepage or product) at ~390px width |

## After recording

1. Drop screenshots into `docs/screenshots/` with the exact filenames above.
2. Tell me and I'll wire the README's image placeholders to point at them (or do it yourself — it's just `![...](docs/screenshots/filename.png)` markdown).
3. For the video: upload wherever's easiest (YouTube unlisted, Loom, or a GitHub-hosted `.gif`/`.mp4` if it's under GitHub's file size limit) and drop the link in the README's "Video Demo" section.
