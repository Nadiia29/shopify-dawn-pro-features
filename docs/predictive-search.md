# Predictive Search — Popular Searches

## Problem

Dawn's predictive search only ever fires a request once the customer has typed something (`onFocus`/`onChange` both bail out on an empty query). That means the very first thing a customer sees when they open search is... nothing. No suggestions, no starting point.

## Approach

A merchant-configurable list of "popular searches" shown the moment the search input is focused while empty, without touching Dawn's own `predictive-search.js`:

- New setting **Theme settings → Search → Popular searches** (comma-separated list).
- The list renders as pill buttons inside a small panel that's a **sibling** of Dawn's AJAX results container (`[data-predictive-search]`), not inside it — so it survives being wiped out whenever a real search response comes in.
- `assets/predictive-search-popular.js` is a small, self-contained script (no edits to the vendor file) that toggles a `data-popular-open` attribute on the `<predictive-search>` element on focus/blur/input, and on click fills the input and dispatches a real `input` event — which Dawn's existing debounced `SearchForm.onChange` picks up and runs through the normal predictive-search flow.

## Key files

- `snippets/header-search.liquid` (markup + conditional asset loading)
- `assets/predictive-search-popular.css`
- `assets/predictive-search-popular.js`

## Setup

Theme editor → Theme settings → Search input → "Popular searches" → e.g. `Summer dresses, New arrivals, Best sellers`.
