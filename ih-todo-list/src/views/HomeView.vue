<script setup>
import { ref, onMounted, watch } from 'vue'
import { useTasksStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia';

const tasksStore = useTasksStore()
const { tasks, orderedTasks } = storeToRefs(tasksStore)

const name = ref('')

const input_content = ref('')

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

watch(
  tasks,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
  },
  {
    deep: true
  }
)

const addTask = () => {
  if (input_content.value.trim() === '') {
    return
  }
/*
  task.value.push({
    content: input_content.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime()
  })*/
}

const removeTodo = async (todoId) => {
  await tasksStore.removeTask(todoId)
  // task.value = task.value.filter((t) => t !== todo)
}

//change to database
onMounted(async () => {
  name.value = localStorage.getItem('name') || ''
  await tasksStore.fetchAllTasks()
})
</script>

<template>
  <main class="app">
    <div class="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8"></div>
    <section class="greeting sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="title mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        What's up, <input type="text" id="name" placeholder="Name here" v-model="name" /> ?
      </h2>
    </section>

    <section class="create-todo mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h3 class="mt-10 text-1xl font-bold leading-9 tracking-tight text-gray-700">CREATE A TODO</h3>

      <form id="new-todo-form" @submit.prevent="addTask">
        <h4 class="block text-sm font-medium leading-6 text-gray-900">What's on your todo list?</h4>
        <input
          type="text"
          name="content"
          id="content"
          placeholder=" e.g. make a video"
          v-model="input_content"
          class="block w-full rounded-md border-0 py-1.5 my-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <input
          type="submit"
          value="Add todo"
          class="lex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semilbold leading-6 text-white shadow-sm hover:bf-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
        />
      </form>
    </section>

    <section class="todo-list mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h3 class="mt-10 text-1xl font-bold leading-9 tracking-tight text-gray-700">TODO LIST</h3>
      <div class="list" id="todo-list flex">
        <div v-for="todo in orderedTasks" :key="todo.id" class="flex">
          <div class="flex">
            <label class="flex-none justify-items-center rounded-lg pm-2 py-1">
              <input type="checkbox" v-model="todo.is_complete" class="" />
            </label>
          </div>

          <div class="todo-content w-full mx-2">
            <input
              class="flex w-full rounded-md border-0 mx-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              v-model="todo.title"
              :class="`todo-item ${todo.is_complete && 'text-done'}`"
            />
          </div>

          <div class="actions flex">
            <button
              class="delete lex justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semilbold leading-6 text-white shadow-sm hover:bf-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="removeTodo(todo.id)"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.text-done {
  text-decoration-line: line-through;
  text-decoration-color: #6d6d6d;
  color: #ccc;
}
</style>
