import { marked } from 'https://esm.sh/marked@15.0.12';
import DOMPurify from 'https://esm.sh/dompurify@3.2.2';

marked.use({ gfm: true, breaks: true });

/**
 * Allow interactive accordions, images/links from markdown, and inline chevron SVG.
 * @type {import('dompurify').Config}
 */
export const MARKDOWN_PURIFY_CONFIG = {
  ADD_ATTR: [
    'target',
    'rel',
    'viewBox',
    'fill',
    'xmlns',
    'fill-rule',
    'clip-rule',
    'clipPath',
    'd',
    'aria-hidden',
    'src',
    'sandbox',
    'title',
    'loading',
    'referrerpolicy',
    'allow',
    'style',
    'aria-label',
    'type',
    'stroke',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
    'r',
    'cx',
    'cy',
  ],
  ADD_TAGS: ['details', 'summary', 'svg', 'path', 'div', 'iframe', 'button', 'circle'],
};

/**
 * @param {unknown} s
 * @returns {string}
 */
export function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CHEVRON_SVG = `<svg class="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>`;

const FLIP_ICON_SVG = `<svg class="h-5 w-5 text-indigo-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>`;

const ELEVATOR_ARROW_UP_SVG = `<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;

const ELEVATOR_ARROW_DOWN_SVG = `<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>`;

const ELEVATOR_SEAM_GLOW_SVG = `<svg class="pointer-events-none absolute left-1/2 top-1/2 z-[25] h-16 w-16 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(249,115,22,0.85)]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle class="transition-all duration-300 group-hover:stroke-orange-300" cx="32" cy="32" r="14" stroke="rgba(249,115,22,0.75)" stroke-width="3"/><circle class="transition-all duration-300 group-hover:stroke-orange-400/90" cx="32" cy="32" r="8" fill="rgba(249,115,22,0.35)"/></svg>`;

/**
 * Elevator pitch reveal: doors + floor indicator + seam glow + up/down controls.
 * @param {string} floorName
 * @param {string} innerHtml - Already sanitized markdown HTML
 */
function buildElevatorShell(floorName, innerHtml) {
  const floorHtml = escapeHtml(String(floorName).trim());
  return (
    `<div class="relative h-80 w-full cursor-pointer group elevator-reveal-card mb-8 overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">` +
      `<div class="js-elevator-pitch module-markdown-body absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center text-slate-100 opacity-0 scale-90 transition-[opacity,transform] duration-300 sm:p-12 group-[.is-open]:animate-elevator-reveal group-[.is-open]:opacity-100">${innerHtml}</div>` +
      `<div class="elevator-door-left absolute inset-y-0 left-0 z-20 flex w-1/2 items-center justify-end border-r border-slate-600 bg-gradient-to-r from-slate-800 to-slate-700 pr-2 transition-transform duration-700 ease-in-out group-[.is-open]:-translate-x-[95%]"></div>` +
      `<div class="elevator-door-right absolute inset-y-0 right-0 z-20 flex w-1/2 items-center justify-start border-l border-slate-600 bg-gradient-to-l from-slate-800 to-slate-700 pl-2 transition-transform duration-700 ease-in-out group-[.is-open]:translate-x-[95%]"></div>` +
      `<div class="pointer-events-none absolute left-1/2 top-6 z-30 -translate-x-1/2 rounded border border-orange-500/50 bg-black/40 px-4 py-1 font-mono text-xs uppercase tracking-widest text-orange-500 shadow-sm transition-all duration-300 group-hover:border-orange-400 group-hover:text-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]">${floorHtml}</div>` +
      `${ELEVATOR_SEAM_GLOW_SVG}` +
      `<div class="absolute right-3 top-1/2 z-[35] flex -translate-y-1/2 flex-col gap-1.5">` +
        `<button type="button" class="js-elevator-up flex h-9 w-9 items-center justify-center rounded-md border border-orange-500/60 bg-slate-900/90 text-orange-400 shadow-md transition-all duration-300 hover:border-orange-400 hover:bg-orange-950/50 hover:text-orange-300 hover:shadow-[0_0_16px_rgba(249,115,22,0.5)] group-hover:border-orange-400/90 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.35)]" aria-label="Open doors">${ELEVATOR_ARROW_UP_SVG}</button>` +
        `<button type="button" class="js-elevator-down flex h-9 w-9 items-center justify-center rounded-md border border-orange-500/60 bg-slate-900/90 text-orange-400 shadow-md transition-all duration-300 hover:border-orange-400 hover:bg-orange-950/50 hover:text-orange-300 hover:shadow-[0_0_16px_rgba(249,115,22,0.5)] group-hover:border-orange-400/90 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.35)]" aria-label="Close doors">${ELEVATOR_ARROW_DOWN_SVG}</button>` +
      `</div>` +
    `</div>\n\n`
  );
}

/** @returns {boolean} */
function isShortcodeOpenLine(lineRaw, keyword) {
  const t = lineRaw.replace(/\r$/, '').trimStart();
  const openBracket = `::: ${keyword} [`;
  const openBare = `::: ${keyword} `;
  if (t.startsWith(openBracket) && t.includes(']', openBracket.length)) return true;
  return t.startsWith(openBare) && t.length > openBare.length;
}

/**
 * Closing fence: line starts with `:::` at column 0 (optional trailing spaces only).
 * Indented `:::` (e.g. inside a markdown code block) does not close.
 * @returns {boolean}
 */
function isShortcodeCloseLine(lineRaw) {
  const t = lineRaw.replace(/\r$/, '').trimEnd();
  if (!t.startsWith(':::')) return false;
  if (
    t.startsWith('::: accordion') ||
    t.startsWith('::: flip') ||
    t.startsWith('::: elevator')
  ) {
    return false;
  }
  return /^:::\s*$/.test(t);
}

/**
 * @param {string} s
 * @param {number} start
 * @param {string} keyword
 * @returns {{ end: number; title: string; body: string } | null}
 */
function extractShortcodeBlock(s, start, keyword) {
  const openBracket = `::: ${keyword} [`;
  const openBare = `::: ${keyword} `;
  let title;
  let pos;

  if (s.slice(start).startsWith(openBracket)) {
    const titleEnd = s.indexOf(']', start + openBracket.length);
    if (titleEnd === -1) return null;
    title = s.slice(start + openBracket.length, titleEnd);
    pos = titleEnd + 1;
  } else if (s.slice(start).startsWith(openBare)) {
    const eol = s.indexOf('\n', start);
    const lineEnd = eol === -1 ? s.length : eol;
    title = s.slice(start + openBare.length, lineEnd).replace(/\r$/, '').trim();
    if (!title) return null;
    pos = lineEnd;
  } else {
    return null;
  }
  
  while (pos < s.length && (s[pos] === ' ' || s[pos] === '\t')) pos++;
  if (s[pos] === '\r') pos++;
  if (s[pos] !== '\n') return null;
  const bodyStartIndex = pos + 1;
  pos = bodyStartIndex;

  let depth = 1;
  while (pos < s.length) {
    const nextNl = s.indexOf('\n', pos);
    const lineRaw = nextNl === -1 ? s.slice(pos) : s.slice(pos, nextNl);
    if (isShortcodeOpenLine(lineRaw, keyword)) {
      depth += 1;
    } else if (isShortcodeCloseLine(lineRaw)) {
      depth -= 1;
      if (depth === 0) {
        return {
          end: nextNl === -1 ? s.length : nextNl + 1,
          title,
          body: s.slice(bodyStartIndex, pos),
        };
      }
    }
    if (nextNl === -1) break;
    pos = nextNl + 1;
  }
  return null;
}

function buildAccordionShell(title, innerHtml) {
  const titleHtml = escapeHtml(String(title).trim());
  return (
    `<details class="mb-6 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden group">` +
    `<summary class="font-bold text-slate-800 p-4 cursor-pointer hover:bg-slate-50 transition-colors list-none flex justify-between items-center [&::-webkit-details-marker]:hidden marker:content-none">` +
    `<span class="min-w-0 pr-3">${titleHtml}</span>${CHEVRON_SVG}</summary>` +
    `<div class="p-4 border-t border-slate-100 bg-slate-50/50 text-slate-700 module-markdown-body">${innerHtml}</div>` +
    `</details>\n\n`
  );
}

function buildFlipShell(title, innerHtml) {
  const titleHtml = escapeHtml(String(title).trim());
  // Using grid stacking so the container sizes to the tallest side
  return (
    `<div class="js-flip-card group perspective-1000 cursor-pointer w-full">` +
      `<div class="relative w-full transition-transform duration-500 preserve-3d js-flip-inner flip-grid">` +
        `<!-- Front -->` +
        `<div class="backface-hidden bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[12rem]">` +
          `<h4 class="text-xl font-bold text-slate-800 mb-4">${titleHtml}</h4>` +
          `<div class="mt-auto flex items-center gap-2 text-sm font-medium text-indigo-600/80 bg-indigo-50/50 px-3 py-1.5 rounded-full">` +
            `${FLIP_ICON_SVG} Click to flip` +
          `</div>` +
        `</div>` +
        `<!-- Back -->` +
        `<div class="backface-hidden rotate-y-180 bg-white border border-indigo-100 rounded-2xl shadow-md p-6 md:p-8 overflow-y-auto module-markdown-body flex flex-col justify-center">` +
          `${innerHtml}` +
        `</div>` +
      `</div>` +
    `</div>\n\n`
  );
}

/**
 * Replace `::: accordion [Title]` … `:::` , `::: flip [Title]` … `:::`, and `::: elevator [Floor]` … `:::` with HTML.
 * @param {string} md
 * @returns {string}
 */
export function preprocessShortcodes(md) {
  let s = String(md ?? '');
  
  // Process Accordions
  let out = '';
  let i = 0;
  while (i < s.length) {
    const jBracket = s.indexOf('::: accordion [', i);
    const jBare = s.indexOf('::: accordion ', i);
    const j = jBracket === -1 ? jBare : jBare === -1 ? jBracket : Math.min(jBracket, jBare);
    
    if (j === -1) {
      out += s.slice(i);
      break;
    }
    out += s.slice(i, j);
    const block = extractShortcodeBlock(s, j, 'accordion');
    if (!block) {
      out += s[j];
      i = j + 1;
      continue;
    }
    // Recursive call to handle nested shortcodes of any type
    const innerHtml = parseMarkdownToSafeHtml(block.body.trim());
    out += buildAccordionShell(block.title, innerHtml);
    i = block.end;
  }
  s = out;

  // Process Flips
  out = '';
  i = 0;
  while (i < s.length) {
    const jBracket = s.indexOf('::: flip [', i);
    const jBare = s.indexOf('::: flip ', i);
    const j = jBracket === -1 ? jBare : jBare === -1 ? jBracket : Math.min(jBracket, jBare);
    
    if (j === -1) {
      out += s.slice(i);
      break;
    }
    out += s.slice(i, j);
    const block = extractShortcodeBlock(s, j, 'flip');
    if (!block) {
      out += s[j];
      i = j + 1;
      continue;
    }
    // Recursive call
    const innerHtml = parseMarkdownToSafeHtml(block.body.trim());
    out += buildFlipShell(block.title, innerHtml);
    i = block.end;
  }
  s = out;

  // Process Elevator pitch reveal
  out = '';
  i = 0;
  while (i < s.length) {
    const jBracket = s.indexOf('::: elevator [', i);
    const jBare = s.indexOf('::: elevator ', i);
    const j = jBracket === -1 ? jBare : jBare === -1 ? jBracket : Math.min(jBracket, jBare);

    if (j === -1) {
      out += s.slice(i);
      break;
    }
    out += s.slice(i, j);
    const block = extractShortcodeBlock(s, j, 'elevator');
    if (!block) {
      out += s[j];
      i = j + 1;
      continue;
    }
    const innerHtml = parseMarkdownToSafeHtml(block.body.trim());
    out += buildElevatorShell(block.title, innerHtml);
    i = block.end;
  }

  return out;
}

/**
 * Markdown → HTML, with accordion/flip/elevator micro-interactions and DOMPurify.
 * @param {string} md
 * @returns {string}
 */
export function parseMarkdownToSafeHtml(md) {
  if (md == null || md === '') return '';
  const prepped = preprocessShortcodes(String(md));
  const html = marked.parse(prepped);
  return DOMPurify.sanitize(html, MARKDOWN_PURIFY_CONFIG);
}
