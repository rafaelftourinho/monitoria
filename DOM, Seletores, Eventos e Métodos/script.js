// O QUE É O DOM E PARA QUE SERVE?

// COMO ACESSAMOS O DOM?

// COMO SELECIONAMOS OS ELEMENTOS PARA MODIFICAR O DOM?

// const modificar = document.getElementById('email');
// const modificar2 = document.querySelector('#email');
// console.log(modificar);


// console.log(modificar2);

// modificar.placeholder = 'Ola';
// modificar.style.backgroundColor = 'red';

// //IMPORTANTE!

//  const ola = window.getComputedStyle(modificar).backgroundColor; //SOMENTE LEITURA, USADO PARA COMPARAR

// console.log(ola);

// const lista1 = document.getElementsByClassName('subject');
// const lista2 = document.querySelectorAll('.subject');
// console.log(lista1); //HTML COLLECTION
// console.log(lista2); //NODE LIST
// console.log(Object.values(lista2)); //ARRAY


// // TIPO DE SELETORES E COMO USÁ-LOS COM E SEM MÉTODOS

// const comecadosCom = document.querySelectorAll('.menu a[href^="#"]'); //Não existe no site em si
// const familia = document.querySelector('input[name=family]:checked');
// const selecionados = document.querySelectorAll('input[type=checkbox]:checked');
// const nota = document.querySelector('.nota:checked');

// // Exemplo 1 - Sem método

// /**Função para percorrer o array criado
//  * @param nenhum
//  * @returns result */
// const valoresRetornados = () => {
//   let result = '';
//   for (let valores of selecionados) {
//     result += `${valores.value} `;
//   }
//   return result
// }

// `${valoresRetornados()}`
// console.log(`Matérias: ${valoresRetornados()}`)

// // Exemplo 2 - forEach

// /**Função para percorrer o array criado 
//  * @param nenhum
//  * @returns valor */
// const valoresForEach = () => {
//   let valor = `Matérias: `;
//   selecionados.forEach((item) => {
//     valor += `${item.value}, `;
//   })
//   return valor;
// }
// console.log(valoresForEach());

// // Exemplo 3 - spread, map e join

// console.log(`Matérias: ${[...selecionados].map((param) => param.value).join(', ')}`);
// console.log(`Família: ${familia.value}`)
// console.log(`Nota: ${nota.value}`);

// // Exemplo 4 - com objetos e construtores

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo: function() {
//     this.element().classList.add('ativo');
//   },
// };

// Dom.ativo(); //adiciona ativo ao Li
// Dom.seletor = 'ul';
// Dom.ativo(); //adiciona ativo a ul;

// function Dom(seletor) {
//   this.element = function() {
//     return document.querySelector(seletor);
//   }
//   this.ativar = function(classe) {
//     this.element().classList.add(classe);
//   }
//   this.desativar = function(classe) {
//     this.element.classList.remove(classe);
//   }
// }

// const li = new Dom('li');
// li.ativar('Ativo');
// li.desativar('Ativo');

// const ul = new Dom('ul');
// ul.ativar('Ativo');
// ul.desativar('Ativo');

// const lastLi = new Dom('li:last-child');
// lastLi.ativar('Ativo');
// lastLi.desativar('Ativo');

// // ALGUMAS COISAS INTERESSANTES SOBRE MÉTODOS VARIADOS

// const string = 'Uma, coisa, de, cada, vez';
// console.log([...string]);
// console.log(Array(string));
// console.log(Array.from(string));
// console.log(string.split(','));


// //Observação importante sobre o arguments

// // Você pode usar o objeto arguments se você chamar uma função com mais argumentos do que ele é formalmente declarado para aceitar. Esta técnica é útil para funções que podem ser passada em um número de variáveis de argumentos. Você pode usar arguments.length para determinar o número de argumentos passado para a função, e então processar cada argumento usando o objeto arguments

// function sum() {
//   console.log([...arguments])
//   return [...arguments].reduce((a, b) => {
//     console.log(a,b);
//     return a + b;
//   }, 5);
// }

// sum(1,2,3,4,5); //// 15

// const param = sum(1,2,3,4,5)
// console.log(param);

// const array = Array.from(param);
// const array2 = Object.entries(param);
// console.log(array2)
// console.log(array.join(', '));
// console.log(array.join(', '));


// function soma(x) {
//   return x;
// }

// console.log(soma(1,2,3,4,5)); //// 1

// function toArray() {
//   return [].slice.call(arguments);
// }
// console.log(toArray());
// console.log(toArray(1, 'ala', null, undefined, [1,2,3]));
// const olaa = toArray(1, 'ala', null, undefined, [1,2,3]);

// // // OBS: podemos usar Array.from(arguments);

// const classification = toArray('Olá,', 'como', 'vocês', 'estão?');
// console.log(classification);
// console.log(classification.join(' '));

// function foo(...args) {
//   return args;
// }
// console.log(foo(1, 2, 3)); // [1,2,3]


// EVENTOS 
// Como fazemos para adicionar um evento em algo que queremos?
// Para isso, vamos ver o código completo em JS do TrybeWarts


// Função geral para sintaxe mais limpa
// const $ = (attribute) => document.querySelector(attribute);
// const $$ = (attribute) => document.querySelectorAll(attribute);

// const nome = $('#input-name');
// const lastname = $('#input-lastname');
// const house = $('#house');
// const observation = $('#textarea');
// const formUser = $('#evaluation-form');
// const btnSubmit = $('#submit-btn');
// const emailForm = $('#input-email');
// const agree = $('#agreement');

// // Função de checar os dados
// const checarDados = () => {
//   const senha = $('#senha');
//   const email = $('#email');
//   if (email.value === 'tryber@teste.com' && senha.value === '123456') {
//     alert('Olá, Tryber!');
//   } else alert('Email ou senha inválidos.');
// };

// // Função para habiliar o submit ao clicar no checkbox
// const enableSubmit = () => btnSubmit.disabled = !agree.checked;

// Função para criar o contador da textarea
// const createCount = () => {
//   const counter = document.createElement('div');
//   const span = $('#counter');
//   counter.id = 'counter';
//   counter.innerText = 500;
//   span.appendChild(counter);
// };

// // Função para checar o tamanho da textarea
// const checkCounter = () => {
//   const textarea = $('#textarea');
//   const divCount = $('#counter');
//   const maxChars = textarea.getAttribute('maxlength');
//   const text = textarea.value.length;
//   const rest = maxChars - text;
//   divCount.innerText = `${rest}/500`;
// };

// // Função para captar as escolhas do usuário
// const formAvaliation = (e) => {
//   e.preventDefault();

//   const family = $('input[name=family]:checked');
//   const contents = $$('.subject:checked');
//   const note = $('input[name=rate]:checked');
//   const result = $('#form-data');

//   formUser.style.display = 'none';
//   result.classList.toggle('display');
//   result.innerText = `
//   Nome: ${nome.value} ${lastname.value}
//   Email: ${emailForm.value}
//   Casa: ${house.value}
//   Família: ${family.value}
//   Matérias: ${[...contents].map((content) => content.value).join(', ')}
//   Avaliação: ${note.value}
//   Observações: ${observation.value};
//   `;
// };

// // Função de escuta dos eventos
// const eventListener = () => {
//   const agree = $('#agreement');
//   const textarea = $('#textarea');
//   const btnForm = $('#btn-form');
//   btnForm.addEventListener('click', checarDados);
//   agree.addEventListener('change', enableSubmit);
//   textarea.addEventListener('input', checkCounter);
//   formUser.addEventListener('submit', formAvaliation);
// };

// window.onload = () => {
//   eventListener();
//   createCount();
//   novosEventos();
// };


// E SE QUISERMOS ADICIONAR MAIS EVENTOS AO CÓDIGO?

// const novosEventos = () => {
// const btnForm = $('#btn-form');
// const footer = $('footer');
// btnForm.addEventListener('click', () => {
//   btnForm.innerText = 'Clicamos, mané'
// })
// window.addEventListener('mousedown', ({ target }) => {
//   target.innerText = 'Clicamos aqui';
//   target.style.opacity = '0.4'
// });
// window.addEventListener('mouseup', ({ target }) => {
//   target.style.backgroundColor = 'blue';
// })
//   footer.addEventListener('click', () => {
//   footer.classList.toggle('ativo');
// } )
// emailForm.addEventListener('mouseover', () => {
//   emailForm.placeholder = 'Esperamos que tenha mais sempre!'
//   emailForm.style.backgroundColor = 'red';
// });
// nome.addEventListener('mouseover', () => {
//   nome.placeholder = 'A aula do Rafa e do Cauê foi pica!'
//   nome.style.textTransform = 'uppercase'
// });
// lastname.addEventListener('mouseover', () => {
//   lastname.placeholder = 'Na verdade de todo mundo'
//   lastname.style.fontWeight = '900'
// });
// };
