import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { NoteCard } from './components/NoteCard'
import './App.css'

const API_URL = 'http://localhost:7070/notes'

type Note = {
  id: number
  content: string
}

// GET http://localhost:7070/notes — получает все заметки с бэкенда
async function fetchNotes(): Promise<Note[]> {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error(`GET ${API_URL}, статус ${response.status}`)
  }
  return (await response.json()) as Note[]
}

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [content, setContent] = useState('')
  // true, пока идёт любой HTTP-запрос: блокирует кнопки, чтобы не делать запрос дважды
  const [busy, setBusy] = useState(true)
  const [error, setError] = useState('')

  // Перезагрузка списка.
  // setBusy(true) делают сами обработчики — setBusy(false) только здесь, тк каждый обработчик заканчивается обновлением заметок
  const reload = useCallback(
    () =>
      fetchNotes()
        .then((data) => {
          setNotes(data)
          setError('')
        })
        .catch((requestError) => {
          setError(`Не удалось загрузить заметки (${String(requestError)})`)
        })
        .finally(() => {
          setBusy(false)
        }),
    [],
  )

  // Первоначальная загрузка
  useEffect(() => {
    reload()
  }, [reload])

  // POST http://localhost:7070/notes, затем GET для обновления списка
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const text = content.trim()
    if (!text || busy) {
      return
    }

    setError('')
    setBusy(true)
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 0, content: text }),
      })
      if (!response.ok) {
        throw new Error(`статус ${response.status}`)
      }
      setContent('')
      await reload()
    } catch (requestError) {
      setError(`Не удалось добавить заметку (${String(requestError)})`)
      setBusy(false)
    }
  }

  // DELETE http://localhost:7070/notes/{id}, затем GET для обновления списка
  async function handleDelete(id: number) {
    if (busy) {
      return
    }

    setError('')
    setBusy(true)
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) {
        throw new Error(`статус ${response.status}`)
      }
      await reload()
    } catch (requestError) {
      setError(`Не удалось удалить заметку (${String(requestError)})`)
      setBusy(false)
    }
  }

  // GET http://localhost:7070/notes по кнопке «Обновить»
  function handleRefresh() {
    if (busy) {
      return
    }

    setBusy(true)
    void reload()
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">Notes</h1>
        <button
          type="button"
          className="refresh-button"
          onClick={handleRefresh}
          disabled={busy}
          aria-label="Обновить"
          title="Обновить"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>
      </header>

      {error ? <p className="app-error">{error}</p> : null}

      {notes.length === 0 && !busy ? (
        <p className="app-empty">Пока нет ни одной заметки — добавьте первую.</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              content={note.content}
              disabled={busy}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <form className="note-form" onSubmit={handleSubmit}>
        <label className="note-form-label" htmlFor="new-note">
          New Note
        </label>
        <div className="note-form-box">
          <textarea
            id="new-note"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Текст заметки"
          />
          <button
            type="submit"
            className="note-form-send"
            disabled={busy || content.trim() === ''}
            aria-label="Добавить"
            title="Добавить"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 3.5 22 12 2 20.5 6.2 12 2 3.5Z" />
            </svg>
          </button>
        </div>
      </form>
    </main>
  )
}

export default App
