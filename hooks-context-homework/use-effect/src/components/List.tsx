import { useEffect, useState } from 'react';
import { fetchJson, usersUrl } from '../api';
import type { UserInfo } from '../types';

interface ListProps {
  selectedId?: number;
  onSelect: (info: UserInfo) => void;
}

function List({ selectedId, onSelect }: ListProps) {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetchJson<UserInfo[]>(usersUrl, controller.signal)
      .then(setUsers)
      .catch((reason: unknown) => {
        if (reason instanceof Error && reason.name === 'AbortError') return;
        setError(true);
      });

    return () => controller.abort();
  }, []);

  if (error) return <p className="hint">Failed to load users.</p>;

  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user.id} className="list__item">
          <button
            type="button"
            className={
              user.id === selectedId ? 'list__button list__button_active' : 'list__button'
            }
            onClick={() => onSelect(user)}
          >
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
