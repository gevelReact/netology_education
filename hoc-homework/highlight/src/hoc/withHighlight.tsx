import type { ComponentType } from 'react';
import New from '../components/New';
import Popular from '../components/Popular';

// T — любые пропсы, среди которых есть views (Article/Video и их потомки)
function withHighlight<T extends { views: number }>(
    WrappedComponent: ComponentType<T>
): ComponentType<T> {
    return function ComponentWithHighlight(props: T) {
        const { views } = props;

        if (views >= 1000) {
            return (
                <Popular>
                    <WrappedComponent {...props} />
                </Popular>
            );
        }

        if (views < 100) {
            return (
                <New>
                    <WrappedComponent {...props} />
                </New>
            );
        }

        return <WrappedComponent {...props} />;
    }
};

export default withHighlight;
