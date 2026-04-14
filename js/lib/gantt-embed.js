const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` with a Gantt iframe scaled to **fill the host width**
 * (ResizeObserver + uniform scale). Natural chart width in HTML is 1150px.
 *
 * @param {HTMLElement} container - #module-host
 * @param {string} moduleId
 * @param {{ iframeHeight?: number }} [options] - pixel height of iframe content at 1150px width
 */
export function mountGanttAfterRender(container, moduleId, options = {}) {
  const { iframeHeight = 620 } = options;
  const innerW = GANTT_NATURAL_WIDTH;
  const innerH = iframeHeight;

  const ph = container.querySelector('[data-sn-gantt]');
  if (!ph) return;

  const root = document.createElement('div');
  /* Full width of section card: negate module section horizontal padding (p-6 / md:p-8). */
  root.className =
    'sn-gantt-block not-prose my-4 w-[calc(100%+3rem)] max-w-none -mx-6 md:w-[calc(100%+4rem)] md:-mx-8 min-w-0';

  const shell = document.createElement('div');
  shell.className =
    'sn-gantt-viewport w-full overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80';

  const inner = document.createElement('div');
  inner.className = 'sn-gantt-inner';
  inner.style.width = `${innerW}px`;
  inner.style.height = `${innerH}px`;
  inner.style.transformOrigin = 'top left';

  const iframe = document.createElement('iframe');
  iframe.className = 'border-0 block bg-white';
  iframe.style.width = `${innerW}px`;
  iframe.style.height = `${innerH}px`;
  iframe.title = 'Gantt chart';
  iframe.loading = 'lazy';
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;

  inner.appendChild(iframe);
  shell.appendChild(inner);
  root.appendChild(shell);
  ph.replaceWith(root);

  function applyScale() {
    const w = root.getBoundingClientRect().width;
    if (w < 32) return;
    const s = w / innerW;
    inner.style.transform = `scale(${s})`;
    shell.style.height = `${innerH * s}px`;
  }

  applyScale();
  requestAnimationFrame(applyScale);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => applyScale());
    ro.observe(root);
  } else {
    window.addEventListener('resize', applyScale);
  }

  iframe.addEventListener('load', () => {
    requestAnimationFrame(applyScale);
  });
}
