import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Store from './components/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Store />
  </StrictMode>,
)
