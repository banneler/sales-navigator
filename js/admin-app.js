import { getFile, putTextFile } from './lib/github-client.js';
import { parseFrontMatter } from './lib/front-matter.js';
import { renderModuleDocumentHtml } from './lib/markdown-sections.js';
import {
  filterImagesBySearch,
  filterImagesForModule,
  insertMarkdownAtCursor,
  pathToAltText,
} from './lib/training-assets.js';

// Hardcoded — same pattern as Enterprise-Proposals admin (GITHUB_OWNER / GITHUB_REPO)
const GITHUB_OWNER = 'banneler';
const GITHUB_REPO = 'sales-navigator';
const GITHUB_BRANCH = 'main';

const ASSET_GRID_MAX = 200;

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

async function main() {
  const moduleSelect = document.getElementById('module-select');
  const editor = document.getElementById('markdown-editor');
  const shaField = document.getElementById('file-sha');
  const previewEl = document.getElementById('admin-preview');
  const assetGrid = document.getElementById('asset-picker-grid');
  const assetCountEl = document.getElementById('asset-picker-count');
  const assetSearch = document.getElementById('asset-search');
  const assetShowAll = document.getElementById('asset-show-all');

  let previewTimer = 0;
  let assetSearchTimer = 0;

  /** @type {string[]} */
  let trainingImages = [];
  /** @type {{ routes?: Record<string, string[]> } | null} */
  let routesConfig = null;
  let assetSearchQuery = '';
  let showAllAssets = false;

  try {
    const [mRes, rRes] = await Promise.all([
      fetch('training-assets-manifest.json'),
      fetch('modules-asset-routes.json'),
    ]);
    if (mRes.ok) {
      const mJson = await mRes.json();
      trainingImages = mJson.images || [];
    }
    if (rRes.ok) {
      routesConfig = await rRes.json();
    }
  } catch (e) {
    console.warn('Training assets metadata not loaded', e);
  }

  function renderAssetPicker() {
    if (!assetGrid || !moduleSelect) return;

    if (!trainingImages.length) {
      assetGrid.innerHTML =
        '<p class="text-sm text-slate-500 col-span-full">No training images found. Run <code class="bg-slate-100 px-1 rounded text-xs">python scripts/build_training_assets_manifest.py</code> from the repo root.</p>';
      if (assetCountEl) assetCountEl.textContent = '';
      return;
    }

    const moduleId = moduleSelect.value;
    let list = filterImagesForModule(trainingImages, moduleId, routesConfig, showAllAssets);
    list = filterImagesBySearch(list, assetSearchQuery);
    const total = list.length;
    const sliced = list.slice(0, ASSET_GRID_MAX);

    if (assetCountEl) {
      const scope = showAllAssets ? 'All images' : 'Module-routed';
      assetCountEl.textContent = `${scope}: ${total} match · showing ${sliced.length}${total > ASSET_GRID_MAX ? ` (cap ${ASSET_GRID_MAX})` : ''} · ${trainingImages.length} total in manifest`;
    }

    assetGrid.innerHTML = '';
    for (const p of sliced) {
      const alt = pathToAltText(p);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className =
        'group border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-left';
      btn.setAttribute('aria-label', `Insert ${p.split('/').pop()}`);

      const wrap = document.createElement('div');
      wrap.className = 'h-24 flex items-center justify-center bg-slate-100 p-1';
      const img = document.createElement('img');
      img.src = encodeURI(p);
      img.alt = '';
      img.loading = 'lazy';
      img.className = 'max-h-full max-w-full object-contain';
      wrap.appendChild(img);

      const cap = document.createElement('p');
      cap.className = 'text-[10px] text-slate-500 truncate px-1 py-0.5 border-t border-slate-100';
      cap.title = p;
      cap.textContent = p.split('/').pop() || p;

      btn.appendChild(wrap);
      btn.appendChild(cap);
      btn.addEventListener('click', () => {
        if (!editor) return;
        const md = `![${alt}](${p})`;
        insertMarkdownAtCursor(editor, md);
        showToast('Image Markdown inserted');
      });
      assetGrid.appendChild(btn);
    }
  }

  function schedulePreviewUpdate() {
    window.clearTimeout(previewTimer);
    previewTimer = window.setTimeout(() => {
      if (previewEl && editor) {
        previewEl.innerHTML = renderModuleDocumentHtml(editor.value);
      }
    }, 250);
  }

  async function loadModuleFromGithub() {
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
    const loadingText = document.getElementById('loading-text');
    if (loadingText) loadingText.textContent = 'Loading module…';
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
      if (previewEl) previewEl.innerHTML = renderModuleDocumentHtml(content);
      renderAssetPicker();
      showToast('Loaded from GitHub.');
    } catch (e) {
      console.error(e);
      showToast(String(e.message || e), 'error');
    } finally {
      overlay?.classList.add('hidden');
      if (loadingText) loadingText.textContent = 'Working…';
    }
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
      await loadModuleFromGithub();
    } catch (e) {
      console.error(e);
      errEl.textContent = 'Invalid token or could not reach GitHub.';
      errEl.classList.remove('hidden');
    } finally {
      overlay?.classList.add('hidden');
      if (loadingText) loadingText.textContent = 'Working…';
    }
  }

  document.getElementById('unlock-btn')?.addEventListener('click', attemptLogin);
  document.getElementById('pat-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });

  const manifestRes = await fetch('modules-manifest.json');
  const manifest = await manifestRes.json();
  const modules = [...(manifest.modules || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
  for (const m of modules) {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = m.title;
    moduleSelect?.appendChild(opt);
  }

  document.getElementById('load-from-github-btn')?.addEventListener('click', loadModuleFromGithub);

  moduleSelect?.addEventListener('change', () => {
    renderAssetPicker();
    loadModuleFromGithub();
  });

  editor?.addEventListener('input', schedulePreviewUpdate);

  assetSearch?.addEventListener('input', () => {
    assetSearchQuery = assetSearch.value || '';
    window.clearTimeout(assetSearchTimer);
    assetSearchTimer = window.setTimeout(renderAssetPicker, 200);
  });

  assetShowAll?.addEventListener('change', () => {
    showAllAssets = assetShowAll.checked;
    renderAssetPicker();
  });

  renderAssetPicker();

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
      if (previewEl) previewEl.innerHTML = renderModuleDocumentHtml(mdString);
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
