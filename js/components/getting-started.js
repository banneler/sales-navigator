import { setRouteModuleId } from '../router.js';

const GETTING_STARTED_ID = 'getting-started';

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {object} manifest - modules-manifest.json
 */
function orderedUserModules(manifest) {
  return [...(manifest.modules || [])].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
}

/**
 * Guided click-through for learner-facing Sales-Navigator features (not admin).
 * @param {HTMLElement} container
 * @param {object} manifest
 */
export function loadGettingStarted(container, manifest) {
  const modules = orderedUserModules(manifest);
  const firstTraining = modules.find(
    (m) => m.id !== GETTING_STARTED_ID && m.id !== 'map-book'
  );
  const mapBook = modules.find((m) => m.id === 'map-book');

  const categories = [...new Set(modules.map((m) => m.category || 'General'))];

  const steps = [
    {
      title: 'Welcome',
      icon: 'fa-compass',
      body: `
        <p class="text-slate-700 leading-relaxed">
          <strong>Sales-Navigator</strong> is your interactive training hub for GPC sales onboarding—modules, practice scenarios, and knowledge checks in one place.
        </p>
        <p class="text-slate-600 text-sm mt-3">
          This short tour walks through how the app is organized so you can move through training with confidence. (Admin and content tools live elsewhere and are not part of this tour.)
        </p>`,
    },
    {
      title: 'Left navigation',
      icon: 'fa-bars',
      body: `
        <p class="text-slate-700 leading-relaxed mb-3">
          Use the <strong>sidebar on the left</strong> to open any module. Items are grouped by category${categories.length ? ` (${escapeHtml(categories.join(', '))})` : ''}.
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-2 text-sm">
          <li>Click a module title to load it in the main area.</li>
          <li>Use the <strong>chevron</strong> at the top of the sidebar to collapse it when you want more reading space.</li>
          <li>The <strong>highlighted</strong> item matches the page you are on.</li>
        </ul>`,
    },
    {
      title: 'Inside a module',
      icon: 'fa-book-open',
      body: `
        <p class="text-slate-700 leading-relaxed mb-3">
          Each training module is built from structured content:
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-2 text-sm">
          <li><strong>Title and summary</strong> at the top set context.</li>
          <li><strong>Five-minute summary</strong> bullets give a fast scan when present.</li>
          <li>Major topics appear as <strong>section cards</strong> (each <code class="text-xs bg-slate-100 px-1 rounded">##</code> heading in the source becomes a card).</li>
          <li>Some modules include <strong>reference links</strong> (for example PDFs or SharePoint resources) in a side area when provided.</li>
        </ul>`,
    },
    {
      title: 'Scenarios & knowledge checks',
      icon: 'fa-lightbulb',
      body: `
        <p class="text-slate-700 leading-relaxed mb-3">
          Many modules include interactive practice—not graded, for learning:
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-2 text-sm">
          <li><strong>Scenarios</strong> may appear in a column beside the content: choose a response and read the feedback.</li>
          <li><strong>Knowledge checks</strong> often appear as a carousel near the bottom: answer and reveal explanations to reinforce the material.</li>
        </ul>
        <p class="text-slate-600 text-sm mt-3">If a module does not include scenarios or checks, the layout may be a single column—same navigation, simpler page.</p>`,
    },
    {
      title: 'Executive Map Book',
      icon: 'fa-map',
      body: mapBook
        ? `
        <p class="text-slate-700 leading-relaxed mb-3">
          <strong>${escapeHtml(mapBook.title)}</strong> opens a full-width embedded view for network maps and executive visuals—use the sidebar to switch back to standard training modules anytime.
        </p>
        <p class="text-slate-600 text-sm">It uses the same header and sidebar as the rest of Sales-Navigator.</p>`
        : `
        <p class="text-slate-700 leading-relaxed">Map-style resources appear in the navigation when enabled for your build.</p>`,
    },
    {
      title: 'You are set',
      icon: 'fa-circle-check',
      body: `
        <p class="text-slate-700 leading-relaxed mb-4">
          You know how to navigate modules, find practice, and use the map book when needed. Pick any topic from the left to continue—or jump straight into training below.
        </p>
        <div class="flex flex-wrap gap-3">
          ${
            firstTraining
              ? `<button type="button" data-goto="${escapeHtml(firstTraining.id)}" class="gs-goto inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 text-sm shadow-sm transition">
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            Open ${escapeHtml(firstTraining.title)}
          </button>`
              : ''
          }
          <button type="button" data-goto-sidebar class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium px-4 py-2.5 text-sm transition">
            Browse the sidebar
          </button>
        </div>
        <p class="text-slate-500 text-xs mt-4">Tip: bookmark a specific module with the URL in your browser—it updates when you change modules.</p>`,
    },
  ];

  let stepIndex = 0;

  function render() {
    const step = steps[stepIndex];
    const total = steps.length;
    const isLast = stepIndex === total - 1;

    container.innerHTML = `
      <div class="getting-started max-w-3xl mx-auto">
        <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-orange-300 mb-1">Quick tour</p>
            <h2 class="text-2xl font-bold flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <i class="fa-solid ${escapeHtml(step.icon)}" aria-hidden="true"></i>
              </span>
              ${escapeHtml(step.title)}
            </h2>
            <div class="mt-4 flex items-center gap-1.5" role="tablist" aria-label="Tour progress">
              ${steps
                .map(
                  (_, i) => `
                <span class="h-1.5 flex-1 rounded-full transition-colors ${
                  i === stepIndex
                    ? 'bg-orange-400'
                    : i < stepIndex
                      ? 'bg-white/40'
                      : 'bg-white/15'
                }" title="Step ${i + 1} of ${total}"></span>`
                )
                .join('')}
            </div>
            <p class="text-slate-400 text-sm mt-2">Step ${stepIndex + 1} of ${total}</p>
          </div>
          <div class="px-6 py-6 getting-started-body">${step.body}</div>
          <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button type="button" class="gs-prev inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition" ${stepIndex === 0 ? 'disabled' : ''}>
              <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
              Back
            </button>
            <div class="flex flex-wrap gap-2">
              ${
                !isLast
                  ? `<button type="button" class="gs-next inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 text-sm shadow-sm transition">
                Next
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>`
                  : ''
              }
            </div>
          </div>
        </div>
      </div>`;

    const nextBtn = container.querySelector('.gs-next');
    const prevBtn = container.querySelector('.gs-prev');

    nextBtn?.addEventListener('click', () => {
      if (stepIndex < total - 1) {
        stepIndex += 1;
        render();
        container.querySelector('.getting-started-body')?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    });

    prevBtn?.addEventListener('click', () => {
      if (stepIndex > 0) {
        stepIndex -= 1;
        render();
      }
    });

    container.querySelectorAll('.gs-goto').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-goto');
        if (id) setRouteModuleId(id);
      });
    });

    container.querySelector('[data-goto-sidebar]')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.remove('sidebar-collapsed');
      document.getElementById('sidebar-toggle')?.focus();
    });
  }

  render();
}
