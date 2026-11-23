/** Отвечает за широкий рекламный баннер: медиа-заглушка, возрастная метка и кнопка действия. */

type AdBannerProps = {
  mediaLabel: string
  ageLabel: string
  buttonLabel: string
}

export default function AdBanner({ mediaLabel, ageLabel, buttonLabel }: AdBannerProps) {
  return (
    <section className="ad-banner">
      <span className="ad-banner__media">{mediaLabel}</span>
      <span className="ad-banner__age">{ageLabel}</span>
      <button className="ad-banner__button" type="button">
        {buttonLabel}
      </button>
    </section>
  )
}
