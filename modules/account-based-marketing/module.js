import renderMarkdownModule from '../../js/components/markdown-module.js';

/**
 * Markdown module; sequence chart is a static PNG (`assets/gantt/abm-90-day-sequence.png`) in content.md.
 */
export default function renderAccountBasedMarketing(
  container,
  markdownSource,
  moduleId,
) {
  renderMarkdownModule(container, markdownSource, moduleId);
}
