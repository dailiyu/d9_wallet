<template>
   <ion-page>
    <div>
      <createWallet></createWallet>
      <importWallet></importWallet>
      <div  class="setting" @click="toSetting()">
        切换语言
      </div>
      
    </div>
   </ion-page>
</template>

<script setup lang="ts">
import { IonPage} from '@ionic/vue';
import createWallet from './createWallet.vue';
import importWallet from './importWallet.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const toSetting = () => {
  router.push('/main/setting');
};
</script>
