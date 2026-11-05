function DropdownItem({ item, active, onSelect }) {
    const handleClick = (event) => {
        event.preventDefault()
        onSelect(item.id)
    }

    return (
        <li className={active ? 'active' : ''}>
            <a href={item.href ?? '#'} onClick={handleClick}>
                {item.title}
            </a>
        </li>
    )
}

export default DropdownItem
