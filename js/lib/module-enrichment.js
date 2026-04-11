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
 * @param {Record<string, unknown>} meta - Parsed YAML front matter
 * @returns {string} HTML inserted after the module header (before ## section cards)
 */
export function buildEnrichmentHtml(meta) {
  const parts = [];

  const five = meta.five_minute_summary;
  if (typeof five === 'string' && five.trim()) {
    parts.push(`
      <section class="module-five-min border border-amber-200 bg-amber-50/80 rounded-xl p-6 shadow-sm" aria-labelledby="five-min-heading">
        <div class="flex items-start gap-3">
          <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm" title="About 5 minutes">5m</span>
          <div class="min-w-0 flex-1">
            <h3 id="five-min-heading" class="text-lg font-bold text-amber-950 mb-2">5-minute summary</h3>
            <div class="module-markdown-body text-amber-950/90">${mdToSafeHtml(five)}</div>
          </div>
        </div>
      </section>`);
  }

  const checks = meta.knowledge_checks;
  if (Array.isArray(checks) && checks.length > 0) {
    const cards = checks
      .map((kc, i) => {
        const q = typeof kc?.question === 'string' ? kc.question : '';
        const options = Array.isArray(kc?.options) ? kc.options : [];
        const correctIdx = Number.isFinite(Number(kc?.correct_index)) ? Number(kc.correct_index) : 0;
        const explanation =
          typeof kc?.explanation === 'string' ? kc.explanation : 'Review the module narrative for the full context.';
        const optsHtml = options
          .map((opt, j) => {
            const label = typeof opt === 'string' ? opt : String(opt ?? '');
            return `<label class="flex gap-3 cursor-pointer items-start rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 hover:border-orange-300 transition">
              <input type="radio" name="kc-${i}" value="${j}" class="mt-1 text-orange-600 focus:ring-orange-500">
              <span class="text-sm text-slate-800">${escapeHtml(label)}</span>
            </label>`;
          })
          .join('');
        return `
        <div class="knowledge-check-card border border-slate-200 rounded-xl p-5 bg-white shadow-sm" data-kc-correct="${correctIdx}">
          <p class="font-semibold text-slate-900 mb-3">${escapeHtml(q)}</p>
          <div class="space-y-2 mb-4">${optsHtml}</div>
          <button type="button" class="js-kc-check bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition">Check answer</button>
          <div class="js-kc-feedback hidden mt-3 text-sm text-slate-700 border-t border-slate-100 pt-3"></div>
          <div class="js-kc-explanation-text hidden" aria-hidden="true">${escapeHtml(explanation)}</div>
        </div>`;
      })
      .join('');

    parts.push(`
      <section class="space-y-4" aria-labelledby="kc-heading">
        <h3 id="kc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Knowledge checks</h3>
        <div class="space-y-4">${cards}</div>
      </section>`);
  }

  const scenarios = meta.scenarios;
  if (Array.isArray(scenarios) && scenarios.length > 0) {
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
        <article class="scenario-card border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-white to-slate-50/80 shadow-sm">
          <h4 class="text-base font-bold text-slate-900 mb-2">${escapeHtml(title)}</h4>
          <div class="module-markdown-body text-slate-700 mb-4">${situationHtml}</div>
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Choose a response</p>
          <div class="space-y-3">${choiceBlocks}</div>
        </article>`;
      })
      .join('');

    parts.push(`
      <section class="space-y-4" aria-labelledby="sc-heading">
        <h3 id="sc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Scenario cards</h3>
        <div class="space-y-4">${cards}</div>
      </section>`);
  }

  return parts.length ? `<div class="space-y-8 module-enrichment">${parts.join('')}</div>` : '';
}
