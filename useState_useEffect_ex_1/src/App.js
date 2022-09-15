import React, { useState } from "react";
import { useEffect } from "react";
import Produto from "./Produto";

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if ( produto !== null) {
      localStorage.setItem('produto', produto)
    }
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto} </h1>
      <button onClick={ handleClick } 
        style={{marginRight: '1rem', backgroundColor: 'blue', padding: '20px'}}
      >
        Notebook
      </button>
      <button onClick={ handleClick } 
        style={{backgroundColor: 'blue', padding: '20px'}}
      >
        Smartphone
      </button>
      <Produto produto={produto} />
    </div>
  )
}

export default App;
