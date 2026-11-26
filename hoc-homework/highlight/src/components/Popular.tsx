import type { WrapperProps } from '../types';

export default function Popular(props: WrapperProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};
