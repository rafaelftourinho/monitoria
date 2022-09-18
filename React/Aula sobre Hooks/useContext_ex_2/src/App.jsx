import './App.css'
import Produto from './Produto'
import { GlobalStorage } from './context/GlobalContext'

function App() {
  return (
    <GlobalStorage>
        <Produto />
    </GlobalStorage>
  )
}

export default App
