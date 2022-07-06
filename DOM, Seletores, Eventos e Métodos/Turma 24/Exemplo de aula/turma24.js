// COMO ACESSAMOS O DOM?

// const array = [0,1,2,3,4];
// array.push(10);

// COMO SELECIONAMOS OS ELEMENTOS PARA MODIFICAR O DOM?

{
  // const modificar = document.getElementById('item1');
  // const modificar2 = document.querySelector('.subject');
  // const algumaCoisa = document.querySelectorAll('.subject');
  // const modificar3 = document.querySelector('#item2');
  // const modificar4 = document.querySelector('#item3');
  // const inputText = document.querySelector('#text');
  
  // modificar.textContent = 'Ola turma 24!';
  // modificar.innerHTML = 'Olá';
  // modificar3.innerText = 'vamo lá';
  // modificar.style.backgroundColor = 'red';
  // modificar2.innerText = 'Hello!'
  // modificar2.style.border = '5px solid brown'
  // modificar3.style.backgroundColor = 'blue';
  // modificar4.style.textTransform = 'uppercase';
  // inputText.placeholder = 'Mudamos o que quisermos se soubermos acessar';
  // inputText.style.backgroundColor = 'rgb(50, 167, 145)';
  // inputText.style.borderRadius = '50%';
  
  
  // //IMPORTANTE!
  
  //  const ola = window.getComputedStyle(modificar).backgroundColor; //SOMENTE LEITURA, USADO PARA COMPARAR
  
  // const lista1 = document.getElementsByClassName('subject');
  // const lista2 = document.querySelectorAll('.subject');
  // console.log(lista1); //HTML COLLECTION
  // console.log(lista2); //NODE LIST
  // console.log(Object.values(lista2)); //ARRAY

// lista1.forEach(item => item.innerHTML = 'Vamo lá turma 24!'); //Não funciona
// lista2.forEach(item => item.innerHTML = 'Vamo que vamo turma 24!');

// for (let index in lista1) {
//   lista1[index].textContent = 'Aqui mudamos com for-in';
//   lista1[index].style.color = 'orange';
// }

// for (let value of lista1) {
//   value.innerText = 'Aqui mudamos com for-of!';
//   value.style.fontWeight = '900';
// }

}
// COMO COLOCAR NOVAS ENTRADAS NO SEU HMTL DE FORMA DINÂMICA

{
// const ul = document.querySelector('ul');
// const item = document.createElement('li');
// item.id = 'Item4';
// item.style.textTransform = 'lowercase';
// item.style.border = '10px solid yellow';
// item.innerText = 'Item 4';
// ul.appendChild(item);

// function criarBola() {
//   for (let i = 0; i < 3; i += 1) {
//     const bola = document.createElement('div');
//     const divBola = document.querySelector('.bola');
//     bola.classList.add('bola');
//     bola.style.weigth = '100%';
//     bola.style.height = '100%';
//     bola.style.backgroundColor = 'red';
//     bola.style.borderRadius = '50%';
//     divBola.appendChild(bola);
//   }
// }

// criarBola();


}

// TIPO DE SELETORES E COMO USÁ-LOS
{
  // const comecadosCom = document.querySelectorAll('a[href^="https"]');

  // const familia = document.querySelector('input[name=family]:checked');

  // const selecionados = document.querySelectorAll('input[type=checkbox]:checked');

  // const nota = document.querySelector('.nota:checked');
}


// EVENTOS 
// Como fazemos para adicionar um evento em algo que queremos?

{
  // const pegandoUmAe = document.querySelector('#item1');
  // pegandoUmAe.addEventListener('click', () => pegandoUmAe.style.backgroundColor = 'blue');

  // const checkbox = document.querySelector('input[type=checkbox]');
  // checkbox.addEventListener('mousedown', () => checkbox.style.width = '100px');

  // function mudarHeigth() {
  //   return checkbox.style.height = '100px';
  // }
  // checkbox.addEventListener('mousedown', mudarHeigth);

  // const azin = document.querySelector('#clicaae');
  // azin.addEventListener('mouseover', () => azin.textContent = 'Muda AE');
  // azin.addEventListener('mouseup', () => azin.style.backgroundColor = 'black');

  // window.addEventListener('mousedown', (event) => {
  //   event.target.innerText = 'Clicamos aqui';
  //   event.target.style.opacity = '0.4'
  // });

  // window.addEventListener('mouseup', (e) => {
  //   e.target.style.backgroundColor = 'blue';
  // })

  // const bola = document.querySelectorAll('.bola');
// bola.forEach(item => item.addEventListener('click', (e) => e.target.style.width = '50px'));
// bola.forEach(item => item.addEventListener('click', ({ target }) => target.style.backgroundColor = 'blue'));
// bola.addEventListener('click', (e) => e.target.style.backgroundColor = 'black');
}

// BÔNUS !!
{
const text = document.querySelector('#text')
setTimeout(function(){ text.value="2 seconds" }, 2000);
setTimeout(function(){ text.value="4 seconds" }, 4000);
setTimeout(function(){ text.value="6 seconds" }, 6000);
}
