const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` with a responsive Gantt iframe: design size
 * 1150 × iframeHeight, uniform scale to fit width; viewport height follows scale (no CSS
 * aspect-ratio — avoids vertical squish in flex layouts).
 *
 * @param {HTMLElement} container - #module-host
 * @param {string} moduleId
 * @param {{
 *   iframeHeight?: number;
 *   fitContentHeight?: boolean;
 *   minIframeHeight?: number;
 *   maxIframeHeight?: number;
 *   heightSlop?: number;
 * }} [options] - design height of chart at 1150px width; optional shrink-to-content
 */
export function mountGanttAfterRender(container, moduleId, options = {}) {
  const {
    iframeHeight = 620,
    fitContentHeight = false,
    minIframeHeight = 200,
    maxIframeHeight = 1200,
    heightSlop = 6,
  } = options;
  const innerW = GANTT_NATURAL_WIDTH;
  let innerH = iframeHeight;

  const ph = container.querySelector('[data-sn-gantt]');
  if (!ph) return;

  const root = document.createElement('div');
  root.className =
    'sn-gantt-block not-prose my-6 md:my-7 w-[calc(100%+3rem)] max-w-none -mx-6 md:w-[calc(100%+4rem)] md:-mx-8 min-w-0 self-start';

  const shell = document.createElement('div');
  shell.className =
    'rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm sm:p-5 md:p-6';

  const viewport = document.createElement('div');
  viewport.className =
    'sn-gantt-viewport relative w-full max-w-full shrink-0 overflow-hidden';

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

  inner.appendChild(iframe);
  viewport.appendChild(inner);
  shell.appendChild(viewport);
  root.appendChild(shell);
  ph.replaceWith(root);

  function setDesignHeight(h) {
    const next = Math.round(h);
    innerH = next;
    inner.style.height = `${next}px`;
    iframe.style.height = `${next}px`;
    iframe.setAttribute('height', String(next));
  }

  /**
   * Explicit height (not CSS aspect-ratio) avoids flex/max-height fighting the box and
   * “pinching” the scaled iframe. Scale is uniform on both axes.
   */
  function applyScale() {
    const w = viewport.getBoundingClientRect().width;
    if (w < 24) return;
    const scale = Math.min(w / innerW, 1);
    const scaledW = innerW * scale;
    const tx = Math.max(0, (w - scaledW) / 2);
    inner.style.transform = `translateX(${tx}px) scale(${scale})`;
    const viewportH = innerH * scale;
    viewport.style.height = `${viewportH}px`;
  }

  /** Prefer .chart-container bounds — html/body offsetHeight often equals iframe height, not content. */
  function measureIframeContentHeight(doc) {
    const body = doc.body;
    if (!body) return 0;
    const chart = doc.querySelector('.chart-container');
    if (chart) {
      const bodyRect = body.getBoundingClientRect();
      const chartRect = chart.getBoundingClientRect();
      const fromBodyTop = Math.ceil(chartRect.bottom - bodyRect.top);
      return Math.max(fromBodyTop, Math.ceil(body.scrollHeight));
    }
    return Math.ceil(
      Math.max(doc.documentElement.scrollHeight, body.scrollHeight),
    );
  }

  function syncContentHeightFromIframe() {
    if (!fitContentHeight) return;
    try {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      const measure = () => {
        const raw = measureIframeContentHeight(doc);
        const next = Math.min(
          Math.max(Math.ceil(raw) + heightSlop, minIframeHeight),
          maxIframeHeight,
        );
        setDesignHeight(next);
        applyScale();
      };
      const run = () =>
        requestAnimationFrame(() => requestAnimationFrame(measure));
      if (doc.fonts?.ready) {
        doc.fonts.ready.then(run).catch(run);
      } else {
        run();
      }
    } catch {
      /* cross-origin */
    }
  }

  applyScale();
  requestAnimationFrame(applyScale);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => applyScale());
    ro.observe(viewport);
  } else {
    window.addEventListener('resize', applyScale);
  }

  iframe.addEventListener('load', () => {
    requestAnimationFrame(applyScale);
    syncContentHeightFromIframe();
    window.setTimeout(() => {
      syncContentHeightFromIframe();
      applyScale();
    }, 150);
  });
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
}
