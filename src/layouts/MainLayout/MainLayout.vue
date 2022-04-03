<script>
import { defineComponent } from '@vue/runtime-core'
import TodoPage from '../../pages/TodoPage/TodoPage.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { TodoPage }
})
</script>

<template>
  <div class="main-layout">
    <TodoPage />
  </div>
</template>

<style src="./MainLayout.css" lang="css"></style>
