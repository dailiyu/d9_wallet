<template>
<ion-page>
  <div style="margin-top: 100px;" @click="startScan">Scan QR Code</div>
    <div v-if="scannedData">
      <p><strong>Account ID:</strong> {{ scannedData.accountId }}</p>
      <p><strong>Amount:</strong> {{ scannedData.amount }}</p>
    </div>

</ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQrController } from '@/services/QrControllerService';
import { D9QrCodeData } from '@/types';
import { IonPage } from '@ionic/vue';
// 使用 useQrController hook 获取扫描功能
const { scan } = useQrController();

// 定义 ref 来存储扫描结果
const scannedData = ref<D9QrCodeData | undefined>(undefined);

// 定义开始扫描的方法
const startScan = async () => {
  try {
    const result = await scan();
    if (result) {
      scannedData.value = result;
    }
  } catch (err) {
    console.error('Failed to scan QR code:', err);
  }
};
</script>

<style scoped>
p {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>
