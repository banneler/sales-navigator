import { getRouteModuleId, onRouteChange, setRouteModuleId } from './router.js';
import { renderShell, highlightNav } from './components/shell.js';
import { loadAndRenderModule } from './components/module-host.js';
import { loadMapBook } from './components/map-book-host.js';

const MAP_BOOK_MODULE_ID = 'map-book';

async function main() {
  const res = await fetch('modules-manifest.json', { cache: 'no-store' });
  if (!res.ok) {
    const root = document.getElementById('app-root');
    if (root) {
      root.innerHTML =
        '<p class="text-red-600 p-6">Missing modules-manifest.json</p>';
    }
    return;
  }
  const manifest = await res.json();
  const modules = manifest.modules || [];
  const firstId = modules.sort((a, b) => (a.order || 0) - (b.order || 0))[0]?.id;

  async function show(id) {
    if (!id) return;
    const host = document.getElementById('module-host');
    if (!host) return;

    const subtitle = document.querySelector('#main-header p');
    if (subtitle) {
      subtitle.textContent =
        id === MAP_BOOK_MODULE_ID
          ? 'Network maps & executive views'
          : 'Interactive training modules';
    }

    if (id === MAP_BOOK_MODULE_ID) {
      document.body.classList.add('map-book-active');
      await loadMapBook(host);
    } else {
      document.body.classList.remove('map-book-active');
      await loadAndRenderModule(id, host);
    }
    highlightNav(id);
  }

  renderShell(manifest, (id) => show(id));

  function route() {
    let id = getRouteModuleId();
    if (!id && firstId) {
      id = firstId;
      setRouteModuleId(id);
    }
    if (id) show(id);
  }

  onRouteChange(route);
  route();
}

main().catch(console.error);
