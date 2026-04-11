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

  const toolbar = document.createElement('div');
  toolbar.className = 'max-w-[1600px] mx-auto w-full px-0 md:px-0';
  toolbar.innerHTML = buildHandoutToolbarHtml('map-book');

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
  container.appendChild(toolbar);
  container.appendChild(wrap);
}
