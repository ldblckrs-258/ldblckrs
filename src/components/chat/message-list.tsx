import { autoScrollListRef } from '@/hooks/use-auto-scroll'

import { Message } from './interfaces'
import MessageItem from './message-item'

interface MessageListProps {
  messages: Message[]
  isLoading: boolean
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  return (
    <ul
      ref={autoScrollListRef}
      className='flex flex-col gap-3 list-none m-0 p-0'
    >
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      {isLoading && (
        <li className='flex animate-pulse items-center gap-1 rounded-lg bg-muted px-4 py-6'>
          <span className='h-2 w-2 rounded-full bg-primary/50'></span>
          <span className='h-2 w-2 rounded-full bg-primary/50 animation-delay-200'></span>
          <span className='h-2 w-2 rounded-full bg-primary/50 animation-delay-400'></span>
        </li>
      )}
    </ul>
  )
}

export default MessageList
