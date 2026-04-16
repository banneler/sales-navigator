/**
 * Module order as rendered in the left sidebar: walk manifest sorted by `order`,
 * bucket by `category` (Map preserves first-seen category order), flatten each bucket.
 * Matches {@link shell.js} `byCategory` + iteration order.
 *
 * @param {{ modules?: Array<{ id: string; title?: string; order?: number; category?: string }> }} manifest
 * @returns {Array<{ id: string; title?: string; order?: number; category?: string }>}
 */
export function modulesInSidebarOrder(manifest) {
  const modules = [...(manifest.modules || [])].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );
  const grouped = new Map();
  for (const m of modules) {
    const c = m.category || 'General';
    if (!grouped.has(c)) grouped.set(c, []);
    grouped.get(c).push(m);
  }
  const out = [];
  for (const items of grouped.values()) {
    out.push(...items);
  }
  return out;
}

/**
 * Next module after `moduleId` in sidebar order, or null if last / not found.
 */
export function nextModuleInSidebarOrder(manifest, moduleId) {
  const ordered = modulesInSidebarOrder(manifest);
  const idx = ordered.findIndex((m) => m.id === moduleId);
  if (idx < 0 || idx >= ordered.length - 1) return null;
  return ordered[idx + 1];
}
