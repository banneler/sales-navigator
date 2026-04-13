import { parseFrontMatter } from '../lib/front-matter.js';
import { buildModuleIntroGateHeaderHtml } from '../lib/markdown-sections.js';
import { buildFiveMinuteSummaryIntroGateHtml } from '../lib/module-enrichment.js';

export const MODULE_INTRO_GATE_ID = 'module-intro-gate-overlay';

let positionCleanup = null;

export function destroyModuleIntroGate() {
  if (positionCleanup) {
    try {
      positionCleanup();
    } catch {
      /* ignore */
    }
    positionCleanup = null;
  }
  document.getElementById(MODULE_INTRO_GATE_ID)?.remove();
}

function positionIntroGateOverlay(overlay) {
  const mp = document.getElementById('main-panel');
  if (!mp || !overlay) return;
  const r = mp.getBoundingClientRect();
  overlay.style.top = `${r.top}px`;
  overlay.style.left = `${r.left}px`;
  overlay.style.width = `${r.width}px`;
  overlay.style.height = `${r.height}px`;
}

/**
 * Glass preview over the main content area only (header + sidebar stay visible and clickable).
 * Full module should already be rendered in `container` so it shows through the dimmed layer.
 *
 * @param {HTMLElement} container - #module-host
 * @param {string} markdownSource - Full content.md (for preview copy only)
 * @param {(() => void) | undefined} onStartModule
 */
export function mountModuleIntroGate(container, markdownSource, onStartModule) {
  destroyModuleIntroGate();

  let meta = {};
  try {
    const parsed = parseFrontMatter(markdownSource || '');
    meta = parsed.meta || {};
  } catch {
    return;
  }

  const headerStripHtml = buildModuleIntroGateHeaderHtml(meta);
  const fiveMinHtml = buildFiveMinuteSummaryIntroGateHtml(meta);

  const overlay = document.createElement('div');
  overlay.id = MODULE_INTRO_GATE_ID;
  overlay.className = 'fixed z-[50] pointer-events-none';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'false');
  overlay.setAttribute('aria-labelledby', 'module-intro-gate-heading');

  overlay.innerHTML = `
    <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto" data-module-intro-dim></div>
    <div class="absolute inset-0 z-[1] overflow-y-auto pointer-events-none">
      <div class="mx-auto grid min-h-full w-full max-w-[1600px] grid-cols-1 gap-6 p-0 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-8">
        <div class="flex items-center justify-center p-4 sm:p-6 pointer-events-none lg:min-h-0">
      <div class="module-intro-gate-panel pointer-events-auto flex max-h-[min(85vh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/75 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
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
        <div class="hidden min-h-0 lg:block" aria-hidden="true"></div>
      </div>
    </div>
  `;

  function syncPosition() {
    positionIntroGateOverlay(overlay);
  }

  syncPosition();
  window.addEventListener('resize', syncPosition);
  const mp = document.getElementById('main-panel');
  const ro =
    typeof ResizeObserver !== 'undefined' && mp
      ? new ResizeObserver(() => syncPosition())
      : null;
  if (mp && ro) ro.observe(mp);

  positionCleanup = () => {
    window.removeEventListener('resize', syncPosition);
    ro?.disconnect();
  };

  document.body.appendChild(overlay);

  overlay.querySelector('.module-intro-start')?.addEventListener('click', () => {
    destroyModuleIntroGate();
    if (typeof onStartModule === 'function') onStartModule();
  });
}
