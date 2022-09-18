import { useMemo } from 'react'
import { useState } from 'react'
import './App.css'

//! Utilizado para aplicações lentas que NÃO SÃO ASSÍNCRONAS, como no exemplo abaixo

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 10;
  }
}

function App() {
  const [contar, setContar] = useState(0);
  
  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem('produto');
  //   console.log('Aconteceu o memo');
  //   return localItem
  // }, []);

  const t1 = performance.now(); //! Verifica a perfomance naquele momento
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1); //! Verifica a diferença de performance entre aquele momento com o que foi criado no t1

  console.log(valor);

  return (
    <div className="App">
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}


export default App
