function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Compact handout actions for the module title row (right-aligned in flex parent).
 * @param {string} [moduleId] - Must match `handouts/pdf` filenames
 * @returns {string} HTML or empty string
 */
export function buildHandoutToolbarHtml(moduleId) {
  if (!moduleId || typeof moduleId !== 'string') return '';
  const id = moduleId.trim();
  if (!id) return '';

  const pdfPath = `handouts/pdf/${encodeURIComponent(id)}.pdf`;
  const pdfName = `Sales-Navigator-handout-${id}.pdf`;

  return `
        <div class="module-handout-toolbar pointer-events-auto flex flex-wrap items-center justify-end gap-2 gap-y-2 shrink-0 sm:pt-0.5" data-module-handout-toolbar>
          <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Handout</span>
          <a href="${pdfPath}" download="${escapeHtml(pdfName)}" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
            <i class="fa-solid fa-file-pdf text-red-500" aria-hidden="true"></i>
            Download PDF
          </a>
        </div>`;
}
