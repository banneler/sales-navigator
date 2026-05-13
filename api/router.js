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

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

async function readJsonBody(req) {
  if (typeof req.json === 'function') return req.json();

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

async function streamGeminiResponse(geminiResponse, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  const reader = geminiResponse.body?.getReader();
  if (!reader) {
    res.end();
    return;
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(Buffer.from(value));
  }

  res.end();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  try {
    const { messages, moduleId } = await readJsonBody(req);

    if (!Array.isArray(messages)) {
      sendJson(res, 400, { error: 'Missing or invalid messages array' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      sendJson(res, 500, {
        error: 'GEMINI_API_KEY is not configured in the environment variables',
      });
      return;
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
      sendJson(res, 500, { error: 'Gemini API Error', details: errorText });
      return;
    }

    await streamGeminiResponse(response, res);
  } catch (error) {
    console.error('Router API Error:', error);
    sendJson(res, 500, {
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
