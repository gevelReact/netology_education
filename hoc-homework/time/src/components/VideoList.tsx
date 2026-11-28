import type { VideoListProps } from '../types';
import Video from './Video';

export default function VideoList(props: VideoListProps) {
    return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}
