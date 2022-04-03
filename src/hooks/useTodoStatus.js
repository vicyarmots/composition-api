import { computed } from 'vue'

export const useTodoStatus = state => {
  const getCompletedStatus = computed(() =>
    state.todoList.reduce((acc, item) => {
      item.completed && acc.push(item)
      return acc
    }, [])
  )

  const getActiveStatus = computed(() =>
    state.todoList.reduce((acc, item) => {
      !item.completed && acc.push(item)
      return acc
    }, [])
  )

  const getActiveBar = computed(() => {
    const per = 1000 / state.todoList.length
    const num_per = (getActiveStatus.value.length / 10) * per
    return num_per
  })

  const getCompletedBar = computed(() => {
    const per = 1000 / state.todoList.length
    const num_per = (getCompletedStatus.value.length / 10) * per
    return num_per
  })

  return {
    getActiveStatus,
    getCompletedStatus,
    getActiveBar,
    getCompletedBar
  }
}
