import { useState } from 'react'
import type { ChangeEvent } from 'react'
import './App.css'

const HEX_RE = /^#[0-9a-fA-F]{6}$/

interface Rgb {
  r: number
  g: number
  b: number
}

function hexToRgb(hex: string): Rgb | null {
  if (!HEX_RE.test(hex)) {
    return null
  }

  const value = parseInt(hex.slice(1), 16)

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

function App() {
  const [hex, setHex] = useState('')
  const [rgb, setRgb] = useState<Rgb | null>(null)
  const [error, setError] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setHex(value)

    // Ждём ввода всех семи символов, включая решётку
    if (value.length < 7) {
      setError(false)
      return
    }

    const parsed = hexToRgb(value)

    if (parsed) {
      setRgb(parsed)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div
      className="converter"
      style={rgb ? { backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` } : undefined}
    >
      <input
        className="converter__input"
        type="text"
        value={hex}
        maxLength={7}
        placeholder="#000000"
        onChange={handleChange}
      />

      {error ? (
        <div className="converter__result">Ошибка!</div>
      ) : rgb ? (
        <div className="converter__result">
          rgb({rgb.r}, {rgb.g}, {rgb.b})
        </div>
      ) : null}
    </div>
  )
}

export default App
