const geminiClient = require('../../config/gemini');

class GeminiProvider {
  /**
   * Directly interfaces with Google Gemini API.
   * @param {string} prompt - The prompt text.
   * @returns {Promise<string>} Gemini response text.
   */
  async generate(prompt) {
    console.log('[GeminiProvider] Sending request...');
    try {
      const response = await geminiClient.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt
      });
      // Extract and return the response text
      const text = response.text;
      console.log('[GeminiProvider] Response received.');
      return text;
    } catch (error) {
      console.error('[GeminiProvider] Error calling Gemini API:', error);
      
      // Handle specific error types
      if (error.status === 429) {
        throw new Error('Gemini API rate limit exceeded. Please try again later.');
      } else if (error.status === 403) {
        throw new Error('Gemini API access forbidden. Check your API key and permissions.');
      } else if (error.status >= 500) {
        throw new Error('Gemini API server error. Please try again later.');
      } else if (error.code === 'ECONNABORTED' || error.name === 'AbortError') {
        throw new Error('Gemini API request timed out. Please try again.');
      }
      
      // General error
      throw new Error('Failed to generate content from Gemini API');
    }
  }
}

module.exports = new GeminiProvider();
