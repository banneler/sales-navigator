/**
 * Gemini Developer API Endpoint for Router.
 * Must stay in sync across all server routes that call Flash Lite with streaming.
 *
 * @see https://ai.google.dev/api/rest
 * @param {string} apiKey
 * @returns {string} The formatted SSE URL
 */
export const getGeminiStreamUrl = (apiKey) => 
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:streamGenerateContent?alt=sse&key=${apiKey}`;
