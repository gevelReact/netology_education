import { useState, type FormEvent } from 'react'
import { Clock } from './components/Clock'
import './App.css'

type Watch = {
  id: string
  title: string
  // смещение в часах относительно Гринвича (UTC): 3 = Москва, 0 = Лондон
  offset: number
}

const MIN_OFFSET = -12
const MAX_OFFSET = 14

// Текущий TimezoneOffset смотрим через объект Date:
// getTimezoneOffset() возвращает разницу (UTC − локальное) в минутах,
// для Москвы (UTC+3) это -180, поэтому разворачиваем знак и переводим в часы
function deviceUtcOffsetHours(): number {
  return -new Date().getTimezoneOffset() / 60
}

function formatUtcLabel(offset: number): string {
  return `UTC${offset >= 0 ? '+' : ''}${offset}`
}

function App() {
  const [watches, setWatches] = useState<Watch[]>([])
  const [titleValue, setTitleValue] = useState('')
  const [offsetValue, setOffsetValue] = useState('')
  const [error, setError] = useState('')

  const deviceOffset = deviceUtcOffsetHours()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const title = titleValue.trim()
    if (!title) {
      setError('Укажите название часов')
      return
    }

    const offset = Number(offsetValue)
    if (
      offsetValue.trim() === '' ||
      !Number.isInteger(offset) ||
      offset < MIN_OFFSET ||
      offset > MAX_OFFSET
    ) {
      setError(
        `Временная зона — целое число часов относительно Гринвича, от ${MIN_OFFSET} до ${MAX_OFFSET}`,
      )
      return
    }

    setWatches((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, offset },
    ])
    setTitleValue('')
    setOffsetValue('')
    setError('')
  }

  function handleDelete(id: string) {
    setWatches((prev) => prev.filter((watch) => watch.id !== id))
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">Мировые часы</h1>
        <p className="app-hint">
          Чтобы часы шли верно, указывайте смещение относительно Гринвича в часах (например, Москва — <code>3</code>, Лондон — <code>0</code>, Нью-Йорк — <code>-5</code>).
        </p>
      </header>

      <form className="watch-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span className="field-label">Название</span>
          <input
            type="text"
            value={titleValue}
            onChange={(event) => setTitleValue(event.target.value)}
            placeholder="Moscow"
          />
        </label>

        <label className="field">
          <span className="field-label">Временная зона</span>
          <input
            type="number"
            value={offsetValue}
            onChange={(event) => setOffsetValue(event.target.value)}
            placeholder="например, 3"
            min={MIN_OFFSET}
            max={MAX_OFFSET}
            step={1}
          />
        </label>

        <button type="submit" className="add-button">
          Добавить
        </button>
      </form>

      {error ? <p className="form-error">{error}</p> : null}

      {watches.length === 0 ? (
        <p className="empty">
          Пока нет ни одних часов — заполните форму и нажмите «Добавить».
        </p>
      ) : (
        <div className="watch-list">
          {watches.map((watch) => (
            <Clock
              key={watch.id}
              id={watch.id}
              title={watch.title}
              offset={watch.offset}
              offsetLabel={formatUtcLabel(watch.offset)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default App
