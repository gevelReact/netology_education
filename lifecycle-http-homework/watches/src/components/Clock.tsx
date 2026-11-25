import { Component } from 'react'
import moment from 'moment'
import './Clock.css'

type ClockProps = {
  id: string
  title: string
  // смещение в часах относительно Гринвича (UTC)
  offset: number
  offsetLabel: string
  onDelete: (id: string) => void
}

type ClockState = {
  now: moment.Moment
}

export class Clock extends Component<ClockProps, ClockState> {
  private timer: ReturnType<typeof setInterval> | null = null

  constructor(props: ClockProps) {
    super(props)
    this.state = { now: moment().utcOffset(props.offset) }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ now: moment().utcOffset(this.props.offset) })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  render() {
    const { title, offsetLabel, id, onDelete } = this.props
    const now = this.state.now

    const seconds = now.seconds()
    const minutes = now.minutes()
    const hours = now.hours()

    // углы стрелок в градусах: 360 / 60 = 6 на секунду и минуту,
    // 360 / 12 = 30 на час; минутная и часовая идут плавно, с долями
    const secondsAngle = seconds * 6
    const minutesAngle = minutes * 6 + seconds * 0.1
    const hoursAngle = (hours % 12) * 30 + minutes * 0.5

    return (
      <div className="clock">
        <div className="clock-head">
          <span className="clock-title" title={offsetLabel}>
            {title}
          </span>
          <button
            type="button"
            className="clock-delete"
            aria-label={`Удалить часы «${title}»`}
            onClick={() => onDelete(id)}
          >
            ×
          </button>
        </div>

        <div className="clock-face">
          <div
            className="hand hand--hours"
            style={{ transform: `rotate(${hoursAngle}deg)` }}
          />
          <div
            className="hand hand--minutes"
            style={{ transform: `rotate(${minutesAngle}deg)` }}
          />
          <div
            className="hand hand--seconds"
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          />
          <div className="clock-pin" />
        </div>

        <div className="clock-digital">{now.format('HH:mm:ss')}</div>
      </div>
    )
  }
}
