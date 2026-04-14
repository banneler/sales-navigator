import renderMarkdownModule from '../../js/components/markdown-module.js';

/**
 * Markdown module; cycle chart is a static PNG (`assets/gantt/obr-21-day-cycle.png`) in content.md.
 */
export default function renderOperationalBusinessReviews(
  container,
  markdownSource,
  moduleId,
) {
  renderMarkdownModule(container, markdownSource, moduleId);
}
