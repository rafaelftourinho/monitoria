// EXEMPLO 1
{
const numeros = [1, 2, 3, 4, 5];
const outros = [...numeros, 6, 7, 8, 9]; 
console.log(outros);
}

// EXEMPLO 2
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

// EXEMPLO 3
{
const nums = [1, 2, 4, 39, 24, 65, 2, 4];
console.log(Math.max(nums));
console.log(Math.max(...nums));
}

// EXEMPLO 4 - Usado como método de clone de objetos e Arrays (Shallow clone)
{
const carro = { cor: 'Verde água', portas: 2, ano: 1993, marca: 'Fiat', modelo: 'Elba'};
console.log('Carro inicial:',carro);

const cloneCarro = { ...carro, turbo: true };
console.log('Carro clonado:',cloneCarro)

carro.status = 'Vendido';
console.log('Carro inicial modificado:',carro);

console.log('Eles são o mesmo objeto?', carro === cloneCarro);

const cloneCarro2 = carro;

console.log('Eles são o mesmo objeto?', carro === cloneCarro2);
}

// EXEMPLO DE REST
{
const adicionar = (...nomes) => console.log(nomes);

adicionar('Rafael', 'Dani', 'Pedro', 'Lucas', 'Wan', 'Lontra');

const numeross = (...numeros) => console.log(numeros);

numeross(1,2,3,4,5,6,7,8);
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
