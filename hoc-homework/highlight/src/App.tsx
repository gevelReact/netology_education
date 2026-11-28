import { useState } from 'react';
import { ListItemType, type ListItem } from './types';
import List from './components/List';

export default function App() {
    const [list] = useState<ListItem[]>([
        {
            type: ListItemType.Video,
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: ListItemType.Video,
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: ListItemType.Article,
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: ListItemType.Article,
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: ListItemType.Video,
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: ListItemType.Article,
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}
