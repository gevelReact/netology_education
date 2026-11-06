import MessageHistory from './components/MessageHistory'
import {type ChatMessage, ChatMessageType} from './types/types'
import './css/App.css'

const messages: ChatMessage[] = [
    {
        id: 'chat-5-1090',
        from: {name: 'Ольга'},
        type: ChatMessageType.RESPONSE,
        time: '10:10',
        text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?',
    },
    {
        id: 'chat-5-1091',
        from: {name: 'Виктор'},
        type: ChatMessageType.MESSAGE,
        time: '10:12',
        text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
    },
    {
        id: 'chat-5-1092',
        from: {name: 'Ольга'},
        type: ChatMessageType.RESPONSE,
        time: '10:14',
        text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?',
    },
    {
        id: 'chat-5-1093',
        from: {name: 'Виктор'},
        type: ChatMessageType.MESSAGE,
        time: '10:20',
        text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.',
    },
    {
        id: 'chat-5-1094',
        from: {name: 'Виктор'},
        type: ChatMessageType.TYPING,
        time: '10:31',
    },
]

function App() {
    return (
        <div className="clearfix container">
            <div className="chat">
                <div className="chat-history">
                    <MessageHistory list={messages}/>
                </div>
            </div>
        </div>
    )
}

export default App
