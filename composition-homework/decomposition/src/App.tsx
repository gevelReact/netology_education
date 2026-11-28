/** Отвечает за сборку страницы из блоков: верхняя часть, поиск, баннер и нижняя трёхколоночная секция. */

import NewsSection from './components/news/NewsSection.tsx'
import CurrencyTicker from './components/currency/CurrencyTicker.tsx'
import PromoBlock from './components/promo/PromoBlock.tsx'
import SearchSection from './components/search/SearchSection.tsx'
import AdBanner from './components/banner/AdBanner.tsx'
import WeatherCard from './components/weather/WeatherCard.tsx'
import VisitedCard from './components/visited/VisitedCard.tsx'
import MapCard from './components/map/MapCard.tsx'
import TvProgramCard from './components/tv/TvProgramCard.tsx'
import AirCard from './components/air/AirCard.tsx'
import './App.css'

const FEED_TABS = [
  { id: 'now', label: 'Сейчас в СМИ' },
  { id: 'germany', label: 'в Германии' },
  { id: 'recommended', label: 'Рекомендуем' },
]

const NEWS = [
  { icon: '🌐', text: 'Путин упростил получение автомобильных номеров', href: '#' },
  { icon: '🌐', text: 'В команде Зеленского раскрыли план реформ на Украине', href: '#' },
  { icon: '📰', text: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье', href: '#' },
  { icon: '⚖️', text: 'Суд закрыл дело Демпартии США против России', href: '#' },
  { icon: '📱', text: 'На Украине призвали создать ракеты для удара по Москве', href: '#' },
]

const CURRENCIES = [
  { name: 'USD MOEX', value: '63,52', change: '+0,09' },
  { name: 'EUR MOEX', value: '70,86', change: '+0,14' },
  { name: 'НЕФТЬ', value: '64,90', change: '+1,63%' },
]

const SEARCH_TABS = [
  { id: 'video', label: 'Видео' },
  { id: 'images', label: 'Картинки' },
  { id: 'news', label: 'Новости' },
  { id: 'maps', label: 'Карты' },
  { id: 'market', label: 'Маркет' },
  { id: 'translate', label: 'Переводчик' },
  { id: 'air', label: 'Эфир' },
  { id: 'more', label: 'ещё' },
]

const VISITED = [
  { title: 'Недвижимость', description: 'о сталинках', href: '#' },
  { title: 'Маркет', description: 'люстры и светильники', href: '#' },
  { title: 'Авто.ру', description: 'привод 4х4 до 500 000', href: '#' },
]

const TV_PROGRAMS = [
  { time: '02:00', title: 'ТНТ. Best', channel: 'TNT International' },
  { time: '02:15', title: 'Джинглики', channel: 'Карусель INT' },
  { time: '02:25', title: 'Наедине со всеми', channel: 'Первый' },
]

const AIR_ITEMS = [
  { title: 'Управление как искусство', channel: 'Успех' },
  { title: 'Ночь. Мир в это время', channel: 'earthTV' },
  { title: 'Андрей Возн…', channel: 'Совершенно секретно' },
]

function App() {
  return (
    <div className="page">
      <div className="top">
        <div className="top__main">
          <NewsSection
            tabs={FEED_TABS}
            activeTabId="now"
            date="31 июля, среда 02:32"
            news={NEWS}
          />
          <CurrencyTicker items={CURRENCIES} />
        </div>
        <PromoBlock
          mediaLabel="cha"
          title="Работа над ошибками"
          text="Смотрите на Яндексе и запоминайте"
        />
      </div>

      <SearchSection searchTabs={SEARCH_TABS} hint="Найдётся всё. Например, фаза луны сегодня" />

      <AdBanner mediaLabel="ФОРСАЖ" ageLabel="12+" buttonLabel="Смотрите трейлер" />

      <div className="columns">
        <div className="columns__col">
          <WeatherCard title="Погода" icon="🌧️" temperature="+17°" details="Утром +17, днём +20" />
          <VisitedCard title="Посещаемое" items={VISITED} />
        </div>
        <div className="columns__col">
          <MapCard title="Карта Германии" linkLabel="Расписание" />
          <TvProgramCard title="Телепрограмма" actionLabel="Эфир" items={TV_PROGRAMS} />
        </div>
        <div className="columns__col">
          <AirCard title="Эфир" items={AIR_ITEMS} />
        </div>
      </div>
    </div>
  )
}

export default App
