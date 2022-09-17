import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";
import useFetch from "../../../custom_hooks/src/hooks/useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const MeowPhotos = () => {
  const { request, data, loading, error } = useFetch();
  const [again, setAgain] = useState(0);
  const history = useHistory();

  function backToFelicidade() {
    history.push('/felicidades');
  }

  function handleAgain() {
    setAgain(again + 1);
  }

  useEffect(() => {
    request('https://api.thecatapi.com/v1/images/search', {method: 'GET'});
  }, [request, again]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Carregando...</h1>;
  if (data)
    return (
      <div>
        <Header />
        <img src={data[0].url} alt={data.id} />
        <br/>
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
};

export default MeowPhotos;
