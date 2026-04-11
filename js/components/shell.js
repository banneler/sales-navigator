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
          <button type="button" data-module-id="${escapeHtml(m.id)}" class="nav-module w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-900 transition border border-transparent hover:border-orange-100">
            ${escapeHtml(m.title)}
          </button>
        </li>`
          )
          .join('')}
      </ul>
    </div>`);
  }

  const appTitle = manifest.appTitle || 'Sales-Navigator';

  const root = document.getElementById('app-root');
  if (!root) return;

  root.innerHTML = `
    <div class="flex flex-1 overflow-hidden min-h-0 min-w-0">
      <aside id="sidebar" class="min-w-[220px] w-80 max-w-[90vw] shrink-0 bg-white border-r border-slate-200 shadow-inner flex flex-col min-h-0 h-full overflow-y-auto overflow-x-hidden transition-[width] duration-200 ease-out relative">
        <button type="button" id="sidebar-toggle" class="absolute z-10 top-3 right-2 w-8 h-8 flex items-center justify-center rounded-lg transition text-slate-400 hover:text-slate-600 hover:bg-slate-100" title="Minimize sidebar">
          <i id="sidebar-icon-minimize" class="fa-solid fa-grip-lines-vertical text-lg"></i>
          <i id="sidebar-icon-expand" class="fa-solid fa-chevron-right text-lg hidden"></i>
        </button>
        <div id="sidebar-content" class="flex flex-col w-full flex-1 min-h-0 p-4 pt-14">
          <div class="border-b border-slate-100 pb-4 mb-6">
            <p class="text-xs text-slate-500 mb-1">Onboarding</p>
            <h2 class="text-lg font-bold text-slate-900">${escapeHtml(appTitle)}</h2>
            <p class="text-xs text-slate-500 mt-1">Supplement to physical tours</p>
          </div>
          <nav class="flex-1 min-h-0 overflow-y-auto">${navHtml.join('')}</nav>
          <div class="pt-4 mt-auto border-t border-slate-100">
            <a href="admin.html" class="text-sm font-semibold text-orange-600 hover:text-orange-700">Content admin (GitHub)</a>
          </div>
        </div>
      </aside>
      <main id="main-panel" class="flex-1 overflow-y-auto min-h-0 min-w-0 bg-slate-100 p-6 md:p-8">
        <div id="module-host" class="max-w-[1100px] mx-auto min-h-[200px]"></div>
      </main>
    </div>
  `;

  root.querySelectorAll('.nav-module').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-module-id');
      if (id) {
        setRouteModuleId(id);
        onSelect(id);
        highlightNav(id);
      }
    });
  });

  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  const iconMin = document.getElementById('sidebar-icon-minimize');
  const iconExp = document.getElementById('sidebar-icon-expand');
  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('sidebar-collapsed');
    iconMin?.classList.toggle('hidden');
    iconExp?.classList.toggle('hidden');
  });

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
    #sidebar.sidebar-collapsed { width: 3rem !important; min-width: 3rem !important; max-width: 3rem !important; padding-left: 0.25rem; padding-right: 0.25rem; }
    #sidebar.sidebar-collapsed #sidebar-content { display: none !important; }
    #sidebar #sidebar-toggle { right: 0.25rem; }
    #sidebar.sidebar-collapsed #sidebar-toggle { right: 50%; transform: translateX(50%); }
  `;
  document.head.appendChild(style);
}
