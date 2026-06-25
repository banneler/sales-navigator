const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');
const runTourBtn = document.getElementById('run-tour');
const captureCurrentBtn = document.getElementById('capture-current');
const downloadBtn = document.getElementById('download-bundle');

function setStatus(text) {
  statusEl.textContent = text;
}

function appendLog(line) {
  const ts = new Date().toLocaleTimeString();
  logEl.textContent = `[${ts}] ${line}\n` + logEl.textContent;
  logEl.textContent = logEl.textContent.slice(0, 4000);
}

function setBusy(busy) {
  runTourBtn.disabled = busy;
  captureCurrentBtn.disabled = busy;
}

async function sendBg(type) {
  return chrome.runtime.sendMessage({ type });
}

runTourBtn.addEventListener('click', async () => {
  setBusy(true);
  downloadBtn.disabled = true;
  setStatus('Running full tour… keep this window open.');
  appendLog('Starting full capture tour.');
  try {
    const res = await sendBg('SP_RUN_TOUR');
    if (!res?.ok) throw new Error(res?.error || 'Tour failed');
    const pages = res.export?.pages?.length ?? 0;
    setStatus(`Capture complete — ${pages} pages. Download the bundle next.`);
    downloadBtn.disabled = false;
    appendLog(`Tour finished (${pages} pages).`);
  } catch (e) {
    setStatus(`Error: ${e instanceof Error ? e.message : String(e)}`);
    appendLog(`Error: ${e instanceof Error ? e.message : String(e)}`);
  } finally {
    setBusy(false);
  }
});

captureCurrentBtn.addEventListener('click', async () => {
  setBusy(true);
  setStatus('Capturing current tab…');
  try {
    const res = await sendBg('SP_CAPTURE_CURRENT');
    if (!res?.ok) throw new Error(res?.error || 'Capture failed');
    setStatus('Current page captured.');
    downloadBtn.disabled = false;
    appendLog('Captured current tab.');
  } catch (e) {
    setStatus(`Error: ${e instanceof Error ? e.message : String(e)}`);
  } finally {
    setBusy(false);
  }
});

downloadBtn.addEventListener('click', async () => {
  downloadBtn.disabled = true;
  setStatus('Downloading bundle…');
  try {
    const res = await sendBg('SP_DOWNLOAD');
    if (!res?.ok) throw new Error(res?.error || 'Download failed');
    setStatus('Bundle downloaded — run npm run sp:assemble-module in the repo.');
    appendLog('Downloaded gpc-sharepoint-capture bundle.');
  } catch (e) {
    setStatus(`Error: ${e instanceof Error ? e.message : String(e)}`);
    downloadBtn.disabled = false;
  }
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'SP_LOG') appendLog(msg.message);
  if (msg.type === 'SP_PROGRESS') {
    if (msg.phase === 'page') {
      setStatus(`Page ${msg.current}/${msg.total}: ${msg.page}`);
    } else if (msg.phase === 'screenshot') {
      setStatus(`${msg.page} — screenshot ${msg.current}/${msg.total}: ${msg.detail}`);
    } else if (msg.phase === 'done') {
      setStatus('Capture complete. Download the bundle.');
      downloadBtn.disabled = false;
    }
  }
});

sendBg('SP_GET_EXPORT').then((res) => {
  if (res?.export?.pages?.length) {
    downloadBtn.disabled = false;
    setStatus(`Previous capture in memory (${res.export.pages.length} pages). Re-run or download.`);
  }
});
