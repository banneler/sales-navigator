import { setRouteModuleId } from '../router.js';

let manifestData = null;

function byCategory(modules) {
  const map = new Map();
  for (const m of modules) {
    const c = m.category || 'General';
    if (!map.has(c)) map.set(c, []);
    map.get(c).push(m);
  }
  return map;
}

/**
 * @param {object} manifest - modules-manifest.json
 * @param {(id: string) => void} onSelect
 */
export function renderShell(manifest, onSelect) {
  manifestData = manifest;
  const modules = [...(manifest.modules || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  const grouped = byCategory(modules);

  const navHtml = [];
  for (const [category, items] of grouped) {
    navHtml.push(`<div class="mb-4">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">${escapeHtml(category)}</div>
      <ul class="space-y-1">
        ${items
          .map(
            (m) => `
        <li>
          <button type="button" data-module-id="${escapeHtml(m.id)}" class="nav-module w-full text-left px-3 py-3 sm:py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-900 transition border border-transparent hover:border-orange-100">
            ${escapeHtml(m.title)}
          </button>
        </li>`
          )
          .join('')}
      </ul>
    </div>`);
  }

  const root = document.getElementById('app-root');
  if (!root) return;

  root.innerHTML = `
    <div id="sidebar-backdrop" class="fixed inset-0 bg-black/40 z-30 hidden md:hidden" aria-hidden="true"></div>
    <div class="flex flex-1 overflow-hidden min-h-0 min-w-0">
      <aside id="sidebar" class="fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] -translate-x-full md:relative md:translate-x-0 md:w-80 md:max-w-[90vw] shrink-0 bg-white border-r border-slate-200 shadow-lg md:shadow-inner flex flex-col min-h-0 h-full overflow-y-auto overflow-x-hidden transition-transform duration-200 ease-out">
        <button type="button" id="sidebar-toggle" class="absolute z-10 top-3 right-2 w-10 h-10 flex items-center justify-center rounded-lg transition text-slate-400 hover:text-slate-600 hover:bg-slate-100" title="Close menu" aria-label="Close menu">
          <i id="sidebar-icon-minimize" class="fa-solid fa-xmark text-lg md:hidden" aria-hidden="true"></i>
          <i id="sidebar-icon-chevron-left" class="fa-solid fa-chevron-left text-lg hidden md:block" aria-hidden="true"></i>
          <i id="sidebar-icon-expand" class="fa-solid fa-chevron-right text-lg hidden" aria-hidden="true"></i>
        </button>
        <div id="sidebar-content" class="flex flex-col w-full flex-1 min-h-0 p-4 pt-14">
          <nav class="flex-1 min-h-0 overflow-y-auto">${navHtml.join('')}</nav>
          <div class="shrink-0 mt-4 pt-4 border-t border-slate-200 flex justify-center">
            <span id="header-internal-badge" class="hidden inline-flex items-center rounded-full bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 border border-amber-200/90" aria-hidden="true">Internal</span>
          </div>
        </div>
      </aside>
      <main id="main-panel" class="flex-1 overflow-y-auto min-h-0 min-w-0 bg-slate-100 p-4 sm:p-6 md:p-8">
        <div id="module-host" class="w-full max-w-[1600px] mx-auto min-h-[200px] px-0"></div>
      </main>
    </div>
  `;

  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const toggle = document.getElementById('sidebar-toggle');
  const iconChevLeft = document.getElementById('sidebar-icon-chevron-left');
  const iconExp = document.getElementById('sidebar-icon-expand');

  const isMobile = () => window.innerWidth < 768;

  function openMobileDrawer() {
    sidebar?.classList.remove('-translate-x-full');
    sidebar?.classList.add('translate-x-0');
    backdrop?.classList.remove('hidden');
  }

  function closeMobileDrawer() {
    sidebar?.classList.add('-translate-x-full');
    sidebar?.classList.remove('translate-x-0');
    backdrop?.classList.add('hidden');
  }

  root.querySelectorAll('.nav-module').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-module-id');
      if (id) {
        setRouteModuleId(id);
        onSelect(id);
        highlightNav(id);
        if (isMobile()) closeMobileDrawer();
      }
    });
  });

  toggle?.addEventListener('click', () => {
    if (isMobile()) {
      closeMobileDrawer();
      return;
    }
    sidebar?.classList.toggle('sidebar-collapsed');
    const collapsed = sidebar?.classList.contains('sidebar-collapsed');
    iconChevLeft?.classList.toggle('hidden', !!collapsed);
    iconExp?.classList.toggle('hidden', !collapsed);
    toggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
    toggle.setAttribute('title', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
  });

  backdrop?.addEventListener('click', closeMobileDrawer);

  window._openMobileNav = openMobileDrawer;

  injectSidebarCollapseStyles();
}

export function highlightNav(activeId) {
  document.querySelectorAll('.nav-module').forEach((btn) => {
    const id = btn.getAttribute('data-module-id');
    const isActive = id === activeId;
    btn.classList.toggle('bg-orange-50', isActive);
    btn.classList.toggle('text-orange-900', isActive);
    btn.classList.toggle('border-orange-200', isActive);
    btn.classList.toggle('shadow-sm', isActive);
  });
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectSidebarCollapseStyles() {
  if (document.getElementById('sidebar-collapse-style')) return;
  const style = document.createElement('style');
  style.id = 'sidebar-collapse-style';
  style.textContent = `
    @media (min-width: 768px) {
      #sidebar.sidebar-collapsed { width: 3rem !important; min-width: 3rem !important; max-width: 3rem !important; padding-left: 0.25rem; padding-right: 0.25rem; }
      #sidebar.sidebar-collapsed #sidebar-content { display: none !important; }
      #sidebar #sidebar-toggle { right: 0.25rem; }
      #sidebar.sidebar-collapsed #sidebar-toggle { right: 50%; transform: translateX(50%); }
    }
  `;
  document.head.appendChild(style);
}
