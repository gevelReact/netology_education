/** Отвечает за список переключамых вкладок: заголовки разделов новостной ленты и вкладки сервисов поиска. */

export type Tab = {
  id: string
  label: string
}

type TabsProps = {
  tabs: Tab[]
  activeId?: string
}

export default function Tabs({ tabs, activeId }: TabsProps) {
  return (
    <nav className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={tab.id === activeId ? 'tabs__item tabs__item_active' : 'tabs__item'}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
