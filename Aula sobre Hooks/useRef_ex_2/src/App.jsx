import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho');

    // setTimeout(() => {
    //   setNotificacao(null); //! Existe um bug em que nós adicionamos vários timeouts e isso vai quebrando se ficar clicando direto
    // }, 2000);

    //? para consertar esse erro, utilizamos o useRef conforme mostrado abaixo

    clearTimeout(timeoutRef.current); //! guarda sempre o valor agendado atualmente, retirando o bug de agendar vários timeouts
    console.log(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000);
    console.log(timeoutRef.current);
  }

  return (
    <div className="App">
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App
