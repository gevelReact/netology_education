import type { ReactNode } from 'react'

interface CardProps {
  /** Картинка шапки карточки (card-img-top). Если не передана — карточка без картинки. */
  img?: string
  /** Атрибут alt для картинки. */
  imgAlt?: string
  /** Содержимое карточки. */
  children: ReactNode
}

function Card({ img, imgAlt = 'Card image cap', children }: CardProps) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {img && <img className="card-img-top" src={img} alt={imgAlt} />}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
