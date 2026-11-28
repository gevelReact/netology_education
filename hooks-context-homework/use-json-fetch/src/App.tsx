import DataComponent from './components/DataComponent'
import ErrorComponent from './components/ErrorComponent'
import LoadingComponent from './components/LoadingComponent'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>useJsonFetch</h1>
      <p className="hint">
        Адрес backend берётся из <code>VITE_BACKEND_URL</code> в файле{' '}
        <code>.env</code>
      </p>
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </main>
  )
}

export default App
