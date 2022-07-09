const input = document.querySelector('#input');
const imgDigi = document.querySelector('#img-digi');
const digiTitle = document.querySelector('.card-title');
const digiText = document.querySelector('.card-text');

const fetchAPI = async () => {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon');
  const data = await response.json();
  return data;
}

function digiAPI() {

  input.addEventListener('change', async ({ target }) => {
    const digiArr = await fetchAPI();

    const find = digiArr.find(({ name }) => name.toLowerCase() === target.value.toLowerCase());

    const image = find.img;
    const { name, level } = find;

    digiText.innerText = `${name} é um digimon do tipo ${level}`;
    digiTitle.innerHTML = name;
    imgDigi.src = image;

    return find;
  })
}

window.onload = () => digiAPI();
