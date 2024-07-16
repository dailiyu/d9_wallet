import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/mainPage.vue'
import SwitchaLanguage from '@/views/setting/switchaLanguage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/main',
    component: MainPage,
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'discovery',
        component: () => import('@/views/discovery.vue')
      },
      {
        path: 'myself',
        component:SwitchaLanguage,
        children: [
          {
            path: 'setting',
            component:SwitchaLanguage
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
