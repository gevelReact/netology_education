import type { ListItem } from '../types';
import withHighlight from '../hoc/withHighlight';
import Article from './Article';
import Video from './Video';

interface ListProps {
    list: ListItem[];
}

const ArticleWithHighlight = withHighlight(Article);
const VideoWithHighlight = withHighlight(Video);

export default function List(props: ListProps) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithHighlight key={item.url} {...item} />
                );

            case 'article':
                return (
                    <ArticleWithHighlight key={item.title} {...item} />
                );
        }
    });
};
