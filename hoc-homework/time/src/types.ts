export interface VideoItem {
    url: string;
    date: string;
}

export interface DateProps {
    date: string;
}

export interface VideoListProps {
    list: VideoItem[];
}
