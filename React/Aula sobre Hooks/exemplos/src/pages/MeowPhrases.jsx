import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import useFetch from "../../../custom_hooks/src/hooks/useFetch";
import { useHistory } from "react-router-dom";

const MeowPhrases = () => {
  const { request, data, loading, error } = useFetch();
  const [again, setAgain] = useState(0);
  const history = useHistory();

  useEffect(() => {
    request('https://meowfacts.herokuapp.com/', {method: 'GET'});
  }, [request, again]);

  function backToFelicidade() {
    history.push('/felicidades');
  }

  function handleAgain() {
    setAgain(again + 1);
  }

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Carregando...</h1>;
  if (data)
  return (
    <div>
      <Header />
      <h2>{data.data}</h2>
      <button
      onClick={backToFelicidade}
      style={{ backgroundColor: 'blue', padding: '15px 30px', marginLeft: '20px'}}
      >
        Home =/
      </button>

      <button
        onClick={handleAgain}
        style={{ backgroundColor: 'blue', padding: '15px 30px', marginLeft: '20px'}}
        >
          MAIS UMA!
        </button>
    </div>
  )
}

export default MeowPhrases;
