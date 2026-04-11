import { getFile, putTextFile } from './lib/github-client.js';
import { parseFrontMatter } from './lib/front-matter.js';

// Hardcoded — same pattern as Enterprise-Proposals admin (GITHUB_OWNER / GITHUB_REPO)
const GITHUB_OWNER = 'banneler';
const GITHUB_REPO = 'sales-navigator';
const GITHUB_BRANCH = 'main';

let githubToken = '';

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `px-6 py-3 rounded shadow-xl text-sm font-bold text-white transition-all ${type === 'error' ? 'bg-red-600' : 'bg-slate-800'}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

function currentPath(moduleId) {
  return `modules/${moduleId}/content.md`;
}

async function attemptLogin() {
  const tokenInput = document.getElementById('pat-input');
  const errEl = document.getElementById('error-msg');
  const token = tokenInput?.value.trim() || '';
  if (!token) {
    errEl.textContent = 'Passcode required.';
    errEl.classList.remove('hidden');
    return;
  }

  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  if (loadingText) loadingText.textContent = 'Verifying…';
  overlay?.classList.remove('hidden');
  errEl.classList.add('hidden');

  try {
    const res = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t || `HTTP ${res.status}`);
    }
    githubToken = token;
    const authScreen = document.getElementById('auth-screen');
    authScreen.style.opacity = '0';
    setTimeout(() => {
      authScreen.classList.add('hidden');
      document.getElementById('main-content')?.classList.remove('hidden');
    }, 500);
    showToast('Authenticated.');
  } catch (e) {
    console.error(e);
    errEl.textContent = 'Invalid token or could not reach GitHub.';
    errEl.classList.remove('hidden');
  } finally {
    overlay?.classList.add('hidden');
    if (loadingText) loadingText.textContent = 'Working…';
  }
}

async function main() {
  document.getElementById('unlock-btn')?.addEventListener('click', attemptLogin);
  document.getElementById('pat-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });

  const moduleSelect = document.getElementById('module-select');
  const editor = document.getElementById('markdown-editor');
  const shaField = document.getElementById('file-sha');

  const manifestRes = await fetch('modules-manifest.json');
  const manifest = await manifestRes.json();
  const modules = [...(manifest.modules || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  for (const m of modules) {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = m.title;
    moduleSelect?.appendChild(opt);
  }

  document.getElementById('load-from-github-btn')?.addEventListener('click', async () => {
    if (!githubToken) {
      showToast('Session expired — refresh and sign in again.', 'error');
      return;
    }
    const moduleId = moduleSelect?.value;
    if (!moduleId) {
      showToast('Select a module.', 'error');
      return;
    }
    const overlay = document.getElementById('loading-overlay');
    overlay?.classList.remove('hidden');
    try {
      const path = currentPath(moduleId);
      const { content, sha } = await getFile(
        GITHUB_OWNER,
        GITHUB_REPO,
        path,
        GITHUB_BRANCH,
        githubToken
      );
      if (editor) editor.value = content;
      if (shaField) shaField.value = sha;
      showToast('Loaded from GitHub.');
    } catch (e) {
      console.error(e);
      showToast(String(e.message || e), 'error');
    } finally {
      overlay?.classList.add('hidden');
    }
  });

  document.getElementById('push-to-github-btn')?.addEventListener('click', async () => {
    if (!githubToken) {
      showToast('Session expired — refresh and sign in again.', 'error');
      return;
    }
    const moduleId = moduleSelect?.value;
    const sha = shaField?.value.trim();
    if (!moduleId || !sha) {
      showToast('Load from GitHub first (need file SHA).', 'error');
      return;
    }
    const mdString = editor?.value || '';
    try {
      parseFrontMatter(mdString);
    } catch (e) {
      showToast(e instanceof Error ? e.message : String(e), 'error');
      return;
    }
    const overlay = document.getElementById('loading-overlay');
    overlay?.classList.remove('hidden');
    try {
      const path = currentPath(moduleId);
      const { sha: newSha } = await putTextFile(
        GITHUB_OWNER,
        GITHUB_REPO,
        path,
        GITHUB_BRANCH,
        githubToken,
        mdString,
        sha,
        `Update ${path} via Sales-Navigator admin`
      );
      if (shaField && newSha) shaField.value = newSha;
      showToast('Pushed to GitHub.');
    } catch (e) {
      console.error(e);
      showToast(String(e.message || e), 'error');
    } finally {
      overlay?.classList.add('hidden');
    }
  });

}

main().catch(console.error);
