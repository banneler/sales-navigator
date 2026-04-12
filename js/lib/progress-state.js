const STORAGE_KEY = 'sn:module-visited:v1';

/** @returns {Set<string>} */
export function getVisitedModuleIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

/** @param {string} moduleId */
export function markModuleVisited(moduleId) {
  if (!moduleId) return;
  const s = getVisitedModuleIds();
  s.add(moduleId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));
}

/** @param {string[]} orderedIds */
export function countVisited(orderedIds) {
  const s = getVisitedModuleIds();
  return orderedIds.filter((id) => s.has(id)).length;
}
