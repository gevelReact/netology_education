import type { ComponentType } from 'react';
import moment from 'moment';
import type { DateProps } from '../types';

function getPrettyDate(date: string): string {
    const pubDate = moment(date, 'YYYY-MM-DD HH:mm:ss');
    const now = moment();

    if (now.diff(pubDate, 'minutes') < 60) {
        return '12 минут назад';
    }
    if (now.diff(pubDate, 'days') < 1) {
        return '5 часов назад';
    }
    return '3 дня назад';
}

export default function withDateTimePretty(WrappedComponent: ComponentType<DateProps>): ComponentType<DateProps> {
    return function DateTimePretty(props: DateProps) {
        return <WrappedComponent date={getPrettyDate(props.date)} />;
    };
}
