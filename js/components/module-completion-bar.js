import { openProgressMap } from './progress-map-overlay.js';
import {
  isModuleCompleted,
  markModuleCompleted,
} from '../lib/progress-state.js';
import { awardXP } from '../lib/gamification.js';
import { nextModuleInSidebarOrder } from '../lib/module-nav-order.js';

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const SKIP_COMPLETION = new Set(['getting-started', 'map-book']);

/**
 * Sticky footer CTA to mark a training module complete and play the Fiber path celebration.
 * @param {HTMLElement} container - #module-host
 * @param {object} manifest - modules-manifest.json
 * @param {string} moduleId
 */
export function mountModuleCompletionBar(container, manifest, moduleId) {
  if (!container || !manifest || !moduleId || SKIP_COMPLETION.has(moduleId)) {
    return;
  }

  container.querySelector('[data-module-completion-slot]')?.remove();

  const slot = document.createElement('div');
  slot.setAttribute('data-module-completion-slot', '');
  slot.className =
    'mt-8 pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4';

  const next = nextModuleInSidebarOrder(manifest, moduleId);

  function render() {
    const done = isModuleCompleted(moduleId);
    if (done) {
      slot.innerHTML = `
        <div class="flex items-center gap-3 text-emerald-800">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200/80">
            <i class="fa-solid fa-check text-emerald-600" aria-hidden="true"></i>
          </span>
          <div>
            <p class="font-semibold text-slate-800">Module marked complete</p>
            <p class="text-sm text-slate-600">Your progress is saved on the Fiber path.</p>
          </div>
        </div>`;
      return;
    }

    slot.innerHTML = `
      <div class="min-w-0">
        <p class="font-semibold text-slate-800">Finished this module?</p>
        <p class="text-sm text-slate-600 mt-0.5">Mark it complete to light up your route on the Fiber path${
          next
            ? ` — we’ll show you <strong>${escapeHtml(next.title)}</strong> next.`
            : ' — you’re at the last stop on the path.'
        }</p>
      </div>
      <button type="button" class="module-complete-btn w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-600 hover:to-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
        <i class="fa-solid fa-bolt" aria-hidden="true"></i>
        Mark module complete
      </button>`;

    slot.querySelector('.module-complete-btn')?.addEventListener('click', () => {
      markModuleCompleted(moduleId);
      awardXP(100, 'Module Completed');
      render();
      openProgressMap(manifest, next?.id || moduleId, {
        celebration: {
          completedId: moduleId,
          nextModule: next
            ? { id: next.id, title: next.title }
            : null,
        },
      });
    });
  }

  render();
  container.appendChild(slot);
}
