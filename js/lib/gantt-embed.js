const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` in rendered module HTML with a scaled iframe embed.
 * No extra chrome—section titles live in markdown above the placeholder.
 * @param {HTMLElement} container - #module-host
 * @param {string} moduleId
 * @param {{ iframeHeight?: number; scale?: number }} [options]
 */
export function mountGanttAfterRender(container, moduleId, options = {}) {
  const { iframeHeight = 620, scale = 0.66 } = options;

  const ph = container.querySelector('[data-sn-gantt]');
  if (!ph) return;

  const innerW = GANTT_NATURAL_WIDTH;
  const innerH = iframeHeight;
  const boxW = Math.ceil(innerW * scale);
  const boxH = Math.ceil(innerH * scale);

  const wrap = document.createElement('div');
  wrap.className = 'sn-gantt-block not-prose my-4 max-w-full overflow-x-auto';
  wrap.innerHTML = `
    <div class="inline-block overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80" style="width:min(100%, ${boxW}px);height:${boxH}px;vertical-align:top;">
      <div style="transform:scale(${scale});transform-origin:top left;width:${innerW}px;height:${innerH}px;">
        <iframe class="border-0 block bg-white" style="width:${innerW}px;height:${innerH}px;" title="Gantt chart" loading="lazy"></iframe>
      </div>
    </div>`;
  const iframe = wrap.querySelector('iframe');
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
  ph.replaceWith(wrap);
}
