
let todoItems = [];

// push todo -> todoItems 
function renderTodo(todo) {
  const list = document.querySelector('#todo-list');

  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo">
    <span>delete</span>
    </button>
  `;

  list.append(node);
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

const form = document.querySelector('#todo-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});