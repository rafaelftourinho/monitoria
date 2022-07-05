const btnAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const orderList = document.querySelector('#lista-tarefas');
const resetBtn = document.querySelector('#apaga-tudo');
const resetCompletedBtn = document.querySelector('#remover-finalizados');
const selectedBtn = document.querySelector('#remover-selecionado');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const upBtn = document.querySelector('#mover-cima');
const downBtn = document.querySelector('#mover-baixo');

// Função de colocar e tirar a class selected
const selectedClass = ({ target }) => {
  const lis = document.querySelectorAll('li');

  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
  target.classList.add('selected');
};

// Função para colocar e retirar class completed
const completedClass = ({ target }) => {
  target.classList.toggle('completed');
};

// Função que cria e atribui o valor do input as Li's
const createItems = (text, classe) => {
  const items = document.createElement('li');
  items.innerText = text;
  items.className = classe;
  input.value = '';
  items.addEventListener('click', selectedClass);
  items.addEventListener('dblclick', completedClass);
  orderList.appendChild(items);
};

// Função do botão apagar tudo
const resetAll = () => {
  while (orderList.hasChildNodes()) orderList.removeChild(orderList.firstChild);
};

// Função do botão apagar com class completed
const resetAllCompleted = () => {
  const finish = document.getElementsByClassName('completed');
  while (finish.length > 0) finish[0].remove();
};

// Função para apagar o item que for selecionado
const eraseSelected = () => {
  const selected = document.getElementsByClassName('selected');
  selected[0].remove();
};

// Função para guardar os valores em LocalStorage
function updateLocalStorage() {
  const list = document.querySelectorAll('li');
  const tasks = [];

  list.forEach((items) => tasks.push({
    className: items.className,
    text: items.innerText,
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para obter os dados do LocalStorage
const reloadItems = () => {
  const dados = localStorage.getItem('tasks');
  const newArray = JSON.parse(dados);

  if (newArray) {
    newArray.forEach((object) => {
      createItems(object.text, object.className);
    });
  }
};

// Função para mover para cima os itens
const moveUpSelected = () => {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousSibling) {
    selected.parentNode.insertBefore(selected, selected.previousSibling);
  }
};

// Função para mover para baixo os itens
const moveDownSelected = () => {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextSibling) {
    selected.parentNode.insertBefore(selected.nextSibling, selected);
  }
};

// Função de escuta dos eventos
const eventListener = () => {
  btnAdd.addEventListener('click', () => createItems(input.value));
  input.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      createItems(input.value);
    }
  });
  resetBtn.addEventListener('click', resetAll);
  resetCompletedBtn.addEventListener('click', resetAllCompleted);
  selectedBtn.addEventListener('click', eraseSelected);
  saveTasksBtn.addEventListener('click', updateLocalStorage);
  upBtn.addEventListener('click', moveUpSelected);
  downBtn.addEventListener('click', moveDownSelected);
};

window.onload = () => {
  eventListener();
  reloadItems();
};
