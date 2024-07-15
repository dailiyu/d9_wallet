<template>

      <button @click="generateWallet">生成钱包</button>
      <div v-if="walletDetails">
      <p>助记词: {{ walletDetails.mnemonic.join(' ') }}</p>
      <p>公钥: {{ walletDetails.publicKey }}</p>
      <p>私钥: {{ walletDetails.secretKey }}</p>
      <p>地址: {{ walletDetails.address }}</p>
    </div>
   
  </template>
  
  <script lang="ts" setup>

  import { ref } from 'vue';
  import { useWalletService } from '../services/walletService';
// 使用钱包服务
const { preCreateWallet, } = useWalletService();

// 定义响应式变量
const walletDetails = ref<null | { mnemonic: string[], publicKey: string, secretKey: string, address: string }>(null);



// 定义生成钱包的方法
const generateWallet = async () => {
  walletDetails.value = await preCreateWallet();
};




  </script>

<style scoped >


</style>
  