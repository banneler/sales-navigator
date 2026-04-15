function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Compact handout + optional AI roleplay controls for the module title row (right-aligned).
 * @param {string} [moduleId] - Must match `handouts/pdf` filenames
 * @param {{ hasRoleplay?: boolean }} [options]
 * @returns {string} HTML or empty string
 */
export function buildHandoutToolbarHtml(moduleId, options = {}) {
  if (!moduleId || typeof moduleId !== 'string') return '';
  const id = moduleId.trim();
  if (!id) return '';

  const { hasRoleplay } = options;

  const pdfPath = `handouts/pdf/${encodeURIComponent(id)}.pdf`;
  const pdfName = `Sales-Navigator-handout-${id}.pdf`;

  const roleplayBlock = hasRoleplay
    ? `
          <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Roleplay</span>
          <button type="button"
            data-roleplay-open
            class="inline-flex items-center gap-1.5 rounded-lg border border-orange-600 bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2">
            <i class="fa-solid fa-lightbulb text-white/95" aria-hidden="true"></i>
            Start AI Roleplay
          </button>
          <span class="mx-1 hidden h-5 w-px self-center bg-slate-200 sm:inline-block" aria-hidden="true"></span>`
    : '';

  return `
        <div class="module-handout-toolbar pointer-events-auto flex flex-wrap items-center justify-end gap-2 gap-y-2 shrink-0 sm:pt-0.5" data-module-handout-toolbar>
          ${roleplayBlock}
          <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Handout</span>
          <button type="button"
            data-handout-preview
            data-handout-pdf="${escapeHtml(pdfPath)}"
            data-handout-filename="${escapeHtml(pdfName)}"
            class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
            <i class="fa-solid fa-file-pdf text-red-500" aria-hidden="true"></i>
            View handout
          </button>
        </div>`;
}

let previewInitialized = false;

function ensureHandoutPreviewModal() {
  let modal = document.getElementById('handout-preview-modal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'handout-preview-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'handout-preview-title');
  modal.className =
    'fixed inset-0 z-[200] hidden flex items-center justify-center px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24';
  modal.innerHTML = `
    <div class="absolute inset-0 bg-slate-900/60" data-handout-preview-dismiss tabindex="-1" aria-hidden="true"></div>
    <div class="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl" style="height: min(90vh, 900px); max-height: min(90vh, 900px)">
      <div class="flex flex-shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <h2 id="handout-preview-title" class="text-lg font-bold text-slate-900">Handout preview</h2>
        <div class="flex flex-wrap items-center gap-2">
          <a href="" download="" data-handout-download class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
            <i class="fa-solid fa-download text-slate-500" aria-hidden="true"></i>
            Download PDF
          </a>
          <button type="button" data-handout-preview-dismiss class="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-800 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
            Close
          </button>
        </div>
      </div>
      <iframe class="min-h-0 w-full flex-1 border-0 bg-slate-100" title="Handout PDF preview" data-handout-iframe></iframe>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelectorAll('[data-handout-preview-dismiss]').forEach((el) => {
    el.addEventListener('click', () => closeHandoutPreview());
  });

  return modal;
}

/**
 * @param {string} pdfPath - Relative path e.g. handouts/pdf/foo.pdf
 * @param {string} filename - Suggested download filename
 */
export function openHandoutPreview(pdfPath, filename) {
  const modal = ensureHandoutPreviewModal();
  const absUrl = new URL(pdfPath, window.location.href).href;
  const iframe = modal.querySelector('[data-handout-iframe]');
  const dl = modal.querySelector('[data-handout-download]');
  if (iframe) iframe.src = absUrl;
  if (dl) {
    dl.href = absUrl;
    dl.setAttribute('download', filename || 'handout.pdf');
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

export function closeHandoutPreview() {
  const modal = document.getElementById('handout-preview-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  const iframe = modal.querySelector('[data-handout-iframe]');
  if (iframe) iframe.src = '';
  document.body.style.overflow = '';
}

/**
 * One-time: delegated clicks for [data-handout-preview], Escape to close.
 */
export function initHandoutPreview() {
  if (previewInitialized) return;
  previewInitialized = true;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-handout-preview]');
    if (!btn) return;
    e.preventDefault();
    const pdf = btn.getAttribute('data-handout-pdf');
    const name = btn.getAttribute('data-handout-filename') || 'handout.pdf';
    if (pdf) openHandoutPreview(pdf, name);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const modal = document.getElementById('handout-preview-modal');
    if (modal && !modal.classList.contains('hidden')) {
      closeHandoutPreview();
    }
  });
}
