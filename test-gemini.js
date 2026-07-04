require('dotenv').config();
console.log("API Key:", process.env.GEMINI_API_KEY);
const aiGateway = require('./services/ai/aiGateway');

/**
 * Simple test function to verify Gemini API integration
 */
async function testGeminiIntegration() {
  console.log('[Test] Testing Gemini integration...');
  try {
    const prompt = 'Say hello from TripMind AI';
    const response = await aiGateway.generateItinerary(prompt);
    console.log('\n[Test] Gemini Response:');
    console.log('-------------------------------');
    console.log(response);
    console.log('-------------------------------\n');
    console.log('[Test] Integration test passed!');
  } catch (error) {
    console.error('[Test] Integration test failed:', error);
  }
}

// Run the test
testGeminiIntegration();
