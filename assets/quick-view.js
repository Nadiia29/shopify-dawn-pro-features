if (!customElements.get('quick-view-modal')) {
  customElements.define(
    'quick-view-modal',
    class QuickViewModal extends ModalDialog {
      constructor() {
        super();
        this.modalContent = this.querySelector('[id^="QuickViewInfo-"]');
      }

      hide() {
        this.modalContent.innerHTML = '';
        super.hide();
      }

      show(opener) {
        opener.setAttribute('aria-disabled', true);
        opener.classList.add('loading');
        opener.querySelector('.loading__spinner')?.classList.remove('hidden');

        fetch(opener.getAttribute('data-product-url'))
          .then((response) => response.text())
          .then((responseText) => {
            const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
            const productElement = responseHTML.querySelector('product-info');
            if (!productElement) return;

            this.preprocessHTML(productElement);
            HTMLUpdateUtility.setInnerHTML(this.modalContent, productElement.outerHTML);

            super.show(opener);
          })
          .finally(() => {
            opener.removeAttribute('aria-disabled');
            opener.classList.remove('loading');
            opener.querySelector('.loading__spinner')?.classList.add('hidden');
          });
      }

      // Reuses the same cleanup approach as Dawn's quick-add-modal (quick-add.js):
      // carry over color/gradient classes, dedupe ids against the ones already on
      // the page, and strip nested modals that don't make sense inside this one.
      preprocessHTML(productElement) {
        productElement.classList.forEach((appliedClass) => {
          if (appliedClass.startsWith('color-') || appliedClass === 'gradient') {
            this.modalContent.classList.add(appliedClass);
          }
        });

        const sectionId = productElement.dataset.section;
        const uniqueSuffix = `quickview-${sectionId}`;
        productElement.innerHTML = productElement.innerHTML.replaceAll(sectionId, uniqueSuffix);
        Array.from(productElement.attributes).forEach((attribute) => {
          if (attribute.value.includes(sectionId)) {
            productElement.setAttribute(attribute.name, attribute.value.replace(sectionId, uniqueSuffix));
          }
        });
        productElement.setAttribute('data-update-url', 'false');

        productElement.querySelector('pickup-availability')?.remove();
        productElement.querySelector('product-modal')?.remove();
        productElement.querySelectorAll('modal-dialog, quick-view-modal').forEach((modal) => modal.remove());
        productElement.querySelectorAll('sticky-add-to-cart').forEach((bar) => bar.remove());
      }
    }
  );
}
