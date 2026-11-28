/** Отвечает за одну ссылку блока «Посещаемое»: название сервиса и описание к нему. */

export type VisitedItemProps = {
  title: string
  description: string
  href: string
}

export default function VisitedItem({ title, description, href }: VisitedItemProps) {
  return (
    <li className="visited-item">
      <a className="visited-item__link" href={href}>
        <strong className="visited-item__title">{title}</strong>
        <span className="visited-item__description"> — {description}</span>
      </a>
    </li>
  )
}
