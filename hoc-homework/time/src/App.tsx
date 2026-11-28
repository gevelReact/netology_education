import { useState } from 'react';
import moment from 'moment';
import type { VideoItem } from './types';
import VideoList from './components/VideoList';

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
