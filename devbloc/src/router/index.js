import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dossier',
    name: 'dossier',
    // route level code-splitting
    // this generates a separate chunk (dossier.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dossier" */ '../views/DossierView.vue')
  },
  {
    path: '/ressources',
    name: 'ressources',
    // route level code-splitting
    // this generates a separate chunk (ressources.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ressources" */ '../views/RessourcesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
