import Listing from './components/Listing'
import { items } from './data/etsy'

function App() {
  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  )
}

export default App
