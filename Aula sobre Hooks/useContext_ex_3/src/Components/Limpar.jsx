import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Limpar = () => {
  const { limparDados } = useContext(GlobalContext);

  return (
    <button onClick={limparDados}>Limpar</button>
  )
}
