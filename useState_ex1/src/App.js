import React, { useState } from 'react'
import Product from './Product'
import './App.css';

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const result = await response.json();
    setDados(result);
    setLoading(false);
  }

  return (
    <div>

      <button 
        style={{ margin: '.5rem'}} 
        onClick={handleClick}
        className="btn"
      >
        Notebook
      </button>

      <button 
        style={{ margin: '.5rem'}} 
        onClick={handleClick}
        className="btn"
      >
        Smartphone
      </button>

      <button 
        style={{ margin: '.5rem'}} 
        onClick={handleClick}
        className="btn"
      >
        Tablet
      </button>

      {loading && <p>Loading...</p>}
      {!loading && dados && <Product dados={dados} />}

    </div>
  )
}

export default App;
