import { autoScrollListRef } from '@/hooks/use-auto-scroll'

import { Message } from './interfaces'
import MessageItem from './message-item'

interface MessageListProps {
  messages: Message[]
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <ul
      ref={autoScrollListRef}
      className='flex flex-col gap-3 list-none m-0 flex-1 p-4 overflow-y-auto'
    >
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </ul>
  )
}

export default MessageList
