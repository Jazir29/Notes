import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Safely initialize API
let ai: GoogleGenAI | null = null;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const generateNoteContent = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Please add your Gemini API Key.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, concise note body (under 40 words) based on this topic: ${prompt}. Do not include a title.`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate content. Please try again.";
  }
};

export const suggestTitle = async (content: string): Promise<string> => {
    if (!ai) return "New Note";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate a catchy, short title (max 6 words) for this note content: "${content}"`,
        });
        return response.text?.replace(/"/g, '').trim() || "New Note";
    } catch (error) {
        return "New Note";
    }
}
