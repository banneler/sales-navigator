/**
 * Mounts the tactical Executive Map Book inside the module host (same-origin iframe).
 * Keeps Sales-Navigator chrome only; map UI runs in map-book/embed.html.
 *
 * @param {HTMLElement} container
 */
export async function loadMapBook(container) {
  container.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className =
    'map-book-frame flex flex-col flex-1 min-h-0 w-full max-w-[1600px] mx-auto';

  const header = document.createElement('div');
  header.className =
    'shrink-0 rounded-t-2xl border border-b-0 border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 px-4 py-4 sm:px-6 shadow-sm';
  header.innerHTML = `
    <h2 class="text-xl font-bold text-slate-900 tracking-tight">Executive Map Book</h2>
    <p class="text-sm text-slate-600 mt-1 max-w-prose">Network maps and executive views—same full-width layout as training modules.</p>
  `;

  const iframe = document.createElement('iframe');
  iframe.title = 'Executive Map Book';
  iframe.className =
    'w-full flex-1 min-h-0 border-0 bg-slate-100 rounded-b-2xl border border-t-0 border-slate-200/80 shadow-inner';
  iframe.src = new URL('map-book/embed.html', window.location.href).href;
  iframe.setAttribute('loading', 'eager');
  iframe.setAttribute('referrerpolicy', 'no-referrer');

  wrap.appendChild(header);
  wrap.appendChild(iframe);
  container.appendChild(wrap);
}
