import renderMarkdownModule from '../../js/components/markdown-module.js';
import { mountGanttAfterRender } from '../../js/lib/gantt-embed.js';

/**
 * Markdown module; Gantt mounts at `<div data-sn-gantt></div>` in content.md (scaled).
 */
export default function renderOperationalBusinessReviews(
  container,
  markdownSource,
  moduleId,
) {
  renderMarkdownModule(container, markdownSource, moduleId);
  mountGanttAfterRender(container, moduleId, {
    title: '21-day OBR cycle',
    blurb:
      'Scaled chart—handoff at day 14; OBR meeting at end of cycle. Scroll horizontally on small screens.',
    iframeHeight: 580,
    scale: 0.68,
  });
}
