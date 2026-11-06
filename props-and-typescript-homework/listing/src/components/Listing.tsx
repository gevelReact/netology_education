export interface ListingItem {
    listing_id: number
    url: string
    MainImage?: {
        url_570xN: string
    }
    title: string
    currency_code: string
    price: string
    quantity: number
}

interface ListingProps {
    items?: ListingItem[]
}

const formatTitle = (title: string) =>
    title.length > 50 ? `${title.slice(0, 50)}…` : title

const formatPrice = (price: string, currencyCode: string) => {
    switch (currencyCode) {
        case 'USD':
            return `$${price}`
        case 'EUR':
            return `€${price}`
        default:
            return `${price} ${currencyCode}`
    }
}

const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low'
    if (quantity <= 20) return 'level-medium'
    return 'level-high'
}

function Listing({items = []}: ListingProps) {
    return (
        <div className="item-list">
            {items.map((item) => {
                if (!item.MainImage) return null

                return (
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt={item.title}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{formatTitle(item.title)}</p>
                            <p className="item-price">
                                {formatPrice(item.price, item.currency_code)}
                            </p>
                            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
                                {item.quantity} left
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Listing
