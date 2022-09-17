import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vetor, setVetor] = useState([])
  const [status, setStatus] = useState('Carregando...');

  useEffect(() => {
    obterDados();
  }, [vetor]);

  const obterDados = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const result = await response.json();
    setVetor(result);
    setStatus('Dados carregados com sucesso');
  }

  return (
    <div>
      <h1>{status}</h1>
      <h2>Emails</h2>
      <ul>
        {vetor.map((list) => (
          <li key={list.id}>{list.email}</li>
        ))}
      </ul>
      <h2>Nomes</h2>
      <ul>
        {vetor.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
