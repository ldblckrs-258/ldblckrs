import { GenerateContentResult } from '@google/generative-ai';
import { Message } from '@/components/chat/interfaces';
import { createSystemPrompt, getGenerativeModel } from './ai-config';
import { getPortfolioContextData } from './portfolio-context';

// Chat history management
let chatHistory: Message[] = [];

export const getChatHistory = () => {
  return chatHistory;
};

export const setChatHistory = (history: Message[]) => {
  chatHistory = history;
};

// Convert our Message objects to the format expected by Google AI
const formatMessagesForGemini = (messages: Message[]) => {
  return messages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));
};

// Standard non-streaming response
export async function sendMessageToGemini(message: string): Promise<Message> {
  try {
    // Get context data from portfolio
    const portfolioContext = await getPortfolioContextData();
    
    // Get the model
    const model = getGenerativeModel();
    
    // Format the system instruction properly
    const systemInstructionContent = {
      role: 'system',
      parts: [{ text: createSystemPrompt() + '\n\n' + portfolioContext }]
    };
    
    // Start a chat session with correct format for systemInstruction
    const chat = model.startChat({
      history: formatMessagesForGemini(chatHistory),
      systemInstruction: systemInstructionContent,
    });
    
    // Send the message and get the response
    const result: GenerateContentResult = await chat.sendMessage(message);
    const response = result.response;
    const responseText = response.text();
    
    // Format the response as a Message object with string timestamp to avoid serialization issues
    const responseMessage: Message = {
      id: Date.now().toString(),
      content: responseText,
      sender: 'gemini',
      timestamp: new Date().toISOString(),
    };
    
    return responseMessage;
  } catch (error: any) {
    console.error('Error sending message to Gemini:', error?.response?.detail);
    
    return {
      id: Date.now().toString(),
      content: 'Sorry, I encountered an error. Please try again later.',
      sender: 'gemini',
      timestamp: new Date().toISOString(),
    };
  }
}

// New streaming version of the message function
export async function streamMessageToGemini(
  message: string, 
  onTokenReceived: (token: string) => void
): Promise<Message> {
  let fullResponseText = '';
  
  try {
    // Get context data from portfolio
    const portfolioContext = await getPortfolioContextData();
    
    // Get the model
    const model = getGenerativeModel();
    
    // Format the system instruction properly
    const systemInstructionContent = {
      role: 'system',
      parts: [{ text: createSystemPrompt() + '\n\n' + portfolioContext }]
    };
    
    // Start a chat session with correct format for systemInstruction
    const chat = model.startChat({
      history: formatMessagesForGemini(chatHistory),
      systemInstruction: systemInstructionContent,
    });
    
    // Stream the response
    const result = await chat.sendMessageStream(message);
    
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullResponseText += chunkText;
      onTokenReceived(chunkText);
    }
    
    // Return the complete message after streaming is done
    const responseMessage: Message = {
      id: Date.now().toString(),
      content: fullResponseText,
      sender: 'gemini',
      timestamp: new Date().toISOString(),
    };
    
    return responseMessage;
  } catch (error: any) {
    console.error('Error streaming message from Gemini:', error?.response?.detail);
    const errorMessage = 'Sorry, I encountered an error. Please try again later.';
    
    // Send the error message to the stream
    onTokenReceived(errorMessage);
    
    // Return error message
    return {
      id: Date.now().toString(),
      content: errorMessage,
      sender: 'gemini',
      timestamp: new Date().toISOString(),
    };
  }
}