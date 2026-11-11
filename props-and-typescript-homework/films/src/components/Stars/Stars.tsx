import classes from './Stars.module.css';
import Star from "../Star/Star.tsx";

type StarsProps = {
    count?: number;
};

function Stars({count = 0}: StarsProps) {
    if (typeof count !== 'number' || !Number.isFinite(count) || count < 1 || count > 5) {
        return null;
    }

    return (
        <ul className={`${classes['card-body-stars']} u-clearfix`}>
            {Array.from({length: count}, (_, index) => (
                <li key={index}>
                    <Star/>
                </li>
            ))}
        </ul>
    );
}

export default Stars;
