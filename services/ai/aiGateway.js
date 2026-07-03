const geminiProvider = require('./geminiProvider');

class AIGateway {
  /**
   * Generates travel itineraries based on prompts.
   * Delegates execution to the configured AI provider.
   * @param {string} prompt - The compiled travel prompt.
   * @returns {Promise<string>} Raw model response.
   */
  async generateItinerary(prompt) {
    console.log('[AIGateway] Routing itinerary request to active provider.');
    return await geminiProvider.generate(prompt);
  }
}

module.exports = new AIGateway();
