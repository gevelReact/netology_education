import type {MessageProps} from '../types/types'

function Typing({from, message}: MessageProps) {
    return (
        <li>
            <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="typing" aria-label={`${from.name} печатает`}>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
            </div>
        </li>
    )
}

export default Typing
