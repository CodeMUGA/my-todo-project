import { supabase } from '@/api/supabase'

export const fetchActualUser = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser()
  return user
}

export const createNewUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ 
    email: email, 
    password: password, 
  }
)

  if (error) {
    console.error(error)
  }

  return data
}

export const logIn = async (email, password) => {
  const {
    data: { user },
    error
  } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if (error) {
    throw new error(error.message)
  }

  return user
}

export const logOut = async (email) => {
    const { data: { user }, error } = await supabase.auth.signOut({
      email: email,
    })

    if (error) {
      throw new error(error.message)
    }
    return user
  }
