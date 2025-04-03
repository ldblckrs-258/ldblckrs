export interface Message {
  id: string
  content: string
  sender: 'user' | 'gemini'
  timestamp: Date | string
}