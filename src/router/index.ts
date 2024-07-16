import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/mainPage.vue'

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
        component:()=>import('@/views/myself.vue'),
        children: [
          {
            path: 'setting',
            component:()=>import('@/views/setting/switchaLanguage.vue'),
          }
        ]
      },
      {
        path: 'setting',
        component:()=>import('@/views/setting/switchaLanguage.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
