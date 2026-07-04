const systemPrompt = require('./systemPrompt');
const itinerarySchema = require('./jsonSchema');

/**
 * Generates a complete prompt for the AI travel planner
 * @param {Object} formData - User inputs from planner form
 * @returns {string} Complete prompt string
 */
function generatePlannerPrompt(formData) {
  const {
    destination,
    startDate,
    duration,
    budget,
    travelers,
    travelStyle,
    interests = [],
    accommodation,
    transportation,
    food,
    specialRequests
  } = formData;

  // Calculate end date from start date and duration
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + parseInt(duration));
  const endDate = end.toISOString().split('T')[0];

  // Build user input section
  let userInputSection = `DESTINATION: ${destination}
TRAVEL DATES: ${startDate} to ${endDate}
DURATION: ${duration} days
BUDGET: ${budget}
TRAVELERS: ${travelers}
TRAVEL STYLE: ${travelStyle}
INTERESTS: ${interests.length > 0 ? interests.join(', ') : 'No specific interests'}
ACCOMMODATION: ${accommodation}
TRANSPORTATION: ${transportation}
FOOD: ${food}`;

  if (specialRequests && specialRequests.trim()) {
    userInputSection += `\nSPECIAL REQUESTS: ${specialRequests}`;
  }

  // Convert schema to string for inclusion
  const schemaString = JSON.stringify(itinerarySchema, null, 2);

  // Combine all parts
  const fullPrompt = `${systemPrompt}

${userInputSection}

CRITICAL REQUIREMENTS:
- Generate EXACTLY ${duration} days of daily plans
- Return ONLY valid JSON matching the schema below
- No extra text, explanations, or Markdown

RESPONSE SCHEMA:
${schemaString}`;

  return fullPrompt;
}

module.exports = generatePlannerPrompt;
