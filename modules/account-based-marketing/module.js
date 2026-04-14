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
    iframeHeight: 680,
    fitContentHeight: true,
    minIframeHeight: 560,
    maxIframeHeight: 820,
    heightSlop: 36,
  });
}
