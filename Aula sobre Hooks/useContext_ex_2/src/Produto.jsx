import React from "react";
import { GlobalContext } from "./context/GlobalContext";

const Produto = () => {
  // const global = React.useContext(GlobalContext);
  const { contar, adicionarDez, adicionarCem, limparValor } = React.useContext(GlobalContext);
  // console.log(global);

  return (
    <div style={{ fontSize: '30px' }}>
      Produto: {contar}
      <br></br>
      <br></br>

      <button
        onClick={() => adicionarDez()}
        style={{ marginLeft: '20px', padding: '20px', backgroundColor: 'blue' }}
      >
        Adicionar 10
      </button>

      <button
      onClick={() => adicionarCem()}
      style={{ marginLeft: '20px', padding: '20px', backgroundColor: 'blue' }}
      >
        Adicionar 100
      </button>

      <button
      onClick={() => limparValor()}
      style={{ marginLeft: '20px', padding: '20px', backgroundColor: 'blue' }}
      >
        Limpar
      </button>
    </div>
  )
}

export default Produto;
