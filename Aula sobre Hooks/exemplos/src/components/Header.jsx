import React from 'react'
import { useContext } from 'react';
import FirstContext from '../context/FirstContext';

const Header = () => {
  const { person } = useContext(FirstContext);

  if (person.name === '') return <h1> Bem-vindo</h1>
  
  return (
    <h1>Bem-vindo, {person.name}</h1>
  )
}

export default Header;
