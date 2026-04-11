/**
 * Training PDF extract paths + modules-asset-routes.json helpers for admin asset picker.
 */

/** @param {string} path */
export function pathToAltText(path) {
  const file = path.split('/').pop() || '';
  const base = file.replace(/\.[^.]+$/, '');
  return base.replace(/-/g, ' ').replace(/\s+/g, ' ').trim() || 'Training figure';
}

/**
 * @param {string[]} images - repo-relative paths
 * @param {string} moduleId
 * @param {{ routes?: Record<string, string[]> }} routesConfig
 * @param {boolean} showAll
 */
export function filterImagesForModule(images, moduleId, routesConfig, showAll) {
  if (showAll) return [...images];
  const frags = routesConfig?.routes?.[moduleId];
  if (!frags?.length) return [...images];
  return images.filter((p) => frags.some((f) => p.includes(f)));
}

/**
 * @param {string[]} images
 * @param {string} query
 */
export function filterImagesBySearch(images, query) {
  const s = query.trim().toLowerCase();
  if (!s) return images;
  return images.filter((p) => p.toLowerCase().includes(s));
}

/**
 * @param {HTMLTextAreaElement} textarea
 * @param {string} markdownLine
 */
export function insertMarkdownAtCursor(textarea, markdownLine) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const before = textarea.value.slice(0, start);
  const after = textarea.value.slice(end);
  const needsLead = before.length > 0 && !before.endsWith('\n');
  const insert = `${needsLead ? '\n' : ''}${markdownLine}\n`;
  textarea.value = before + insert + after;
  const pos = start + insert.length;
  textarea.selectionStart = textarea.selectionEnd = pos;
  textarea.focus();
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
}
