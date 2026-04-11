function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Download strip for module handouts (PDF generated from `handouts/source/<id>.md`).
 * @param {string} [moduleId] - Must match `handouts/source` and `handouts/pdf` filenames
 * @returns {string} HTML or empty string
 */
export function buildHandoutToolbarHtml(moduleId) {
  if (!moduleId || typeof moduleId !== 'string') return '';
  const id = moduleId.trim();
  if (!id) return '';

  const pdfPath = `handouts/pdf/${encodeURIComponent(id)}.pdf`;
  const mdPath = `handouts/source/${encodeURIComponent(id)}.md`;
  const pdfName = `Sales-Navigator-handout-${id}.pdf`;
  const mdName = `Sales-Navigator-handout-${id}.md`;

  return `
      <div class="module-handout-toolbar flex flex-wrap items-center gap-2 gap-y-2 mb-5 pb-4 border-b border-slate-200/90" data-module-handout-toolbar>
        <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide w-full sm:w-auto">Handout</span>
        <a href="${pdfPath}" download="${escapeHtml(pdfName)}" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
          <i class="fa-solid fa-file-pdf text-red-500" aria-hidden="true"></i>
          Download PDF
        </a>
        <a href="${mdPath}" download="${escapeHtml(mdName)}" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
          <i class="fa-solid fa-file-lines text-slate-500" aria-hidden="true"></i>
          Download Markdown
        </a>
      </div>`;
}
