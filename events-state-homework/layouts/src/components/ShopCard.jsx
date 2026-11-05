import Button from './Button.jsx'

function ShopCard({ product }) {
    return (
        <article className="card">
            <h2 className="card__name">{product.name}</h2>
            <p className="card__color">{product.color}</p>
            <img className="card__image" src={product.img} alt={product.name} />
            <div className="card__footer">
                <span className="card__price">${product.price}</span>
                <Button>Add to cart</Button>
            </div>
        </article>
    )
}

export default ShopCard
