import renderStandardModule from './standard-module.js';

/**
 * @param {string} moduleId
 * @param {HTMLElement} container
 */
export async function loadAndRenderModule(moduleId, container) {
  container.innerHTML = `
    <div class="flex items-center justify-center py-16 text-slate-500 gap-3">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      <span class="font-medium">Loading module…</span>
    </div>`;

  const baseUrl = new URL('.', window.location.href);
  const jsonUrl = new URL(`modules/${moduleId}/content.json`, baseUrl).href;

  let content;
  try {
    const res = await fetch(jsonUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    content = await res.json();
  } catch (e) {
    container.innerHTML = `
      <div class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-6">
        <p class="font-bold">Could not load content for module <code>${escapeHtml(moduleId)}</code>.</p>
        <p class="text-sm mt-2">Serve from a local web server (e.g. <code>npx serve .</code>) so <code>modules/</code> JSON can be fetched.</p>
      </div>`;
    console.error(e);
    return;
  }

  try {
    const moduleUrl = new URL(`modules/${moduleId}/module.js`, baseUrl).href;
    const mod = await import(moduleUrl);
    const render = mod.default || renderStandardModule;
    container.innerHTML = '';
    render(container, content);
  } catch (e) {
    container.innerHTML = '';
    renderStandardModule(container, content);
    console.warn('Falling back to standard renderer:', e);
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
