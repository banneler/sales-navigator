/** @typedef {string} EmailDomain */

export const DEFAULT_ALLOWED_EMAIL_DOMAINS = ['gpcom.com'];

export const ALLOWED_EMAIL_DOMAIN_MESSAGE =
  'Sign in with your @gpcom.com work email.';

/**
 * @returns {EmailDomain[]}
 */
export function getAllowedEmailDomains() {
  const raw =
    typeof process !== 'undefined' && process.env?.AUTH_ALLOWED_EMAIL_DOMAINS
      ? process.env.AUTH_ALLOWED_EMAIL_DOMAINS
      : DEFAULT_ALLOWED_EMAIL_DOMAINS.join(',');
  return raw
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean);
}

/** @param {unknown} email */
export function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

/** @param {unknown} email */
export function emailDomain(email) {
  const normalized = normalizeEmail(email);
  const at = normalized.lastIndexOf('@');
  if (at <= 0 || at === normalized.length - 1) return '';
  return normalized.slice(at + 1);
}

/**
 * @param {unknown} email
 * @param {EmailDomain[] | undefined} allowedDomains
 */
export function isAllowedEmail(email, allowedDomains = getAllowedEmailDomains()) {
  const domain = emailDomain(email);
  return domain.length > 0 && allowedDomains.includes(domain);
}

/**
 * @param {unknown} email
 * @param {EmailDomain[] | undefined} allowedDomains
 */
export function assertAllowedEmail(email, allowedDomains = getAllowedEmailDomains()) {
  if (isAllowedEmail(email, allowedDomains)) return;
  throw new Error(ALLOWED_EMAIL_DOMAIN_MESSAGE);
}
