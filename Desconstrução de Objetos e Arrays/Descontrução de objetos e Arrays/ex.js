// DESCONSTRUÇÃO DE OBJETOS
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

// const { food, drink } = menuzinho;
// const { sopa, coxinha } = menuzinho.food;
// const { food: { sopa }, drink } = menuzinho;
// const menu = { ...menuzinho.food, ...menuzinho.drink };

// console.log(food, drink);
// console.log(sopa, coxinha);
// console.log(sopa, drink);
// console.log(menu);

function pegarValorDosFoods({ food: { sopa }, food: { coxinha } }) {
  return `O valor da sopa é ${sopa} e o valor da coxinha é ${coxinha}`;
}

console.log(pegarValorDosFoods(menuzinho));
console.log(menuzinho);

function pegaValorDosDrinks({ drink: { agua } }) {
  return `O valor da água é ${agua}`;
}

console.log(pegaValorDosDrinks(menuzinho));
}

// DESCONSTRUÇÃO DE ARRAYS

{
const info = ['Rafael', 'França', 32, 'Licenciatura em Química', 1,2,4,5,6,];


const [ nome, sobrenome, idade, formacao ] = info;


const frase = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos de idade e sou formado em ${formacao}.`;
console.log(frase);

const [ a, , , d] = info;

const phrase = `Meu nome é ${a} e sou formado em ${d}`;
console.log(phrase)


const [nome1, sobrenome1, idade1 = 70] = ['Rafael', 'França', 32];
console.log(nome1,sobrenome1,idade1);


const [param1, param2] = ['Wan', 'Lucas'];
console.log(param1, param2);

const criar = () => ['Wan','Pedro','Lontra'];

const [aa, bb, cc] = criar();

console.log(aa,bb,cc);
}

function ujjd (nome = 'Rafael', idade = 32) {
  return `Meu nome é ${nome} e tenho ${idade} anos de idade.`
}

console.log(ujjd('Dani', 30))
