import { getFile, putJsonFile } from './lib/github-client.js';

const STORAGE_KEY = 'sales-navigator-github-config';

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveConfig(cfg) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
}

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
  return `modules/${moduleId}/content.json`;
}

async function main() {
  const ownerEl = document.getElementById('cfg-owner');
  const repoEl = document.getElementById('cfg-repo');
  const branchEl = document.getElementById('cfg-branch');
  const tokenEl = document.getElementById('pat-input');
  const moduleSelect = document.getElementById('module-select');
  const editor = document.getElementById('json-editor');
  const shaField = document.getElementById('file-sha');

  const cfg = loadConfig();
  if (ownerEl) ownerEl.value = cfg.owner || '';
  if (repoEl) repoEl.value = cfg.repo || '';
  if (branchEl) branchEl.value = cfg.branch || 'main';

  const manifestRes = await fetch('modules-manifest.json');
  const manifest = await manifestRes.json();
  const modules = [...(manifest.modules || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  for (const m of modules) {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = m.title;
    moduleSelect?.appendChild(opt);
  }

  document.getElementById('save-config-btn')?.addEventListener('click', () => {
    saveConfig({
      owner: ownerEl?.value.trim(),
      repo: repoEl?.value.trim(),
      branch: branchEl?.value.trim() || 'main',
    });
    showToast('Repository settings saved locally.');
  });

  document.getElementById('load-from-github-btn')?.addEventListener('click', async () => {
    const token = tokenEl?.value.trim();
    const owner = ownerEl?.value.trim();
    const repo = repoEl?.value.trim();
    const branch = branchEl?.value.trim() || 'main';
    const moduleId = moduleSelect?.value;
    if (!token || !owner || !repo || !moduleId) {
      showToast('Fill in PAT, owner, repo, and module.', 'error');
      return;
    }
    const overlay = document.getElementById('loading-overlay');
    overlay?.classList.remove('hidden');
    try {
      const path = currentPath(moduleId);
      const { content, sha } = await getFile(owner, repo, path, branch, token);
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
    const token = tokenEl?.value.trim();
    const owner = ownerEl?.value.trim();
    const repo = repoEl?.value.trim();
    const branch = branchEl?.value.trim() || 'main';
    const moduleId = moduleSelect?.value;
    const sha = shaField?.value.trim();
    if (!token || !owner || !repo || !moduleId || !sha) {
      showToast('Load from GitHub first (need file SHA), and fill PAT, owner, repo.', 'error');
      return;
    }
    let jsonString = editor?.value || '';
    try {
      JSON.parse(jsonString);
    } catch {
      showToast('Invalid JSON — fix syntax before saving.', 'error');
      return;
    }
    const overlay = document.getElementById('loading-overlay');
    overlay?.classList.remove('hidden');
    try {
      const path = currentPath(moduleId);
      const { sha: newSha } = await putJsonFile(
        owner,
        repo,
        path,
        branch,
        token,
        jsonString,
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

  document.getElementById('format-json-btn')?.addEventListener('click', () => {
    try {
      const parsed = JSON.parse(editor?.value || '{}');
      if (editor) editor.value = JSON.stringify(parsed, null, 2);
      showToast('JSON formatted.');
    } catch {
      showToast('Invalid JSON.', 'error');
    }
  });
}

main().catch(console.error);
