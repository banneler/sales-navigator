import {
  getSession,
  signIn,
  signInMagicLink,
  signUp,
} from '../lib/auth.js';

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
const modeToggle = document.getElementById('mode-toggle');
const nameField = document.getElementById('field-name');
const submitBtn = document.getElementById('submit-btn');
const errEl = document.getElementById('auth-error');
const infoEl = document.getElementById('auth-info');

let mode = 'signin';

function setMode(next) {
  mode = next;
  const isSignUp = mode === 'signup';
  nameField.classList.toggle('hidden', !isSignUp);
  submitBtn.textContent = isSignUp ? 'Create account' : 'Sign in';
  modeToggle.textContent = isSignUp
    ? 'Already have an account? Sign in'
    : 'Need an account? Sign up';
}

function showError(msg) {
  errEl.textContent = msg || '';
  errEl.classList.toggle('hidden', !msg);
}

function showInfo(msg) {
  infoEl.textContent = msg || '';
  infoEl.classList.toggle('hidden', !msg);
}

modeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  setMode(mode === 'signin' ? 'signup' : 'signin');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  showError('');
  showInfo('');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value.trim() || 'User';

  if (!email || !password) {
    showError('Email and password are required.');
    return;
  }

  submitBtn.disabled = true;
  try {
    if (mode === 'signup') {
      const { error } = await signUp(email, password, name);
      if (error) {
        showError(error.message || 'Could not sign up.');
        return;
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        showError(error.message || 'Could not sign in.');
        return;
      }
    }
    window.location.replace(callbackUrl());
  } catch (err) {
    console.error(err);
    showError(err instanceof Error ? err.message : 'Something went wrong.');
  } finally {
    submitBtn.disabled = false;
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
  const magicSubmit = document.getElementById('magic-submit');
  magicSubmit.disabled = true;
  try {
    const { error } = await signInMagicLink(email, callbackUrl());
    if (error) {
      showError(error.message || 'Could not send magic link.');
      return;
    }
    showInfo('Check your email for the sign-in link (or server logs if email is not configured).');
  } catch (err) {
    console.error(err);
    showError(err instanceof Error ? err.message : 'Something went wrong.');
  } finally {
    magicSubmit.disabled = false;
  }
});

setMode('signin');

getSession().then((session) => {
  if (session?.user) window.location.replace(callbackUrl());
}).catch(() => {});
