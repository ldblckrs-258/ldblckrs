import Markdown from 'react-markdown'

import { cn } from '@/lib/utils'

import { Message } from './interfaces'

interface MessageItemProps {
  message: Message
}

const MessageItem = ({ message }: MessageItemProps) => {
  // Function to safely format timestamp
  const formatTimestamp = (timestamp: Date | string) => {
    try {
      // If timestamp is a string, try to convert it to Date
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp)

      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'just now' // Fallback for invalid dates
      }

      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    } catch (error) {
      console.error('Error formatting timestamp:', error)
      return 'just now'
    }
  }

  return (
    <li
      className={cn(
        'flex max-w-[85%] flex-col rounded-lg px-3 py-2',
        message.sender === 'user'
          ? 'ml-auto bg-primary text-primary-foreground rounded-br-xs'
          : 'bg-muted rounded-bl-xs'
      )}
    >
      <Markdown>{message.content}</Markdown>
      <span className='mt-1 text-right text-xs opacity-70'>
        {formatTimestamp(message.timestamp)}
      </span>
    </li>
  )
}

export default MessageItem
