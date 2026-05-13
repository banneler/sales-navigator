import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { gemini20FlashStreamUrl } from './gemini-endpoint.js';

const FULL_CORPUS_PATH = path.join(process.cwd(), 'docs', 'gpc-training-corpus-structured.md');
const MODULE_CORPUS_DIR = path.join(process.cwd(), 'docs', 'router-corpus', 'by-module');

/** @type {Map<string, string>} */
const corpusCache = new Map();

function isCorpusStubMarkdown(text) {
  return /\n## Corpus stub\b/.test(text) && !/^### `/m.test(text);
}

async function getFullCorpus() {
  const key = '__full__';
  const hit = corpusCache.get(key);
  if (hit) return hit;
  const text = await readFile(FULL_CORPUS_PATH, 'utf8');
  corpusCache.set(key, text);
  return text;
}

/**
 * Loads docs/router-corpus/by-module/{moduleId}.md when present and non-stub.
 * Corpus stubs or missing paths fall back to the full structured file (cached).
 *
 * @param {string} moduleId
 */
async function getCorpusForModule(moduleId) {
  const key = `mod:${moduleId}`;
  const hit = corpusCache.get(key);
  if (hit) return hit;

  if (moduleId === 'unknown-module') {
    const full = await getFullCorpus();
    corpusCache.set(key, full);
    return full;
  }

  try {
    const slicePath = path.join(MODULE_CORPUS_DIR, `${moduleId}.md`);
    const slice = await readFile(slicePath, 'utf8');
    const corpus = isCorpusStubMarkdown(slice) ? await getFullCorpus() : slice;
    corpusCache.set(key, corpus);
    if (corpus !== slice) {
      console.info(`Router corpus: stub slice for "${moduleId}" → full structured corpus`);
    }
    return corpus;
  } catch {
    console.info(`Router corpus: missing slice for "${moduleId}" → full structured corpus`);
    const full = await getFullCorpus();
    corpusCache.set(key, full);
    return full;
  }
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** @returns {{ code?: number; message?: string; status?: string } | null} */
function parseGeminiErrorJson(text) {
  try {
    const outer = JSON.parse(text);
    const err = outer?.error ?? outer;
    if (!err || typeof err !== 'object') return null;
    return {
      code: typeof err.code === 'number' ? err.code : undefined,
      message: typeof err.message === 'string' ? err.message : undefined,
      status: typeof err.status === 'string' ? err.status : undefined,
    };
  } catch {
    return null;
  }
}

/**
 * Gemini can return RESOURCE_EXHAUSTED (429) under burst or quota pressure.
 * Retries a few times with backoff before failing.
 */
async function fetchGeminiStreamWithRetry(apiKey, payload) {
  const url = gemini20FlashStreamUrl(apiKey);
  const maxAttempts = 4;
  let lastText = '';

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) return response;

    lastText = await response.text();
    const nested = parseGeminiErrorJson(lastText);
    const exhausted =
      nested?.status === 'RESOURCE_EXHAUSTED' ||
      nested?.code === 429 ||
      /resource exhausted|429/i.test(lastText);

    if (exhausted && attempt < maxAttempts - 1) {
      const waitMs = 1500 * 2 ** attempt;
      console.warn(`Gemini 429 / exhausted; retry ${attempt + 1}/${maxAttempts - 1} after ${waitMs}ms`);
      await sleep(waitMs);
      continue;
    }

    return { error: true, httpStatus: response.status, body: lastText, parsed: nested };
  }

  return {
    error: true,
    httpStatus: 429,
    body: lastText,
    parsed: parseGeminiErrorJson(lastText),
  };
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

    const safeModuleId =
      typeof moduleId === 'string' && /^[a-z0-9-]+$/.test(moduleId)
        ? moduleId
        : 'unknown-module';

    const corpus = await getCorpusForModule(safeModuleId);

    const systemPrompt = `You are Router, the GPC Sales Enablement coach.

Persona:
- Helpful, professional, and lightly playful in tone—not performative openings.

Answer shape:
- Default short: tight paragraphs or a few bullets—enough to answer clearly, nothing padded.
- Lead with what matters first; tuck one-line "why it matters for the customer/business" when helpful.
- Go deeper—extra examples, mechanics, alternatives, risks—only when the user asks (e.g. elaborate, explain more, expand, dig in, detail, unpack, longer answer). If unsure, reply briefly and offer to expand.
- Never start your reply with slogans like "Router: Routing the 'Why' to your inbox..." or reuse that phrase as a headline. Jump straight into the answer; opening-line branding is handled in the UI, not repeated every turn.

Rules:
- Your primary source of truth is the GPC training context excerpt below for moduleId=${safeModuleId}. Stay within what it supports.
- Some modules fall back to the full library excerpt; infer breadth from how much material you see.
- Do not invent generic telecom advice unrelated to those sources.
- If the answer is not in the excerpt, say you are "still routing that packet" and suggest they talk to an SE.

GPC training context:
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
        maxOutputTokens: 896,
      },
    };

    const geminiResult = await fetchGeminiStreamWithRetry(apiKey, payload);

    if (!(geminiResult instanceof Response)) {
      const errorText = geminiResult.body || '';
      const parsed = geminiResult.parsed;
      const isRateOrQuota =
        parsed?.code === 429 ||
        parsed?.status === 'RESOURCE_EXHAUSTED' ||
        /resource exhausted|429/i.test(errorText);

      console.error('Gemini Router API Error:', errorText);

      if (isRateOrQuota) {
        sendJson(res, 429, {
          error: 'gemini_rate_limited',
          userMessage:
            "Google's Gemini API hit a rate or quota limit (resource exhausted). Wait a minute and try again. Router now prefers a slim module excerpt when one is bundled; fallback still uses the full library and uses more tokens. If this persists, raise the Gemini quota or narrow the fallback. Meanwhile, an SE can help.",
          details: errorText,
        });
        return;
      }

      sendJson(res, 502, {
        error: 'gemini_error',
        userMessage: 'The AI service returned an error. Try again in a moment, or talk to an SE.',
        details: errorText,
      });
      return;
    }

    await streamGeminiResponse(geminiResult, res);
  } catch (error) {
    console.error('Router API Error:', error);
    sendJson(res, 500, {
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
