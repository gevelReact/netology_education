/** Отвечает за блок «Телепрограмма»: заголовок, кнопка «Эфир» и список передач. */

import TvProgramItem from './TvProgramItem.tsx'
import type { TvProgramItemProps } from './TvProgramItem.tsx'

type TvProgramCardProps = {
  title: string
  actionLabel: string
  items: TvProgramItemProps[]
}

export default function TvProgramCard({ title, actionLabel, items }: TvProgramCardProps) {
  return (
    <section className="card">
      <div className="tv-program-card__header">
        <a className="card__title" href="#">
          {title}
        </a>
        <button className="tv-program-card__action" type="button">
          {actionLabel}
        </button>
      </div>
      <ul className="tv-program-card__list">
        {items.map((item, index) => (
          <TvProgramItem key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}
