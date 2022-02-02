const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodo = event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  const inputValueContainsContent = inputValue.length

  if (inputValueContainsContent) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center bg-white">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
  }

  event.target.reset()
}

const deleteTodo = event => {
  const clickedElement = event.target
  const isATrashCan = Array.from(clickedElement.classList).includes('delete')

  if (isATrashCan) {
    clickedElement.parentElement.remove()
  }
}

const hideTodo = inputValue => {
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
}

const showTodo = inputValue => {
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
}

const searchTodo = event => {
  const inputValue = event.target.value.trim().toLowerCase()

  hideTodo(inputValue)
  showTodo(inputValue)
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', deleteTodo)
inputSearchTodo.addEventListener('input', searchTodo)