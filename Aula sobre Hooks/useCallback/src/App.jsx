import { useCallback, useState } from 'react'
import './App.css'

const set1 = new Set(); //! Um array para mostrar que vai ser renderizado mais de uma vez sem a utilização do useCallback
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('test');
  }

  const func2 = useCallback(() => {
    console.log('test');
  }, []) 


set1.add(func1);
set2.add(func2);

console.log('Set1:', set1)
console.log('Set2:', set2)

return (
  <div>
    <p onClick={func1}>Produto 1</p>
    <p onClick={func2}>Produto 2</p>
  </div>
)
}

function App() {
  const [contar, setContar] = useState(0);

  //! Toda vez que é renderizado novamente a mudança, essa função é recriada (apesar de ser muito rápida!), para só acontecer a criação uma vez, utilizamos o useCallback
  // const handleClick = () => {
  //   setContar(contar + 1);
  // };

  //! Para resolver isso, utilizamos o useCallback (Não é válido utilizar para funções que são extremamente rápidas)
  const handleClick = useCallback(() => {
    setContar((item) => item + 1)
  }, []);

  return (
    <div className="App">
      <Produto />
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default App
