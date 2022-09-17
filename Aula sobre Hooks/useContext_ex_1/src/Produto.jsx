import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./context/UserContext";

const Produto = () => {
  const [localName, setLocalName] = useState('');
  const [input, setInput] = useState('');
  const inputElement = useRef();
  const { name, setName, age, setAge } = useContext(UserContext);

  function handleClick() {
    setAge((item) => item + 1);
    setName(name === 'Pedro' ? 'Rafael' : 'Pedro');
  }

  function handleChangeLocal({ target }) {
    setLocalName(input);
    setInput(target.value);
  };

  function handleClickLocal() {
    setName(localName);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <h1>Utilizando estado do componente + estado global (Context)</h1>

      <p style={{ fontSize: '25px', color: 'red'}}>{name}</p>
      <p style={{ fontSize: '25px', color: 'red'}}>{age}</p>

      <button onClick={handleClick}>{age}</button>

      <br></br>
      <br></br>

      <input
        type="text"
        value={input}
        onChange={handleChangeLocal}
        ref={inputElement}
      />

      <button onClick={handleClickLocal}>Salvar</button>

    </div>
  )
}

export default Produto;
