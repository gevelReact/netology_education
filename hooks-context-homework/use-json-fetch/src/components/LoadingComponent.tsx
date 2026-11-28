import { useJsonFetch } from '../useJsonFetch'

const URL = `${import.meta.env.VITE_BACKEND_URL}/loading`
const OPTS: RequestInit = { method: 'GET' }

export default function LoadingComponent() {
  const [data, loading, error] = useJsonFetch<{ status: string }>(URL, OPTS)

  return (
    <section className="card">
      <h2>GET /loading — индикатор загрузки</h2>
      {loading ? (
        <p className="loading">Загрузка… (ответ придёт через ~5 секунд)</p>
      ) : error ? (
        <p className="error">Ошибка: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </section>
  )
}
