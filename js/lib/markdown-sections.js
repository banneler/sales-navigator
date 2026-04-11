import { marked } from 'https://esm.sh/marked@15.0.12';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';
import { parseFrontMatter } from './front-matter.js';
import { buildEnrichmentHtml } from './module-enrichment.js';

marked.use({ gfm: true, breaks: true });

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Level-2 heading only (`##`), not `###`. */
function isH2Line(line) {
  if (line.startsWith('###')) return false;
  return /^##\s/.test(line);
}

/**
 * Split markdown on `##` headings — each block becomes one section card (title + body).
 * If there are no `##` lines, returns one segment with an empty title (full body).
 */
export function splitMarkdownByH2(body) {
  const lines = (body || '').split(/\r?\n/);
  const sections = [];
  let currentTitle = null;
  let currentLines = [];

  function pushSection() {
    const md = currentLines.join('\n').trim();
    if (currentTitle !== null || md) {
      sections.push({ title: currentTitle ?? '', markdown: md });
    }
  }

  for (const line of lines) {
    if (isH2Line(line)) {
      pushSection();
      currentTitle = line.replace(/^##\s+/, '').trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  pushSection();
  return sections;
}

export function renderSectionsToHtml(sections) {
  return sections
    .map(({ title, markdown }) => {
      let html;
      try {
        html = marked.parse(markdown || '');
      } catch (e) {
        return `
      <section class="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
        <p class="text-sm text-red-800">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>
      </section>`;
      }
      const safe = DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'rel'] });
      const heading = title.trim()
        ? `<h3 class="text-lg font-bold text-slate-900 mb-3">${escapeHtml(title)}</h3>`
        : '';
      return `
      <section class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        ${heading}
        <div class="module-markdown-body">${safe}</div>
      </section>`;
    })
    .join('');
}

/**
 * Full module document HTML: header (title, summary, badge) + section cards.
 * Used by the main app and the admin preview. Returns error markup if front matter is invalid.
 */
export function renderModuleDocumentHtml(markdownSource) {
  let meta = {};
  let body = markdownSource || '';
  try {
    const parsed = parseFrontMatter(markdownSource || '');
    meta = parsed.meta || {};
    body = parsed.body;
  } catch (e) {
    return `
      <div class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6">
        <p class="font-bold">Could not parse front matter</p>
        <p class="text-sm mt-2">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>
      </div>`;
  }

  const sensitivity = meta.sensitivity || 'public';
  const badge =
    sensitivity === 'internal'
      ? '<span class="inline-flex items-center rounded-full bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 border border-amber-200">Internal</span>'
      : '';

  const title = typeof meta.title === 'string' ? meta.title : 'Module';
  const summary = typeof meta.summary === 'string' ? meta.summary : '';

  const sections = splitMarkdownByH2(body || '');
  const sectionCardsHtml = renderSectionsToHtml(sections);
  const enrichmentHtml = buildEnrichmentHtml(meta);

  return `
    <div class="space-y-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${escapeHtml(title)}</h2>
          ${summary ? `<p class="text-slate-600 mt-2 max-w-3xl">${escapeHtml(summary)}</p>` : ''}
        </div>
        <div class="flex-shrink-0">${badge}</div>
      </div>
      ${enrichmentHtml}
      <div class="space-y-6">${sectionCardsHtml}</div>
    </div>
  `;
}
