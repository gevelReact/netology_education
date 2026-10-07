import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dropdown from './components/Dropdown.jsx'

const items = [
  { id: 'profile', title: 'Profile Information' },
  { id: 'password', title: 'Change Password' },
  { id: 'pro', title: 'Become PRO' },
  { id: 'help', title: 'Help' },
  { id: 'logout', title: 'Log Out' },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="dropdown-page">
      <Dropdown title="Account Settings" icon="public" items={items} />
    </div>
  </StrictMode>,
)
