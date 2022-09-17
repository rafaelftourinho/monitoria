import React from "react";
import { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => { //!Como se fosse um componente de React!
  const [contar, setContar] = useState(0);

  function adicionarDez() {
    setContar((contar) => contar + 10)
  }

  function adicionarCem() {
    setContar((contar) => contar + 100)
  }

  function limparValor() {
    setContar(0);
  }

  return (
    <GlobalContext.Provider value={{ contar, adicionarDez, adicionarCem, limparValor }}>
      {children}
    </GlobalContext.Provider>
  );
};
