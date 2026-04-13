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

    // System prompt instructing the AI how to act
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

    const payload = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150,
      stream: true,
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API Error:', error);
      return new Response('Error communicating with AI service', { status: 500 });
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
    return new Response('Internal Server Error', { status: 500 });
  }
}
