import type { ReactNode } from 'react';

export interface ArticleProps {
    title: string;
    views: number;
}

export interface VideoProps {
    url: string;
    views: number;
}

export interface WrapperProps {
    children: ReactNode;
}

export enum ListItemType {
    Video = 'video',
    Article = 'article',
}

export type ListItem =
    | ({ type: ListItemType.Video } & VideoProps)
    | ({ type: ListItemType.Article } & ArticleProps);
