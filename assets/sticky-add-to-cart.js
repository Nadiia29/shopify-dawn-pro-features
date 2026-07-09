class StickyAddToCart extends HTMLElement {
  connectedCallback() {
    const target = this.dataset.observe && document.getElementById(this.dataset.observe);
    if (!target) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        this.classList.toggle('sticky-add-to-cart--visible', scrolledPast);
      },
      { threshold: 0 }
    );
    this.observer.observe(target);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }
}

if (!customElements.get('sticky-add-to-cart')) {
  customElements.define('sticky-add-to-cart', StickyAddToCart);
}
