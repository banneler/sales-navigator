/**
 * Shared renderer for training modules driven by content.json.
 * Each modules/<id>/module.js re-exports this default.
 */

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {HTMLElement} container
 * @param {object} content - Parsed content.json
 */
export default function renderStandardModule(container, content) {
  const sensitivity = content.sensitivity || 'public';
  const badge =
    sensitivity === 'internal'
      ? '<span class="inline-flex items-center rounded-full bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 border border-amber-200">Internal</span>'
      : '';

  const sections = (content.sections || [])
    .map((sec) => {
      const resources = (sec.resources || [])
        .map(
          (r) => `
        <li class="text-sm text-slate-700 flex gap-2">
          <i class="fa-solid fa-file-lines text-orange-500 mt-0.5 flex-shrink-0"></i>
          <span><span class="font-semibold">${escapeHtml(r.label)}</span>${r.path ? ` — <code class="text-xs bg-slate-100 px-1 rounded">${escapeHtml(r.path)}</code>` : ''}${r.url ? ` — <a href="${escapeHtml(r.url)}" class="text-orange-600 hover:underline" target="_blank" rel="noopener">link</a>` : ''}</span>
        </li>`
        )
        .join('');
      return `
      <section class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 mb-3">${escapeHtml(sec.heading || 'Section')}</h3>
        <div class="prose prose-slate max-w-none text-slate-700 whitespace-pre-wrap">${escapeHtml(sec.body || '')}</div>
        ${resources ? `<ul class="mt-4 space-y-2 list-none pl-0 border-t border-slate-100 pt-4">${resources}</ul>` : ''}
      </section>`;
    })
    .join('');

  /* -------------------------------------------------------------------------- */
  /* Guidde walkthrough panel — OFF. Set SHOW_GUIDDE = true to show again.       */
  /* Each content.json may still list media.guidde { notes, embedUrl } unchanged.*/
  /* -------------------------------------------------------------------------- */
  const SHOW_GUIDDE = false;
  let guiddeBlock = '';
  if (SHOW_GUIDDE) {
    const guidde = content.media?.guidde;
    guiddeBlock = `
    <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm border-l-4 border-l-orange-500">
      <h3 class="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-circle-play text-orange-500"></i> Guidde walkthrough
      </h3>
      <p class="text-sm text-slate-600 mb-3">${escapeHtml(guidde?.notes || 'Reserve for Guidde AI walkthrough embed.')}</p>
      ${
        guidde?.embedUrl
          ? `<div class="aspect-video bg-slate-100 rounded-lg overflow-hidden"><iframe src="${escapeHtml(guidde.embedUrl)}" class="w-full h-full border-0" title="Guidde"></iframe></div>`
          : '<div class="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-500 text-sm">Embed URL not set — add <code class="bg-slate-200 px-1 rounded">media.guidde.embedUrl</code> in content.json</div>'
      }
    </div>`;
  }

  const videos = (content.media?.videos || [])
    .map(
      (v) => `
    <div class="flex gap-3 items-start border border-slate-100 rounded-lg p-3 bg-slate-50">
      <i class="fa-solid fa-video text-slate-500 mt-1"></i>
      <div>
        <div class="font-semibold text-slate-800">${escapeHtml(v.title || 'Video')}</div>
        ${v.url ? `<a href="${escapeHtml(v.url)}" class="text-sm text-orange-600 hover:underline break-all" target="_blank" rel="noopener">${escapeHtml(v.url)}</a>` : '<span class="text-sm text-slate-500">URL TBD</span>'}
      </div>
    </div>`
    )
    .join('');

  const worksheets = (content.media?.worksheets || [])
    .map(
      (w) => `
    <div class="flex gap-3 items-start border border-slate-100 rounded-lg p-3 bg-slate-50">
      <i class="fa-solid fa-file-arrow-down text-slate-500 mt-1"></i>
      <div>
        <div class="font-semibold text-slate-800">${escapeHtml(w.title || 'Worksheet')}</div>
        ${w.url ? `<a href="${escapeHtml(w.url)}" class="text-sm text-orange-600 hover:underline break-all" target="_blank" rel="noopener">${escapeHtml(w.url)}</a>` : '<span class="text-sm text-slate-500">Placeholder for AI-generated or hosted worksheet</span>'}
      </div>
    </div>`
    )
    .join('');

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${escapeHtml(content.title || 'Module')}</h2>
          <p class="text-slate-600 mt-2 max-w-3xl">${escapeHtml(content.summary || '')}</p>
        </div>
        <div class="flex-shrink-0">${badge}</div>
      </div>
      <div class="space-y-6">${sections}</div>
      <div class="grid gap-6 lg:grid-cols-1">
        ${guiddeBlock}
        <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Videos &amp; resources</h3>
          <div class="space-y-3">${videos || '<p class="text-sm text-slate-500">No video slots yet — use <code class="bg-slate-100 px-1 rounded text-xs">media.videos</code> in content.json.</p>'}</div>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Worksheets &amp; downloads</h3>
          <div class="space-y-3">${worksheets || '<p class="text-sm text-slate-500">No worksheets yet — use <code class="bg-slate-100 px-1 rounded text-xs">media.worksheets</code>.</p>'}</div>
        </div>
      </div>
    </div>
  `;
}
