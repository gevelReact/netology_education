import type { VideoItem } from '../types';
import DateTime from './DateTime';
import withDateTimePretty from '../hoc/withDateTimePretty';

const DateTimePretty = withDateTimePretty(DateTime);

export default function Video(props: VideoItem) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}
