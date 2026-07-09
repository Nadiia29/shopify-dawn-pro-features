document.querySelectorAll('predictive-search').forEach((instance) => {
  const popular = instance.querySelector('[data-predictive-search-popular]');
  const input = instance.querySelector('input[type="search"]');
  if (!popular || !input) return;

  const showPopular = () => instance.setAttribute('data-popular-open', 'true');
  const hidePopular = () => instance.removeAttribute('data-popular-open');

  input.addEventListener('focus', () => {
    if (!input.value.trim().length) showPopular();
  });

  input.addEventListener('input', hidePopular);

  instance.addEventListener('focusout', () => {
    setTimeout(() => {
      if (!instance.contains(document.activeElement)) hidePopular();
    });
  });

  popular.addEventListener('click', (event) => {
    const button = event.target.closest('[data-popular-search-term]');
    if (!button) return;

    hidePopular();
    input.value = button.dataset.popularSearchTerm;
    input.focus();
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
});
