<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const task = ref([])
const name = ref('')

const input_content = ref('')

const task_asc = computed(() =>
  task.value.sort((a, b) => {
    return a.createdAt - b.createdAt
  })
)

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

watch(
  task,
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

  task.value.push({
    content: input_content.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime()
  })
}

const removeTodo = (todo) => {
  task.value = task.value.filter((t) => t !== todo)
}

//change to database
onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  task.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" id="name" placeholder="Name here" v-model="name" />
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form id="new-todo-form" @submit.prevent="addTask">
        <h4>What's on your todo list?</h4>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="e.g. make a video"
          v-model="input_content"
        />

        <input type="submit" value="Add todo" />
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div class="list" id="todo-list">
        <div v-for="todo in task_asc" :key="todo" :class="`todo-item ${todo.done && 'done'}`">
          <label>
            <input type="checkbox" v-model="todo.done" />
            <span :class="`bubble ${todo.category == 'business' ? 'business' : 'personal'}`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content" />
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
