import { createRouter, createWebHistory} from 'vue-router'
import InitialScreen from '../views/InitialScreen.vue'
import Play from '../views/Play.vue'

const routes = [
  {
    path: '/',
    name: 'InitialScreen',
    component: InitialScreen,
  },
  {
    path: '/play',
    name: 'Play',
    component: Play,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
