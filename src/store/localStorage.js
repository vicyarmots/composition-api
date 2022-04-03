const setLocalStorage = (state, value) =>
  localStorage.setItem(value, JSON.stringify(state.todoList))

const getLocalStorage = (state, value) => {
  if (localStorage.getItem(value)) {
    const todoList = JSON.parse(localStorage.getItem(value))
    todoList.forEach(item => state.todoList.push(item))
  }
}

export { setLocalStorage, getLocalStorage }
