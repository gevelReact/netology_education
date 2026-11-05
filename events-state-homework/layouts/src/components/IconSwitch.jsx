import Icon from './Icon.jsx'

function IconSwitch({ icon, onSwitch }) {
    return (
        <button type="button" className="icon-switch" onClick={onSwitch}>
            <Icon name={icon} />
        </button>
    )
}

export default IconSwitch
