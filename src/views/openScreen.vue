<template>
    <ion-page>
      <div class="main">
        <img src="@/assets/home/d9-network.png" alt="" class="logo_pic">
      </div>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import useAccountStore from '@/store/account/account';
import { IonPage } from '@ionic/vue';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';
   const  accountStore=useAccountStore()
   const { t, locale } = useI18n();
  const router = useRouter()


onMounted(async()=>{
  // await accountStore.loadLocalCacheAction()
  // console.log(accountStore.selectedLanguage);
  
  // locale.value=accountStore.selectedLanguage
   setTimeout(() => {
   
    if(accountStore.walletList.length>0){
        router.push('/main/home')
    }else{
        router.push('/index')
    }
   }, 700);
})





  </script>
  
  <style lang="scss" scoped>
  .main {
    height: 100%;
    text-align: center;
    background: #ffffff url('@/assets/login/bg.png');
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 12.75rem;
        height: 2.875rem;
    }
  }
 
  </style>