import { useState } from 'react'
import DropdownItem from './DropdownItem.jsx'

function DropdownList({ items }) {
    const [selectedId, setSelectedId] = useState(items[0]?.id)

    return (
        <ul className="dropdown">
            {items.map((item) => (
                <DropdownItem
                    key={item.id}
                    item={item}
                    active={item.id === selectedId}
                    onSelect={setSelectedId}
                />
            ))}
        </ul>
    )
}

export default DropdownList
