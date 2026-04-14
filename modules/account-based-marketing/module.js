import renderMarkdownModule from '../../js/components/markdown-module.js';
import { mountGanttAfterRender } from '../../js/lib/gantt-embed.js';

/**
 * Markdown module; Gantt mounts at `<div data-sn-gantt></div>` in content.md (scaled).
 */
export default function renderAccountBasedMarketing(
  container,
  markdownSource,
  moduleId,
) {
  renderMarkdownModule(container, markdownSource, moduleId);
  mountGanttAfterRender(container, moduleId, {
    title: '90-day sequence',
    blurb:
      'Scaled chart—use horizontal scroll if needed. Same asset as your Constellation-CRM process doc.',
    iframeHeight: 660,
    scale: 0.62,
  });
}
