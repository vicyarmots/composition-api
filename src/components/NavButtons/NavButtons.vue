<script>
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'NavButtons',
  setup() {
    const {
      state,
      methods: { completeAllTodo, clearCompletedTodo }
    } = inject('store')

    const isCompleted = computed(() =>
      state.todoList.some(({ completed }) => completed)
    )

    const handleFilterButton = type => (state.filter = type)

    return {
      state,
      completeAllTodo,
      clearCompletedTodo,
      isCompleted,
      handleFilterButton
    }
  }
})
</script>

<template src="./NavButtons.html"> </template>

<style src="./NavButtons.css" lang="css" scoped></style>
