/**
 * Base AI Adapter interface.
 * Defines standard contract for all AI model integrations (Gemini, OpenAI, etc.).
 */
export class BaseAIAdapter {
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * Generate text response from prompt and context.
   * @param {string} prompt - User or system prompt
   * @param {object} options - Generation options (temperature, maxTokens, etc.)
   * @returns {Promise<string>}
   */
  async generateText(prompt, options = {}) {
    throw new Error('Method generateText() must be implemented by subclass');
  }

  /**
   * Generate structured JSON analysis from input data.
   * @param {string} prompt
   * @param {object} schema
   * @returns {Promise<object>}
   */
  async generateStructuredOutput(prompt, schema) {
    throw new Error('Method generateStructuredOutput() must be implemented by subclass');
  }
}

export default BaseAIAdapter;
