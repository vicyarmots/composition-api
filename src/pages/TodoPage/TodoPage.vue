<script>
import { defineComponent, inject } from 'vue'
import {
  Header,
  Logo,
  NavButtons,
  ProgressBar,
  TodoList,
  TodoForm,
  Footer
} from '../../components/index'

export default defineComponent({
  name: 'TodoPage',
  components: {
    TodoForm,
    TodoList,
    ProgressBar,
    Logo,
    Header,
    NavButtons,
    Footer
  },
  setup() {
    const { state } = inject('store')
    return { state }
  }
})
</script>

<template>
  <div class="todo-page__container">
    <Logo />
    <Header />
    <TodoForm />
    <TodoList v-show="state.todoList.length" />
    <ProgressBar v-if="state.todoList.length" />
    <NavButtons v-if="state.todoList.length" />
    <Footer v-if="!state.todoList.length" />
  </div>
</template>

<style src="./TodoPage.css" lang="css" scoped></style>
