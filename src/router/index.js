import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',

      component: () => import('../views/Coming-Soon.vue'),
    },
  ],
})

export default router
