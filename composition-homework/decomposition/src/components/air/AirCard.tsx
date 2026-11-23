/** Отвечает за блок «Эфир»: заголовок и список текущих трансляций. */

import AirItem from './AirItem.tsx'
import type { AirItemProps } from './AirItem.tsx'

type AirCardProps = {
  title: string
  items: AirItemProps[]
}

export default function AirCard({ title, items }: AirCardProps) {
  return (
    <section className="card">
      <a className="card__title" href="#">
        {title}
      </a>
      <ul className="air-card__list">
        {items.map((item, index) => (
          <AirItem key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}
