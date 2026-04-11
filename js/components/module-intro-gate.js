import { parseFrontMatter } from '../lib/front-matter.js';
import { buildModuleIntroGateHeaderHtml } from '../lib/markdown-sections.js';
import { buildFiveMinuteSummaryIntroGateHtml } from '../lib/module-enrichment.js';

export const MODULE_INTRO_GATE_ID = 'module-intro-gate-overlay';

export function destroyModuleIntroGate() {
  document.getElementById(MODULE_INTRO_GATE_ID)?.remove();
}

/**
 * Full-screen glass overlay (same language as the guided tour): dark header holds title + intro;
 * scroll area holds a plain five-minute summary (no amber card / 5m icon). Full module unchanged.
 *
 * @param {HTMLElement} container - #module-host (left empty until Start)
 * @param {string} markdownSource - Full content.md including front matter
 * @param {() => void} renderFullModule - Typically `() => renderMarkdownModule(container, markdownSource)`
 */
export function mountModuleIntroGate(container, markdownSource, renderFullModule) {
  destroyModuleIntroGate();

  let meta = {};
  try {
    const parsed = parseFrontMatter(markdownSource || '');
    meta = parsed.meta || {};
  } catch {
    renderFullModule();
    return;
  }

  const headerStripHtml = buildModuleIntroGateHeaderHtml(meta);
  const fiveMinHtml = buildFiveMinuteSummaryIntroGateHtml(meta);

  const overlay = document.createElement('div');
  overlay.id = MODULE_INTRO_GATE_ID;
  overlay.className = 'fixed inset-0 z-[100] pointer-events-none';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'module-intro-gate-heading');

  overlay.innerHTML = `
    <div class="fixed inset-0 bg-slate-900/55 backdrop-blur-[3px] pointer-events-auto" data-module-intro-dim></div>
    <div class="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      <div class="module-intro-gate-panel pointer-events-auto flex max-h-[min(90vh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
        <div class="flex-shrink-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 px-5 py-5 text-white">
          ${headerStripHtml}
        </div>
        <div class="module-intro-gate-scroll min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div class="module-doc space-y-6">
            ${fiveMinHtml}
          </div>
        </div>
        <div class="flex flex-shrink-0 flex-wrap items-center justify-end gap-2 border-t border-slate-900/10 bg-slate-900/[0.03] px-5 py-4 backdrop-blur-sm">
          <button type="button" class="module-intro-start inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
            Start Module
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('.module-intro-start')?.addEventListener('click', () => {
    destroyModuleIntroGate();
    renderFullModule();
  });
}
