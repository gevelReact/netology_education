import { useJsonFetch } from '../useJsonFetch'

const URL = `${import.meta.env.VITE_BACKEND_URL}/data`
const OPTS: RequestInit = { method: 'GET' }

export default function DataComponent() {
  const [data, loading, error] = useJsonFetch<{ status: string }>(URL, OPTS)

  return (
    <section className="card">
      <h2>GET /data — успешный запрос</h2>
      {loading ? (
        <p>Загрузка…</p>
      ) : error ? (
        <p className="error">Ошибка: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </section>
  )
}
