import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const Felicidades = () => {
  const history = useHistory();

  function handleClickPhrases() {
    history.push('/meow');
  }
  function handleClickPhotos() {
    history.push('/photos');
  }
    return (
      <div>
        <Header />
        <h2>Deseja ver frases ou fotos de gatinhos?</h2>
        <button
        onClick={handleClickPhrases}
        style={{ backgroundColor: 'blue', padding: '15px 30px', marginLeft: '20px'}}
        >
          FRASES
        </button>
        <button
        onClick={handleClickPhotos}
        style={{ backgroundColor: 'blue', padding: '15px 30px', marginLeft: '20px'}}
        >
          FOTOS
        </button>
        <h2>{}</h2>
      </div>
    )
}

export default Felicidades;
