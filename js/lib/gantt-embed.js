import { escapeHtml } from './markdown-config.js';

const GANTT_NATURAL_WIDTH = 1150;

/**
 * Replace `<div data-sn-gantt></div>` in rendered module HTML with a scaled iframe embed.
 * @param {HTMLElement} container - #module-host
 * @param {string} moduleId
 * @param {{ title?: string; blurb?: string; iframeHeight?: number; scale?: number }} [options]
 */
export function mountGanttAfterRender(container, moduleId, options = {}) {
  const {
    title = 'Process timeline',
    blurb = '',
    iframeHeight = 620,
    scale = 0.66,
  } = options;

  const ph = container.querySelector('[data-sn-gantt]');
  if (!ph) return;

  const innerW = GANTT_NATURAL_WIDTH;
  const innerH = iframeHeight;
  const boxW = Math.ceil(innerW * scale);
  const boxH = Math.ceil(innerH * scale);

  const wrap = document.createElement('div');
  wrap.className =
    'sn-gantt-block not-prose my-5 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden max-w-full';
  wrap.innerHTML = `
    <div class="px-4 py-2 border-b border-slate-100 bg-slate-50">
      <h2 class="text-base font-bold text-slate-900">${escapeHtml(title)}</h2>
      ${
        blurb
          ? `<p class="text-xs text-slate-600 mt-1">${escapeHtml(blurb)}</p>`
          : ''
      }
    </div>
    <div class="overflow-x-auto bg-slate-50/90 px-2 py-2">
      <div class="sn-gantt-scale-clip mx-auto overflow-hidden rounded-md border border-slate-200/90 bg-white shadow-inner" style="width:min(100%, ${boxW}px);height:${boxH}px;">
        <div style="transform:scale(${scale});transform-origin:top left;width:${innerW}px;height:${innerH}px;">
          <iframe class="border-0 block bg-white" style="width:${innerW}px;height:${innerH}px;" title="Gantt chart" loading="lazy"></iframe>
        </div>
      </div>
    </div>`;
  const iframe = wrap.querySelector('iframe');
  iframe.src = new URL(`modules/${moduleId}/gantt.html`, window.location.href).href;
  ph.replaceWith(wrap);
}
