<!-- <template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scan QR Code</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="scanQRCode">Scan QR Code</ion-button>
      <ion-text v-if="scannedUrl">Scanned URL: {{ scannedUrl }}</ion-text>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrCodeService } from '@/services/qr-code-service'; // 更新路径以匹配你的项目结构

const qrCodeService = new QrCodeService();
const scannedUrl = ref<string | null>(null);

const scanQRCode = async () => {
  const url = await qrCodeService.scanQRCode();
  if (url) {
    scannedUrl.value = url;
  }
};
</script>

<style scoped>
ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

ion-text {
  margin-top: 20px;
}
</style> -->
