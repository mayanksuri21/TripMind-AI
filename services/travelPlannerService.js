const aiGateway = require('./ai/aiGateway');
const generatePlannerPrompt = require('../prompts/plannerPrompt');
const parseGeminiResponse = require('../utils/jsonParser');
const validateItinerary = require('../utils/jsonValidator');

class TravelPlannerService {
  /**
   * Orchestrates the complete travel planning workflow.
   * @param {Object} formData - User preferences from the planner form.
   * @returns {Promise<Object>} Validated itinerary object.
   */
  async generateItinerary(formData) {
    console.log('[PlannerService] Starting itinerary generation...');
    
    try {
      // Step 1: Build the prompt
      console.log('[PlannerService] Building prompt...');
      const prompt = generatePlannerPrompt(formData);
      
      // Step 2: Call AI
      console.log('[PlannerService] Calling AI Gateway...');
      const rawResponse = await aiGateway.generateItinerary(prompt);
      
      // Step 3: Parse JSON
      console.log('[PlannerService] Parsing AI response...');
      const parsedResponse = parseGeminiResponse(rawResponse);
      
      // Step 4: Validate JSON
      console.log('[PlannerService] Validating itinerary...');
      const validatedItinerary = validateItinerary(parsedResponse);
      
      console.log('[PlannerService] Itinerary generation complete. Returning validated itinerary.');
      return validatedItinerary;
      
    } catch (error) {
      console.error('[PlannerService] Error in itinerary generation:', error);
      throw error;
    }
  }
}

module.exports = new TravelPlannerService();
