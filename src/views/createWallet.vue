<template>
<ion-page>
  <div>
    <button @click="generateWallet">生成钱包</button>
   <div class="container">
    <div v-for="(walletDetails,) in accountStore.walletList" :key="walletDetails.address">
      <p>助记词: {{ walletDetails.mnemonic.join(" ") }}</p>
      <p>公钥: {{ walletDetails.publicKey }}</p>
      <p>私钥: {{ walletDetails.secretKey }}</p>
      <p>地址: {{ walletDetails.address }}</p>
    </div>
   </div>
  </div>
</ion-page>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useWalletService } from "../services/walletService";
import useLoginStore from "@/store/account/account";
import { IonPage } from '@ionic/vue';



// 定义组件的 props

// 使用钱包服务
const { preCreateWallet } = useWalletService();
const accountStore = useLoginStore();


onMounted(() => {
  accountStore.loadLocalCacheAction()
})

// 定义生成钱包的方法
const generateWallet = async () => {
  await preCreateWallet();
};
</script>

<style scoped lang="scss">
.container{
  overflow-y: scroll;
}
</style>
