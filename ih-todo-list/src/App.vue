
<script setup>
  import { supabase } from '../utils/supabase'
  import { ref, onMounted } from 'vue'
  const todos = ref([])

  async function getTodos() {
    const { data: todos } = await supabase.from('todos').select()
    tasks.value = todos
  }

  onMounted(() => {
    getTodos()
  })

</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>
</template>


<template>
  <header>
    <div class="wrapper">
      <nav class="flex min-h-full flex-row justify-center px-6">
        <RouterLink to="/" class="px-6 pt-6">Home</RouterLink>
        <RouterLink to="/about" class="px-6 pt-6">About</RouterLink>
        <RouterLink to="/signin" class="px-6 pt-6">Sign In</RouterLink>
        <RouterLink to="/register" class="px-6 pt-6">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
