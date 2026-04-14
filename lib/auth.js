/**
 * Browser-safe auth helpers (plain fetch). Do not import better-auth/client here—
 * bare specifiers only resolve with a bundler; this app ships vanilla ESM.
 */

function authBase() {
  if (typeof window === 'undefined') return '';
  return `${window.location.origin}/api/auth`;
}

function errorMessage(body) {
  if (!body || typeof body !== 'object') return 'Request failed';
  if (typeof body.message === 'string') return body.message;
  if (body.error && typeof body.error.message === 'string') return body.error.message;
  if (typeof body.code === 'string') return body.code;
  return 'Request failed';
}

async function readJsonResponse(res) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

/** @returns {Promise<{ user: object; session: object } | null>} */
export async function getSession() {
  try {
    const res = await fetch(`${authBase()}/get-session`, {
      credentials: 'include',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const body = await readJsonResponse(res);
    if (body === null || body === undefined) return null;
    if (!body.user) return null;
    return body;
  } catch {
    return null;
  }
}

export async function signIn(email, password) {
  const res = await fetch(`${authBase()}/sign-in/email`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const body = await readJsonResponse(res);
  if (!res.ok) {
    return { data: null, error: { message: errorMessage(body) } };
  }
  return { data: body, error: null };
}

export async function signUp(email, password, name) {
  const res = await fetch(`${authBase()}/sign-up/email`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });
  const body = await readJsonResponse(res);
  if (!res.ok) {
    return { data: null, error: { message: errorMessage(body) } };
  }
  return { data: body, error: null };
}

export async function signInMagicLink(email, callbackURL) {
  const res = await fetch(`${authBase()}/sign-in/magic-link`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      email,
      callbackURL: callbackURL || '/',
    }),
  });
  const body = await readJsonResponse(res);
  if (!res.ok) {
    return { data: null, error: { message: errorMessage(body) } };
  }
  return { data: body, error: null };
}

export async function signOut() {
  const res = await fetch(`${authBase()}/sign-out`, {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json' },
  });
  const body = await readJsonResponse(res);
  if (!res.ok) {
    return { data: null, error: { message: errorMessage(body) } };
  }
  return { data: body, error: null };
}
