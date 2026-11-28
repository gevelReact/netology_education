/** Отвечает за одну трансляцию в блоке «Эфир»: иконка воспроизведения, название и канал. */

export type AirItemProps = {
  title: string
  channel: string
}

export default function AirItem({ title, channel }: AirItemProps) {
  return (
    <li className="air-item">
      <span className="air-item__play" aria-hidden="true">
        ▶
      </span>
      <a className="air-item__title" href="#">
        {title}
      </a>
      <span className="air-item__channel">{channel}</span>
    </li>
  )
}
