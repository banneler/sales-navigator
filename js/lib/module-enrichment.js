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

/** Responsive grid: 1 col → 2 cols for two items → 3 cols for three or more. */
function scenarioGridClass(count) {
  if (count <= 1) return 'grid grid-cols-1 gap-4';
  if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 gap-4';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
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

export function buildScenariosSectionHtml(meta) {
  const scenarios = meta.scenarios;
  if (!Array.isArray(scenarios) || scenarios.length === 0) return '';

  const gridClass = scenarioGridClass(scenarios.length);
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
            <div class="space-y-1">
              <button type="button" class="js-sc-choice w-full text-left border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-800 bg-white hover:border-orange-400 hover:bg-orange-50/50 transition" data-sc-index="${ci}">
                ${escapeHtml(label)}
              </button>
              <div class="js-sc-feedback hidden text-sm text-slate-600 pl-1 border-l-2 border-orange-400 pl-3 py-1" data-sc-index="${ci}">${mdToSafeHtml(feedback)}</div>
            </div>`;
        })
        .join('');
      return `
        <article class="scenario-card border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-white to-slate-50/80 shadow-sm h-full flex flex-col">
          <h4 class="text-base font-bold text-slate-900 mb-2">${escapeHtml(title)}</h4>
          <div class="module-markdown-body text-slate-700 mb-4 flex-1">${situationHtml}</div>
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Choose a response</p>
          <div class="space-y-3">${choiceBlocks}</div>
        </article>`;
    })
    .join('');

  return `
      <section class="space-y-4 module-scenarios" aria-labelledby="sc-heading">
        <h3 id="sc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Scenario cards</h3>
        <div class="${gridClass}">${cards}</div>
      </section>`;
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
      return `<button type="button" class="js-kc-carousel-dot h-2.5 w-2.5 rounded-full transition ${active}" data-kc-dot="${i}" aria-label="Question ${i + 1} of ${n}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`;
    })
    .join('');

  return `
      <section class="module-knowledge-checks border-t border-slate-200 pt-8 mt-2" aria-labelledby="kc-heading">
        <h3 id="kc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Knowledge checks</h3>
        <p class="text-sm text-slate-500 mb-4">One question at a time — use the arrows or dots to move between questions.</p>
        <div class="kc-carousel rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:p-6" data-kc-active="0" data-kc-count="${n}">
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
          <div class="flex justify-center gap-2 mt-4 js-kc-carousel-dots-wrap">${dots}</div>
        </div>
      </section>`;
}
