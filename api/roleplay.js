export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages, persona, scenario, goal } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Missing or invalid messages array', { status: 400 });
    }

    const systemPrompt = `You are playing the role of a customer in a sales roleplay simulation.
Your persona is: ${persona}
Your current scenario is: ${scenario}
The sales rep's goal is: ${goal}

Instructions:
1. Stay in character as the persona. Do not break character or acknowledge you are an AI.
2. Keep your responses concise, conversational, and realistic (1-3 sentences max).
3. If the rep successfully achieves their goal, you MUST include the exact phrase "[WIN]" at the end of your response to signal the simulation is complete.
4. If the rep is off track, push back realistically based on your persona.
5. Do not make it too easy, but be reasonable if they use good sales tactics.`;

    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const payload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not configured in the environment variables' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:streamGenerateContent?alt=sse&key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', errorText);
      return new Response(JSON.stringify({ error: 'Gemini API Error', details: errorText }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return the streaming response directly to the client
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Roleplay API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', message: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
