import { marked } from 'https://esm.sh/marked@15.1.0';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';
import { parseFrontMatter } from '../lib/front-matter.js';

marked.use({ gfm: true, breaks: true });

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
 * @param {string} markdownSource - Full file including optional YAML front matter
 */
export default function renderMarkdownModule(container, markdownSource) {
  let meta = {};
  let body = markdownSource || '';
  try {
    const parsed = parseFrontMatter(markdownSource || '');
    meta = parsed.meta || {};
    body = parsed.body;
  } catch (e) {
    container.innerHTML = `
      <div class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6">
        <p class="font-bold">Could not parse front matter</p>
        <p class="text-sm mt-2">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>
      </div>`;
    return;
  }

  const sensitivity = meta.sensitivity || 'public';
  const badge =
    sensitivity === 'internal'
      ? '<span class="inline-flex items-center rounded-full bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 border border-amber-200">Internal</span>'
      : '';

  const title = typeof meta.title === 'string' ? meta.title : 'Module';
  const summary = typeof meta.summary === 'string' ? meta.summary : '';

  let htmlBody = '';
  try {
    htmlBody = marked.parse(body || '');
  } catch (e) {
    container.innerHTML = `
      <div class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6">
        <p class="font-bold">Markdown parse error</p>
        <p class="text-sm mt-2">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>
      </div>`;
    return;
  }

  const safe = DOMPurify.sanitize(htmlBody, {
    ADD_ATTR: ['target', 'rel'],
  });

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${escapeHtml(title)}</h2>
          ${summary ? `<p class="text-slate-600 mt-2 max-w-3xl">${escapeHtml(summary)}</p>` : ''}
        </div>
        <div class="flex-shrink-0">${badge}</div>
      </div>
      <div class="module-markdown bg-white border border-slate-200 rounded-xl p-6 shadow-sm">${safe}</div>
    </div>
  `;
}
