/** Отвечает за одну строку телепрограммы: время, название передачи и канал. */

export type TvProgramItemProps = {
  time: string
  title: string
  channel: string
}

export default function TvProgramItem({ time, title, channel }: TvProgramItemProps) {
  return (
    <li className="tv-program-item">
      <span className="tv-program-item__time">{time}</span>
      <a className="tv-program-item__title" href="#">
        {title}
      </a>
      <span className="tv-program-item__channel">{channel}</span>
    </li>
  )
}
