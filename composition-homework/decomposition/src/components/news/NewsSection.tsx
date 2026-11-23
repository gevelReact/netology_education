/** Отвечает за блок новостей «Сейчас в СМИ»: вкладки разделов, дата и список новостей. */

import Tabs from '../common/Tabs.tsx'
import type { Tab } from '../common/Tabs.tsx'
import NewsItem from './NewsItem.tsx'
import type { NewsItemProps } from './NewsItem.tsx'

type NewsSectionProps = {
  tabs: Tab[]
  activeTabId?: string
  date: string
  news: NewsItemProps[]
}

export default function NewsSection({ tabs, activeTabId, date, news }: NewsSectionProps) {
  return (
    <section className="news-section">
      <div className="news-section__header">
        <Tabs tabs={tabs} activeId={activeTabId} />
        <span className="news-section__date">{date}</span>
      </div>
      <ul className="news-section__list">
        {news.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </ul>
    </section>
  )
}
