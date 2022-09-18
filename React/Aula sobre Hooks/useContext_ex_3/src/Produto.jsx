import React from "react";
import { GlobalContext } from "./context/GlobalContext";

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if(dados === null) return null;
  console.log(dados);

  return (
    <div>
      {!dados ? <h1>Produto:</h1> : (
        <div>
          <h1>Produto: {dados[8].nome}</h1>
          <h2>R$: {dados[8].preco}</h2>
          <img src={dados[8].fotos[0].src}/>
        </div>
      )}
    </div>
  )
}

export default Produto;
