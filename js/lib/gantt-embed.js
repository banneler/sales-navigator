const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` with a responsive Gantt iframe: fixed aspect ratio
 * (1150 × iframeHeight), uniform scale to card width — no scrollbars on the embed or inside
 * the iframe (see gantt.html overflow rules).
 *
 * @param {HTMLElement} container - #module-host
 * @param {string} moduleId
 * @param {{ iframeHeight?: number }} [options] - design height of chart at 1150px width
 */
export function mountGanttAfterRender(container, moduleId, options = {}) {
  const { iframeHeight = 620 } = options;
  const innerW = GANTT_NATURAL_WIDTH;
  const innerH = iframeHeight;

  const ph = container.querySelector('[data-sn-gantt]');
  if (!ph) return;

  const root = document.createElement('div');
  root.className =
    'sn-gantt-block not-prose my-4 w-[calc(100%+3rem)] max-w-none -mx-6 md:w-[calc(100%+4rem)] md:-mx-8 min-w-0';

  const shell = document.createElement('div');
  shell.className =
    'sn-gantt-viewport relative w-full overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80';
  shell.style.aspectRatio = `${innerW} / ${innerH}`;

  const inner = document.createElement('div');
  inner.className = 'sn-gantt-inner';
  inner.style.cssText = [
    'position:absolute',
    'left:0',
    'top:0',
    `width:${innerW}px`,
    `height:${innerH}px`,
    'transform-origin:top left',
  ].join(';');

  const iframe = document.createElement('iframe');
  iframe.className = 'border-0 block bg-white';
  iframe.setAttribute('width', String(innerW));
  iframe.setAttribute('height', String(innerH));
  iframe.setAttribute('scrolling', 'no');
  iframe.title = 'Gantt chart';
  iframe.loading = 'lazy';
  iframe.style.width = `${innerW}px`;
  iframe.style.height = `${innerH}px`;
  iframe.style.display = 'block';
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
