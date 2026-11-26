import type { WrapperProps } from '../types';

export default function New(props: WrapperProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};
