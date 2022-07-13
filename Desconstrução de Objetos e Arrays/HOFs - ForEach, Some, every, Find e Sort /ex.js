//TODO                                                                         FOREACH

//* SINTAXE: array.forEach(funcao([valorAtual, índice, array]), argumentoThis)

//* EXEMPLO 1

{
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);

const tabuadaDeDois = () => {
  const elemento = [];
  numeros.forEach(item => elemento.push(item * 2));
  console.log(elemento);
};

tabuadaDeDois();
}

//* EXEMPLO 2

{
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

function somar(item, indice) {
  total += item;
  console.log(`[Índice ${indice}] = ${total}`)
}

nums.forEach(somar);
}

//TODO                                                                           SOME 

//* SINTAXE: array.some(funcao([valorAtual, índice, array]), argumentoThis);

//* EXEMPLO 1
{

function exists(arr, value) {
  return arr.some((item, index )=> item[index] === value);
}

const marks = [[4, 5, 7, 9, 10, 2]];

console.log(exists(marks, 4));
console.log(exists(marks, 11));
console.log(marks.includes(4));

}

//* EXEMPLO 2

{
let result = [].some(item => item > 0);
console.log(result);

result = [].some(item => item <= 0);
console.log(result);

}

//TODO                                                                           EVERY

//* SINTAXE: array.every(funcao([valorAtual, índice, array]), argumentoThis);

//* EXEMPLO 1

{
const numbers = [1, 3, 5];

const isOdd = numbers.every(item => Math.abs(item % 2) == 1);

console.log('Todos os números são ímpares:',isOdd);

const isEven = numbers.every(item => (item % 2 === 0));

console.log('Todos os números são pares:',isEven);
}

//* EXEMPLO 2

{
const gtZero = [].every(item => item > 0); 
const ltZero = [].every(item => item < 0); 

console.log('gtZero:', gtZero);//true
console.log('ltZero:', ltZero);//true
}

//TODO                                                                           FIND

//* SINTAXE: array.find(funcao([valorAtual, índice, array]), argumentoThis);

//* EXEMPLO 1

{
const customers = [
  {
  name: 'ABC Inc',
  credit: 100
}, 
{
  name: 'ACME Corp',
  credit: 200
}, 
{
  name: 'IoT AG',
  credit: 300
}
];

console.log(customers.find(item => item.credit > 100));
}

//* EXEMPLO 2

{
const num = [1, 2, 3, 4, 5, 6];

console.log(num.find(item => (item % 2 === 0)));

}

//TODO                                                                           SORT

//? OBS: O MÉTODO SORT, POR PADRÃO ELE CLASSIFICA OS ELEMENTOS EM ORDEM CRESCRENTE PARA STRINGS. CASO NÃO SE PASSE PARÂMETROS PARA NÚMEROS, ELE IRÁ REORDENAR EM UNICODE.

//* EXEMPLO 1

{
const olhaONumero = [0, 1, 3, 10, 50, 100];
olhaONumero.sort();
console.log(olhaONumero);

const myNumber = [0, 1, 3, 10, 50, 100];
myNumber.sort((a,b) => a - b);
console.log(myNumber);
}

//* EXEMPLO 2

{
const animals = ['gato', 'cachorro', 'elefante', 'abelha', 'papagaio'];
animals.sort();
console.log(animals);

const animais = ['Gato', 'cachorro', 'Elefante', 'abelha', 'papagaio'];
animais.sort();
console.log(animais);

const mixedCaseAnimals = ['Gato', 'cachorro', 'Elefante', 'abelha', 'papagaio'];
mixedCaseAnimals.sort((a,b) => {
  let x = a.toUpperCase(), y = b.toUpperCase();
  // return x == y ? 0 : x > y ? 1 : -1;
  if (x == y ) {return 0
  } else return x > y ? 1 : -1;
});

console.log(mixedCaseAnimals);
}

//* EXEMPLO 3

{
const employees = [
  {name: 'Pedro', salary: 12000, hireDate: 'March 15, 2023'},
  {name: 'Rafael', salary: 9000, hireDate: 'March 3, 2023'},
  {name: 'Wan', salary: 32000, hireDate: 'Dezember 25, 2022'},
  {name: 'Lucas', salary: 15000, hireDate: 'March 25, 2023'},
];

employees.sort((a,b) => b.salary - a.salary);
console.table(employees);

const empregados = [
  {name: 'Rafael', salary: 9000, hireDate: 'March 3, 2023'},
  {name: 'Wan', salary: 32000, hireDate: 'Dezember 25, 2022'},
  {name: 'Lucas', salary: 15000, hireDate: 'March 25, 2023'},
  {name: 'pedro', salary: 12000, hireDate: 'March 15, 2023'},
];

empregados.sort((a,b) => {
  let x = a.name.toLowerCase(), y = b.name.toLowerCase();
  // return x === y ? 0 : a > b ? 1 : -1;
  if (x == y ) {return 0
  } else return y > x ? 1 : -1;
});

console.table(empregados);
}
