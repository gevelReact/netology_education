import ShopItem from './ShopItem.jsx'

function ListView({ products }) {
    return (
        <div className="list">
            {products.map((product) => (
                <ShopItem key={`${product.name}-${product.color}`} product={product} />
            ))}
        </div>
    )
}

export default ListView
