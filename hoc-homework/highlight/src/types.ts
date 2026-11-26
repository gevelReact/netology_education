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

export type ListItem =
    | ({ type: 'video' } & VideoProps)
    | ({ type: 'article' } & ArticleProps);
