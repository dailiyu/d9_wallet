<template>

 <div>
      <input v-model="mnemonicToImport" placeholder="输入助记词" />
      <button @click="importWallet">导入</button>
      <div v-if="walletDetails">
      <p>助记词: {{ walletDetails.mnemonic.join(' ') }}</p>
      <p>公钥: {{ walletDetails.publicKey }}</p>
      <p>私钥: {{ walletDetails.secretKey }}</p>
      <p>地址: {{ walletDetails.address }}</p>
    </div>
</div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useWalletService } from '@/services/walletService';

// 使用钱包服务
const { importFromMnemonic } = useWalletService();

// 定义响应式变量
const walletDetails = ref<null | { mnemonic: string[], publicKey: string, secretKey: string, address: string }>(null);
const showImport = ref(false);
const mnemonicToImport = ref('');



// 定义导入钱包的方法
const importWallet = async () => {
  walletDetails.value = await importFromMnemonic(mnemonicToImport.value);
  showImport.value = false;
};


</script>

<style scoped >


</style>
