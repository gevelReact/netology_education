import { useState } from 'react'
import DropdownList from './DropdownList.jsx'
import './Dropdown.css'

function Dropdown({ title, icon, items }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen((open) => !open)
    }

    return (
        <div className={isOpen ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
            <button type="button" className="btn" onClick={handleToggle}>
                <span>{title}</span>
                <i className="material-icons">{icon}</i>
            </button>
            <DropdownList items={items} />
        </div>
    )
}

export default Dropdown
