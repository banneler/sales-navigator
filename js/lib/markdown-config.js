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
  ],
  ADD_TAGS: ['details', 'summary', 'svg', 'path'],
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

const OPEN_PREFIX = '::: accordion [';

/** @returns {boolean} */
function isAccordionOpenLine(lineRaw) {
  const t = lineRaw.replace(/\r$/, '').trimStart();
  return t.startsWith(OPEN_PREFIX) && t.includes(']', OPEN_PREFIX.length);
}

/**
 * Closing fence: line starts with `:::` at column 0 (optional trailing spaces only).
 * Indented `:::` (e.g. inside a markdown code block) does not close.
 * @returns {boolean}
 */
function isAccordionCloseLine(lineRaw) {
  const t = lineRaw.replace(/\r$/, '').trimEnd();
  if (!t.startsWith(':::')) return false;
  if (t.startsWith('::: accordion')) return false;
  return /^:::\s*$/.test(t);
}

/**
 * If `s[start]` begins a valid `::: accordion [Title]` block, return end index (exclusive)
 * after the closing `:::` line and the parsed title/body.
 * @param {string} s
 * @param {number} start
 * @returns {{ end: number; title: string; body: string } | null}
 */
function extractAccordionBlock(s, start) {
  if (!s.slice(start).startsWith(OPEN_PREFIX)) return null;
  const titleEnd = s.indexOf(']', start + OPEN_PREFIX.length);
  if (titleEnd === -1) return null;
  const title = s.slice(start + OPEN_PREFIX.length, titleEnd);
  let pos = titleEnd + 1;
  while (pos < s.length && (s[pos] === ' ' || s[pos] === '\t')) pos++;
  if (s[pos] === '\r') pos++;
  if (s[pos] !== '\n') return null;
  const bodyStartIndex = pos + 1;
  pos = bodyStartIndex;

  let depth = 1;
  while (pos < s.length) {
    const nextNl = s.indexOf('\n', pos);
    const lineRaw = nextNl === -1 ? s.slice(pos) : s.slice(pos, nextNl);
    if (isAccordionOpenLine(lineRaw)) {
      depth += 1;
    } else if (isAccordionCloseLine(lineRaw)) {
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

/**
 * Replace `::: accordion [Title]` … `:::` with `<details>` (nested-safe).
 * @param {string} md
 * @returns {string}
 */
export function preprocessAccordionShortcodes(md) {
  const s = String(md ?? '');
  if (!s.includes(OPEN_PREFIX)) return s;
  let out = '';
  let i = 0;
  while (i < s.length) {
    const j = s.indexOf(OPEN_PREFIX, i);
    if (j === -1) {
      out += s.slice(i);
      break;
    }
    out += s.slice(i, j);
    const block = extractAccordionBlock(s, j);
    if (!block) {
      out += s[j];
      i = j + 1;
      continue;
    }
    const innerHtml = parseMarkdownToSafeHtml(block.body.trim());
    out += buildAccordionShell(block.title, innerHtml);
    i = block.end;
  }
  return out;
}

/**
 * Markdown → HTML, with accordion micro-interactions and DOMPurify.
 * @param {string} md
 * @returns {string}
 */
export function parseMarkdownToSafeHtml(md) {
  if (md == null || md === '') return '';
  const prepped = preprocessAccordionShortcodes(String(md));
  const html = marked.parse(prepped);
  return DOMPurify.sanitize(html, MARKDOWN_PURIFY_CONFIG);
}
