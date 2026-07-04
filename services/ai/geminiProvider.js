const geminiClient = require('../../config/gemini');

class GeminiProvider {
  /**
   * Directly interfaces with Google Gemini API.
   * @param {string} prompt - The prompt text.
   * @returns {Promise<string>} Gemini response text.
   */
  async generate(prompt) {
    console.log('[GeminiProvider] Sending prompt to Gemini API:', prompt);
    try {
      const response = await geminiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });
      // Extract and return the response text
      const text = response.text;
      console.log('[GeminiProvider] Received response from Gemini API');
      return text;
    } catch (error) {
      console.error('[GeminiProvider] Error calling Gemini API:', error);
      throw new Error('Failed to generate content from Gemini API');
    }
  }
}

module.exports = new GeminiProvider();
