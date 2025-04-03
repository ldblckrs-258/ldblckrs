'use client'

import React, { useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, MessageSquare, Send, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Message } from './interfaces'
import MessageList from './message-list'

export function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toISOString(), // Convert to ISO string for consistent serialization
    }

    // Update messages with user's message
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Send message to our API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          chatHistory: messages,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to get response from AI: ${response.status}`)
      }

      const data = await response.json()

      // Ensure the response has a valid timestamp (add current date if missing)
      const aiResponse: Message = {
        ...data.response,
        timestamp: data.response.timestamp || new Date().toISOString(),
      }

      // Add AI response to messages
      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      console.error('Error sending message:', error)

      // Add error message if API call fails
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again later.',
        sender: 'gemini',
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='fixed bottom-4 right-4 z-50 flex flex-col items-end'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='mb-4 flex h-[450px] w-[350px] flex-col overflow-hidden rounded-lg border bg-background shadow-lg'
          >
            {/* Chat header */}
            <div className='flex items-center justify-between border-b bg-primary/10 px-4 py-3'>
              <div className='flex items-center gap-2'>
                <MessageSquare className='h-5 w-5 text-primary' />
                <span className='font-medium'>AI Chatbot</span>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={toggleChat}
                className='h-7 w-7'
              >
                <X className='h-4 w-4' />
              </Button>
            </div>

            {/* Messages container */}
            <div className='flex-1 overflow-y-auto p-4'>
              {messages.length === 0 ? (
                <div className='flex h-full items-center justify-center'>
                  <p className='text-center text-muted-foreground'>
                    Ask the AI for information about me.
                  </p>
                </div>
              ) : (
                <MessageList messages={messages} isLoading={isLoading} />
              )}
            </div>

            {/* Input area */}
            <div className='border-t p-3'>
              <div className='flex items-center gap-2'>
                <input
                  ref={inputRef}
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder='Type a message...'
                  className='flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring'
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size='icon'
                  disabled={!inputValue.trim() || isLoading}
                >
                  <Send className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={toggleChat}
          size='icon'
          className='size-10 sm:size-12 rounded-full shadow-lg'
        >
          {isOpen ? (
            <ChevronDown className='size-6' />
          ) : (
            <MessageSquare className='size-5' />
          )}
        </Button>
      </motion.div>
    </div>
  )
}
