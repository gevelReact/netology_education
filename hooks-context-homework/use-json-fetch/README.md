# useJsonFetch

Кастомный хук `useJsonFetch` для HTTP-запросов через `fetch`.

```ts
const [data, loading, error] = useJsonFetch(url, opts)
```

- **data** — данные, полученные после `response.json()` (не Promise, а именно данные), либо `null`;
- **loading** — `true`, пока запрос ещё не завершился;
- **error** — текст ошибки: сети, ответа (если статус не 2xx) или парсинга (если пришёл не JSON), либо `null`.

Хук использует `AbortController` и отменяет запрос при размонтировании компонента,
поэтому состояние не обновляется на unmounted-компоненте и корректно работает
в двойном вызове эффектов в `StrictMode`.

`opts` — второй аргумент `fetch` (`method`, `headers` и т.д.). Он попадает в
зависимости эффекта, поэтому передавайте стабильный объект (константу вне
компонента или `useMemo`).

## Запуск

Адрес backend задаётся в файле `.env`:

```
VITE_BACKEND_URL=http://localhost:7070
```

Компоненты добавляют к нему только путь эндпоинта (`/data`, `/error`, `/loading`).

Backend (из каталога `src/backend`, Express, порт по умолчанию **7070**):

```bash
cd src/backend
npm install
node server.js
```

Frontend (Vite, порт 5173):

```bash
npm install
npm run dev
```

## Демонстрация

`App.tsx` рендерит три компонента из `src/components/`, каждый использует хук:

| Компонент          | Endpoint                      | Проверяет                          |
| ------------------ | ----------------------------- | ---------------------------------- |
| `DataComponent`    | `GET /data`                   | успешное получение данных          |
| `ErrorComponent`   | `GET /error` (ответ 500)      | ошибку ответа сервера              |
| `LoadingComponent` | `GET /loading` (ответ ~5 сек) | индикатор загрузки                 |
