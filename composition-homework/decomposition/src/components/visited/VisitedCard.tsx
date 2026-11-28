/** Отвечает за блок «Посещаемое»: заголовок и список популярных ссылок. */

import VisitedItem from './VisitedItem.tsx'
import type { VisitedItemProps } from './VisitedItem.tsx'

type VisitedCardProps = {
  title: string
  items: VisitedItemProps[]
}

export default function VisitedCard({ title, items }: VisitedCardProps) {
  return (
    <section className="card">
      <a className="card__title" href="#">
        {title}
      </a>
      <ul className="visited-card__list">
        {items.map((item, index) => (
          <VisitedItem key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}
