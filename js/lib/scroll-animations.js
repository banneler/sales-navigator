/**
 * One-time reveal animations for headings, images, and accordion blocks.
 *
 * - Headings / section titles: fade-in-up on scroll.
 * - Images (outside accordions): scale-in on scroll.
 * - Accordion `<details>`: fade-in-up on scroll; images inside reveal
 *   with scale-in only when the accordion opens for the first time.
 *
 * @param {HTMLElement} containerElement
 */
export function initScrollAnimations(containerElement) {
  if (!(containerElement instanceof HTMLElement)) return;

  if (containerElement.dataset.scrollAnimationsInit === '1') return;
  containerElement.dataset.scrollAnimationsInit = '1';

  const HEADING_SELECTOR = [
    '.module-markdown-body h2',
    '.module-markdown-body h3',
    '.module-doc > .module-layout-row .module-layout-main section > h3',
  ].join(', ');

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.remove('opacity-0');
        el.classList.add(
          el.tagName.toLowerCase() === 'img'
            ? 'animate-scale-in'
            : 'animate-fade-in-up'
        );
        scrollObserver.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );

  function prepAndObserve(el) {
    el.classList.remove('animate-fade-in-up', 'animate-scale-in');
    el.classList.add('opacity-0');
    scrollObserver.observe(el);
  }

  // --- Headings ---
  containerElement
    .querySelectorAll(HEADING_SELECTOR)
    .forEach((el) => {
      if (el.closest('details')) return;
      prepAndObserve(el);
    });

  // --- Images outside accordions ---
  containerElement
    .querySelectorAll('.module-markdown-body img')
    .forEach((img) => {
      if (img.closest('details')) return;
      prepAndObserve(img);
    });

  // --- Accordion <details> blocks ---
  containerElement
    .querySelectorAll('.module-markdown-body details')
    .forEach((details) => {
      prepAndObserve(details);

      let opened = false;
      details.addEventListener('toggle', () => {
        if (opened || !details.open) return;
        opened = true;
        details.querySelectorAll('img').forEach((img) => {
          img.classList.remove('animate-scale-in');
          img.classList.add('opacity-0');
          requestAnimationFrame(() => {
            img.classList.remove('opacity-0');
            img.classList.add('animate-scale-in');
          });
        });
      });
    });
}
