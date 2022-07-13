const input = document.querySelector('#input');
const digiImg = document.querySelector('#img-digi');
const digiTitle = document.querySelector('.card-title');
const digiText = document.querySelector('.card-text');

const fetchAPI = async () => {
  const url = 'https://digimon-api.vercel.app/api/digimon'
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const digiCard = async ({ target }) => {
  const digiArr = await fetchAPI();

  const find = digiArr.find((digimon) => digimon.name.toLowerCase() === target.value.toLowerCase());

  const { name, img, level } = find;

  digiImg.src = img;
  digiTitle.innerText = name;
  digiText.innerText = `O ${name} é do tipo ${level}`;
}

window.onload = () => input.addEventListener('change', digiCard);

