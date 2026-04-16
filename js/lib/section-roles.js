/**
 * Maps H2 display titles (from content.md) to layout/typography roles for module sections.
 * Authors: keep these ## titles stable; see .cursor/rules/module-section-roles.mdc
 */

/** @typedef {'elevator' | 'discovery' | 'objections' | 'deep' | 'overview' | 'guidelines' | 'pitfalls' | 'generic'} SectionRole */

/** Normalize for matching: lowercases, collapses spaces, strips [deep] suffix text */
export function normalizeSectionTitle(title) {
  const t = String(title || '')
    .replace(/\s*\[deep\]\s*$/i, '')
    .trim()
    .toLowerCase();
  return t.replace(/\s+/g, ' ');
}

const TITLE_TO_ROLE = new Map(
  Object.entries({
    'elevator pitch': 'elevator',
    'discovery questions': 'discovery',
    /** Connectivity & Access — same layout role as Discovery Questions (full-width embed) */
    'discovery galaxy': 'discovery',
    'objection handling': 'objections',
    'technical deep dive': 'deep',
    'process deep dive': 'deep',
    overview: 'overview',
    /** Narrative bridge after Coffee Summary — same layout role as sales Overview tab */
    'at a glance': 'overview',
    'key guidelines': 'guidelines',
    'common pitfalls': 'pitfalls',
  }).map(([k, v]) => [k, /** @type {SectionRole} */ (v)])
);

/**
 * @param {string} displayTitle - H2 text after stripping [deep] marker
 * @returns {SectionRole}
 */
export function getSectionRole(displayTitle) {
  const key = normalizeSectionTitle(displayTitle);
  return /** @type {SectionRole} */ (TITLE_TO_ROLE.get(key) || 'generic');
}

export const SALES_TRIO_MODULE_IDS = new Set([
  'sales-rules-of-engagement',
  'sales-process-and-salesforce',
  'sales-operations-and-approvals',
]);

/**
 * @param {string | undefined} moduleId
 * @returns {boolean}
 */
export function isSalesTrioModule(moduleId) {
  return typeof moduleId === 'string' && SALES_TRIO_MODULE_IDS.has(moduleId);
}
