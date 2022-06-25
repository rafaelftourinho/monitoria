// // MAP

// O método map() cria uma nova matriz chamando a função de retorno de chamada fornecida como um argumento em cada elemento na matriz de entrada. o map() pegará todos os valores retornados da função de retorno de chamada e criará um novo array usando esses valores.

// A função de retorno de chamada passada para o map() aceita 3 argumentos: element, index, e array. 


// // EXEMPLO 1
// Digamos que temos um array de números e queremos criar um novo array que contenha o dobro de cada valor do primeiro array. Vamos ver como podemos resolver o problema com e sem função de ordem superior. 

// SEM HOF

{
const arr1 = [1, 2, 3];
const arr2 = [];

for (let i in arr1) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2)
}

// COM HOF

{
const arr = [1, 2, 3];

const arr3 = arr.map(item => item * 2);

console.log(arr3);
}

// // EXEMPLO 2
// Digamos que temos um array contendo o ano de nascimento de diferentes pessoas e queremos criar um array que contenha suas idades. Por exemplo: 

// SEM HOF

{
const birth = [1975, 1997, 2002, 1995, 1985];
const ages = [];

for (let i in birth) {
  let age = 2022 - birth[i];
  ages.push(age);
}

console.log(ages);
}

// COM HOF

{
const aniversario = [1975, 1997, 2002, 1995, 1985];

const idades = aniversario.map(year => 2022 - year);

console.log('Idades atuais:',idades);
}

// // FILTER

// O método filter() cria uma nova matriz com todos os elementos que passam no teste fornecido pela função de retorno de chamada. A função de retorno de chamada passada para o filter() aceita 3 argumentos: element, index, e array. 

// // EXEMPLO 1
// Digamos que temos um array que contém objetos com propriedades name e age. Queremos criar um array que contenha apenas as pessoas com maior idade (idade maior ou igual a 18 anos). 

// SEM HOF

{
const pessoas = [ 
  { nome: 'Pedro', idade: 16 }, 
  { nome: 'Mark', idade: 18 }, 
  { nome: 'João', idade: 27 }, 
  { nome: 'Jane', idade: 14 }, 
  { nome: 'Tony', idade: 24}, 
  ]; 

const idadeCompleta = []; 
  
for(let i = 0; i < pessoas.length; i++) { 
  if(pessoas[i].idade >= 18) { 
  idadeCompleta.push(pessoas[i]); 
  } 
} 

console.log(idadeCompleta);
}

// COM HOF

{
const peoples = [
  { name: 'Rodrigo', age: 27},
  { name: 'Aderbal', age: 24},
  { name: 'Pedro', age: 16},
  { name: 'Paulo', age: 18},
  { name: 'Lucas', age: 14},
]

const fullAge = peoples.filter(people => people.age >= 18);

console.log('Pessoas maiores de 18 anos',fullAge);
}

// EXEMPLO 2

{
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
}

// // REDUCE

// O método reduce() executa a função de retorno de chamada em cada membro da matriz de chamada que resulta em um único valor de saída. O método reduce aceita dois parâmetros: 1) A função redutor (callback), 2) e um opcional initialValue.

// A função redutor (callback) aceita quatro parâmetros: accumulator, currentValue, currentIndex, sourceArray.

// Se um initialValue é fornecido, então o accumulatorserá igual ao initialValuee a currentValueserá igual ao primeiro elemento na matriz.

// Se não initialValue é fornecido, então o accumulatorserá igual ao primeiro elemento na matriz e o currentValue será igual ao segundo elemento na matriz. 

// // EXEMPLO 1
// Digamos que temos que somar uma matriz de números: 

// COM HOF

{
const array = [5, 7, 1, 8, 4];

const soma = array.reduce((acc, cur) => acc + cur); //sem passar o valor inicial de acc;

console.log('Com HOF e sem valor de acc inicial:',soma); // 25

const sum = array.reduce((acc, cur) => acc + cur, 10); //com valor inicial de acc;

console.log('Com HOF e valor de acc inicial:',sum);
}

// SEM HOF

{
let somatorio = 0;

for (let i in array) {
  somatorio += array[i];
}

console.log('Sem HOF (usando for-in):',somatorio);
}

// EXEMPLO 2

{
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificacaoNota = (gabarito, resposta, callback) => {
  const result = gabarito.reduce((acc,_,i) => acc + callback(gabarito[i], resposta[i]) ,0);
  return `Resultado final : ${result} pontos`;
}

const comparacaoNumeros = (gabarito, resposta) => {
  if (gabarito === resposta) return 1;
  if (resposta === 'N.A') {
    return 0;
  } return -0.5;
}

console.log(verificacaoNota(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacaoNumeros));
}

// EXEMPLO 3

{
const pessoal = [
{
  nome: 'Rafael',
  idade: 32,
},
{
  nome: 'Joana',
  idade: 14,
},
{
  nome: 'Lívia',
  idade: 23,
},
{
  nome: 'Luíza',
  idade: 21
},
{
  nome: 'Lucas',
  idade: 45
},
{
  nome: 'Mateus',
  idade: 15,
},
{
  nome: 'Isabelle',
  idade: 22,
},
{
  nome: 'Rodrigo',
  idade: 17,
},
];

const pessoasAgrupadas = pessoal.reduce((acc, curr) => {
  const propMaiorOuMenor = curr.idade >= 18 ? 'maiores' : 'menores';

  acc[propMaiorOuMenor].push(curr);

  return acc;
}, { maiores: [], menores: [] });

console.log('Pessoas Agrupadas', pessoasAgrupadas);
}

// // CONSTRUÍNDO NOSSA PROPRIA HOF

// Digamos que temos um array de strings e queremos converter esse array em um array de inteiros, onde cada elemento representa o comprimento da string no array original. 

{
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

const mapForEach = (arr, callback) => {
  const newArray = [];
  for (let i in arr) {
    newArray.push(callback(arr[i]));
  }
  return newArray;
}

const lenArray = mapForEach(strArray, (item) => item.length);

console.log(lenArray); // [ 10, 6, 3, 4, 1 ];
}
