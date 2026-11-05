import { useState } from 'react'
import IconSwitch from './IconSwitch.jsx'
import CardsView from './CardsView.jsx'
import ListView from './ListView.jsx'
import './Store.css'

const CARDS = 'cards'
const LIST = 'list'

const initialProducts = [
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
]

function Store() {
    const [products] = useState(initialProducts)
    const [layout, setLayout] = useState(CARDS)

    const handleSwitch = () => {
        setLayout((current) => (current === CARDS ? LIST : CARDS))
    }

    return (
        <div className="store">
            <div className="store__toolbar">
                <IconSwitch
                    icon={layout === CARDS ? 'view_list' : 'view_module'}
                    onSwitch={handleSwitch}
                />
            </div>
            {layout === CARDS ? (
                <CardsView products={products} />
            ) : (
                <ListView products={products} />
            )}
        </div>
    )
}

export default Store
