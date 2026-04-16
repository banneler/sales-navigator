import { setRouteModuleId } from '../router.js';
import { getVisitedModuleIds, markModuleVisited } from '../lib/progress-state.js';
import { modulesInSidebarOrder } from '../lib/module-nav-order.js';

const OVERLAY_ID = 'progress-map-overlay';
const BASE_NODE_WIDTH = 200;
const PADDING_OFFSET = 128;

const MODULE_ICONS = {
  'getting-started': 'fa-circle-play',
  'sales-rules-of-engagement': 'fa-file-lines',
  'sales-process-and-salesforce': 'fa-diagram-project',
  'sales-operations-and-approvals': 'fa-clipboard-check',
  'portfolio-and-business-capabilities': 'fa-briefcase',
  'product-connectivity': 'fa-wifi',
  'product-security-and-sd-wan': 'fa-shield-halved',
  'product-cloud-wifi-and-backup': 'fa-cloud',
  'product-itv': 'fa-tv',
  'product-uc-voice-and-collaboration': 'fa-headset',
  'competitive-positioning': 'fa-chess-knight',
  'account-based-marketing': 'fa-bullseye',
  'operational-business-reviews': 'fa-clipboard-list',
  'map-book': 'fa-map',
};

function iconFor(id) {
  return MODULE_ICONS[id] || 'fa-book';
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectStylesOnce() {
  if (document.getElementById('progress-map-styles')) return;
  const style = document.createElement('style');
  style.id = 'progress-map-styles';
  style.textContent = `
    .progress-map-scroll::-webkit-scrollbar { display: none; }
    .progress-map-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    .lit-fiber-trunk {
      background: linear-gradient(90deg, #ea580c 0%, #f97316 50%, #ea580c 100%);
      background-size: 200% 100%;
      box-shadow: 0 0 10px rgba(249,115,22,0.6);
      transition: width 1.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .pm-celebration-shimmer .lit-fiber-trunk {
      animation: pm-fiber-shimmer 1.2s ease-in-out 1;
    }
    @keyframes pm-fiber-shimmer {
      0%, 100% { filter: brightness(1); box-shadow: 0 0 10px rgba(249,115,22,0.6); }
      50% { filter: brightness(1.15); box-shadow: 0 0 18px rgba(249,115,22,0.85); }
    }
  `;
  document.head.appendChild(style);
}

export function destroyProgressMapOverlay() {
  document.getElementById(OVERLAY_ID)?.remove();
}

/**
 * @param {object} manifest - modules-manifest.json
 * @param {string} currentModuleId
 * @param {{ celebration?: { completedId: string, nextModule: { id: string, title: string } | null } }} [options]
 */
export function openProgressMap(manifest, currentModuleId, options = {}) {
  destroyProgressMapOverlay();
  injectStylesOnce();

  const celebrationOpts = options.celebration || null;
  const isCelebration = !!celebrationOpts;

  const modules = modulesInSidebarOrder(manifest);
  const visited = getVisitedModuleIds();
  const total = modules.length;
  const visitedCount = modules.filter((m) => visited.has(m.id)).length;

  const shellClass = isCelebration
    ? 'bg-white w-full max-w-[min(96vw,960px)] h-[min(68vh,620px)] max-h-[620px] rounded-2xl shadow-2xl flex flex-col relative overflow-hidden border border-slate-200 ring-2 ring-orange-300/30 shadow-[0_0_50px_-8px_rgba(249,115,22,0.28)]'
    : 'bg-white w-full max-w-[90vw] h-[85vh] max-h-[900px] rounded-2xl shadow-2xl flex flex-col relative overflow-hidden border border-slate-200';

  const headerTitleHtml = isCelebration
    ? `<h2 class="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span class="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md shrink-0">
              <i class="fa-solid fa-bolt" aria-hidden="true"></i>
            </span>
            <span class="truncate">Nice work!</span>
          </h2>
          <p class="text-sm text-slate-500 mt-1 font-medium truncate">Your Fiber path is lighting up — watch the route advance.</p>`
    : `<h2 class="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
            <span class="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-orange-100 flex items-center justify-center border border-orange-200 text-orange-500 shrink-0">
              <i class="fa-solid fa-route" aria-hidden="true"></i>
            </span>
            <span class="truncate">Fiber path</span>
          </h2>
          <p class="text-sm text-slate-500 mt-1 font-medium truncate">Your progress across training modules</p>`;

  const mapAreaClass = isCelebration
    ? 'flex-1 relative overflow-hidden bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] min-h-0 pm-celebration-shimmer'
    : 'flex-1 relative overflow-hidden bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] min-h-0';

  const controlsHtml = isCelebration
    ? ''
    : `<div class="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-2 z-40">
          <button type="button" data-pm-center class="bg-white p-2.5 rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors" title="Center on current module">
            <i class="fa-solid fa-crosshairs w-5 h-5" aria-hidden="true"></i>
          </button>
          <div class="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden flex flex-col">
            <button type="button" data-pm-zoom="1" class="p-2.5 hover:bg-slate-50 text-slate-600 border-b border-slate-100 transition-colors" title="Zoom in">
              <i class="fa-solid fa-plus w-5 h-5" aria-hidden="true"></i>
            </button>
            <button type="button" data-pm-zoom="-1" class="p-2.5 hover:bg-slate-50 text-slate-600 transition-colors" title="Zoom out">
              <i class="fa-solid fa-minus w-5 h-5" aria-hidden="true"></i>
            </button>
          </div>
        </div>`;

  const footerHint = isCelebration
    ? 'The fiber carries your progress—open the full map anytime from the header.'
    : 'Tap a node to open or review a module';

  const footerBtnLabel = isCelebration
    ? celebrationOpts?.nextModule?.title
      ? `Continue to ${escapeHtml(celebrationOpts.nextModule.title)}`
      : 'Close'
    : 'Close map';

  const overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.className =
    'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-800/80 backdrop-blur-sm antialiased';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute(
    'aria-label',
    isCelebration ? 'Module completion — Fiber path' : 'Fiber path training progress'
  );

  overlay.innerHTML = `
    <div class="${shellClass}">
      <div class="px-6 md:px-8 py-4 md:py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50 z-30 gap-4">
        <div class="min-w-0">
          ${headerTitleHtml}
        </div>
        <div class="flex items-center gap-4 md:gap-8 shrink-0">
          <div class="text-right">
            <div class="text-2xl md:text-3xl font-black text-slate-800 tabular-nums leading-none tracking-tight">
              <span data-pm-visited class="text-orange-500">${visitedCount}</span><span class="text-slate-300 text-lg md:text-xl">/${total}</span>
            </div>
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Nodes lit</div>
          </div>
          <div class="h-8 md:h-10 w-px bg-slate-200 hidden sm:block" aria-hidden="true"></div>
          <button type="button" data-pm-close class="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors" aria-label="Close map">
            <i class="fa-solid fa-xmark text-xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="${mapAreaClass}">
        ${controlsHtml}

        <div class="w-full h-full overflow-x-auto overflow-y-hidden progress-map-scroll cursor-grab" data-pm-scroll>
          <div data-pm-zoom-wrap class="relative h-full transition-[width] duration-300 ease-out" style="width:0">
            <div data-pm-nodes class="absolute left-0 top-0 h-full flex items-center px-16 py-10 transition-transform duration-300 origin-left select-none" style="transform:scale(1)">
              <div class="absolute top-1/2 left-16 right-16 h-2 bg-slate-200 -translate-y-1/2 rounded-full z-0 border border-slate-300 shadow-inner pointer-events-none"></div>
              <div data-pm-lit class="absolute top-1/2 left-16 h-2 lit-fiber-trunk -translate-y-1/2 rounded-full z-0 w-0 pointer-events-none">
                <div class="absolute top-1/2 -translate-y-1/2 w-3 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff] animate-data-flow-x"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 md:px-8 py-3 md:py-4 border-t border-slate-100 bg-white z-30 flex justify-between items-center gap-4">
        <div class="flex items-center gap-3 min-w-0">
          <span class="relative flex h-3 w-3 shrink-0" aria-hidden="true">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span class="text-sm font-medium text-slate-500 truncate">${footerHint}</span>
        </div>
        <button type="button" data-pm-close-footer class="px-5 md:px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-sm shrink-0">
          ${footerBtnLabel}
          <i class="fa-solid fa-arrow-right text-sm group-hover:translate-x-1" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div id="progress-module-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[210] hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" aria-hidden="true">
      <div data-pm-modal-inner class="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden transform scale-95 transition-transform duration-300">
        <div data-pm-modal-accent class="h-1.5 w-full bg-slate-200"></div>
        <div class="p-6 relative">
          <button type="button" data-pm-modal-x class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Close">
            <i class="fa-solid fa-xmark text-lg" aria-hidden="true"></i>
          </button>
          <div data-pm-modal-icon-wrap class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <i data-pm-modal-icon class="fa-solid fa-book w-6 h-6 text-slate-500" aria-hidden="true"></i>
          </div>
          <h3 data-pm-modal-title class="text-xl font-bold text-slate-800 mb-2 leading-tight pr-8">Module</h3>
          <div class="flex items-center gap-2 mt-4 mb-6">
            <span data-pm-modal-badge class="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500">—</span>
          </div>
          <button type="button" data-pm-modal-action class="w-full py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md"></button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const nodesContainer = overlay.querySelector('[data-pm-nodes]');
  const zoomWrap = overlay.querySelector('[data-pm-zoom-wrap]');
  const scrollArea = overlay.querySelector('[data-pm-scroll]');

  let currentZoom = 1;
  let modulesData = modules.map((m) => ({
    id: m.id,
    title: m.title,
    icon: iconFor(m.id),
    visited: visited.has(m.id),
    active: m.id === currentModuleId,
  }));

  function delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function runCelebrationSequence() {
    if (!celebrationOpts) return;
    const { completedId, nextModule } = celebrationOpts;
    const completedIdx = modulesData.findIndex((m) => m.id === completedId);
    const nextIdx = nextModule
      ? modulesData.findIndex((m) => m.id === nextModule.id)
      : -1;

    /* <1 zooms the strip out so more nodes fit (was 1.12–1.38 which magnified). */
    currentZoom = 0.78;
    const nodesEl = overlay.querySelector('[data-pm-nodes]');
    const wrapper = overlay.querySelector('[data-pm-zoom-wrap]');
    if (nodesEl) nodesEl.style.transform = `scale(${currentZoom})`;
    if (wrapper) {
      const baseWidth = total * BASE_NODE_WIDTH + PADDING_OFFSET;
      wrapper.style.width = `${baseWidth * currentZoom}px`;
    }

    const litEl = overlay.querySelector('[data-pm-lit]');
    /** @param {boolean} [instant] - no CSS transition (for “already lit” initial state) */
    function setLitToNode(nodeIdx, instant = false) {
      const node = overlay.querySelector(`[data-pm-node="${nodeIdx}"]`);
      if (!node || !litEl) return;
      const width = node.offsetLeft + node.offsetWidth / 2 - 64;
      if (instant) {
        litEl.style.transition = 'none';
      }
      litEl.style.width = `${Math.max(0, width)}px`;
      if (instant) {
        void litEl.offsetHeight;
        litEl.style.transition = '';
      }
    }
    function scrollToIdx(idx, behavior) {
      const node = overlay.querySelector(`[data-pm-node="${idx}"]`);
      if (node && scrollArea) {
        const scaledLeft = node.offsetLeft * currentZoom;
        const scaledWidth = node.offsetWidth * currentZoom;
        const targetScroll =
          scaledLeft - scrollArea.offsetWidth / 2 + scaledWidth / 2;
        scrollArea.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: behavior || 'smooth',
        });
      }
    }
    function pulseNode(idx) {
      const wrap = overlay.querySelector(`[data-pm-node="${idx}"]`);
      const card = wrap?.querySelector('.rounded-2xl.p-5');
      card?.classList.add('animate-celebrate-node');
      window.setTimeout(() => card?.classList.remove('animate-celebrate-node'), 1100);
    }

    if (completedIdx < 0) {
      updateBackbone();
      centerActiveNode();
      return;
    }

    /* Path is already “live” to the module you finished — snap the lit trunk there (no grow-in). */
    setLitToNode(completedIdx, true);
    scrollToIdx(completedIdx, 'auto');

    if (nextIdx >= 0 && nextIdx !== completedIdx) {
      /* Only animate the new segment: extend fiber toward the next stop. */
      await delay(220);
      setLitToNode(nextIdx, false);
      scrollToIdx(nextIdx, 'smooth');
      await delay(1200);
      pulseNode(nextIdx);
    } else {
      await delay(200);
      pulseNode(completedIdx);
    }

    await delay(200);
    updateBackbone();
  }

  function renderNodes() {
    if (!nodesContainer) return;
    const backboneBg = nodesContainer.children[0]?.outerHTML;
    const litEl = nodesContainer.querySelector('[data-pm-lit]')?.outerHTML;
    const staticParts = [backboneBg, litEl].filter(Boolean).join('');
    let html = staticParts;

    modulesData.forEach((mod, index) => {
      const isTopNode = index % 2 === 0;
      const isCompleted = mod.visited && !mod.active;
      const isActive = mod.active;

      const dotStyle = isCompleted
        ? 'bg-orange-500 ring-4 ring-orange-100 shadow-md'
        : isActive
          ? 'bg-white border-[5px] border-orange-500 animate-pulse-glow'
          : 'bg-slate-300 border-4 border-white';

      const lateralStyle =
        isCompleted || isActive
          ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]'
          : 'bg-slate-200';
      const lateralPosition = isTopNode
        ? 'bottom: 50%; height: 30%;'
        : 'top: 50%; height: 30%;';

      const cardPosition = isTopNode ? 'top-0' : 'bottom-0';
      const cardHoverAnim = isTopNode
        ? 'hover:-translate-y-2'
        : 'hover:translate-y-2';

      const cardBorder = isCompleted
        ? 'border-orange-500 shadow-sm'
        : isActive
          ? 'border-orange-500 ring-4 ring-orange-500/20 shadow-md z-30'
          : 'border-slate-200 opacity-80 hover:opacity-100';

      const iconBox = isCompleted
        ? 'bg-orange-50 text-orange-500'
        : isActive
          ? 'bg-orange-500 text-white shadow-inner'
          : 'bg-slate-100 text-slate-400';

      const badge =
        isCompleted && !isActive
          ? `<div class="absolute -top-3 -right-2 bg-white border-2 border-orange-500 text-orange-500 w-6 h-6 rounded-full flex items-center justify-center shadow-sm z-30"><i class="fa-solid fa-check text-[10px]" aria-hidden="true"></i></div>`
          : isActive
            ? `<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-30 tracking-wider whitespace-nowrap">You are here</div>`
            : '';

      const packetAnimClass = isTopNode
        ? 'animate-data-flow-up'
        : 'animate-data-flow-down';
      const packetAnim =
        isCompleted || isActive
          ? `<div class="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_#fff] ${packetAnimClass} z-10"></div>`
          : '';

      const safeTitle = escapeHtml(mod.title);
      const safeId = escapeHtml(mod.id);

      html += `
        <div class="relative w-[200px] h-[480px] flex-shrink-0 group" data-pm-node="${index}">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-4 sm:h-4 rounded-full z-20 ${dotStyle} transition-all duration-500 cursor-pointer pm-clickable" data-pm-open="${safeId}" role="button" tabindex="0"></div>
          <div class="absolute left-1/2 w-1 -translate-x-1/2 z-10 transition-colors duration-500 ${lateralStyle} rounded-full overflow-hidden pointer-events-none" style="${lateralPosition}">
            ${packetAnim}
          </div>
          <div class="absolute w-[180px] left-1/2 -translate-x-1/2 ${cardPosition} ${cardHoverAnim} transition-transform duration-300 z-30 py-4 cursor-pointer pm-clickable" data-pm-open="${safeId}" role="button" tabindex="0">
            <div class="relative bg-white border-2 ${cardBorder} rounded-2xl p-5 flex flex-col items-center justify-center text-center h-[160px] transition-all duration-300">
              ${badge}
              <div class="w-12 h-12 rounded-full ${iconBox} flex items-center justify-center mb-3 transition-colors">
                <i class="fa-solid ${mod.icon} w-6 h-6" aria-hidden="true"></i>
              </div>
              <h3 class="font-bold text-slate-800 text-sm leading-tight">${safeTitle}</h3>
            </div>
          </div>
        </div>`;
    });

    nodesContainer.innerHTML = html;

    const v = overlay.querySelector('[data-pm-visited]');
    if (v) {
      v.textContent = String(modulesData.filter((m) => m.visited).length);
    }

    const baseWidth = total * BASE_NODE_WIDTH + PADDING_OFFSET;
    if (zoomWrap) zoomWrap.style.width = `${baseWidth * currentZoom}px`;

    requestAnimationFrame(() => {
      if (celebrationOpts) {
        void runCelebrationSequence();
      } else {
        updateBackbone();
        centerActiveNode();
      }
    });
  }

  function updateBackbone() {
    const activeIdx = modulesData.findIndex((m) => m.active);
    const targetIdx =
      activeIdx !== -1 ? activeIdx : modulesData.length - 1;
    const targetNode = overlay.querySelector(`[data-pm-node="${targetIdx}"]`);
    const litEl = overlay.querySelector('[data-pm-lit]');
    if (targetNode && litEl) {
      const width =
        targetNode.offsetLeft + targetNode.offsetWidth / 2 - 64;
      litEl.style.width = `${Math.max(0, width)}px`;
    }
  }

  function zoomMap(direction) {
    currentZoom += direction * 0.15;
    currentZoom = Math.max(0.5, Math.min(currentZoom, 1.3));
    const container = overlay.querySelector('[data-pm-nodes]');
    const wrapper = overlay.querySelector('[data-pm-zoom-wrap]');
    if (container) container.style.transform = `scale(${currentZoom})`;
    if (wrapper) {
      const baseWidth = total * BASE_NODE_WIDTH + PADDING_OFFSET;
      wrapper.style.width = `${baseWidth * currentZoom}px`;
    }
  }

  function centerActiveNode() {
    const activeIdx = modulesData.findIndex((m) => m.active);
    const targetIdx = activeIdx !== -1 ? activeIdx : modulesData.length - 1;
    const targetNode = overlay.querySelector(`[data-pm-node="${targetIdx}"]`);
    if (targetNode && scrollArea) {
      const scaledLeft = targetNode.offsetLeft * currentZoom;
      const scaledWidth = targetNode.offsetWidth * currentZoom;
      const targetScroll =
        scaledLeft - scrollArea.offsetWidth / 2 + scaledWidth / 2;
      scrollArea.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      });
    }
  }

  function openModal(modId) {
    const mod = modulesData.find((m) => m.id === modId);
    if (!mod) return;

    const modal = overlay.querySelector('#progress-module-modal');
    const inner = overlay.querySelector('[data-pm-modal-inner]');
    const titleEl = overlay.querySelector('[data-pm-modal-title]');
    const badge = overlay.querySelector('[data-pm-modal-badge]');
    const action = overlay.querySelector('[data-pm-modal-action]');
    const accent = overlay.querySelector('[data-pm-modal-accent]');
    const iconWrap = overlay.querySelector('[data-pm-modal-icon-wrap]');
    const iconEl = overlay.querySelector('[data-pm-modal-icon]');

    if (titleEl) titleEl.textContent = mod.title;

    if (mod.active && action && badge && accent && iconWrap && iconEl) {
      badge.textContent = 'Current module';
      badge.className =
        'px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-orange-500 text-white shadow-sm';
      action.innerHTML =
        '<span>Return to module</span><i class="fa-solid fa-arrow-right w-4 h-4" aria-hidden="true"></i>';
      action.className =
        'w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-[0_4px_14px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2';
      accent.className = 'h-1.5 w-full bg-orange-500';
      iconWrap.className =
        'w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500';
      iconEl.className = `fa-solid ${mod.icon} w-6 h-6 text-orange-500`;
      action.onclick = () => {
        closeModal();
        destroyProgressMapOverlay();
      };
    } else if (mod.visited && action && badge && accent && iconWrap && iconEl) {
      badge.textContent = 'Visited';
      badge.className =
        'px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-orange-100 text-orange-600 border border-orange-200';
      action.innerHTML =
        '<span>Review module</span><i class="fa-solid fa-rotate-left w-4 h-4" aria-hidden="true"></i>';
      action.className =
        'w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2';
      accent.className = 'h-1.5 w-full bg-orange-500';
      iconWrap.className =
        'w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500';
      iconEl.className = `fa-solid ${mod.icon} w-6 h-6 text-orange-500`;
      action.onclick = () => {
        markModuleVisited(mod.id);
        setRouteModuleId(mod.id);
        destroyProgressMapOverlay();
      };
    } else if (action && badge && accent && iconWrap && iconEl) {
      badge.textContent = 'Not started';
      badge.className =
        'px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 border border-slate-200';
      action.innerHTML =
        '<span>Open module</span><i class="fa-solid fa-arrow-right w-4 h-4" aria-hidden="true"></i>';
      action.className =
        'w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md';
      accent.className = 'h-1.5 w-full bg-slate-300';
      iconWrap.className =
        'w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400';
      iconEl.className = `fa-solid ${mod.icon} w-6 h-6 text-slate-400`;
      action.onclick = () => {
        markModuleVisited(mod.id);
        setRouteModuleId(mod.id);
        destroyProgressMapOverlay();
      };
    }

    if (modal && inner) {
      modal.classList.remove('hidden');
      modal.classList.remove('opacity-0');
      modal.setAttribute('aria-hidden', 'false');
      inner.classList.remove('scale-95');
    }
  }

  function closeModal() {
    const modal = overlay.querySelector('#progress-module-modal');
    const inner = overlay.querySelector('[data-pm-modal-inner]');
    if (modal && inner) {
      modal.classList.add('opacity-0');
      inner.classList.add('scale-95');
      modal.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }
  }

  function bindOpenClicks() {
    overlay.querySelectorAll('[data-pm-open]').forEach((el) => {
      el.addEventListener('click', (e) => {
        const id = el.getAttribute('data-pm-open');
        if (id) openModal(id);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = el.getAttribute('data-pm-open');
          if (id) openModal(id);
        }
      });
    });
  }

  function setupDragToScroll() {
    if (!scrollArea) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    scrollArea.addEventListener('mousedown', (e) => {
      if (
        e.target.closest('.pm-clickable') ||
        e.target.closest('button')
      ) {
        return;
      }
      isDown = true;
      scrollArea.classList.add('cursor-grabbing');
      scrollArea.classList.remove('cursor-grab');
      startX = e.pageX - scrollArea.offsetLeft;
      scrollLeft = scrollArea.scrollLeft;
    });
    scrollArea.addEventListener('mouseleave', () => {
      isDown = false;
      scrollArea.classList.remove('cursor-grabbing');
      scrollArea.classList.add('cursor-grab');
    });
    scrollArea.addEventListener('mouseup', () => {
      isDown = false;
      scrollArea.classList.remove('cursor-grabbing');
      scrollArea.classList.add('cursor-grab');
    });
    scrollArea.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollArea.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollArea.scrollLeft = scrollLeft - walk;
    });
  }

  renderNodes();
  bindOpenClicks();
  setupDragToScroll();

  overlay.querySelectorAll('[data-pm-close], [data-pm-close-footer]').forEach((btn) => {
    btn.addEventListener('click', () => destroyProgressMapOverlay());
  });

  overlay.querySelector('[data-pm-center]')?.addEventListener('click', centerActiveNode);
  overlay.querySelector('[data-pm-zoom="1"]')?.addEventListener('click', () => {
    zoomMap(1);
    requestAnimationFrame(() => updateBackbone());
  });
  overlay.querySelector('[data-pm-zoom="-1"]')?.addEventListener('click', () => {
    zoomMap(-1);
    requestAnimationFrame(() => updateBackbone());
  });

  overlay.querySelector('[data-pm-modal-x]')?.addEventListener('click', closeModal);
  overlay.querySelector('#progress-module-modal')?.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'progress-module-modal') closeModal();
  });

  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = overlay.querySelector('#progress-module-modal');
      if (modal && !modal.classList.contains('hidden')) {
        closeModal();
      } else {
        destroyProgressMapOverlay();
      }
    }
  });

  requestAnimationFrame(() => {
    const firstBtn = overlay.querySelector('[data-pm-close]');
    firstBtn?.focus();
  });
}
