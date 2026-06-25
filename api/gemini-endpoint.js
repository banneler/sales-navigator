/**
 * Gemini Developer API endpoint for Router and AI Roleplay (streaming).
 * Model: gemini-3.1-flash-lite (GA; replaces retired gemini-2.0-flash).
 *
 * @see https://ai.google.dev/api/rest
 * @param {string} apiKey
 * @returns {string} The formatted SSE URL
 */
export function getGeminiStreamUrl(apiKey) {
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:streamGenerateContent?alt=sse&key=${apiKey}`;
}
