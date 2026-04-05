import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize the Google Generative AI with your API key
// The API key should only be accessed server-side
const getGoogleAI = () => {
  // Use server-side environment variable (no NEXT_PUBLIC_ prefix)
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not defined in environment variables')
  }
  return new GoogleGenerativeAI(apiKey)
}

// Default model to use (e.g., 'gemini-1.5-pro')
export const defaultModel = process.env.GEMINI_MODEL || 'gemini-1.5-pro'

// Configure and expose a history-enabled model
export const getGenerativeModel = (modelName = defaultModel) => {
  const genAI = getGoogleAI()
  return genAI.getGenerativeModel({ model: modelName })
}

// Create system prompt with information about the portfolio
export const createSystemPrompt = () => {
  return `You will play the role of this website owner's AI assistant.
          Answer questions about the portfolio, his skills, projects, and experiences.
          Keep responses concise, friendly, and informative.
          If you don't know something, say so honestly.
          Avoid making up information that isn't related to the information in the context.`
}
