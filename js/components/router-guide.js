import { escapeHtml } from '../lib/markdown-config.js';

const ROUTER_ROOT_ID = 'router-guide-root';
const ROUTER_WELCOME_MOCK_ROOT_ID = 'router-welcome-mock-root';
const ROUTER_GREETING =
  "Router: Routing the 'Why' to your inbox, one packet at a time!";
const ROUTER_WELCOME_MOCK_GREETING =
  "Hey—I'm Router, your pocket-sized coach orb. Tap me anytime for GPC-Context aware nudges on how things land with customers—the \"why\" in a light packet without the binder vibe. ✨";

/**
 * @param {number} status
 * @param {string} rawText
 * @returns {string | null}
 */
function formatRouterApiError(status, rawText) {
  try {
    const j = JSON.parse(rawText);
    if (typeof j.userMessage === 'string' && j.userMessage.trim()) {
      return j.userMessage.trim();
    }
  } catch {
    /* ignore */
  }
  if (
    status === 429 ||
    /RESOURCE_EXHAUSTED|"code":\s*429|resource exhausted/i.test(rawText)
  ) {
    return "Google's Gemini API hit a rate or quota limit (resource exhausted). Wait a minute and try again. Some modules still load the full GPC library as context, which uses more tokens—ask your admin about quota or context size if this keeps happening.";
  }
  return null;
}

/** @type {{ moduleId: string; messages: { role: 'user' | 'assistant'; content: string }[] } | null} */
let routerState = null;

export function destroyRouterComponent() {
  document.getElementById(ROUTER_ROOT_ID)?.remove();
  routerState = null;
}

/**
 * Remove the welcome-page Router preview (no API). Safe if absent.
 */
export function destroyRouterWelcomeMock() {
  document.getElementById(ROUTER_WELCOME_MOCK_ROOT_ID)?.remove();
}

/**
 * Getting Started only: same FAB + panel chrome as the real Router, with a static welcome message (no `/api/router` on this page).
 * z-[103] keeps the FAB just above the tour dim; the tour raises `#tour-glass-root` on the Router step so the HUD stays readable.
 * @param {{ onPanelVisibilityChange?: () => void }} [opts]
 */
export function mountRouterWelcomeMock(opts) {
  destroyRouterWelcomeMock();

  const root = document.createElement('div');
  root.id = ROUTER_WELCOME_MOCK_ROOT_ID;
  root.className = 'fixed bottom-5 right-5 z-[103]';
  root.innerHTML = `
    <button type="button" data-router-open class="group flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-slate-900 p-0 shadow-2xl shadow-slate-900/30 ring-2 ring-orange-400/70 transition hover:-translate-y-0.5 hover:ring-orange-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300" aria-label="Open Router coach" title="Open Router coach">
      <img src="Proposal_Assets/router-fab.png" alt="" width="72" height="72" decoding="async" loading="lazy" class="h-full w-full object-cover transition group-hover:scale-[1.02]" />
    </button>
    <section data-router-panel class="hidden fixed bottom-28 right-5 flex h-[min(76vh,42rem)] w-[min(92vw,30rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/10 sm:right-6 sm:bottom-32" aria-label="Router coach">
      <header class="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
        <div class="min-w-0">
          <h2 class="flex items-center gap-2 text-base font-bold">
            <img src="Proposal_Assets/router-fab.png" alt="" width="32" height="32" decoding="async" loading="lazy" class="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-white/25" />
            <span>Router</span>
          </h2>
          <p class="mt-0.5 text-xs leading-relaxed text-slate-300">AI coach · GPC-Context aware in every module</p>
        </div>
        <button type="button" data-router-close class="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">Close</button>
      </header>
      <div data-router-messages class="flex-1 space-y-3 overflow-y-auto bg-slate-50/80 p-4"></div>
      <div class="shrink-0 border-t border-slate-200 bg-white px-4 py-3 text-center">
        <p class="text-[11px] leading-snug text-slate-500">Open any training module and the same orb answers live questions—always inside GPC-approved context.</p>
      </div>
    </section>
  `;
  document.body.appendChild(root);

  const openBtn = root.querySelector('[data-router-open]');
  const closeBtn = root.querySelector('[data-router-close]');
  const panel = root.querySelector('[data-router-panel]');
  const messagesEl = root.querySelector('[data-router-messages]');

  function renderMessages() {
    if (!messagesEl) return;
    const text = ROUTER_WELCOME_MOCK_GREETING;
    messagesEl.innerHTML = `
          <div class="flex justify-start">
            <div class="bg-white text-slate-800 border border-slate-200 rounded-2xl rounded-bl-none max-w-[88%] px-3.5 py-2.5 text-sm leading-relaxed shadow-sm">
              ${escapeHtml(text).replace(/\n/g, '<br>')}
            </div>
          </div>`;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  openBtn?.addEventListener('click', () => {
    root.setAttribute('data-router-fab-engaged', 'true');
    panel?.classList.remove('hidden');
    renderMessages();
    opts?.onPanelVisibilityChange?.();
  });
  closeBtn?.addEventListener('click', () => {
    panel?.classList.add('hidden');
    opts?.onPanelVisibilityChange?.();
  });

  renderMessages();
}

/**
 * Floating Router coach for active training modules.
 * @param {string} moduleId
 */
export function mountRouterComponent(moduleId) {
  if (!moduleId) {
    destroyRouterComponent();
    return;
  }

  destroyRouterWelcomeMock();
  document.getElementById(ROUTER_ROOT_ID)?.remove();
  routerState = {
    moduleId,
    messages: [{ role: 'assistant', content: ROUTER_GREETING }],
  };

  const root = document.createElement('div');
  root.id = ROUTER_ROOT_ID;
  root.className = 'fixed bottom-5 right-5 z-[190]';
  root.innerHTML = `
    <button type="button" data-router-open class="group flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-slate-900 p-0 shadow-2xl shadow-slate-900/30 ring-2 ring-orange-400/70 transition hover:-translate-y-0.5 hover:ring-orange-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300" aria-label="Explore with AI Router" title="Explore with AI Router">
      <img src="Proposal_Assets/router-fab.png" alt="" width="72" height="72" decoding="async" loading="lazy" class="h-full w-full object-cover transition group-hover:scale-[1.02]" />
    </button>
    <section data-router-panel class="hidden fixed bottom-28 right-5 flex h-[min(76vh,42rem)] w-[min(92vw,30rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/10 sm:right-6 sm:bottom-32" aria-label="Router AI guide">
      <header class="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
        <div class="min-w-0">
          <h2 class="flex items-center gap-2 text-base font-bold">
            <img src="Proposal_Assets/router-fab.png" alt="" width="32" height="32" decoding="async" loading="lazy" class="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-white/25" />
            <span>Router</span>
          </h2>
          <p class="mt-0.5 text-xs leading-relaxed text-slate-300">Explore with AI · GPC-Context aware coach</p>
        </div>
        <button type="button" data-router-close class="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">Close</button>
      </header>
      <div data-router-messages class="flex-1 space-y-3 overflow-y-auto bg-slate-50/80 p-4"></div>
      <form data-router-form class="shrink-0 border-t border-slate-200 bg-white p-3">
        <label class="sr-only" for="router-input">Ask Router a question</label>
        <div class="flex gap-2">
          <input id="router-input" data-router-input type="text" class="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Ask Router why this matters..." autocomplete="off">
          <button type="submit" data-router-send class="rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60">Send</button>
        </div>
        <p class="mt-2 text-[11px] leading-snug text-slate-500">Router stays within GPC-context for this module. If the route is missing, ask an SE.</p>
      </form>
    </section>
  `;
  document.body.appendChild(root);

  const openBtn = root.querySelector('[data-router-open]');
  const closeBtn = root.querySelector('[data-router-close]');
  const panel = root.querySelector('[data-router-panel]');
  const messagesEl = root.querySelector('[data-router-messages]');
  const form = root.querySelector('[data-router-form]');
  const input = root.querySelector('[data-router-input]');
  const sendBtn = root.querySelector('[data-router-send]');

  function renderMessages() {
    if (!messagesEl || !routerState) return;
    messagesEl.innerHTML = routerState.messages
      .map((message) => {
        const isUser = message.role === 'user';
        return `
          <div class="flex ${isUser ? 'justify-end' : 'justify-start'}">
            <div class="${isUser ? 'bg-orange-500 text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'} max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm">
              ${escapeHtml(message.content).replace(/\n/g, '<br>')}
            </div>
          </div>`;
      })
      .join('');
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setLoading(isLoading) {
    if (input) input.disabled = isLoading;
    if (sendBtn) sendBtn.disabled = isLoading;
  }

  async function askRouter(question) {
    if (!routerState || !messagesEl) return;
    routerState.messages.push({ role: 'user', content: question });
    renderMessages();
    setLoading(true);

    const responseMessage = { role: 'assistant', content: 'Routing that packet...' };
    routerState.messages.push(responseMessage);
    renderMessages();

    try {
      const res = await fetch('/api/router', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleId: routerState.moduleId,
          messages: routerState.messages
            .filter(
              (message) =>
                message.content !== 'Routing that packet...' &&
                message.content !== ROUTER_GREETING,
            )
            .map((message) => ({ role: message.role, content: message.content })),
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        const friendly = formatRouterApiError(res.status, errorText);
        responseMessage.content =
          friendly ||
          `I'm still routing that packet. Something dropped in transit, so please try again or talk to an SE. Details: Router returned ${res.status}: ${errorText}`;
        renderMessages();
        return;
      }

      if (!res.body) {
        throw new Error('Router returned an empty response stream.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let answer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let boundary = buffer.indexOf('\n');
        while (boundary !== -1) {
          const line = buffer.slice(0, boundary).trim();
          buffer = buffer.slice(boundary + 1);

          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data !== '[DONE]') {
              try {
                const parsed = JSON.parse(data);
                const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
                answer += text;
                responseMessage.content = answer || 'Routing that packet...';
                renderMessages();
              } catch (error) {
                console.error('Router stream parse error', error, data);
              }
            }
          }

          boundary = buffer.indexOf('\n');
        }
      }

      responseMessage.content =
        answer.trim() || "I'm still routing that packet. Please check with an SE.";
      renderMessages();
    } catch (error) {
      console.error('Router Error:', error);
      const detail =
        error instanceof Error && error.message ? ` Details: ${error.message}` : '';
      responseMessage.content =
        `I'm still routing that packet. Something dropped in transit, so please try again or talk to an SE.${detail}`;
      renderMessages();
    } finally {
      setLoading(false);
      input?.focus();
    }
  }

  openBtn?.addEventListener('click', () => {
    panel?.classList.remove('hidden');
    renderMessages();
    input?.focus();
  });
  closeBtn?.addEventListener('click', () => {
    panel?.classList.add('hidden');
  });
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = input?.value.trim();
    if (!question) return;
    input.value = '';
    void askRouter(question);
  });

  renderMessages();
}
