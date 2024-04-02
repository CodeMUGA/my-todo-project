import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks } from '@/api/taskApi'

export const useTasksStore = defineStore('tasks', () => {
  //state
  const tasks = ref([])

  //actions
  function fetchTasks() {
    try {
      tasks.value = fetchAllTasks()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    tasks,
    fetchTasks
  }
})
