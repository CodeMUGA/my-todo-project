<script setup>
import { ref } from 'vue'

const add_task = ref('')

const addTask = () => {
  if (add_task.value.trim() === '') {
    return console.log('No hay tarea nueva')
  } else {
    return console.log('Tarea nueva:', add_task.value)
  }
}
</script>

<template>
  <div class="home">
    <h1>Home View!</h1>
    <form @submit.prevent="addTask">
      <h4>¿Que tienes por hacer?</h4>
      <input type="text" placeholder="ej. Comprar leche" v-model="add_task" />
      <input type="submit" value=" + " />
    </form>
  </div>
</template>

<style scoped></style>
