/**
 * JSON Validator utility for validating parsed itinerary responses
 */

const requiredKeys = [
  'tripSummary',
  'destinationOverview',
  'weatherGuide',
  'dailyPlan',
  'budgetBreakdown',
  'accommodationSuggestions',
  'transportationPlan',
  'foodRecommendations',
  'packingChecklist',
  'clothingRecommendations',
  'photoSpots',
  'hiddenGems',
  'travelTips',
  'safetyTips',
  'emergencyInformation'
];

const arrayKeys = ['dailyPlan', 'travelTips', 'safetyTips'];

function validateItinerary(parsedJson) {
  // Check required keys exist
  for (const key of requiredKeys) {
    if (!(key in parsedJson)) {
      throw new Error(`Validation failed: Missing required key "${key}"`);
    }
  }

  // Check array keys are arrays
  for (const key of arrayKeys) {
    if (!Array.isArray(parsedJson[key])) {
      throw new Error(`Validation failed: "${key}" must be an array`);
    }
  }

  console.log('[Validator] Validation successful.');
  return parsedJson;
}

module.exports = validateItinerary;
