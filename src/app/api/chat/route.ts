import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToGemini, getChatHistory, setChatHistory } from '@/lib/ai-service';
import { Message } from '@/components/chat/interfaces';

export async function POST(request: NextRequest) {
  try {
    const { message, chatHistory } = await request.json();
    
    // Update chat history in our service
    if (chatHistory) {
      setChatHistory(chatHistory);
    }

    // Send the message to Gemini
    const response = await sendMessageToGemini(message);
    
    // Return the AI response
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}