<script>
import { defineComponent, inject } from 'vue'
// import { useInput } from '../../hooks'

export default defineComponent({
  name: 'TodoForm',
  setup() {
    const {
      state,
      methods: { addTodo }
    } = inject('store')

    return {
      state,
      addTodo
    }
  }
})
</script>

<template src="./TodoForm.html"> </template>

<style src="./TodoForm.css" lang="css" scoped></style>
