import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/mainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/open'
  },
  {
    path: '/main',
    component: MainPage,
    children: [
      {
        path: '',
        redirect: '/'
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
        path: 'transactionDetail/:transferIndex/:transferType',
        component:()=>import('@/views/transactionDetail.vue'),
        name:"transactionDetail"
      },
      {
        path: 'swap',
        component:()=>import('@/views/swap.vue'),
      },
      {
        path: 'swapRecords/:swapIndex',
        component:()=>import('@/views/swapRecords.vue'),
        name:'swapDetail'
      },
      {
        path: 'swapUserRecords/:swapIndex',
        component:()=>import('@/views/swapUserRecords.vue'),
        name:'swapUserDetail'
      },
      {
        path: 'scan',
        component:()=>import('@/views/scan.vue'),
      },
      {
        path: 'swapAllRecords',
        component:()=>import('@/views/swapAllRecords.vue'),
      },
      {
        path: 'DPOC',
        component:()=>import('@/views/DPOC.vue'),
      },
      {
        path: 'walletImport',
        component:()=>import('@/views/walletImport.vue'),
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
        path: 'addLiquidity',
        component: () => import('@/views/addLiquidity.vue')
      },
      {
        path: 'crossBridge',
        component: () => import('@/views/crossBridge.vue')
      },
      {
        path: 'crossTrontoD9',
        component: () => import('@/views/crossTrontoD9.vue')
      },
      {
        path: 'nodeVoting',
        component: () => import('@/views/nodeVoting.vue')
      },
      {
        path: 'votingDetail',
        component: () => import('@/views/votingDetail.vue')
      },
      {
        path: 'myNode',
        component: () => import('@/views/myNode.vue')
      },
      {
        path: 'burnMining',
        component: () => import('@/views/burnMining.vue')
      },
      {
        path: 'merchantCode',
        component: () => import('@/views/merchantCode.vue')
      },
      {
        path: 'merchantTransfer/:accountId',
        component: () => import('@/views/merchantTransfer.vue'),
        name:'merchantTransfer'
      },
      {
        path: 'pointGift',
        component: () => import('@/views/pointGift.vue')
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
      },
      {
        path: 'importWallet',
        component:()=>import('@/views/importWallet.vue'),
      },
      {
        path: 'currencyUnit',
        component:()=>import('@/views/setting/currencyUnit.vue'),
      },
      {
        path: 'nodeSetting',
        component:()=>import('@/views/setting/nodeSetting.vue'),
      }
    ]
  },
  {
    path: '/index',
    component: ()=>import('@/views/login/index.vue'),
  },
  
  {
    path: '/open',
    component: ()=>import('@/views/openScreen.vue'),
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
  },
  {
    path: '/walletManagement',
    component: ()=>import('@/views/walletManagement.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
