import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef(); //! Usado como referência para poder colocar o foco novamente no input!

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div className="App">
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>

      <input 
        type="text" value={input} 
        onChange={({ target }) => setInput(target.value)}
        ref={inputElement}
      />

      <button onClick={handleClick} className="btn">Enviar</button> 
    </div>
  )
}

export default App
