import './App.css'
import Produto from './Produto'
import { GlobalStorage } from './context/GlobalContext'
import { Limpar } from './Components/Limpar'

function App() {
  return (
    <GlobalStorage>
        <Produto />
        <Limpar />
    </GlobalStorage>
  )
}

export default App
