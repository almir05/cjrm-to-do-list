const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  if (inputValue) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center bg-white" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
    `
  }

  event.target.reset()
}

const deleteTodo = event => {
  const clickedElement = event.target
  const trashCan = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashCan}"]`)

  if (trashCan) {
    todo.remove()
  }
}

const filterTodos = todos => {
  todos.forEach(({ todo, shouldBeVisible }) => {
    todo.classList.remove(shouldBeVisible ? 'hidden' : 'd-flex')
    todo.classList.add(shouldBeVisible ? 'd-flex' :  'hidden')
  })
}

const searchTodo = event => {
  const inputValue = event.target.value.trim().toLowerCase()

  const todos = Array.from(todosContainer.children).map(todo => ({
    todo,
    shouldBeVisible: todo.textContent.toLowerCase().includes(inputValue)
  }))

  filterTodos(todos)
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', deleteTodo)
inputSearchTodo.addEventListener('input', searchTodo)