import React, {useState} from 'react';
import moment from 'moment';

function getPrettyDate(date) {
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

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function withDateTimePretty(WrappedComponent) {
    return function DateTimePretty(props) {
        return <WrappedComponent date={getPrettyDate(props.date)} />;
    }
}

const DateTimePretty = withDateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list] = useState(() => {
        const now = moment();
        const urls = [
            'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        ];
        const offsets = [
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