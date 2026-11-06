import {type ChatMessage, ChatMessageType} from '../types/types'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'

interface MessageHistoryProps {
    list?: ChatMessage[]
}

function MessageHistory({list = []}: MessageHistoryProps) {
    if (list.length === 0) return null

    return (
        <ul>
            {list.map((message) => {
                const props = {from: message.from, message}

                switch (message.type) {
                    case ChatMessageType.MESSAGE:
                        return <Message key={message.id} {...props} />
                    case ChatMessageType.RESPONSE:
                        return <Response key={message.id} {...props} />
                    case ChatMessageType.TYPING:
                        return <Typing key={message.id} {...props} />
                }
            })}
        </ul>
    )
}

export default MessageHistory
