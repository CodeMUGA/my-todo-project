<script setup>
import { supabase } from '@/api/supabase'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const userStore = useUserStore()

let email = ref('')
let password = ref('')

//create acc

async function createAccount() {
  console.log(email.value, password.value)
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="#" alt="" class="mx-auto h-10 w-auto" />
      <H2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >Register a new Account</H2
      >
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email:</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="pasword" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>

          <div class="mt-2">
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              v-model="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            @click="createAccount"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semilbold leading-6 text-white shadow-sm hover:bf-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

      <!-- <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account?
        {{ '' }}
        <a href="" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
      </p> -->
    </div>
  </div>
</template>

<style scoped></style>
