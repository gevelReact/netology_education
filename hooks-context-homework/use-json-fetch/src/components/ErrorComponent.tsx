import { useJsonFetch } from '../useJsonFetch'

const URL = `${import.meta.env.VITE_BACKEND_URL}/error`
const OPTS: RequestInit = { method: 'GET' }

export default function ErrorComponent() {
  const [, loading, error] = useJsonFetch(URL, OPTS)

  return (
    <section className="card">
      <h2>GET /error — ответ с ошибкой</h2>
      {loading ? (
        <p>Загрузка…</p>
      ) : error ? (
        <p className="error">Ошибка: {error}</p>
      ) : (
        <p>Данные получены, ошибки нет</p>
      )}
    </section>
  )
}
