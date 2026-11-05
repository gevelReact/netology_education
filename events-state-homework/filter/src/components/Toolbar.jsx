function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <ul className="toolbar">
            {filters.map((filter) => (
                <li key={filter} className="toolbar__item">
                    <button
                        type="button"
                        className={
                            filter === selected
                                ? 'toolbar__button toolbar__button_active'
                                : 'toolbar__button'
                        }
                        onClick={() => onSelectFilter(filter)}
                    >
                        {filter}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Toolbar
