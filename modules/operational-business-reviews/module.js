import renderMarkdownModule from '../../js/components/markdown-module.js';

/**
 * Markdown module plus embedded Gantt (21-day OBR cycle).
 */
export default function renderOperationalBusinessReviews(
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
      <h2 class="text-lg font-bold text-slate-900">21-day OBR cycle (Gantt)</h2>
      <p class="text-sm text-slate-600 mt-1">Scroll horizontally on smaller viewports. Critical handoff at day 14; OBR meeting completes the cycle.</p>
    </div>
    <div class="overflow-x-auto bg-white">
      <iframe class="border-0 block" style="width:1150px;max-width:none;height:640px;" title="OBR process Gantt chart" loading="lazy"></iframe>
    </div>`;
  const iframe = section.querySelector('iframe');
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
  container.appendChild(section);
}
