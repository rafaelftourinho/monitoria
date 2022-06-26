//  REST

//OBS: Só pode existir um parâmetro rest por função e ele necessariamente tem que ser o último.

// EXEMPLO 1
{

  function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => console.log(ganhador + ' ganhou um ' + premio));
  }
  
  anunciarGanhadores('carro 0km','Pedro', 'Marta', 'Maria', 'Amanda', 'Daniel', 10);
  
}

//Exemplo 2
{
  const adicionar = (...nomes) => console.log(nomes);
  
  adicionar('Rafael', 'Dani', 'Pedro', 'Lucas', 'Wan', 'Lontra');
  
  const numeross = (...numeros) => console.log(numeros);
  
  numeross(1,2,3,4,5,6,7,8);
}


// SPREAD
// Usado para clone, transformação em array e espalhamento.

// EXEMPLO 1
{
  function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => console.log(ganhador + ' ganhou um ' + premio));
  }
  const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto', 'Edson'];
  anunciarGanhadores('carro 0km', ...ganhadores);
}

// EXEMPLO 2
{
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(...numeros);
const outros = [...numeros, 6, 7, 8, 9]; 
console.log(outros);
}

// EXEMPLO 3
{
  const menuzinho = {
  food: {
    sopa: 9.9,
    coxinha: 3.9,
  },
  drink: {
    agua: 3.9,
  },
};

const newObject = {...menuzinho.food, ...menuzinho.drink};
console.log(newObject);
}

// EXEMPLO 4
{
const nums = [1, 2, 4, 39, 24, 65, 2, 4];
console.log(Math.max(nums));
console.log(Math.max(...nums));
}

// EXEMPLO 5 - Usado como método de clone de objetos e Arrays (Shallow clone)
{
const carro = { cor: 'Verde água', portas: 2, ano: 1993, marca: 'Fiat', modelo: 'Elba'};
console.log('Carro inicial:',carro);

const cloneCarro = { ...carro, turbo: true };
// console.log('Carro clonado:',cloneCarro)

carro.status = 'Vendido';
// console.log('Carro inicial modificado:',carro);
// console.log('Carro clonado:',cloneCarro)

console.log('Eles são o mesmo objeto?', carro === cloneCarro);

const cloneCarro2 = carro;

console.log('Eles são o mesmo objeto?', carro === cloneCarro2);
}

// SPREAD + REST
{
function add(nomes, ...novosNomes) {
  const novoConjunto = [
    ...nomes,
    ...novosNomes
  ];

  return novoConjunto;
}

const nomes = ['Rafael', 'Ricardo'];
const outru = add(nomes, 'Antônio', 'João', 'Maria');

console.log(outru);
}
