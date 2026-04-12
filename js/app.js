import { getRouteModuleId, onRouteChange, setRouteModuleId } from './router.js';
import { renderShell, highlightNav } from './components/shell.js';
import { loadAndRenderModule } from './components/module-host.js';
import { loadMapBook } from './components/map-book-host.js';
import {
  loadGettingStarted,
  destroyGettingStartedOverlay,
} from './components/getting-started.js';
import {
  openProgressMap,
  destroyProgressMapOverlay,
} from './components/progress-map-overlay.js';
import { markModuleVisited } from './lib/progress-state.js';
import { destroyModuleIntroGate } from './components/module-intro-gate.js';
import { setMainHeaderInternalBadge } from './lib/header-internal-badge.js';
import { initHandoutPreview } from './lib/handout-links.js';

const MAP_BOOK_MODULE_ID = 'map-book';
const GETTING_STARTED_ID = 'getting-started';

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
  initHandoutPreview();

  const manifest = await res.json();
  const modules = manifest.modules || [];
  const firstId = modules.sort((a, b) => (a.order || 0) - (b.order || 0))[0]?.id;

  async function show(id) {
    if (!id) return;
    const host = document.getElementById('module-host');
    if (!host) return;

    destroyGettingStartedOverlay();
    destroyProgressMapOverlay();
    destroyModuleIntroGate();

    if (id === MAP_BOOK_MODULE_ID || id === GETTING_STARTED_ID) {
      setMainHeaderInternalBadge(false);
    }

    const subtitle = document.querySelector('#main-header p');
    if (subtitle) {
      if (id === MAP_BOOK_MODULE_ID) {
        subtitle.textContent = 'Network maps & executive views';
      } else if (id === GETTING_STARTED_ID) {
        subtitle.textContent = 'Quick tour of Sales-Navigator';
      } else {
        subtitle.textContent = 'Interactive training modules';
      }
    }

    if (id === MAP_BOOK_MODULE_ID) {
      document.body.classList.add('map-book-active');
      await loadMapBook(host);
    } else if (id === GETTING_STARTED_ID) {
      document.body.classList.remove('map-book-active');
      loadGettingStarted(host, manifest);
    } else {
      document.body.classList.remove('map-book-active');
      await loadAndRenderModule(id, host, manifest);
    }
    highlightNav(id);
    markModuleVisited(id);
  }

  renderShell(manifest, (id) => show(id));

  document.getElementById('fiber-path-btn')?.addEventListener('click', () => {
    const id = getRouteModuleId();
    openProgressMap(manifest, id || firstId || '');
  });

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
