const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` with a responsive Gantt iframe: fixed aspect ratio
 * (1150 × iframeHeight), uniform scale to fit the **padded** chart area — no scrollbars.
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
    'sn-gantt-block not-prose my-6 md:my-7 w-[calc(100%+3rem)] max-w-none -mx-6 md:w-[calc(100%+4rem)] md:-mx-8 min-w-0';

  const shell = document.createElement('div');
  shell.className =
    'rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm sm:p-5 md:p-6';

  const viewport = document.createElement('div');
  viewport.className = 'sn-gantt-viewport relative w-full overflow-hidden';
  viewport.style.aspectRatio = `${innerW} / ${innerH}`;

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
    viewport.style.aspectRatio = `${innerW} / ${next}`;
  }

  function applyScale() {
    const w = viewport.getBoundingClientRect().width;
    if (w < 24) return;
    inner.style.transform = `scale(${w / innerW})`;
  }

  function syncContentHeightFromIframe() {
    if (!fitContentHeight) return;
    try {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      const measure = () => {
        const raw = Math.max(
          doc.documentElement.scrollHeight,
          doc.documentElement.offsetHeight,
          doc.body.scrollHeight,
          doc.body.offsetHeight,
        );
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
  });
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
}
