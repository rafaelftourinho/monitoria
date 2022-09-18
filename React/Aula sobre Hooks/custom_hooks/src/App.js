import React, { useEffect } from 'react'
import './App.css';
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', ''); //! Está conectado com o retorno do useLocalStorage, ou seja, o produto e setProduto equivalem ao state e setState;
  // const {request, data, loading, error} = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  // useEffect(() => {
  //   request('https://ranekapi.origamid.dev/json/api/produto/')
  // },[request]);

  // if (error) return <h1>{error}</h1>
  // if (loading) return <h1>Carregando...</h1>
  // if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        {/* {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))} */}
      </div>
    )
  // else return null;
}

export default App;
