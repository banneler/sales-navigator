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
        ? 'bg-indigo-600 text-white rounded-br-none' 
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

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
              aiText += content;
              bubble.innerHTML = escapeHtml(aiText).replace(/\n/g, '<br>');
              chatArea.scrollTop = chatArea.scrollHeight;
            } catch (e) {
              console.error('Error parsing stream chunk', e);
            }
          }
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
