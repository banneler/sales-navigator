import { createAuthClient } from 'better-auth/client';
import { magicLinkClient } from 'better-auth/client/plugins';

const baseURL =
  typeof window !== 'undefined' ? window.location.origin : undefined;

export const authClient = createAuthClient({
  baseURL,
  plugins: [magicLinkClient()],
});

/** @returns {Promise<{ user: object; session: object } | null>} */
export async function getSession() {
  try {
    const { data, error } = await authClient.getSession();
    if (error || !data?.user) return null;
    return data;
  } catch {
    return null;
  }
}

export async function signIn(email, password) {
  return authClient.signIn.email({ email, password });
}

export async function signUp(email, password, name) {
  return authClient.signUp.email({ email, password, name });
}

export async function signInMagicLink(email, callbackURL) {
  return authClient.signIn.magicLink({
    email,
    callbackURL: callbackURL || '/',
  });
}

export async function signOut() {
  return authClient.signOut();
}
