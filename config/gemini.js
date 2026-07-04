const { GoogleGenAI } = require('@google/genai');

// Initialize Gemini client using API key from environment variables
const geminiClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

module.exports = geminiClient;
