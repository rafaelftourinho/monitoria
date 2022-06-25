// EXEMPLO 1 - Exemplificação do thisArg

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

// EXEMPLO 2 - encadeamento de métodos para iteração
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

// EXEMPLO 3
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

{
const summation = (num) => [...Array(num)].map((_, i) => (i + 1)).reduce((a,b) => a + b);

const summation1 = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

console.log(summation(8));
console.log(summation1(8));
}


// EXEMPLO 4 - Suponha que você receba uma string de números, como você faria para devolver essa string em forma de array e invertida? '348597'

{
const digitize = (n) => [...String(n)].reverse().map(Number);
console.log(digitize('348597'));
}

// EXEMPLO 5 - Suponha que queiramos inverter os valores de um número. Como você faria? 123456789

{
const descendingOrder = n => parseInt([...String(n)].sort((a,b) => b - a).join(''))
console.log(descendingOrder(123456789))
}
