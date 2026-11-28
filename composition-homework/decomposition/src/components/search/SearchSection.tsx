/** Отвечает за поисковую секцию: вкладки сервисов, логотип, строка поиска и текстовая подсказка. */

import Logo from './Logo.tsx'
import Tabs from '../common/Tabs.tsx'
import type { Tab } from '../common/Tabs.tsx'
import SearchForm from './SearchForm.tsx'

type SearchSectionProps = {
  searchTabs: Tab[]
  hint: string
}

export default function SearchSection({ searchTabs, hint }: SearchSectionProps) {
  return (
    <section className="search-section">
      <Tabs tabs={searchTabs} />
      <div className="search-section__row">
        <Logo text="Яндекс" />
        <SearchForm placeholder="" buttonLabel="Найти" />
      </div>
      <p className="search-section__hint">{hint}</p>
    </section>
  )
}
