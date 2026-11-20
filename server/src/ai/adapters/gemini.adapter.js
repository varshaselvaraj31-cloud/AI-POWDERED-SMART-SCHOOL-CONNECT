import BaseAIAdapter from './base.adapter.js';

/**
 * Gemini AI Adapter template for Google Gemini API integration.
 * Ready for future extension when API keys and SDK/REST endpoints are configured.
 */
export class GeminiAdapter extends BaseAIAdapter {
  constructor(apiKey = process.env.GEMINI_API_KEY) {
    super({ apiKey });
    this.apiKey = apiKey;
  }

  async generateText(prompt, options = {}) {
    if (!this.apiKey) {
      return `[AI Engine Note] Gemini API key not configured. Simulated response for prompt: "${prompt.slice(0, 40)}..."`;
    }
    // Future expansion: call Gemini API
    return `[Gemini Response]: Analysis complete for: ${prompt}`;
  }

  async generateStructuredOutput(prompt, schema) {
    if (!this.apiKey) {
      return { status: 'mock', message: 'API key not configured', promptSummary: prompt.slice(0, 40) };
    }
    // Future expansion: call Gemini structured JSON mode
    return { status: 'success', data: {} };
  }
}

export default GeminiAdapter;
