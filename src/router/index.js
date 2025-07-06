import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import('../views/EquipeView.vue'),
    },
    {
      path: '/termos',
      name: 'termos',
      component: () => import('../views/TermosView.vue'),
    },
    {
      path: '/envio',
      name: 'envio',
      component: () => import('../views/EnvioView.vue'),
    },
    {
      path: '/devolucoes',
      name: 'devolucoes',
      component: () => import('../views/DevolucoesView.vue'),
    }
  ],
})

export default router
