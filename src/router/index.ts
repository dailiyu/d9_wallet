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
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'assetRecord',
        component:()=>import('@/views/assetRecord.vue'),
      },
      {
        path: 'transactionDetail',
        component:()=>import('@/views/transactionDetail.vue'),
      },
      {
        path: 'discovery',
        component: () => import('@/views/discovery.vue')
      },
      {
        path: 'worldSwap',
        component: () => import('@/views/worldSwap.vue')
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
      },
      {
        path: 'addWallet',
        component:()=>import('@/views/createWallet.vue'),
      }
    ]
  },
  {
    path: '/index',
    component: ()=>import('@/views/login/index.vue'),
  },
  {
    path: '/createWallet',
    component: ()=>import('@/views/login/createWallet.vue'),
  },
  {
    path: '/loginAccount',
    component: ()=>import('@/views/login/loginAccount.vue'),
  },
  {
    path: '/backupTips',
    component: ()=>import('@/views/login/backupTips.vue'),
  },
  {
    path: '/backupWords',
    component: ()=>import('@/views/login/backupWords.vue'),
  },
  {
    path: '/confirmWords',
    component: ()=>import('@/views/login/confirmWords.vue'),
  },
  {
    path: '/importAccount',
    component: ()=>import('@/views/login/importAccount.vue'),
  },
  {
    path: '/importAccountInfo',
    component: ()=>import('@/views/login/importAccountInfo.vue'),
  },
  
  {
    path: '/addressBook',
    component: ()=>import('@/views/addressBook.vue'),
  },
  {
    path: '/addAddress',
    component: ()=>import('@/views/addAddress.vue'),
  },
  {
    path: '/systemSetting',
    component: ()=>import('@/views/setting/systemSetting.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
