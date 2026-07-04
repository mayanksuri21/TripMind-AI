/**
 * JSON Parser utility for cleaning and parsing Gemini AI responses
 */

function parseGeminiResponse(rawResponse) {
  console.log('[JsonParser] Cleaning response...');

  // Check if response is empty
  if (!rawResponse || rawResponse.trim() === '') {
    throw new Error('Empty AI response');
  }

  let cleanedResponse = rawResponse;

  // Remove Markdown code fences (both ```json and ```)
  // Regex to match any code fence with optional json label
  const codeFenceRegex = /```(?:json)?\s*([\s\S]*?)\s*```/;
  const match = cleanedResponse.match(codeFenceRegex);
  
  if (match && match[1]) {
    cleanedResponse = match[1];
  }

  // Trim whitespace
  cleanedResponse = cleanedResponse.trim();

  // Parse JSON
  try {
    const parsed = JSON.parse(cleanedResponse);
    console.log('[JsonParser] JSON parsed successfully.');
    return parsed;
  } catch (error) {
    console.error('[JsonParser] JSON parsing failed:', error.message);
    throw new Error('Invalid JSON in AI response');
  }
}

module.exports = parseGeminiResponse;
