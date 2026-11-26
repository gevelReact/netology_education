import { useState } from 'react';
import type { ComponentType } from 'react';
import moment from 'moment';

interface VideoItem {
    url: string;
    date: string;
}

interface DateProps {
    date: string;
}

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

function DateTime(props: DateProps) {
    return (
        <p className="date">{props.date}</p>
    );
}

function withDateTimePretty(WrappedComponent: ComponentType<DateProps>): ComponentType<DateProps> {
    return function DateTimePretty(props: DateProps) {
        return <WrappedComponent date={getPrettyDate(props.date)} />;
    };
}

const DateTimePretty = withDateTimePretty(DateTime);

function Video(props: VideoItem) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}

interface VideoListProps {
    list: VideoItem[];
}

function VideoList(props: VideoListProps) {
    return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

type MomentUnit = moment.unitOfTime.DurationConstructor;

export default function App() {
    const [list] = useState<VideoItem[]>(() => {
        const now = moment();
        const urls = [
            'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        ];
        const offsets: Array<[number, MomentUnit]> = [
            [5, 'm'],    // → 12 минут назад
            [30, 'm'],   // → 12 минут назад
            [2, 'h'],    // → 5 часов назад
            [5, 'h'],    // → 5 часов назад
            [3, 'd'],    // → 3 дня назад
            [10, 'd'],   // → 3 дня назад
        ];

        return offsets.map(([value, unit], i) => ({
            url: urls[i],
            date: now.clone().subtract(value, unit).format('YYYY-MM-DD HH:mm:ss'),
        }));
    });

    return (
        <VideoList list={list} />
    );
}
