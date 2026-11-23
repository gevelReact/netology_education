/** Отвечает за одну новость в ленте: иконка источника, текст и ссылка. */

export type NewsItemProps = {
  icon: string
  text: string
  href: string
}

export default function NewsItem({ icon, text, href }: NewsItemProps) {
  return (
    <li className="news-item">
      <span className="news-item__icon" aria-hidden="true">
        {icon}
      </span>
      <a className="news-item__link" href={href}>
        {text}
      </a>
    </li>
  )
}
