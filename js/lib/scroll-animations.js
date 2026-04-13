/**
 * Adds one-time reveal animations to headings and images.
 * @param {HTMLElement} containerElement
 */
export function initScrollAnimations(containerElement) {
  if (!(containerElement instanceof HTMLElement)) return;

  if (containerElement.dataset.scrollAnimationsInit === '1') return;
  containerElement.dataset.scrollAnimationsInit = '1';

  const targets = Array.from(
    containerElement.querySelectorAll(
      '.module-markdown-body h2, .module-markdown-body h3, .module-markdown-body img, .module-doc > .module-layout-row .module-layout-main section > h3'
    )
  );
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const isImage = el.tagName.toLowerCase() === 'img';
        el.classList.remove('opacity-0');
        el.classList.add(isImage ? 'animate-scale-in' : 'animate-fade-in-up');
        observer.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => {
    el.classList.remove('animate-fade-in-up', 'animate-scale-in');
    el.classList.add('opacity-0');
    observer.observe(el);
  });
}
