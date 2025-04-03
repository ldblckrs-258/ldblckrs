import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
// The API key should be stored in environment variables in production
export const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Default model to use (e.g., 'gemini-1.5-pro')
export const defaultModel = process.env.NEXT_PUBLIC_GEMINI_MODEL || 'gemini-1.5-pro';

// Configure and expose a history-enabled model
export const getGenerativeModel = (modelName = defaultModel) => {
  return genAI.getGenerativeModel({ model: modelName });
};

// Create system prompt with information about the portfolio
export const createSystemPrompt = () => {
  return `You are an AI assistant for a personal portfolio website. 
Your name is Gemini.
Answer questions about the portfolio owner, their skills, projects, and experiences.
Keep responses concise, friendly, and informative.
If you don't know something, say so honestly.
Avoid making up information that isn't provided in the context.`;
};