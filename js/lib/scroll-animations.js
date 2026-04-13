/**
 * Adds one-time reveal animations to headings and images.
 * @param {HTMLElement} containerElement
 */
export function initScrollAnimations(containerElement) {
  if (!(containerElement instanceof HTMLElement)) return;

  const targets = Array.from(
    containerElement.querySelectorAll(
      '.module-markdown-body h2, .module-markdown-body h3, .module-markdown-body img'
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
    el.classList.add('opacity-0');
    observer.observe(el);
  });
}
