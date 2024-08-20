<template>
<ion-page>
  <div>
    <button @click="generateWallet">生成钱包</button>
    <br>
    <br>
    <button @click="clearWallet">清空钱包</button>
    <div class="current">
      当前钱包助记词：{{accountStore.activeWallet.mnemonic  }}
      当前钱包名字：{{accountStore.activeWallet.name  }}
    </div>
    <div class="container">
    <div v-for="(walletDetails,index) in accountStore.walletList" :key="walletDetails.address" class="item"  @click="changeWallet(index)">
      <p>助记词: {{ walletDetails.mnemonic }}</p>
      <p>名字: {{ walletDetails.name }}</p>
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
import useAccountStore from "@/store/account/account";
import { IonPage } from '@ionic/vue';

// 使用钱包服务
const { preCreateWallet,removeWallet ,changeActiveWallet,addWallet } = useWalletService();
const accountStore = useAccountStore();

onMounted(() => {
  accountStore.loadLocalCacheAction()
})

// 定义生成钱包的方法
const generateWallet = async () => {
  await addWallet ();
};

const  clearWallet=async () => {
  await removeWallet();
};
const changeWallet=async (index:number)=>{
  await changeActiveWallet(index)
}
</script>

<style scoped lang="scss">
.container{
  overflow: scroll;
  height: 90%;
  .item{
    border: 1px solid ;
    margin-top: 20px;
  }
}
</style>
