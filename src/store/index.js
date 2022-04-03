import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { setLocalStorage } from './localStorage'

const state = reactive({
  todoTitle: '',
  todoList: [],
  filter: 'all'
})

const methods = {
  addTodo() {
    !!state.todoTitle.length &&
      state.todoList.push({
        id: uuidv4(),
        title: state.todoTitle,
        completed: false,
        editing: false
      })

    state.todoTitle = ''

    setLocalStorage(state, 'todoList')
  },

  completeTodo(Id) {
    state.todoList.map(
      item => item.id === Id && (item.completed = !item.completed)
    )
    setLocalStorage(state, 'todoList')
  },

  deleteTodo(Id) {
    state.todoList = state.todoList.filter(({ id }) => id !== Id)

    setLocalStorage(state, 'todoList')
  },

  editTodo(Id, newTitle) {
    state.todoList.map(item => {
      if (item.id === Id) {
        item.editing = true
        item.title = newTitle
      }
    })
  },

  completeEditTodo(Id) {
    state.todoList.map(item => item.id === Id && (item.editing = false))

    setLocalStorage(state, 'todoList')
  },

  completeAllTodo() {
    state.todoList.map(
      item => !item.completed && (item.completed = !item.completed)
    )

    setLocalStorage(state, 'todoList')
  },

  clearCompletedTodo() {
    state.todoList = state.todoList.filter(
      (item, index, arr) => !item.completed && arr[index - 1] !== item
    )
    state.filter = 'all'

    setLocalStorage(state, 'todoList')
  }
}

export default {
  state,
  methods
}
