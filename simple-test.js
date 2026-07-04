require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

async function main() {
  console.log("Key:", process.env.GEMINI_API_KEY.substring(0, 8));

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello",
  });

  console.log(response.text);
}

main().catch(console.error);