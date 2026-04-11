import renderMarkdownModule from './markdown-module.js';
import { setMainHeaderInternalBadge } from '../lib/header-internal-badge.js';

/**
 * @param {string} moduleId
 * @param {HTMLElement} container
 */
export async function loadAndRenderModule(moduleId, container) {
  setMainHeaderInternalBadge(false);

  container.className = 'w-full max-w-[1600px] mx-auto min-h-[200px] px-0';

  container.innerHTML = `
    <div class="flex items-center justify-center py-16 text-slate-500 gap-3">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      <span class="font-medium">Loading module…</span>
    </div>`;

  const baseUrl = new URL('.', window.location.href);
  const mdUrl = new URL(`modules/${moduleId}/content.md`, baseUrl).href;

  let markdownText;
  try {
    const res = await fetch(mdUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    markdownText = await res.text();
  } catch (e) {
    setMainHeaderInternalBadge(false);
    container.innerHTML = `
      <div class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6">
        <p class="font-bold">Could not load content for module <code>${escapeHtml(moduleId)}</code>.</p>
        <p class="text-sm mt-2">Serve from a local web server (e.g. <code>npx serve .</code>) so <code>modules/&lt;id&gt;/content.md</code> can be fetched.</p>
      </div>`;
    console.error(e);
    return;
  }

  // Sales-Navigator modules are an internal training surface—show the header pill on every module.
  setMainHeaderInternalBadge(true);

  try {
    const moduleUrl = new URL(`modules/${moduleId}/module.js`, baseUrl).href;
    const mod = await import(moduleUrl);
    const render = mod.default || renderMarkdownModule;
    container.innerHTML = '';
    render(container, markdownText);
  } catch (e) {
    container.innerHTML = '';
    renderMarkdownModule(container, markdownText);
    console.warn('Falling back to default markdown renderer:', e);
  }
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
