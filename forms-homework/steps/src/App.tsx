import { useMemo, useState, type FormEvent } from 'react'
import './App.css'

type Entry = {
  date: string
  km: number
}

const DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4})$/

// «ДД.ММ.ГГГГ» -> timestamp для сравнения, null если дата некорректна
function parseDate(date: string): number | null {
  const match = date.match(DATE_PATTERN)
  if (!match) return null

  const day = Number(match[1])
  const month = Number(match[2])
  const year = Number(match[3])

  const parsed = new Date(year, month - 1, day)
  const isValid =
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day

  return isValid ? parsed.getTime() : null
}

// округление, чтобы 5.7 + 10 дали 15.7, а не 15.700000000000001
function formatKm(km: number): string {
  return String(Math.round(km * 100) / 100)
}

function App() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [dateValue, setDateValue] = useState('')
  const [kmValue, setKmValue] = useState('')
  const [error, setError] = useState('')
  const [editingDate, setEditingDate] = useState<string | null>(null)

  // сортировка по дате: новые записи — сверху
  const sortedEntries = useMemo(
    () =>
      [...entries].sort(
        (a, b) => (parseDate(b.date) ?? 0) - (parseDate(a.date) ?? 0),
      ),
    [entries],
  )

  function resetForm() {
    setDateValue('')
    setKmValue('')
    setEditingDate(null)
    setError('')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const date = dateValue.trim()
    const km = Number(kmValue.replace(',', '.'))

    if (parseDate(date) === null) {
      setError('Введите дату в формате ДД.ММ.ГГГГ')
      return
    }
    if (!Number.isFinite(km) || km <= 0) {
      setError('Введите пройденное расстояние — положительное число')
      return
    }

    setEntries((prev) => {
      // при редактировании старая строка заменяется новыми значениями
      const rest =
        editingDate === null
          ? prev
          : prev.filter((entry) => entry.date !== editingDate)

      const existing = rest.find((entry) => entry.date === date)
      if (existing) {
        // дата уже есть в таблице — километры суммируются
        return rest.map((entry) =>
          entry.date === date ? { ...entry, km: entry.km + km } : entry,
        )
      }
      return [...rest, { date, km }]
    })

    resetForm()
  }

  function handleEdit(entry: Entry) {
    setEditingDate(entry.date)
    setDateValue(entry.date)
    setKmValue(formatKm(entry.km))
    setError('')
  }

  function handleDelete(date: string) {
    setEntries((prev) => prev.filter((entry) => entry.date !== date))
    if (editingDate === date) resetForm()
  }

  return (
    <main className="app">
      <form className="entry-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Дата (ДД.ММ.ГГ)</span>
          <input
            className="field-input"
            type="text"
            placeholder="20.07.2019"
            value={dateValue}
            onChange={(event) => setDateValue(event.target.value)}
          />
        </label>

        <label className="field">
          <span className="field-label">Пройдено км</span>
          <input
            className="field-input"
            type="text"
            inputMode="decimal"
            placeholder="5.7"
            value={kmValue}
            onChange={(event) => setKmValue(event.target.value)}
          />
        </label>

        <button className="submit-button" type="submit">
          OK
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {editingDate && !error && (
        <p className="hint">
          Редактируем строку за {editingDate}. Нажмите OK, чтобы сохранить,
          или ✘ на другой строке, чтобы отменить.
        </p>
      )}

      <table className="steps-table">
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((entry) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>{formatKm(entry.km)}</td>
              <td className="actions">
                <button
                  className="icon-button"
                  type="button"
                  aria-label={`Редактировать строку за ${entry.date}`}
                  onClick={() => handleEdit(entry)}
                >
                  ✎
                </button>
                <button
                  className="icon-button"
                  type="button"
                  aria-label={`Удалить строку за ${entry.date}`}
                  onClick={() => handleDelete(entry.date)}
                >
                  ✘
                </button>
              </td>
            </tr>
          ))}
          {sortedEntries.length === 0 && (
            <tr>
              <td className="empty" colSpan={3}>
                Пока нет записей — добавьте первую тренировку
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  )
}

export default App
