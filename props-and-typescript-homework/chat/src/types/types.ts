export interface ChatMessage {
  id: string
  from: Author
  type: ChatMessageType
  time: string
  text?: string
}

export interface Author {
  name: string
}

export enum ChatMessageType {
  RESPONSE = 'response',
  MESSAGE = 'message',
  TYPING = 'typing',
}

export interface MessageProps {
  from: Author
  message: ChatMessage
}
