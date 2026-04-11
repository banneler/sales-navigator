/**
 * Hash router: #/module/<id> or #/<id>
 */

export function getRouteModuleId() {
  const hash = (window.location.hash || '').replace(/^#/, '');
  const parts = hash.split('/').filter(Boolean);
  if (parts[0] === 'module' && parts[1]) return parts[1];
  if (parts[0] && parts[0] !== 'module') return parts[0];
  return null;
}

export function setRouteModuleId(id) {
  window.location.hash = id ? `#/module/${id}` : '#/';
}

export function onRouteChange(handler) {
  window.addEventListener('hashchange', handler);
  return () => window.removeEventListener('hashchange', handler);
}
