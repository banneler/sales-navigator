import { parseFrontMatter } from './front-matter.js';
import {
  escapeHtml,
  parseMarkdownToSafeHtml,
} from './markdown-config.js';
import {
  buildFiveMinuteSummaryHtml,
  buildModuleReferenceFilesHtml,
  buildScenariosAsideHtml,
  buildVideoCarouselHtml,
  buildKnowledgeChecksCarouselHtml,
  buildRoleplayPanelHtml,
} from './module-enrichment.js';
import { buildHandoutToolbarHtml } from './handout-links.js';
import {
  getSectionRole,
  isSalesTrioModule,
} from './section-roles.js';

/** Level-2 heading only (`##`), not `###`. */
function isH2Line(line) {
  if (line.startsWith('###')) return false;
  return /^##\s/.test(line);
}

/**
 * Optional suffix on H2 lines: `## Title [deep]` — collapsed by default in the app when
 * the module has more than one `##` section (single-section modules ignore `[deep]` so
 * content is never fully hidden).
 */
const H2_DEEP_SUFFIX = /\s*\[deep\]$/i;

/**
 * @param {string} title - Raw H2 title from markdown (may end with `[deep]`)
 * @returns {{ displayTitle: string; requestsDeep: boolean }}
 */
export function parseH2DeepMarker(title) {
  const t = (title || '').trim();
  if (!H2_DEEP_SUFFIX.test(t)) {
    return { displayTitle: t, requestsDeep: false };
  }
  return {
    displayTitle: t.replace(H2_DEEP_SUFFIX, '').trim(),
    requestsDeep: true,
  };
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

/**
 * @param {import('./section-roles.js').SectionRole} role
 */
function sectionCardShellClasses(role, useDeepCollapse) {
  if (useDeepCollapse) {
    return 'module-section-deep module-section-role-deep bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow';
  }
  const base =
    'module-section-card rounded-2xl border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow';
  switch (role) {
    case 'elevator':
      return `${base} module-section-elevator border-orange-200/90 bg-gradient-to-br from-orange-50/50 via-white to-slate-50/30`;
    case 'discovery':
      return `${base} module-section-discovery border-emerald-200/70 bg-gradient-to-b from-emerald-50/35 to-white`;
    case 'objections':
      return `${base} module-section-objections border-indigo-200/80 bg-gradient-to-b from-indigo-50/40 to-white`;
    case 'overview':
      return `${base} module-section-overview border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white`;
    case 'guidelines':
      return `${base} module-section-guidelines border-sky-200/80 bg-gradient-to-b from-sky-50/50 to-white`;
    case 'pitfalls':
      return `${base} module-section-pitfalls border-amber-200/80 bg-gradient-to-b from-amber-50/40 to-white`;
    default:
      return `${base} module-section-generic border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50`;
  }
}

/** Section roles whose body should span the full card width (no max-w-prose / 65ch cap). */
const SECTION_BODY_FULL_WIDTH_ROLES = new Set([
  'objections',
  'elevator',
  'discovery',
  'overview',
  'guidelines',
  'pitfalls',
  'deep',
]);

/**
 * Comfortable reading width for long prose; full width for objections grids and for
 * overview / elevator / discovery so they align with the card (same issue as sales-trio tabs).
 * Headingless sections (`## ` with no title) are full width so embedded components (e.g. elevator) span the card.
 * @param {import('./section-roles.js').SectionRole} role
 * @param {string} [displayTitle]
 */
function markdownBodyWrapperClasses(role, displayTitle) {
  if (!String(displayTitle ?? '').trim()) {
    return 'module-markdown-body module-section-body-full w-full';
  }
  if (SECTION_BODY_FULL_WIDTH_ROLES.has(role)) {
    return 'module-markdown-body module-section-body-full w-full';
  }
  return 'module-markdown-body module-section-prose max-w-prose';
}

/**
 * @param {string} markdown
 * @param {{ displayTitle: string; useDeepCollapse: boolean; sectionRole?: import('./section-roles.js').SectionRole }} options
 */
function renderOneSectionCard(markdown, options) {
  const { useDeepCollapse, displayTitle } = options;
  const sectionRole = options.sectionRole ?? 'generic';
  let safe;
  try {
    safe = parseMarkdownToSafeHtml(markdown || '');
  } catch (e) {
    return `
      <section class="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
        <p class="text-sm text-red-800">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>
      </section>`;
  }

  const shell = sectionCardShellClasses(sectionRole, useDeepCollapse);
  const bodyCls = markdownBodyWrapperClasses(sectionRole, displayTitle);

  if (!displayTitle.trim()) {
    return `
      <section class="${shell}">
        <div class="${bodyCls}">${safe}</div>
      </section>`;
  }

  if (useDeepCollapse) {
    return `
      <details class="${shell}">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-3 p-6 md:p-8 text-left outline-none [&::-webkit-details-marker]:hidden marker:content-none">
          <span class="min-w-0 flex-1">
            <span class="block text-xl font-bold text-slate-900">${escapeHtml(displayTitle)}</span>
            <span class="mt-1 block text-sm font-medium text-slate-500">Optional deep dive — expand to read</span>
          </span>
          <i class="fa-solid fa-chevron-down module-section-deep-chevron shrink-0 text-slate-400 transition-transform duration-200" aria-hidden="true"></i>
        </summary>
        <div class="border-t border-slate-200/80 px-6 md:px-8 pb-6 md:pb-8 pt-6">
          <div class="${bodyCls}">${safe}</div>
        </div>
      </details>`;
  }

  const heading = `<h3 class="text-xl font-bold text-slate-900 mb-4 tracking-tight">${escapeHtml(displayTitle)}</h3>`;
  return `
      <section class="${shell}">
        ${heading}
        <div class="${bodyCls}">${safe}</div>
      </section>`;
}

/**
 * Sales trio: first three H2s as tabs, Process Deep Dive stays collapsible.
 * @param {Array<{ title: string | null; markdown: string }>} sections
 * @returns {string | null}
 */
function tryRenderSalesTrioTabLayout(sections) {
  if (sections.length < 4) return null;
  const parsed = sections.map((s) => {
    const raw = s.title ?? '';
    const { displayTitle, requestsDeep } = parseH2DeepMarker(raw);
    return {
      markdown: s.markdown,
      displayTitle,
      requestsDeep,
      role: getSectionRole(displayTitle),
    };
  });
  const [a, b, c, d] = parsed;
  if (
    a.role !== 'overview' ||
    b.role !== 'guidelines' ||
    c.role !== 'pitfalls' ||
    d.role !== 'deep' ||
    !d.requestsDeep
  ) {
    return null;
  }

  const panels = [a, b, c].map((sec, i) => {
    let inner;
    try {
      inner = parseMarkdownToSafeHtml(sec.markdown || '');
    } catch (e) {
      inner = `<p class="text-red-600">${escapeHtml(e instanceof Error ? e.message : String(e))}</p>`;
    }
    const hidden = i === 0 ? '' : ' hidden';
    const tabId = `sales-trio-tab-${i}`;
    const panelId = `sales-trio-panel-${i}`;
    const labels = ['Overview', 'Key Guidelines', 'Common Pitfalls'];
    return { inner, hidden, tabId, panelId, label: labels[i] };
  });

  const tabButtons = panels
    .map((p, i) => {
      const selected = i === 0;
      return `<button type="button" role="tab" id="${p.tabId}" class="js-sales-trio-tab flex-1 min-w-[8rem] px-4 py-3 text-sm font-semibold transition border-b-2 -mb-px focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-400 ${selected ? 'border-orange-500 text-orange-800 bg-white' : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'}" aria-selected="${selected ? 'true' : 'false'}" aria-controls="${p.panelId}" tabindex="${selected ? '0' : '-1'}">${escapeHtml(p.label)}</button>`;
    })
    .join('');

  const tabPanels = panels
    .map(
      (p) =>
        `<div role="tabpanel" id="${p.panelId}" class="js-sales-trio-panel module-sales-trio-panel p-6 md:p-8${p.hidden}" aria-labelledby="${p.tabId}"><div class="module-markdown-body module-sales-trio-panel-body w-full max-w-none">${p.inner}</div></div>`
    )
    .join('');

  const deepHtml = renderOneSectionCard(d.markdown, {
    displayTitle: d.displayTitle,
    useDeepCollapse: true,
    sectionRole: 'deep',
  });

  return `
    <div class="module-sales-trio space-y-6">
      <div class="module-sales-trio-shell rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
        <div role="tablist" aria-label="Sales process sections" class="flex flex-wrap border-b border-slate-200 bg-slate-50/90">
          ${tabButtons}
        </div>
        ${tabPanels}
      </div>
      ${deepHtml}
    </div>`;
}

/**
 * @param {Array<{ title: string | null; markdown: string }>} sections
 * @param {{ moduleId?: string }} [opts]
 */
export function renderSectionsToHtml(sections, opts = {}) {
  const moduleId = opts.moduleId;
  if (isSalesTrioModule(moduleId)) {
    const trio = tryRenderSalesTrioTabLayout(sections);
    if (trio) return trio;
  }

  const total = sections.length;
  return sections
    .map(({ title, markdown }) => {
      const rawTitle = title ?? '';
      const { displayTitle, requestsDeep } = parseH2DeepMarker(rawTitle);
      const useDeepCollapse =
        requestsDeep && total > 1 && Boolean(displayTitle.trim());
      const sectionRole = getSectionRole(displayTitle);
      return renderOneSectionCard(markdown, {
        displayTitle,
        useDeepCollapse,
        sectionRole,
      });
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
        ${summary ? `<p class="text-slate-600 mt-2 max-w-2xl text-[15px] leading-relaxed">${escapeHtml(summary)}</p>` : ''}
      </div>`;
  }

  return `
      <div class="pb-4 border-b border-slate-200/90">
        <div class="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <h2 class="text-2xl font-bold text-slate-900 tracking-tight min-w-0 flex-1">${escapeHtml(title)}</h2>
          ${String(handoutHtml).trim()}
        </div>
        ${summary ? `<p class="text-slate-600 mt-3 max-w-2xl text-[15px] leading-relaxed">${escapeHtml(summary)}</p>` : ''}
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
 * Full module document HTML: header; then main column (~70%) with Coffee Summary, ## sections, knowledge carousel; optional sticky scenarios aside (~30%) when scenarios exist.
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
  const moduleId = typeof meta.id === 'string' ? meta.id : '';
  const sectionCardsHtml = renderSectionsToHtml(sections, { moduleId });
  const fiveMinHtml = buildFiveMinuteSummaryHtml(meta);
  const referenceFilesHtml = buildModuleReferenceFilesHtml(meta);
  const scenariosAsideInner = buildScenariosAsideHtml(meta);
  const videoCarouselHtml = buildVideoCarouselHtml(meta);
  const knowledgeCarouselHtml = buildKnowledgeChecksCarouselHtml(meta);
  const roleplayPanelHtml = buildRoleplayPanelHtml(meta);
  const hasRoleplayPanel = Boolean(roleplayPanelHtml);
  const hasRef = Boolean(referenceFilesHtml);
  const hasScenarios = Boolean(scenariosAsideInner);

  const handoutToolbar = buildHandoutToolbarHtml(
    typeof meta.id === 'string' ? meta.id : '',
    { hasRoleplay: hasRoleplayPanel }
  );
  const headerBlock = buildModuleHeaderBlockHtml(meta, handoutToolbar);

  const mainColumnInner = `
      ${fiveMinHtml}
      ${videoCarouselHtml}
      <div class="space-y-6 module-deep-dive">${sectionCardsHtml}</div>
      ${knowledgeCarouselHtml}`;

  const roleplayShelter = hasRoleplayPanel
    ? `<div id="module-roleplay-shelter" class="hidden" hidden aria-hidden="true">${roleplayPanelHtml}</div>`
    : '';

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
    </div>
    ${roleplayShelter}`;
  }

  return `
    <div class="module-doc space-y-6">
      ${headerBlock}
      ${mainColumnInner}
    </div>
    ${roleplayShelter}
  `;
}
