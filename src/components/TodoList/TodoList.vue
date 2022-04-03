<script>
import { defineComponent, inject, onMounted } from 'vue'
import { getLocalStorage } from '../../store/localStorage'
import { useFilter } from '../../hooks'

export default defineComponent({
  name: 'TodoList',
  setup() {
    const {
      state,
      methods: { completeTodo, deleteTodo, editTodo, completeEditTodo }
    } = inject('store')

    onMounted(() => {
      getLocalStorage(state, 'todoList')
    })

    const getTodoByStatus = useFilter(state)

    return {
      state,
      editTodo,
      completeEditTodo,
      completeTodo,
      deleteTodo,
      getTodoByStatus
    }
  }
})
</script>

<template src="./TodoList.html"> </template>

<style src="./TodoList.css" lang="css" scoped></style>
