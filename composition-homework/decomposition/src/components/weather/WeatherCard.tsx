/** Отвечает за виджет погоды: заголовок, иконка, текущая температура и прогноз на день. */

type WeatherCardProps = {
  title: string
  icon: string
  temperature: string
  details: string
}

export default function WeatherCard({ title, icon, temperature, details }: WeatherCardProps) {
  return (
    <section className="card weather-card">
      <a className="card__title" href="#">
        {title}
      </a>
      <div className="weather-card__row">
        <span className="weather-card__icon" aria-hidden="true">
          {icon}
        </span>
        <span className="weather-card__temperature">{temperature}</span>
        <span className="weather-card__details">{details}</span>
      </div>
    </section>
  )
}
