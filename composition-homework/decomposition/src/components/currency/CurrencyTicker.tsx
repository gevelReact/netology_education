/** Отвечает за блок курсов валют и котировок под новостной лентой. */

import CurrencyItem from './CurrencyItem.tsx'
import type { CurrencyItemProps } from './CurrencyItem.tsx'

type CurrencyTickerProps = {
  items: CurrencyItemProps[]
}

export default function CurrencyTicker({ items }: CurrencyTickerProps) {
  return (
    <ul className="currency-ticker">
      {items.map((item, index) => (
        <CurrencyItem key={index} {...item} />
      ))}
      <li className="currency-ticker__more">…</li>
    </ul>
  )
}
