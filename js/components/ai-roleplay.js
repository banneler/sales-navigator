import { escapeHtml } from '../lib/markdown-config.js';
import { awardXP } from '../lib/gamification.js';

export function bindRoleplayInteractions(container) {
  const rpContainer = container.querySelector('[data-roleplay-container]');
  if (!rpContainer) return;

  const startBtn = rpContainer.querySelector('.js-rp-start');
  const chatArea = rpContainer.querySelector('.js-rp-chat-area');
  const inputArea = rpContainer.querySelector('.js-rp-input-area');
  const form = rpContainer.querySelector('.js-rp-form');
  const input = rpContainer.querySelector('.js-rp-input');
  const sendBtn = rpContainer.querySelector('.js-rp-send');

  let isStarted = false;
  let messages = [];

  // Read metadata from the DOM
  const persona = rpContainer.dataset.persona || 'Customer';
  const scenario = rpContainer.dataset.scenario || '';
  const goal = rpContainer.dataset.goal || '';

  function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    
    const bubble = document.createElement('div');
    bubble.className = `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
      role === 'user' 
        ? 'bg-orange-500 text-white rounded-br-none shadow-sm' 
        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
    }`;
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, '<br>');
    
    div.appendChild(bubble);
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
    return bubble;
  }

  async function fetchAiResponse(userText) {
    messages.push({ role: 'user', content: userText });
    
    input.disabled = true;
    sendBtn.disabled = true;
    
    // Create an empty bubble for the AI response
    const bubble = appendMessage('ai', '...');
    bubble.classList.add('animate-pulse');
    
    try {
      const res = await fetch('/api/roleplay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, persona, scenario, goal })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server returned ${res.status}: ${errText}`);
      }

      // Handle streaming response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = '';
      bubble.innerHTML = '';
      bubble.classList.remove('animate-pulse');

      let buffer = '';
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
            if (data === '[DONE]') continue;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
              aiText += content;
              bubble.innerHTML = escapeHtml(aiText).replace(/\n/g, '<br>');
              chatArea.scrollTop = chatArea.scrollHeight;
            } catch (e) {
              console.error('Error parsing stream chunk', e, data);
            }
          }
          
          boundary = buffer.indexOf('\n');
        }
      }

      // Check for win condition
      if (aiText.includes('[WIN]')) {
        aiText = aiText.replace('[WIN]', '').trim();
        bubble.innerHTML = escapeHtml(aiText).replace(/\n/g, '<br>');
        
        setTimeout(() => {
          const winDiv = document.createElement('div');
          winDiv.className = "flex justify-center mt-4";
          winDiv.innerHTML = `
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center shadow-sm">
              <p class="text-lg" aria-hidden="true">🎉</p>
              <p class="text-sm font-bold text-emerald-900 mt-1">Scenario Complete!</p>
              <p class="text-xs text-emerald-700 mt-1">You successfully pivoted the conversation.</p>
            </div>
          `;
          chatArea.appendChild(winDiv);
          chatArea.scrollTop = chatArea.scrollHeight;
          
          awardXP(150, 'Roleplay Scenario Won');
        }, 500);
      } else {
        // Re-enable input if not won
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      }
      
      messages.push({ role: 'assistant', content: aiText });

    } catch (error) {
      console.error('Roleplay Error:', error);
      bubble.innerHTML = '<span class="text-red-600">Sorry, I lost my connection. Can we try that again?</span>';
      bubble.classList.remove('animate-pulse');
      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  startBtn.addEventListener('click', () => {
    if (isStarted) return;
    isStarted = true;
    
    startBtn.classList.add('hidden');
    chatArea.classList.remove('hidden');
    inputArea.classList.remove('hidden');
    
    // Initial AI greeting
    const greeting = "Hi there. I've got a few minutes. What can Great Plains do for us?";
    appendMessage('ai', greeting);
    messages.push({ role: 'assistant', content: greeting });
    
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    
    appendMessage('user', text);
    input.value = '';
    
    fetchAiResponse(text);
  });
}

/** @type {((e: KeyboardEvent) => void) | null} */
let roleplayModalEscapeHandler = null;

/**
 * Wire "Start AI Roleplay" to a glass modal over the module; panel lives in #module-roleplay-shelter until opened.
 * @param {HTMLElement} container - Module host (#module-host)
 */
export function initRoleplayModal(container) {
  if (!container || container.dataset.roleplayModalWired === '1') return;
  const openBtn = container.querySelector('[data-roleplay-open]');
  const shelter = container.querySelector('#module-roleplay-shelter');
  if (!openBtn || !shelter) return;
  container.dataset.roleplayModalWired = '1';

  function ensureModal() {
    let modal = container.querySelector('#module-roleplay-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'module-roleplay-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'module-roleplay-modal-title');
    modal.className =
      'fixed inset-0 z-[205] hidden flex items-center justify-center p-4 sm:p-6';
    modal.innerHTML = `
      <div class="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" data-roleplay-modal-dismiss tabindex="-1" aria-hidden="true"></div>
      <div class="relative z-10 flex max-h-[min(92vh,920px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/35 bg-white/75 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl backdrop-saturate-150">
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/45 bg-white/55 px-4 py-3 backdrop-blur-md">
          <h2 id="module-roleplay-modal-title" class="text-lg font-bold text-slate-900">
            AI Roleplay
            <span class="ml-2 inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/15">Beta</span>
          </h2>
          <button type="button" data-roleplay-modal-dismiss class="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
            Close
          </button>
        </div>
        <div id="module-roleplay-modal-body" class="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5"></div>
      </div>
    `;
    container.appendChild(modal);
    return modal;
  }

  function closeModal() {
    const modal = container.querySelector('#module-roleplay-modal');
    const panel = modal?.querySelector('[data-roleplay-container]');
    if (modal && panel && shelter) {
      shelter.appendChild(panel);
      modal.classList.add('hidden');
    }
    document.body.style.overflow = '';
    if (roleplayModalEscapeHandler) {
      document.removeEventListener('keydown', roleplayModalEscapeHandler);
      roleplayModalEscapeHandler = null;
    }
  }

  function openModal() {
    const modal = ensureModal();
    const bodyEl = modal.querySelector('#module-roleplay-modal-body');
    const panel = shelter.querySelector('[data-roleplay-container]');
    if (!panel || !bodyEl) return;
    bodyEl.appendChild(panel);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    roleplayModalEscapeHandler = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', roleplayModalEscapeHandler);
  }

  container.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest('[data-roleplay-open]')) {
      e.preventDefault();
      openModal();
      return;
    }
    if (t.closest('[data-roleplay-modal-dismiss]')) {
      e.preventDefault();
      closeModal();
    }
  });
}
