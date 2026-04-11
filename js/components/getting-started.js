import { setRouteModuleId } from '../router.js';

const GETTING_STARTED_ID = 'getting-started';
const OVERLAY_ID = 'getting-started-tour-overlay';

let overlayEl = null;
let resizeObs = null;
let onResize = null;
let onMainScroll = null;

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

function buildDemoMarkup() {
  return `
    <div class="tour-demo-content max-w-[1600px] mx-auto space-y-6 pb-4 select-none">
      <div class="flex flex-col lg:flex-row lg:gap-8 gap-6 items-start">
        <div class="w-full lg:flex-1 min-w-0 space-y-6 pointer-events-none" data-tour-target="module-core">
          <div class="rounded-xl border border-slate-200/90 bg-white/95 shadow-sm p-6 backdrop-blur-sm">
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Welcome to Great Plains Communications</h2>
            <p class="text-slate-600 mt-3 text-sm max-w-3xl leading-relaxed">
              We're glad you're here. This space is built to help you ramp with confidence—alongside teammates who remember their first customer call, their first complex quote, and the questions that used to keep them up at night.
            </p>
          </div>
          <div class="rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50/95 to-white/90 p-5 shadow-sm backdrop-blur-sm">
            <p class="text-xs font-bold text-orange-800 uppercase tracking-wide">Five-minute summary</p>
            <ul class="mt-3 space-y-2.5 text-sm text-slate-700">
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> We're genuinely happy you chose to grow your career here—your wins matter to us.</li>
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> Take training at your pace; come back to any module when you need a refresher or a talk track.</li>
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> Showing up curious for customers beats memorizing slides—use this hub to prepare, then go have real conversations.</li>
            </ul>
          </div>
          <section class="rounded-xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
            <h3 class="text-lg font-bold text-slate-900">A note from the team</h3>
            <div class="text-sm text-slate-700 mt-3 space-y-3 leading-relaxed">
              <p>Dear teammate,</p>
              <p>
                Welcome to Great Plains Communications. Whether you're new to telecom or you've carried a bag for years, we're glad you're on the team. Sales-Navigator exists so you spend less time hunting for answers and more time listening to customers—rules of engagement, product depth, competitive positioning, and the workflows that keep deals moving are never more than a few clicks away.
              </p>
              <p>
                Nobody expects you to know everything on day one. We do expect you to ask questions, use the resources here, and reach out when a deal needs an extra pair of eyes. That's how we get better together—and how our customers feel the difference between a vendor and a partner.
              </p>
              <p class="text-slate-600">With appreciation,<br><span class="text-slate-800 font-medium">Your Sales Leader</span></p>
            </div>
          </section>
        </div>
        <aside class="w-full lg:basis-[30%] lg:flex-none lg:max-w-[30%] rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-sm pointer-events-auto" data-tour-target="tour-scenarios">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Scenarios</p>
          <p class="text-xs font-semibold text-slate-800 mt-3">Where is Waldo?</p>
          <p class="text-sm text-slate-600 mt-2 leading-relaxed">
            You aren’t sure where to find the most recent product collateral for <strong>Unified Communications</strong>. What should you do?
          </p>
          <p class="text-xs text-slate-500 mt-3 uppercase tracking-wide">Pick a response</p>
          <div class="mt-2 space-y-2" role="group" aria-label="Scenario responses">
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
              Send an email to Everyone@gpcom.com and ask where to find it.
            </button>
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="true">
              Check the Sales SharePoint site and look inside Sales Resources.
            </button>
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
              Email, call, and IM Sarah Tinkham relentlessly until she gives it up.
            </button>
          </div>
          <p class="text-xs text-red-700 mt-2 min-h-[1.25rem] hidden" data-tour-scenario-feedback="" role="status" aria-live="polite"></p>
          <p class="text-xs text-emerald-800 bg-emerald-50/90 border border-emerald-100 rounded-lg px-3 py-2 mt-3 hidden" data-tour-coach-note="">
            <strong>Coach's note:</strong> Official hubs beat broadcast email—Sales Resources is there so you (and Sarah) aren’t playing hide-and-seek.
          </p>
        </aside>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm max-w-4xl pointer-events-auto" data-tour-target="tour-knowledge">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Knowledge checks</p>
        <p class="text-sm font-medium text-slate-900 mt-3">What is the best Mexican restaurant in Blair, NE?</p>
        <div class="mt-3 space-y-2 text-sm" role="group" aria-label="Knowledge check options">
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>Taco Bell</span>
          </button>
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="true">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>El Vallarta Mexican Restaurant</span>
          </button>
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>Justin's leftover tacos in the fridge on floor 2</span>
          </button>
        </div>
        <p class="text-xs text-red-700 mt-2 min-h-[1.25rem] hidden" data-tour-knowledge-feedback="" role="status" aria-live="polite"></p>
        <div class="mt-3 hidden rounded-xl border-2 border-emerald-400/80 bg-gradient-to-br from-emerald-50 via-white to-orange-50 px-4 py-3 text-center shadow-lg ring-2 ring-emerald-400/30" data-tour-knowledge-affirmation role="status" aria-live="polite">
          <p class="text-base" aria-hidden="true">✨</p>
          <p class="text-sm font-semibold text-emerald-900">Blair has spoken—you’ve got great taste.</p>
          <p class="mt-1 text-xs text-emerald-800/90">El Vallarta would be proud.</p>
        </div>
        <p class="text-xs text-slate-500 mt-3 italic" data-tour-knowledge-hint="">Not graded—just for fun.</p>
        <div class="mt-4 flex gap-2">
          <span class="h-2 w-8 rounded-full bg-orange-400/90"></span>
          <span class="h-2 w-8 rounded-full bg-slate-200"></span>
          <span class="h-2 w-8 rounded-full bg-slate-200"></span>
        </div>
      </div>
    </div>`;
}

/** @returns {{ left: number; top: number; width: number; height: number } | null} */
function getSpotlightRect(stepIndex) {
  switch (stepIndex) {
    case 0:
      return null;
    case 1: {
      const el = document.getElementById('sidebar');
      return el ? rectLike(el.getBoundingClientRect()) : null;
    }
    case 2: {
      const el = document.querySelector('[data-tour-target="module-core"]');
      return el ? rectLike(el.getBoundingClientRect()) : null;
    }
    case 3: {
      const el = document.querySelector('[data-tour-target="tour-scenarios"]');
      return el ? rectLike(el.getBoundingClientRect()) : null;
    }
    case 4: {
      const el = document.querySelector('[data-tour-target="tour-knowledge"]');
      return el ? rectLike(el.getBoundingClientRect()) : null;
    }
    case 5: {
      const el = document.querySelector('[data-module-id="map-book"]');
      return el ? rectLike(el.getBoundingClientRect()) : null;
    }
    case 6:
      return null;
    default:
      return null;
  }
}

function rectLike(r) {
  return { left: r.left, top: r.top, width: r.width, height: r.height };
}

function padRect(r, pad) {
  return {
    left: r.left - pad,
    top: r.top - pad,
    width: r.width + pad * 2,
    height: r.height + pad * 2,
  };
}

/**
 * Remove tour overlay and listeners (call when leaving Getting started route).
 */
export function destroyGettingStartedOverlay() {
  if (resizeObs) {
    try {
      resizeObs.disconnect();
    } catch (_) {
      /* ignore */
    }
    resizeObs = null;
  }
  if (onResize) {
    window.removeEventListener('resize', onResize);
    window.removeEventListener('scroll', onResize, true);
    onResize = null;
  }
  if (onMainScroll) {
    document.getElementById('main-panel')?.removeEventListener('scroll', onMainScroll);
    onMainScroll = null;
  }
  document.getElementById(OVERLAY_ID)?.remove();
  overlayEl = null;
}

function applySpotlightLayers(root, rect, pad = 8) {
  const dim = root.querySelector('[data-tour-dim]');
  const slices = root.querySelectorAll('[data-tour-slice]');
  const ring = root.querySelector('[data-tour-ring]');

  if (!dim || !ring) return;

  if (!rect || rect.width <= 0 || rect.height <= 0) {
    dim.classList.remove('hidden');
    slices.forEach((s) => s.classList.add('hidden'));
    ring.classList.add('hidden');
    return;
  }

  const r = padRect(rect, pad);
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.max(0, r.left);
  const top = Math.max(0, r.top);
  const right = Math.min(vw, left + r.width);
  const bottom = Math.min(vh, top + r.height);
  const w = right - left;
  const h = bottom - top;

  dim.classList.add('hidden');

  const [topEl, rightEl, bottomEl, leftEl] = slices;
  if (topEl) {
    topEl.classList.remove('hidden');
    topEl.style.cssText = `top:0;left:0;width:100%;height:${top}px;`;
  }
  if (leftEl) {
    leftEl.classList.remove('hidden');
    leftEl.style.cssText = `top:${top}px;left:0;width:${left}px;height:${h}px;`;
  }
  if (rightEl) {
    rightEl.classList.remove('hidden');
    rightEl.style.cssText = `top:${top}px;left:${right}px;width:${Math.max(0, vw - right)}px;height:${h}px;`;
  }
  if (bottomEl) {
    bottomEl.classList.remove('hidden');
    bottomEl.style.cssText = `top:${bottom}px;left:0;width:100%;height:${Math.max(0, vh - bottom)}px;`;
  }

  ring.classList.remove('hidden');
  ring.style.cssText = `left:${left}px;top:${top}px;width:${w}px;height:${h}px;`;
}

function positionGlassCard(hostEl, stepIndex, rect) {
  if (!hostEl) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (stepIndex === 0 || !rect) {
    hostEl.style.left = '50%';
    hostEl.style.top = '50%';
    hostEl.style.transform = 'translate(-50%, -50%)';
    hostEl.style.right = 'auto';
    return;
  }

  if (rect.width > vw * 0.55 || rect.height > vh * 0.72) {
    hostEl.style.left = '50%';
    hostEl.style.top = '50%';
    hostEl.style.transform = 'translate(-50%, -50%)';
    hostEl.style.right = 'auto';
    return;
  }

  const gap = 16;
  const cardW = Math.min(448, vw - 32);
  const cardH = hostEl.offsetHeight || 380;

  let left = rect.left + rect.width + gap;
  if (left + cardW > vw - gap) {
    left = rect.left - cardW - gap;
  }
  if (left < gap) {
    left = Math.max(gap, (vw - cardW) / 2);
  }

  let top = rect.top;
  if (top + cardH > vh - gap) {
    top = Math.max(gap, vh - cardH - gap);
  }
  top = Math.max(gap, Math.min(top, vh - cardH - gap));

  hostEl.style.left = `${left}px`;
  hostEl.style.top = `${top}px`;
  hostEl.style.transform = 'none';
  hostEl.style.right = 'auto';
}

/**
 * Guided click-through with glassmorphism card and spotlight highlights.
 * @param {HTMLElement} container - #module-host
 * @param {object} manifest
 */
export function loadGettingStarted(container, manifest) {
  destroyGettingStartedOverlay();

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
        <p class="text-slate-800 leading-relaxed">
          <strong>Sales-Navigator</strong> is your interactive training hub for GPC sales onboarding—modules, practice scenarios, and knowledge checks in one place.
        </p>
        <p class="text-slate-600 text-sm mt-3">
          This short tour walks through how the app is organized so you can move through training with confidence.
        </p>`,
    },
    {
      title: 'Left navigation',
      icon: 'fa-bars',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
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
        <p class="text-slate-800 leading-relaxed mb-3">
          Each training module is built from structured content:
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-2 text-sm">
          <li><strong>Title and summary</strong> at the top set context.</li>
          <li><strong>Five-minute summary</strong> bullets give a fast scan when present.</li>
          <li>Major topics appear as <strong>section cards</strong> (each <code class="text-xs bg-slate-100/90 px-1 rounded">##</code> heading in the source becomes a card).</li>
          <li>Some modules include <strong>reference links</strong> in a side area when provided.</li>
        </ul>`,
    },
    {
      title: 'Scenarios',
      icon: 'fa-comments',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>Scenarios</strong> sit beside the main content on wider screens. You'll get a short situation, a few choices, and feedback—practice for real moments (customer or internal), not a test score.
        </p>
        <p class="text-slate-600 text-sm mb-3">
          The sample in the highlighted area is a quick “find the collateral” moment—live modules use scenarios from your real training.
        </p>
        <p class="text-slate-700 text-sm font-medium border border-orange-200/80 bg-orange-50/50 rounded-lg px-3 py-2">
          <i class="fa-solid fa-hand-pointer text-orange-600 mr-1.5" aria-hidden="true"></i>
          Choose the strongest response in the scenario to unlock <strong>Next</strong>.
        </p>`,
    },
    {
      title: 'Knowledge checks',
      icon: 'fa-circle-question',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>Knowledge checks</strong> usually live in a carousel toward the bottom—quick questions with explanations so you can self-check without pressure.
        </p>
        <p class="text-slate-600 text-sm mb-3">
          The example in the highlighted area is a highly scientific Blair dining survey. Real modules quiz you on the training you just read.
        </p>
        <p class="text-slate-700 text-sm font-medium border border-orange-200/80 bg-orange-50/50 rounded-lg px-3 py-2">
          <i class="fa-solid fa-hand-pointer text-orange-600 mr-1.5" aria-hidden="true"></i>
          Pick the best answer to unlock <strong>Next</strong>.
        </p>`,
    },
    {
      title: 'Executive Map Book',
      icon: 'fa-map',
      body: mapBook
        ? `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>${escapeHtml(mapBook.title)}</strong> is a digital version of our printed map book—often spread on the table as a backdrop for executive customer conversations about footprint, reach, and strategy.
        </p>
        <p class="text-slate-600 text-sm mb-3">
          Open it from the sidebar for full-width maps and executive views; switch back to any training module the same way you got here.
        </p>
        <p class="text-slate-600 text-sm">Same header and sidebar as the rest of Sales-Navigator.</p>`
        : `
        <p class="text-slate-800 leading-relaxed">Map-style resources appear in the navigation when enabled for your build.</p>`,
    },
    {
      title: 'You are set',
      icon: 'fa-circle-check',
      body: `
        <p class="text-slate-800 leading-relaxed mb-4">
          You know how to navigate modules, find practice, and use the map book when needed. When you're ready, jump into your first training module below.
        </p>
        ${
          firstTraining
            ? `<div class="flex flex-wrap gap-3">
          <button type="button" data-goto="${escapeHtml(firstTraining.id)}" class="gs-goto inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 text-sm shadow-sm transition">
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            Open ${escapeHtml(firstTraining.title)}
          </button>
        </div>`
            : ''
        }`,
    },
  ];

  container.innerHTML = buildDemoMarkup();

  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.className = 'fixed inset-0 z-[100] pointer-events-none';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Sales-Navigator quick tour');

  overlay.innerHTML = `
    <div data-tour-dim class="fixed inset-0 bg-slate-900/55 backdrop-blur-[3px] pointer-events-auto transition-opacity"></div>
    <div data-tour-slice class="fixed bg-slate-900/60 backdrop-blur-[2px] pointer-events-auto hidden"></div>
    <div data-tour-slice class="fixed bg-slate-900/60 backdrop-blur-[2px] pointer-events-auto hidden"></div>
    <div data-tour-slice class="fixed bg-slate-900/60 backdrop-blur-[2px] pointer-events-auto hidden"></div>
    <div data-tour-slice class="fixed bg-slate-900/60 backdrop-blur-[2px] pointer-events-auto hidden"></div>
    <div data-tour-ring class="fixed rounded-xl pointer-events-none border-2 border-orange-400/95 shadow-[0_0_0_1px_rgba(251,146,60,0.35),0_0_32px_rgba(251,146,60,0.2)] hidden z-[101]"></div>
    <div id="tour-glass-root" class="fixed inset-0 z-[102] pointer-events-none"></div>
  `;

  document.body.appendChild(overlay);
  overlayEl = overlay;

  const glassRoot = overlay.querySelector('#tour-glass-root');
  let stepIndex = 0;
  let scenarioComplete = false;
  let knowledgeComplete = false;

  function refreshNextGate() {
    const host = glassRoot?.querySelector('.tour-glass-card-host');
    const next = host?.querySelector('.gs-next');
    if (!next) return;
    const blocked =
      (stepIndex === 3 && !scenarioComplete) ||
      (stepIndex === 4 && !knowledgeComplete);
    next.disabled = blocked;
    next.classList.toggle('opacity-50', blocked);
    next.classList.toggle('cursor-not-allowed', blocked);
    next.title = blocked
      ? 'Complete the activity in the highlighted area first.'
      : '';
  }

  /** Recompute spotlight hole + glass card after demo content height changes (e.g. coach note). */
  function syncSpotlightAndCard() {
    const r = getSpotlightRect(stepIndex);
    applySpotlightLayers(overlay, r);
    const host = glassRoot?.querySelector('.tour-glass-card-host');
    if (host) positionGlassCard(host, stepIndex, r);
  }

  function scheduleSpotlightReflow() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        syncSpotlightAndCard();
      });
    });
  }

  function bindDemoInteractions() {
    const root = container;
    const scenarioBtns = root.querySelectorAll('.tour-scenario-opt');
    const knowledgeBtns = root.querySelectorAll('.tour-knowledge-opt');

    scenarioBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const correct = btn.getAttribute('data-tour-correct') === 'true';
        const feedback = root.querySelector('[data-tour-scenario-feedback]');
        const coach = root.querySelector('[data-tour-coach-note]');
        scenarioBtns.forEach((b) => {
          b.classList.remove(
            'ring-2',
            'ring-emerald-500',
            'bg-emerald-50/80',
            'ring-red-400',
            'bg-red-50'
          );
          b.disabled = false;
        });
        if (correct) {
          btn.classList.add('ring-2', 'ring-emerald-500', 'bg-emerald-50/80');
          scenarioComplete = true;
          scenarioBtns.forEach((b) => {
            b.disabled = true;
          });
          if (feedback) {
            feedback.textContent = '';
            feedback.classList.add('hidden');
          }
          if (coach) coach.classList.remove('hidden');
        } else {
          btn.classList.add('ring-2', 'ring-red-400', 'bg-red-50');
          if (feedback) {
            feedback.textContent = 'Not quite—Waldo is in Sales Resources, not in everyone’s inbox.';
            feedback.classList.remove('hidden');
          }
        }
        refreshNextGate();
        scheduleSpotlightReflow();
      });
    });

    knowledgeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const correct = btn.getAttribute('data-tour-correct') === 'true';
        const feedback = root.querySelector('[data-tour-knowledge-feedback]');
        knowledgeBtns.forEach((b) => {
          b.classList.remove(
            'ring-2',
            'ring-emerald-500',
            'bg-emerald-50/80',
            'ring-red-400',
            'bg-red-50'
          );
          b.disabled = false;
        });
        if (correct) {
          btn.classList.add('ring-2', 'ring-emerald-500', 'bg-emerald-50/80');
          knowledgeComplete = true;
          knowledgeBtns.forEach((b) => {
            b.disabled = true;
          });
          if (feedback) {
            feedback.textContent = '';
            feedback.classList.add('hidden');
          }
          const affirm = root.querySelector('[data-tour-knowledge-affirmation]');
          if (affirm) {
            affirm.classList.remove('hidden');
            affirm.classList.add('animate-pulse');
            window.setTimeout(() => affirm.classList.remove('animate-pulse'), 900);
          }
        } else {
          btn.classList.add('ring-2', 'ring-red-400', 'bg-red-50');
          knowledgeComplete = false;
          if (feedback) {
            feedback.textContent = 'Nice try—unless you’re really craving Justin’s tacos.';
            feedback.classList.remove('hidden');
          }
        }
        refreshNextGate();
        scheduleSpotlightReflow();
      });
    });
  }

  bindDemoInteractions();

  function bindCardActions(cardEl) {
    cardEl.querySelector('.gs-next')?.addEventListener('click', () => {
      if (stepIndex === 3 && !scenarioComplete) return;
      if (stepIndex === 4 && !knowledgeComplete) return;
      if (stepIndex < steps.length - 1) {
        stepIndex += 1;
        render();
      }
    });
    cardEl.querySelector('.gs-prev')?.addEventListener('click', () => {
      if (stepIndex > 0) {
        stepIndex -= 1;
        render();
      }
    });
    cardEl.querySelectorAll('.gs-goto').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-goto');
        if (id) setRouteModuleId(id);
      });
    });
  }

  function render() {
    const step = steps[stepIndex];
    const total = steps.length;
    const isLast = stepIndex === total - 1;
    const nextBlocked =
      (stepIndex === 3 && !scenarioComplete) ||
      (stepIndex === 4 && !knowledgeComplete);
    const nextTitle = nextBlocked
      ? 'Complete the activity in the highlighted area first.'
      : '';

    if (stepIndex === 4) {
      document
        .querySelector('[data-tour-target="tour-knowledge"]')
        ?.scrollIntoView({ block: 'center', behavior: 'auto' });
    }

    const rect = getSpotlightRect(stepIndex);
    applySpotlightLayers(overlay, rect);

    if (stepIndex === 5) {
      document
        .querySelector('[data-module-id="map-book"]')
        ?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    const html = `
      <div class="tour-glass-inner rounded-2xl overflow-hidden border border-white/30 bg-gradient-to-b from-white/75 to-white/55 shadow-inner">
        <div class="bg-gradient-to-r from-slate-900/95 to-slate-800/95 text-white px-5 py-4 backdrop-blur-sm">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-orange-300/95 mb-1">Quick tour</p>
          <h2 class="text-lg font-bold flex items-center gap-2">
            <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
              <i class="fa-solid ${escapeHtml(step.icon)} text-sm" aria-hidden="true"></i>
            </span>
            ${escapeHtml(step.title)}
          </h2>
          <div class="mt-3 flex items-center gap-1" role="tablist" aria-label="Tour progress">
            ${steps
              .map(
                (_, i) => `
              <span class="h-1 flex-1 rounded-full transition-colors ${
                i === stepIndex
                  ? 'bg-orange-400'
                  : i < stepIndex
                    ? 'bg-white/45'
                    : 'bg-white/15'
              }"></span>`
              )
              .join('')}
          </div>
          <p class="text-slate-400/90 text-xs mt-1.5">Step ${stepIndex + 1} of ${total}</p>
        </div>
        <div class="px-5 py-4 getting-started-body text-sm max-h-[min(52vh,420px)] overflow-y-auto">${step.body}</div>
        <div class="px-5 py-3 bg-slate-900/[0.03] border-t border-slate-900/10 flex flex-wrap items-center justify-between gap-2 backdrop-blur-sm">
          <button type="button" class="gs-prev inline-flex items-center gap-2 rounded-lg border border-slate-300/80 bg-white/40 px-3 py-2 text-xs font-medium text-slate-800 hover:bg-white/70 disabled:opacity-40 disabled:pointer-events-none transition" ${stepIndex === 0 ? 'disabled' : ''}>
            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
            Back
          </button>
          <div class="flex flex-wrap gap-2">
            ${
              !isLast
                ? `<button type="button" class="gs-next inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:hover:bg-orange-500 text-white font-semibold px-4 py-2 text-xs shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed" ${nextBlocked ? 'disabled' : ''} title="${escapeHtml(nextTitle)}">
              Next
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>`
                : ''
            }
          </div>
        </div>
      </div>`;

    if (!glassRoot) return;
    glassRoot.innerHTML = `<div class="tour-glass-card-host fixed pointer-events-auto max-w-md w-[min(calc(100vw-2rem),28rem)] transition-[left,top,transform] duration-300 ease-out">${html}</div>`;
    bindCardActions(glassRoot);

    requestAnimationFrame(() => {
      const host = glassRoot.querySelector('.tour-glass-card-host');
      if (!host) return;
      positionGlassCard(host, stepIndex, rect);
      requestAnimationFrame(() => positionGlassCard(host, stepIndex, getSpotlightRect(stepIndex)));
    });

    refreshNextGate();
  }

  onResize = () => {
    syncSpotlightAndCard();
  };
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onResize, true);
  onMainScroll = onResize;
  document.getElementById('main-panel')?.addEventListener('scroll', onMainScroll);

  if (window.ResizeObserver) {
    resizeObs = new ResizeObserver(() => onResize());
    const host = document.getElementById('module-host');
    const sb = document.getElementById('sidebar');
    const scenarioEl = container.querySelector('[data-tour-target="tour-scenarios"]');
    const knowledgeEl = container.querySelector('[data-tour-target="tour-knowledge"]');
    if (host) resizeObs.observe(host);
    if (sb) resizeObs.observe(sb);
    if (scenarioEl) resizeObs.observe(scenarioEl);
    if (knowledgeEl) resizeObs.observe(knowledgeEl);
  }

  render();
}
