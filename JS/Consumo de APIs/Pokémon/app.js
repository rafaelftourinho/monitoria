const getPokemonURL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(150).fill()
  .map((_,index) => fetch(getPokemonURL(index + 1)).then((response) => response.json()));


const generateHTML = (pokemons) => pokemons.reduce((acc, { name, id, types }) => {
  const elementTypes = types.map((typeInfo) => typeInfo.type.name).join(' | ');

  acc += `
  <li class ="card ${elementTypes[0]}">
  <img class="card-image" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
    <h2 class="card-title"> ${id}. ${name}</h2>
    <p class="card-subtitle">${elementTypes}</p>
  </li>
  `

  return acc;
}, '')

const insertPokemonsIntoPage = (pokemons) => {
  const ul = document.querySelector('[data-js="pokedex"]');
  ul.innerHTML = pokemons;
}

const pokemonPromises = generatePokemonPromises();

Promise.all(pokemonPromises)
  .then(generateHTML)
  .then(insertPokemonsIntoPage)
