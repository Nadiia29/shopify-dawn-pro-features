# Homepage Sections — FAQ, Testimonials, Logo Slider

Three new sections for the homepage (or any page — all three are standard sections, not template-locked), each deliberately built by reusing an existing Dawn pattern rather than inventing new mechanics:

## FAQ (`sections/faq.liquid`)

Block-based list of questions, rendered with the exact same `.accordion` / `<details>`+`<summary>` markup used elsewhere in Dawn (product accordions, disclosures) — same CSS file (`component-accordion.css`), same accessibility behavior (native disclosure widget, no JS needed), same caret icon. The only new code is the block schema and the thin wrapper markup.

## Testimonials (`sections/testimonials.liquid`)

A 3-up peek slider on desktop / swipeable single column on mobile, built on Dawn's generic `slider-component` custom element and `.slider`/`.slider__slide`/`.slider-buttons`/`.slider-counter` classes — the same pattern `multicolumn.liquid`, `featured-collection.liquid`, and `collection-list.liquid` all use. Star ratings reuse `component-rating.css` and the same `--rating`/`--rating-max` CSS custom-property trick as the product card rating stars.

## Logo Slider (`sections/logo-slider.liquid`)

The one genuinely new technique in this set: a pure-CSS marquee (duplicate the logo list once, animate `translateX(-50%)` on an infinite loop) instead of a JS-driven slider. No custom element, no IntersectionObserver, nothing to hydrate — just a `<div>` and a `@keyframes` rule, with `prefers-reduced-motion` respected and a static wrapping-row fallback when animation is turned off. Chosen deliberately over reusing `slider-component` here: a passive logo strip doesn't need prev/next buttons or a slide counter, so the simpler, JS-free approach is both less code and better for performance.

## Setup

All three ship pre-populated with placeholder content on the default homepage template (`templates/index.json`). Replace via the theme editor: Home page → Logo slider / Testimonials / FAQ sections → edit blocks.
