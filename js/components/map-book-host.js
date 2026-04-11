import { buildHandoutToolbarHtml } from '../lib/handout-links.js';

/**
 * Mounts the tactical Executive Map Book inside the module host (same-origin iframe).
 * Keeps Sales-Navigator chrome only; map UI runs in map-book/embed.html.
 *
 * @param {HTMLElement} container
 */
export async function loadMapBook(container) {
  container.innerHTML = '';
  container.className =
    'w-full max-w-[1600px] mx-auto min-h-0 px-0 flex flex-col flex-1';

  const header = document.createElement('div');
  header.className =
    'flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 pb-4 border-b border-slate-200/90 mb-2 shrink-0';
  header.innerHTML = `
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Executive Map Book</h2>
      <p class="text-slate-600 mt-2 text-sm max-w-3xl">Network maps and executive narratives for footprint and strategy conversations.</p>
    </div>
    ${buildHandoutToolbarHtml('map-book')}
  `;

  const wrap = document.createElement('div');
  wrap.className = 'map-book-frame flex flex-col flex-1 min-h-0 w-full';

  const iframe = document.createElement('iframe');
  iframe.title = 'Executive Map Book';
  iframe.className =
    'w-full flex-1 min-h-0 border-0 bg-slate-100 rounded-none';
  iframe.src = new URL('map-book/embed.html', window.location.href).href;
  iframe.setAttribute('loading', 'eager');
  iframe.setAttribute('referrerpolicy', 'no-referrer');

  wrap.appendChild(iframe);
  container.appendChild(header);
  container.appendChild(wrap);
}
