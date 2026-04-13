const STORAGE_KEY = 'sn:module-visited:v1';
const COMPLETED_KEY = 'sn:module-completed:v1';

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

/** @returns {Set<string>} */
export function getCompletedModuleIds() {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

/** @param {string} moduleId */
export function markModuleCompleted(moduleId) {
  if (!moduleId) return;
  const s = getCompletedModuleIds();
  s.add(moduleId);
  localStorage.setItem(COMPLETED_KEY, JSON.stringify([...s]));
}

/** @param {string} moduleId */
export function isModuleCompleted(moduleId) {
  if (!moduleId) return false;
  return getCompletedModuleIds().has(moduleId);
}

/** Clears visited + completed module lists (Fiber path and completion checkmarks). */
export function resetModuleProgress() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(COMPLETED_KEY);
}
