/** Отвечает за одну котировку в блоке курсов: название, значение и изменение. */

export type CurrencyItemProps = {
  name: string
  value: string
  change: string
}

export default function CurrencyItem({ name, value, change }: CurrencyItemProps) {
  return (
    <li className="currency-item">
      <span className="currency-item__name">{name}</span>
      <span className="currency-item__value">{value}</span>
      <span className="currency-item__change">{change}</span>
    </li>
  )
}
