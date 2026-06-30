import {
  getSession,
  signIn,
  signInMagicLink,
} from '../lib/auth.js';
import {
  ALLOWED_EMAIL_DOMAIN_MESSAGE,
  isAllowedEmail,
} from '../lib/auth-email-domain.js';

function callbackUrl() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('callbackUrl') || '/';
  try {
    const u = new URL(raw, window.location.origin);
    if (u.origin !== window.location.origin) return '/';
    return u.pathname + u.search + u.hash;
  } catch {
    return '/';
  }
}

const form = document.getElementById('login-form');
const magicForm = document.getElementById('magic-form');
const errEl = document.getElementById('auth-error');
const infoEl = document.getElementById('auth-info');

function showError(msg) {
  errEl.textContent = msg || '';
  errEl.classList.toggle('hidden', !msg);
}

function showInfo(msg) {
  infoEl.textContent = msg || '';
  infoEl.classList.toggle('hidden', !msg);
}

function requireAllowedEmail(email) {
  if (isAllowedEmail(email)) return true;
  showError(ALLOWED_EMAIL_DOMAIN_MESSAGE);
  return false;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  showError('');
  showInfo('');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const submitBtn = document.getElementById('submit-btn');

  if (!email || !password) {
    showError('Email and password are required.');
    return;
  }
  if (!requireAllowedEmail(email)) return;

  const label = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Please wait…';
  try {
    const result = await signIn(email, password);
    console.log('[auth] sign-in', result);
    if (result.error) {
      showError(result.error.message || 'Could not sign in.');
      return;
    }
    window.location.replace(callbackUrl());
  } catch (err) {
    console.error('[auth] submit error', err);
    showError(err instanceof Error ? err.message : 'Something went wrong.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = label;
  }
});

magicForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  showError('');
  showInfo('');
  const email = document.getElementById('magic-email').value.trim();
  if (!email) {
    showError('Enter your email for the magic link.');
    return;
  }
  if (!requireAllowedEmail(email)) return;

  const magicSubmit = document.getElementById('magic-submit');
  const magicLabel = magicSubmit.textContent;
  magicSubmit.disabled = true;
  magicSubmit.textContent = 'Sending…';
  try {
    const result = await signInMagicLink(email, callbackUrl());
    console.log('[auth] magic link', result);
    if (result.error) {
      showError(result.error.message || 'Could not send magic link.');
      return;
    }
    showInfo('Check your email for the sign-in link (or server logs if email is not configured).');
  } catch (err) {
    console.error('[auth] magic link error', err);
    showError(err instanceof Error ? err.message : 'Something went wrong.');
  } finally {
    magicSubmit.disabled = false;
    magicSubmit.textContent = magicLabel;
  }
});

getSession().then((session) => {
  if (session?.user) window.location.replace(callbackUrl());
}).catch(() => {});
