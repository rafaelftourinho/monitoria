// EXEMPLO 1

// const newArray = arr.filter(callback[, thisArg])
// Valor a ser usado como this durante a execução do callback.

// OBS: FALAR SOBRE ARROW FUNCTION NESSA SINTAXE
{
function isInRange(value) {
  if (typeof value !== 'number') {
    return false;
  } return value >= this.lower && value <= this.upper; //retorna um booleano
}

const data = [10, 20, '30', 1, 5, 'JavaScript Filter', undefined, 'example'];

const range = {
  lower: 1,
  upper: 10
};

const numberInRange = data.filter(isInRange, range);

console.log(numberInRange);
}

// EXEMPLO 2
{
const cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006},
]

// cities.filter((city) => city.population < 3000000).sort((c1,c2) => c1.population - c2.population).map((city) => console.log(`${city.name} : ${city.population}`));

const filter = cities.filter((city) => city.population < 3000000);

const sort = filter.sort((c1,c2) => c1.population - c2.population);

const map = sort.map((city) => console.log(`${city.name} : ${city.population}`));

console.log(filter, sort, map);
console.log(filter);
console.log(sort);
console.log(map);
}
