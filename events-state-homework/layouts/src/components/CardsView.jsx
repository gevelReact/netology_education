import ShopCard from './ShopCard.jsx'

function CardsView({ products }) {
    return (
        <div className="cards">
            {products.map((product) => (
                <ShopCard key={`${product.name}-${product.color}`} product={product} />
            ))}
        </div>
    )
}

export default CardsView
