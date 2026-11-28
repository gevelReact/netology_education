import { useEffect, useState } from 'react';
import { fetchJson, userUrl } from '../api';
import type { UserDetail, UserInfo } from '../types';

interface DetailsProps {
  info: UserInfo;
}

interface LoadResult {
  id: number;
  detail: UserDetail | null;
  failed: boolean;
}

function Details({ info }: DetailsProps) {
  const [result, setResult] = useState<LoadResult | null>(null);

  const id = info.id;

  // Загрузка деталей происходит только при изменении info.id,
  // а не при каждом рендере: повторный клик по тому же
  // пользователю не вызовет повторный запрос.
  useEffect(() => {
    const controller = new AbortController();

    fetchJson<UserDetail>(userUrl(id), controller.signal)
      .then((detail) => setResult({ id, detail, failed: false }))
      .catch(() => {
        // AbortError — отменённый устаревший запрос, игнорируем.
        if (controller.signal.aborted) return;
        setResult({ id, detail: null, failed: true });
      });

    return () => controller.abort();
  }, [id]);

  if (result === null || result.id !== id) {
    return (
      <div className="details">
        <div className="details__box details__loading">Loading…</div>
      </div>
    );
  }

  if (result.failed || result.detail === null) {
    return (
      <div className="details">
        <div className="details__box details__error">Failed to load user data.</div>
      </div>
    );
  }

  const detail = result.detail;

  return (
    <div className="details">
      <div className="details__box details__avatar-box">
        <img src={detail.avatar} alt={detail.name} className="details__avatar" />
      </div>
      <div className="details__box details__name-box">{detail.name}</div>
      <div className="details__box">City: {detail.details.city}</div>
      <div className="details__box">Company: {detail.details.company}</div>
      <div className="details__box">Position: {detail.details.position}</div>
    </div>
  );
}

export default Details;
