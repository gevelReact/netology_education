/** Отвечает за блок с картой: заголовок, медиа-заглушка карты и текстовая ссылка под ней. */

type MapCardProps = {
  title: string
  linkLabel: string
}

export default function MapCard({ title, linkLabel }: MapCardProps) {
  return (
    <section className="card map-card">
      <a className="card__title" href="#">
        {title}
      </a>
      <div className="map-card__media" aria-hidden="true" />
      <a className="map-card__link" href="#">
        {linkLabel}
      </a>
    </section>
  )
}
