<script>
import { inject, defineComponent } from 'vue'
import { useTodoStatus } from '../../hooks/'

export default defineComponent({
  name: 'ProgressBar',
  setup() {
    const { state } = inject('store')

    const {
      getActiveStatus,
      getCompletedStatus,
      getActiveBar,
      getCompletedBar
    } = useTodoStatus(state)

    return {
      state,
      getCompletedStatus,
      getActiveStatus,
      getActiveBar,
      getCompletedBar
    }
  }
})
</script>

<template src="./ProgressBar.html"> </template>

<style src="./ProgressBar.css" scoped lang="css"></style>
