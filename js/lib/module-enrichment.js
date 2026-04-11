import { marked } from 'https://esm.sh/marked@15.0.12';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';

marked.use({ gfm: true, breaks: true });

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mdToSafeHtml(md) {
  if (md == null || md === '') return '';
  const html = marked.parse(String(md));
  return DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'rel'] });
}

/**
 * Dark-mode reference list: icon + hyperlink per file (new tab). Two-column grid from `sm` when there are multiple links.
 * Omit `reference_files` from front matter to hide this block; use `reference_files: []` for placeholder.
 *
 * Expects meta.reference_files: Array<{ label?: string, sharepoint_url: string }>
 */
export function buildModuleReferenceFilesHtml(meta) {
  if (!('reference_files' in meta)) return '';

  const files = Array.isArray(meta.reference_files) ? meta.reference_files : [];

  const linkItems = files
    .map((f, i) => {
      const url = typeof f?.sharepoint_url === 'string' ? f.sharepoint_url.trim() : '';
      if (!url) return '';
      const label =
        typeof f?.label === 'string' && f.label.trim()
          ? f.label.trim()
          : `Reference ${i + 1}`;
      const href = escapeHtml(url);
      return `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="group ref-file-link flex min-w-0 items-start gap-2.5 rounded-lg border border-slate-700/70 bg-slate-950/40 px-2.5 py-2 transition hover:border-orange-500/35 hover:bg-slate-800/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60">
          <span class="ref-file-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-600/80 bg-gradient-to-br from-slate-800 to-slate-950 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" aria-hidden="true">
            <i class="fa-solid fa-file-lines text-base"></i>
          </span>
          <span class="min-w-0 flex-1 pt-1 text-[11px] font-medium leading-snug text-orange-300 underline decoration-orange-500/40 underline-offset-2 group-hover:text-orange-200 group-hover:decoration-orange-400/70">${escapeHtml(label)}</span>
        </a>`;
    })
    .filter(Boolean);
  const rows = linkItems.join('');
  const nLinks = linkItems.length;
  const gridClass =
    nLinks > 1
      ? 'module-ref-files-grid grid grid-cols-1 sm:grid-cols-2 gap-2'
      : 'module-ref-files-grid grid grid-cols-1 gap-2';

  const bodyInner = rows
    ? `<div class="p-3 ${gridClass}">${rows}</div>`
    : `<div class="p-3"><p class="text-[10px] text-slate-500 leading-relaxed">SharePoint links for this module will appear here as they are added.</p></div>`;

  return `
      <section class="module-reference-files rounded-xl border border-slate-600 bg-slate-900 text-slate-100 shadow-lg overflow-hidden" aria-labelledby="module-ref-heading">
        <div class="px-3 py-2 border-b border-slate-700 bg-slate-950/80">
          <h3 id="module-ref-heading" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Module Reference Files</h3>
        </div>
        ${bodyInner}
      </section>`;
}

export function buildFiveMinuteSummaryHtml(meta) {
  const five = meta.five_minute_summary;
  if (typeof five !== 'string' || !five.trim()) return '';
  return `
      <section class="module-five-min border border-amber-200 bg-amber-50/80 rounded-xl p-6 shadow-sm" aria-labelledby="five-min-heading">
        <div class="flex items-start gap-3">
          <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm" title="About 5 minutes">5m</span>
          <div class="min-w-0 flex-1">
            <h3 id="five-min-heading" class="text-lg font-bold text-amber-950 mb-2">5-minute summary</h3>
            <div class="module-markdown-body text-amber-950/90">${mdToSafeHtml(five)}</div>
          </div>
        </div>
      </section>`;
}

/**
 * Sticky right-rail: scenarios column. Empty string if no scenarios.
 */
export function buildScenariosAsideHtml(meta) {
  const scenarios = meta.scenarios;
  if (!Array.isArray(scenarios) || scenarios.length === 0) return '';

  const n = scenarios.length;
  const cards = scenarios
    .map((sc, si) => {
      const title = typeof sc?.title === 'string' ? sc.title : `Scenario ${si + 1}`;
      const situation = typeof sc?.situation === 'string' ? sc.situation : '';
      const choices = Array.isArray(sc?.choices) ? sc.choices : [];
      const situationHtml = mdToSafeHtml(situation);
      const choiceBlocks = choices
        .map((ch, ci) => {
          const label = typeof ch?.label === 'string' ? ch.label : '';
          const feedback = typeof ch?.feedback === 'string' ? ch.feedback : '';
          return `
            <div class="space-y-1 sc-choice-row">
              <button type="button" class="js-sc-choice w-full text-left border border-slate-200 rounded-md px-2 py-1.5 text-[11px] font-medium text-slate-800 bg-white hover:border-orange-400 hover:bg-orange-50/50 transition leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-sc-index="${ci}" aria-pressed="false">
                ${escapeHtml(label)}
              </button>
              <div class="js-sc-feedback hidden rounded border border-orange-100 bg-orange-50/90 px-2 py-1.5 shadow-sm" data-sc-index="${ci}" role="region">
                <p class="text-[9px] font-bold uppercase tracking-wide text-orange-900 mb-1">Feedback</p>
                <div class="module-markdown-body text-[10px] text-slate-700 leading-snug">${mdToSafeHtml(feedback)}</div>
              </div>
            </div>`;
        })
        .join('');
      return `
        <article class="scenario-card border border-slate-200 rounded-lg p-2.5 bg-gradient-to-b from-white to-slate-50/80 shadow-sm transition-shadow" data-scenario-index="${si}">
          <div class="flex items-start justify-between gap-1.5 mb-1">
            <h4 class="text-[11px] font-bold text-slate-900 leading-tight">${escapeHtml(title)}</h4>
            <span class="js-sc-reviewed-badge hidden shrink-0 rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-green-800 border border-green-200" aria-hidden="true">Reviewed</span>
          </div>
          <div class="module-markdown-body scenario-situation-text text-slate-700 leading-snug mb-2">${situationHtml}</div>
          <p class="text-[9px] font-semibold text-slate-500 uppercase tracking-wide mb-1">Choose a response</p>
          <div class="space-y-2 sc-choices">${choiceBlocks}</div>
        </article>`;
    })
    .join('');

  return `
      <div class="module-scenarios-inner space-y-3" aria-labelledby="sc-heading" data-scenario-total="${n}">
        <h3 id="sc-heading" class="text-xs font-bold text-slate-900 border-b border-slate-200 pb-1.5">Scenarios</h3>
        <p class="js-scenarios-progress text-[10px] font-medium text-slate-600 mb-0.5" aria-live="polite">0 / ${n} scenario${n === 1 ? '' : 's'} reviewed</p>
        <div class="flex flex-col gap-3">${cards}</div>
        <div class="js-scenarios-completion hidden mt-2 rounded-xl border border-green-200 bg-green-50 px-3 py-3 text-sm text-green-950 shadow-sm" role="status" aria-live="polite">
          <p class="font-bold flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-green-600" aria-hidden="true"></i>
            All scenarios reviewed
          </p>
          <p class="text-green-900/90 mt-1.5 text-xs leading-relaxed">You’ve opened feedback for each practice scenario. Revisit the main sections anytime to connect these ideas to the full narrative.</p>
        </div>
      </div>`;
}

function buildSingleKnowledgeCard(kc, slideIndex) {
  const q = typeof kc?.question === 'string' ? kc.question : '';
  const options = Array.isArray(kc?.options) ? kc.options : [];
  const correctIdx = Number.isFinite(Number(kc?.correct_index)) ? Number(kc.correct_index) : 0;
  const explanation =
    typeof kc?.explanation === 'string' ? kc.explanation : 'Review the module narrative for the full context.';
  const nameAttr = `kc-q-${slideIndex}`;
  const optsHtml = options
    .map((opt, j) => {
      const label = typeof opt === 'string' ? opt : String(opt ?? '');
      return `<label class="flex gap-3 cursor-pointer items-start rounded-lg border border-slate-200 bg-white px-3 py-2 hover:border-orange-300 transition">
              <input type="radio" name="${nameAttr}" value="${j}" class="mt-1 text-orange-600 focus:ring-orange-500">
              <span class="text-sm text-slate-800">${escapeHtml(label)}</span>
            </label>`;
    })
    .join('');
  return `
        <div class="knowledge-check-card border border-slate-200 rounded-xl p-5 md:p-6 bg-white shadow-sm max-w-3xl mx-auto" data-kc-correct="${correctIdx}" data-kc-slide="${slideIndex}">
          <p class="font-semibold text-slate-900 mb-4 text-base">${escapeHtml(q)}</p>
          <div class="space-y-2 mb-4">${optsHtml}</div>
          <button type="button" class="js-kc-check bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition">Check answer</button>
          <div class="js-kc-feedback hidden mt-3 text-sm text-slate-700 border-t border-slate-100 pt-3"></div>
          <div class="js-kc-explanation-text hidden" aria-hidden="true">${escapeHtml(explanation)}</div>
        </div>`;
}

export function buildKnowledgeChecksCarouselHtml(meta) {
  const checks = meta.knowledge_checks;
  if (!Array.isArray(checks) || checks.length === 0) return '';

  const n = checks.length;
  const slides = checks.map((kc, i) => {
    const hidden = i === 0 ? '' : ' hidden';
    return `<div class="kc-slide${hidden}" data-kc-slide="${i}">${buildSingleKnowledgeCard(kc, i)}</div>`;
  });

  const dots = checks
    .map((_, i) => {
      const active = i === 0 ? 'bg-orange-500 ring-2 ring-orange-200' : 'bg-slate-300 hover:bg-slate-400';
      return `<button type="button" class="js-kc-carousel-dot h-2 w-2 shrink-0 rounded-full transition ${active}" data-kc-dot="${i}" aria-label="Question ${i + 1} of ${n}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`;
    })
    .join('');

  return `
      <section class="module-knowledge-checks border-t border-slate-200 pt-8 mt-2" aria-labelledby="kc-heading">
        <h3 id="kc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Knowledge checks</h3>
        <div class="kc-carousel rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:p-6" data-kc-active="0" data-kc-count="${n}">
          <div class="flex flex-wrap items-center justify-end gap-3 mb-4 pb-4 border-b border-slate-200/80">
            <div class="js-kc-score flex items-baseline gap-1.5 rounded-lg bg-white border border-slate-200 px-4 py-2 shadow-sm" aria-live="polite" aria-atomic="true" title="Questions answered correctly on last check, out of total">
              <span class="js-kc-score-correct text-2xl font-bold text-orange-600 tabular-nums leading-none">0</span>
              <span class="text-slate-400 text-lg font-medium">/</span>
              <span class="js-kc-score-total text-2xl font-bold text-slate-700 tabular-nums leading-none">${n}</span>
              <span class="text-xs text-slate-500 ml-1 hidden sm:inline">correct</span>
            </div>
          </div>
          <div class="kc-carousel-slides min-h-[220px]">
            ${slides.join('')}
          </div>
          <div class="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-200">
            <button type="button" class="js-kc-carousel-prev inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Previous question">
              <i class="fa-solid fa-chevron-left text-xs" aria-hidden="true"></i> Previous
            </button>
            <span class="js-kc-carousel-indicator text-sm font-semibold text-slate-600 tabular-nums">1 / ${n}</span>
            <button type="button" class="js-kc-carousel-next inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Next question">
              Next <i class="fa-solid fa-chevron-right text-xs" aria-hidden="true"></i>
            </button>
          </div>
          <div class="flex flex-wrap justify-center gap-1.5 mt-4 px-1 js-kc-carousel-dots-wrap max-w-full">${dots}</div>
        </div>
      </section>`;
}
