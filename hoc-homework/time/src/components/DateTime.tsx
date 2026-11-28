import type { DateProps } from '../types';

export default function DateTime(props: DateProps) {
    return (
        <p className="date">{props.date}</p>
    );
}
