import { useEffect, useMemo, useState } from 'react'

export type Json =
  | string
  | number
  | boolean
  | null
  | readonly Json[]
  | { readonly [key: string]: Json }

type Settled<T> = { key: object; data: T | null; error: string | null }


export function useJsonFetch<T = Json>(
  url: string,
  opts: RequestInit = {},
): [data: T | null, loading: boolean, error: string | null] {
  // Результат последнего завершившегося запроса.
  const [settled, setSettled] = useState<Settled<T> | null>(null)
  const requestKey = useMemo(() => ({ url, opts }), [url, opts])

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { ...opts, signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка ответа сервера: HTTP ${response.status}`)
        }
        return response.json() as Promise<T>
      })
      .then((data) => {
        setSettled({ key: requestKey, data, error: null })
      })
      .catch((err: unknown) => {
        // Запрос был отменён (размонтирование) — состояние не трогаем.
        if (err instanceof DOMException && err.name === 'AbortError') return
        setSettled({
          key: requestKey,
          data: null,
          error: err instanceof Error ? err.message : String(err),
        })
      })

    return () => controller.abort()
  }, [url, opts, requestKey])

  const current = settled !== null && settled.key === requestKey ? settled : null
  const data = current?.data ?? null
  const error = current?.error ?? null
  const loading = current === null

  return [data, loading, error]
}
