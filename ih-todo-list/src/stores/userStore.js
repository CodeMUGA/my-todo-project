import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  //state
  const user = ref(undefined)

  //actions
  async function fetchUser() {
    try {
      user.value = await fetchActualUser()
    } catch (error) {
      console.error(error)
    }
  }

  async function register(email, password) {
    try {
      user.value = await createNewUser(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  // async function SingOut() {
  //   try {
  //     user.value = null
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return {
    user,
    fetchUser,
    register,
    signIn
  }
})
