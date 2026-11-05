import Button from './Button.jsx'

function ShopItem({ product }) {
    return (
        <article className="item">
            <img className="item__image" src={product.img} alt={product.name} />
            <h2 className="item__name">{product.name}</h2>
            <p className="item__color">{product.color}</p>
            <span className="item__price">${product.price}</span>
            <Button>Add to cart</Button>
        </article>
    )
}

export default ShopItem
