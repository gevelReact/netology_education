import { useState } from 'react';
import List from './components/List';
import Details from './components/Details';
import type { UserInfo } from './types';
import './App.css';

function App() {
  const [info, setInfo] = useState<UserInfo | null>(null);

  // Повторный клик по тому же пользователю не меняет состояние,
  // поэтому Details не перерендеривается и запрос не повторяется.
  const handleSelect = (user: UserInfo) => {
    setInfo((prev) => (prev?.id === user.id ? prev : user));
  };

  return (
    <div className="app">
      <List selectedId={info?.id} onSelect={handleSelect} />
      {info !== null && <Details info={info} />}
    </div>
  );
}

export default App;
