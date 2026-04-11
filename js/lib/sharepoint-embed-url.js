/**
 * Normalize SharePoint / OneDrive links for in-app iframe viewing.
 * Keeps existing query params; ensures web=1 when missing (Office web experience).
 *
 * @param {string} rawUrl
 * @returns {string}
 */
export function toSharePointEmbedUrl(rawUrl) {
  if (rawUrl == null || typeof rawUrl !== 'string') return '';
  const trimmed = rawUrl.trim();
  if (!trimmed) return '';
  try {
    const u = new URL(trimmed);
    if (!/sharepoint\.com$/i.test(u.hostname)) {
      return trimmed;
    }
    if (!u.searchParams.has('web')) {
      u.searchParams.set('web', '1');
    }
    return u.toString();
  } catch {
    return trimmed;
  }
}
