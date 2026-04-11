import { marked } from 'https://esm.sh/marked@15.0.12';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';
import { parseFrontMatter } from './front-matter.js';
import {
  buildFiveMinuteSummaryHtml,
  buildModuleReferenceFilesHtml,
  buildScenariosAsideHtml,
  buildKnowledgeChecksCarouselHtml,
} from './module-enrichment.js';

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
 * Full module document HTML: header; then main column (~70%) with 5-minute summary, ## sections, knowledge carousel; optional sticky scenarios aside (~30%) when scenarios exist.
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
  const fiveMinHtml = buildFiveMinuteSummaryHtml(meta);
  const referenceFilesHtml = buildModuleReferenceFilesHtml(meta);
  const scenariosAsideInner = buildScenariosAsideHtml(meta);
  const knowledgeCarouselHtml = buildKnowledgeChecksCarouselHtml(meta);
  const hasRef = Boolean(referenceFilesHtml);
  const hasScenarios = Boolean(scenariosAsideInner);

  const headerBlock = `
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${escapeHtml(title)}</h2>
          ${summary ? `<p class="text-slate-600 mt-2 max-w-3xl">${escapeHtml(summary)}</p>` : ''}
        </div>
        <div class="flex-shrink-0">${badge}</div>
      </div>`;

  const mainColumnInner = `
      ${fiveMinHtml}
      <div class="space-y-6 module-deep-dive">${sectionCardsHtml}</div>
      ${knowledgeCarouselHtml}`;

  if (hasRef || hasScenarios) {
    let asideColumnHtml = '';
    if (hasRef && hasScenarios) {
      asideColumnHtml = `
        <aside class="module-scenarios-aside w-full lg:basis-[30%] lg:flex-none lg:max-w-[30%] flex flex-col gap-3 lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-6rem)] min-h-0">
          <div class="module-reference-aside-slot shrink-0">
            ${referenceFilesHtml}
          </div>
          <div class="module-scenarios-scroll flex-1 min-h-0 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            ${scenariosAsideInner}
          </div>
        </aside>`;
    } else if (hasRef) {
      asideColumnHtml = `
        <aside class="module-scenarios-aside w-full lg:basis-[30%] lg:flex-none lg:max-w-[30%] lg:sticky lg:top-4 lg:self-start">
          ${referenceFilesHtml}
        </aside>`;
    } else {
      asideColumnHtml = `
        <aside class="module-scenarios-aside w-full lg:basis-[30%] lg:flex-none lg:max-w-[30%] rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
          ${scenariosAsideInner}
        </aside>`;
    }

    return `
    <div class="module-doc space-y-6">
      ${headerBlock}
      <div class="module-layout-row flex flex-col lg:flex-row lg:gap-8 gap-6 items-start">
        <div class="module-layout-main w-full lg:flex-1 lg:min-w-0 space-y-6">
          ${mainColumnInner}
        </div>
        ${asideColumnHtml}
      </div>
    </div>`;
  }

  return `
    <div class="module-doc space-y-6">
      ${headerBlock}
      ${mainColumnInner}
    </div>
  `;
}
