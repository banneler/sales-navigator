import { marked } from 'https://esm.sh/marked@15.0.12';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';
import { parseFrontMatter } from './front-matter.js';
import {
  buildFiveMinuteSummaryHtml,
  buildModuleReferenceFilesHtml,
  buildScenariosAsideHtml,
  buildKnowledgeChecksCarouselHtml,
} from './module-enrichment.js';
import { buildHandoutToolbarHtml } from './handout-links.js';

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
 * Title, intro summary, and optional handout actions on one row (title left, handout right).
 * @param {Record<string, unknown>} meta - Parsed YAML front matter
 * @param {string} [handoutHtml] - From `buildHandoutToolbarHtml` (empty = title block only)
 */
export function buildModuleHeaderBlockHtml(meta, handoutHtml = '') {
  const title = typeof meta.title === 'string' ? meta.title : 'Module';
  const summary = typeof meta.summary === 'string' ? meta.summary : '';

  if (!handoutHtml || !String(handoutHtml).trim()) {
    return `
      <div>
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${escapeHtml(title)}</h2>
        ${summary ? `<p class="text-slate-600 mt-2 max-w-3xl">${escapeHtml(summary)}</p>` : ''}
      </div>`;
  }

  return `
      <div class="pb-4 border-b border-slate-200/90">
        <div class="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight min-w-0 flex-1">${escapeHtml(title)}</h2>
          ${String(handoutHtml).trim()}
        </div>
        ${summary ? `<p class="text-slate-600 mt-3 max-w-3xl">${escapeHtml(summary)}</p>` : ''}
      </div>`;
}

/**
 * Title, intro, and badge for the module intro gate’s dark header strip (light text on slate).
 */
export function buildModuleIntroGateHeaderHtml(meta) {
  const title = typeof meta.title === 'string' ? meta.title : 'Module';
  const summary = typeof meta.summary === 'string' ? meta.summary : '';

  return `
    <div class="min-w-0">
      <p class="mb-2 text-[10px] font-semibold uppercase tracking-wider text-orange-300/95">Module preview</p>
      <h2 id="module-intro-gate-heading" class="text-2xl font-bold tracking-tight text-white">${escapeHtml(title)}</h2>
      ${summary ? `<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">${escapeHtml(summary)}</p>` : ''}
    </div>`;
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

  const sections = splitMarkdownByH2(body || '');
  const sectionCardsHtml = renderSectionsToHtml(sections);
  const fiveMinHtml = buildFiveMinuteSummaryHtml(meta);
  const referenceFilesHtml = buildModuleReferenceFilesHtml(meta);
  const scenariosAsideInner = buildScenariosAsideHtml(meta);
  const knowledgeCarouselHtml = buildKnowledgeChecksCarouselHtml(meta);
  const hasRef = Boolean(referenceFilesHtml);
  const hasScenarios = Boolean(scenariosAsideInner);

  const handoutToolbar = buildHandoutToolbarHtml(
    typeof meta.id === 'string' ? meta.id : ''
  );
  const headerBlock = buildModuleHeaderBlockHtml(meta, handoutToolbar);

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
