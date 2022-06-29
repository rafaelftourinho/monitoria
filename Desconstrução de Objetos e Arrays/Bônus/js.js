// Parâmetros sendo passados com default no início da função

function createButton(background = 'blue', color = 'red') {
  const btnElement = document.createElement('button');
  btnElement.style.background = background;
  btnElement.style.color = color;
  return btnElement;
}

const redBtn = createButton();


// Utilize o método push para inserir as frutas ao final de comidas.

const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Arroz', 'Lasanha'];

comidas.push(...frutas);
console.log(comidas);


// MÉTODOS DE STRING

// EXEMPLO 1 - split e join

const htmlText = '<div> O melhor item </div><div> A melhor lista </div>';
const htmlArray = htmlText.split('div');
console.log(htmlArray);
console.log(htmlArray.length);

const novoHtml = htmlArray.join('section');
console.log(novoHtml);


// EXEMPLO 2 - trim

const valor = '    R$35,00    ';
console.log(valor);
console.log(valor.trim());

// EXEMPLO 3 - replace e slice

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$99',
  },
  {
    descricao: 'Taxa do Pão',
    valor: 'R$39',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$129',
  }
]


let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach(item => {
  const numeroLimpo = +item.valor.replace('R$', '');
  if (item.descricao.slice(0,4) === 'Taxa' ){
    taxaTotal += numeroLimpo;
  } else if (item.descricao.slice(0,4) === 'Rece') recebimentoTotal += numeroLimpo;
});

console.log('Taxa Total:',taxaTotal);
console.log('Recebimento Total:',recebimentoTotal);

// MÉTODO DE NUMBER e MATH

// EXEMPLO 1 - toLocaleString

const value = 48.49;
const valueReal = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valueReal);

const valueDol = value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
console.log(valueDol);
console.log(typeof valueDol);

// EXEMPLO 2 - Math.PI

console.log(Math.PI);

// EXEMPLO 3 Math.abs, Math.ceil, Math.floor, Math.round, Math.random

console.log(Math.abs(3 - 6)); // valor absoluto - módulo
console.log(Math.ceil(2.3)); // arredonda para cima
console.log(Math.floor(4.9)); // arredonda para baixo
console.log(Math.round(4.4)); // arredonda para baixa até 0.4
console.log(Math.round(4.6)); // arredonda para cima de 0.5
console.log(Math.random()); // devolve um número aleatório entre 0 e 1

// TRANSFORMANDO UM OBJETO EM ARRAY

const obj = {
  0: 'Rafael',
  1: 'Renato',
  2: 'Rodrigo',
  length: 3 // É obrigatório que exista a propriedade length no obj para ser transformado em array
};

const objArray = Array.from(obj);
console.log(objArray); // ['Rafael', 'Renato', 'Rodrigo'];

console.log(Array.isArray(objArray));


