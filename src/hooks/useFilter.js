import { computed } from 'vue'

export const useFilter = state => {
  const getStatusByFilter = computed(() => {
    return state.todoList.reduce((acc, item) => {
      switch (state.filter) {
        case 'all': {
          return [...acc, item]
        }
        case 'completed': {
          item.completed && acc.push(item)
          return acc
        }
        case 'active': {
          !item.completed && acc.push(item)
          return acc
        }
        default:
          return acc
      }
    }, [])
  })

  return getStatusByFilter
}
