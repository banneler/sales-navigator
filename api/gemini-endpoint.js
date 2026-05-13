/**
 * Gemini Developer API (Google AI Studio / API key), NOT Vertex AI.
 * Must stay in sync across all server routes that call Flash with streaming.
 *
 * @see https://ai.google.dev/api/rest
 * @param {string} apiKey
 */
export function gemini20FlashStreamUrl(apiKey) {
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${apiKey}`;
}
