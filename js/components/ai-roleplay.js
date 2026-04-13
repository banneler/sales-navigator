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
  let turnCount = 0;

  function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    
    const bubble = document.createElement('div');
    bubble.className = `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
      role === 'user' 
        ? 'bg-indigo-600 text-white rounded-br-none' 
        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
    }`;
    bubble.innerHTML = escapeHtml(text).replace(/\n/g, '<br>');
    
    div.appendChild(bubble);
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  function mockAiResponse(userText) {
    // Simple mock logic for the beta
    turnCount++;
    setTimeout(() => {
      if (turnCount === 1) {
        appendMessage('ai', "I hear you, but we've always used shared broadband. Why should we pay more for DIA or Ethernet when what we have is mostly fine?");
      } else if (turnCount === 2) {
        appendMessage('ai', "That makes sense. Reliability is definitely an issue for us lately. I'd be open to seeing some pricing on DIA.");
        
        // Win condition
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
          
          input.disabled = true;
          sendBtn.disabled = true;
          
          // Award XP
          awardXP(150, 'Roleplay Scenario Won');
        }, 1000);
      }
    }, 800);
  }

  startBtn.addEventListener('click', () => {
    if (isStarted) return;
    isStarted = true;
    
    startBtn.classList.add('hidden');
    chatArea.classList.remove('hidden');
    inputArea.classList.remove('hidden');
    
    input.disabled = false;
    sendBtn.disabled = false;
    
    // Initial AI greeting
    appendMessage('ai', "Hi there. I've got a few minutes. What can Great Plains do for us?");
    input.focus();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    
    appendMessage('user', text);
    input.value = '';
    
    mockAiResponse(text);
  });
}
