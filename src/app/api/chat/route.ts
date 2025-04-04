import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToGemini, streamMessageToGemini, getChatHistory, setChatHistory } from '@/lib/ai-service';
import { Message } from '@/components/chat/interfaces';

// List of allowed origins (your website domains)
const allowedOrigins = [
  ...(process.env.WEB_DOMAINS ? process.env.WEB_DOMAINS.split(',').map(domain => domain.trim()) : []),
  'https://ldblckrs.vercel.app',
  // Allow localhost for development
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
];

/**
 * Validates if the request is from an allowed origin
 */
const isValidOrigin = (request: NextRequest): boolean => {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  
  // Check if this is a same-origin request or from an allowed origin
  const isAllowedOrigin = !origin || allowedOrigins.includes(origin);
  const isAllowedReferer = !referer || allowedOrigins.some(allowed => referer.startsWith(allowed));
  
  return isAllowedOrigin && isAllowedReferer;
};

/**
 * Securely handle POST requests to the chat API endpoint
 */
export async function POST(request: NextRequest) {
  try {
    // Security check: Origin validation
    if (!isValidOrigin(request)) {
      const origin = request.headers.get('origin');
      const referer = request.headers.get('referer');
      console.warn(`Blocked request from unauthorized source: ${origin || referer}`);
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    // Extract and validate the request data
    const { message, chatHistory, stream = false } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request: message is required' },
        { status: 400 }
      );
    }
    
    // Update chat history in our service
    if (chatHistory) {
      setChatHistory(chatHistory);
    }

    // Handle streaming response if requested
    if (stream) {
      // Create a new ReadableStream for streaming the response
      const stream = new ReadableStream({
        async start(controller) {
          try {
            // Use the streaming version with a callback for each token
            await streamMessageToGemini(message, (token) => {
              // Encode and send each token as it arrives
              const encoder = new TextEncoder();
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ token })}\n\n`));
            });
            
            // Signal the final AI message
            const finalMessage: Message = {
              id: Date.now().toString(),
              content: 'DONE_STREAMING', // This is a signal, actual content is built client-side
              sender: 'gemini',
              timestamp: new Date().toISOString(),
            };
            
            const encoder = new TextEncoder();
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, finalMessage })}\n\n`));
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            const encoder = new TextEncoder();
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Stream processing failed' })}\n\n`));
            controller.close();
          }
        }
      });
      
      // Return a streaming response
      return new NextResponse(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }
    
    // Regular non-streaming response
    const response = await sendMessageToGemini(message);
    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

/**
 * Handle OPTIONS requests for CORS preflight
 */
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  
  // Only allow preflight requests from allowed origins
  if (origin && allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Max-Age': '86400', // 24 hours
      },
    });
  }
  
  // Default response for other origins
  return new NextResponse(null, { status: 204 });
}