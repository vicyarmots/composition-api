<template>
  <div>
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout/MainLayout.vue'
import store from '@/store'
import { provide } from 'vue'

export default {
  name: 'App',
  components: { MainLayout },
  setup() {
    provide('store', store)
  }
}
</script>

<style></style>
