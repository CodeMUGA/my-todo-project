import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  //state
  const user = ref(null)

  //actions
  function fetchUser() {
    try {
      user.value = fetchActualUser()
    } catch (error) {
      console.error(error)
    }
  }

  async function signUp(email, password) {
    
    const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  })
  }

  return {
    user,
    fetchUser
  }
})
