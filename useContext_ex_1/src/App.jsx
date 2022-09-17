import './App.css'
import Produto from './Produto'
import UserContext from './context/UserContext'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Pedro');
  const [age, setAge] = useState(0);

  return (
    <UserContext.Provider value={{ name, age, setName, setAge }}>
      <div className="App">
        <Produto />
      </div>
    </UserContext.Provider>
  )
}

export default App
