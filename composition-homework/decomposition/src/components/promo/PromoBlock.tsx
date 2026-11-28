/** Отвечает за рекламный блок в правой колонке: медиа-заглушка, заголовок и подпись. */

type PromoBlockProps = {
  mediaLabel: string
  title: string
  text: string
}

export default function PromoBlock({ mediaLabel, title, text }: PromoBlockProps) {
  return (
    <section className="promo-block">
      <span className="promo-block__media" aria-hidden="true">
        {mediaLabel}
      </span>
      <a className="promo-block__title" href="#">
        {title}
      </a>
      <p className="promo-block__text">{text}</p>
    </section>
  )
}
