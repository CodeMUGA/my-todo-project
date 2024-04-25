import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import AboutView from '@/views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
// import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore()
//   if (userStore.user === undefined) {
//     await userStore.fetchUser()
//   }

//   if (userStore.user === null && to.name !== 'signin') {
//     next({ name: 'signin' })
//   } else {
//     next()
//   }
// })

export default router
