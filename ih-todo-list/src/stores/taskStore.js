import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks } from '@/api/taskApi'

export const useTasksStore = defineStore('tasks', () => {
  //state
  const tasks = ref([])

  const orderedTasks = computed(() => {
    return tasks.value.sort((a, b) => a.is_complete - b.is_complete)
  })

  //actions
  async function fetchTasks() {
    try {
      tasks.value = await fetchAllTasks()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    tasks,
    orderedTasks,
    fetchTasks
  }
})
