import { readFile } from 'node:fs/promises';
import path from 'node:path';

const CORPUS_PATH = path.join(process.cwd(), 'docs', 'gpc-training-corpus-structured.md');

/** @type {string | null} */
let cachedCorpus = null;

async function getCorpus() {
  if (cachedCorpus) return cachedCorpus;
  cachedCorpus = await readFile(CORPUS_PATH, 'utf8');
  return cachedCorpus;
}

function errorResponse(message, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages, moduleId } = await req.json();

    if (!Array.isArray(messages)) {
      return errorResponse('Missing or invalid messages array', 400);
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return errorResponse('GEMINI_API_KEY is not configured in the environment variables');
    }

    const corpus = await getCorpus();
    const safeModuleId =
      typeof moduleId === 'string' && /^[a-z0-9-]+$/.test(moduleId)
        ? moduleId
        : 'unknown-module';

    const systemPrompt = `You are Router, the GPC Sales Enablement coach.

Persona:
- Introduce yourself as: "Router: Routing the 'Why' to your inbox, one packet at a time!"
- Be helpful, professional, and slightly playful.
- Always explain the business "Why" behind the answer. For example, do not just define DIA; explain how its symmetrical SLA protects a customer's cloud-hosting revenue.

Rules:
- Your primary source of truth is the provided GPC Training Corpus.
- Do not give generic telecom advice.
- If the answer is not in the corpus, say you are "still routing that packet" and suggest they talk to an SE.
- The learner is currently viewing moduleId: ${safeModuleId}. Use that as context, but answer from the corpus.

GPC Training Corpus:
${corpus}`;

    const contents = messages.map((msg) => ({
      role: msg?.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(msg?.content ?? '') }],
    }));

    const payload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 700,
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini Router API Error:', errorText);
      return errorResponse('Gemini API Error');
    }

    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Router API Error:', error);
    return errorResponse('Internal Server Error');
  }
}
