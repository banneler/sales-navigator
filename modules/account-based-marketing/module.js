import renderMarkdownModule from '../../js/components/markdown-module.js';

/**
 * Markdown module plus embedded Gantt (90-day C-level ABM sequence).
 */
export default function renderAccountBasedMarketing(
  container,
  markdownSource,
  moduleId,
) {
  renderMarkdownModule(container, markdownSource, moduleId);

  const section = document.createElement('section');
  section.className =
    'mt-8 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden';
  section.innerHTML = `
    <div class="px-5 py-3 border-b border-slate-100 bg-slate-50">
      <h2 class="text-lg font-bold text-slate-900">90-day sequence (Gantt)</h2>
      <p class="text-sm text-slate-600 mt-1">Scroll horizontally if needed. Same chart as the Constellation-CRM process doc—sales touches plus marketing air cover by month.</p>
    </div>
    <div class="overflow-x-auto bg-white">
      <iframe class="border-0 block" style="width:1150px;max-width:none;height:680px;" title="ABM campaign Gantt chart" loading="lazy"></iframe>
    </div>`;
  const iframe = section.querySelector('iframe');
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
  container.appendChild(section);
}
