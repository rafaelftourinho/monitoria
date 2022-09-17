import React from "react";
import { GlobalContext } from "./context/GlobalContext";

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if(dados === null) return null;

  return (
    <div>
      <h1>Produto: {dados[0].nome}</h1>
    </div>
  )
}

export default Produto;
