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
    'decoding',
    'width',
    'height',
    'alt',
  ],
  ADD_TAGS: ['details', 'summary', 'svg', 'path', 'div', 'iframe', 'button', 'circle', 'img', 'ellipse', 'span'],
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

/**
 * Elevator pitch reveal: bi-parting door panels, metal frame, floor label above.
 * @param {string} floorName
 * @param {string} innerHtml - Already sanitized markdown HTML
 */
function buildElevatorShell(floorName, innerHtml) {
  const floorHtml = escapeHtml(String(floorName).trim());
  const doorGroove =
    'pointer-events-none absolute inset-2 rounded-sm bg-[repeating-linear-gradient(180deg,transparent,transparent_36px,rgba(71,85,105,0.16)_36px,rgba(71,85,105,0.16)_37px)] opacity-90';
  const doorSheen =
    'pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-white/55 to-transparent';
  const doorSill =
    'pointer-events-none absolute inset-x-0 bottom-0 h-2.5 bg-gradient-to-t from-slate-500/30 to-transparent';
  /** Hallway posters (lg+): static artwork; tack + slight tilt; sharp corners */
  const thumbTackSvg =
    `<svg class="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">` +
      `<ellipse cx="12" cy="7.5" rx="5" ry="4" fill="#b91c1c"/>` +
      `<ellipse cx="12" cy="7" rx="2.2" ry="1.6" fill="#fecaca"/>` +
      `<path d="M12 11v9" stroke="#57534e" stroke-width="2" stroke-linecap="round"/>` +
    `</svg>`;
  const posterL =
    `<div class="elevator-reveal-poster pointer-events-none hidden shrink-0 select-none lg:block lg:-translate-y-12" aria-hidden="true">` +
      `<div class="relative inline-block overflow-visible -rotate-[2.5deg]">` +
        `<div class="pointer-events-none absolute left-1/2 top-2 z-30 -translate-x-1/2">${thumbTackSvg}</div>` +
        `<img src="Proposal_Assets/elevator-posters/left-poster.png" alt="" width="300" height="400" decoding="async" class="relative z-10 block h-[18rem] w-[11rem] object-contain object-top shadow-[0_22px_50px_rgba(15,23,42,0.45),0_12px_28px_rgba(0,0,0,0.32),0_4px_10px_rgba(0,0,0,0.2)] ring-1 ring-slate-900/15" />` +
      `</div>` +
    `</div>`;
  const posterR =
    `<div class="elevator-reveal-poster pointer-events-none hidden shrink-0 select-none lg:block lg:-translate-y-12" aria-hidden="true">` +
      `<div class="relative inline-block overflow-visible rotate-[2.5deg]">` +
        `<div class="pointer-events-none absolute left-1/2 top-2 z-30 -translate-x-1/2">${thumbTackSvg}</div>` +
        `<img src="Proposal_Assets/elevator-posters/right-poster.png" alt="" width="300" height="400" decoding="async" class="relative z-10 block h-[18rem] w-[11rem] object-contain object-top shadow-[0_22px_50px_rgba(15,23,42,0.45),0_12px_28px_rgba(0,0,0,0.32),0_4px_10px_rgba(0,0,0,0.2)] ring-1 ring-slate-900/15" />` +
      `</div>` +
    `</div>`;
  return (
    `<div class="elevator-reveal-wrap group/elev mb-8 w-full">` +
      `<div class="mb-3 flex justify-center">` +
        `<div class="rounded-md border-2 border-slate-600 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 px-5 py-2 font-mono text-[0.7rem] font-bold uppercase leading-tight tracking-[0.18em] text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_4px_14px_rgba(15,23,42,0.35)] ring-1 ring-slate-500/40 transition-all duration-300 group-hover/elev:from-slate-100 group-hover/elev:via-slate-50 group-hover/elev:to-slate-200 group-hover/elev:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_6px_18px_rgba(15,23,42,0.4)]">${floorHtml}</div>` +
      `</div>` +
      `<div class="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-3 xl:gap-8">` +
      posterL +
      `<div class="elevator-reveal-card group relative w-full max-w-xl shrink-0 cursor-pointer aspect-square overflow-hidden rounded-xl border-[3px] border-slate-600 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 p-2 shadow-[0_8px_32px_rgba(15,23,42,0.45)] ring-1 ring-slate-900/60">` +
        `<div class="relative h-full w-full overflow-hidden rounded-md bg-slate-950 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.9),inset_0_0_28px_rgba(0,0,0,0.55)]">` +
          `<div class="js-elevator-pitch module-markdown-body absolute inset-0 z-10 flex flex-col items-center justify-center overflow-y-auto bg-white p-6 text-center text-slate-900 opacity-0 scale-[0.92] transition-[opacity,transform] duration-200 sm:p-10 group-[.is-open]:animate-elevator-reveal group-[.is-open]:opacity-100 [&_p]:text-slate-800 [&_strong]:text-slate-900">${innerHtml}</div>` +
          `<div class="pointer-events-none absolute inset-y-1 left-1/2 z-[26] w-px -translate-x-1/2 bg-slate-950 shadow-[1px_0_0_rgba(255,255,255,0.12),2px_0_4px_rgba(0,0,0,0.5)] transition-opacity duration-300 ease-out group-[.is-open]:opacity-0"></div>` +
          `<div class="elevator-door-left absolute inset-y-0 left-0 z-20 w-1/2 origin-left border-r border-slate-600/90 bg-gradient-to-r from-slate-50 via-slate-200 to-slate-300 shadow-[inset_-10px_0_20px_rgba(255,255,255,0.45),inset_4px_0_12px_rgba(15,23,42,0.12),2px_0_8px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-in-out group-[.is-open]:-translate-x-[95%]">` +
            `<div class="${doorGroove}"></div>` +
            `<div class="${doorSheen}"></div>` +
            `<div class="${doorSill}"></div>` +
            `<div class="pointer-events-none absolute right-2.5 top-1/2 h-[4.25rem] w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_2px_rgba(0,0,0,0.35)]"></div>` +
          `</div>` +
          `<div class="elevator-door-right absolute inset-y-0 right-0 z-20 w-1/2 origin-right border-l border-slate-600/90 bg-gradient-to-l from-slate-50 via-slate-200 to-slate-300 shadow-[inset_10px_0_20px_rgba(255,255,255,0.45),inset_-4px_0_12px_rgba(15,23,42,0.12),-2px_0_8px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-in-out group-[.is-open]:translate-x-[95%]">` +
            `<div class="${doorGroove}"></div>` +
            `<div class="${doorSheen}"></div>` +
            `<div class="${doorSill}"></div>` +
            `<div class="pointer-events-none absolute left-2.5 top-1/2 h-[4.25rem] w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_2px_rgba(0,0,0,0.35)]"></div>` +
          `</div>` +
        `</div>` +
      `</div>` +
      posterR +
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
