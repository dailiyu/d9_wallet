// src/services/QrControllerService.ts
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { toastController } from '@ionic/vue';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { D9QrCodeData } from '../types';
import { QrCodeService } from './QrCodeService';

export function useQrController() {

  const isScanning = ref(false);

  let scanListener: any;

  const scan = async (): Promise<D9QrCodeData | undefined> => {
    const supported = await BarcodeScanner.isSupported();
    const permission = await BarcodeScanner.checkPermissions();

    if (!['granted', 'limited'].includes(permission.camera)) {
      const result = await BarcodeScanner.requestPermissions();
      if (result.camera === 'denied') {
        const toast = await toastController.create({
          duration: 1234,
          message: 'User denied camera permissions',
        });
        await toast.present();
        throw new Error('user denied permissions');
      }
      return scan();
    }

    if (!supported) return;

    try {
      isScanning.value = true;
    
      document.querySelector('body')?.classList?.add('barcode-scanner-active');
      
      // 监听 popstate 事件
      window.addEventListener('popstate', handlePopState);

      const data = await _scan();
      return data;
    } catch (err) {
      console.warn(err);
      await stopScan();
    } finally {
      isScanning.value = false;
      document.querySelector('body')?.classList?.remove('barcode-scanner-active');
    }
    return undefined;
  };

  const _scan = async (): Promise<D9QrCodeData | undefined> => {
    return new Promise((resolve, reject) => {
      scanListener = BarcodeScanner.addListener('barcodeScanned', async (result) => {
        const barcodeDataAsString = result.barcode.displayValue;
        try {
          const qrCodeService = new QrCodeService();
          const data = qrCodeService.getCodeData(barcodeDataAsString, true);
          resolve(data);
          await stopScan(); // 成功解析二维码后，停止扫描
        } catch (err) {
          reject(err);
        }
      });
      BarcodeScanner.startScan();
    });
  };

  const stopScan = async () => {
    await BarcodeScanner.stopScan();
    document.querySelector('body')?.classList?.remove('barcode-scanner-active');

    if (scanListener) {
      await scanListener.remove();
      scanListener = null;
    }

    // 移除 popstate 事件监听器
    window.removeEventListener('popstate', handlePopState);
  };

  const handlePopState = () => {
    if (isScanning.value) {
      stopScan();
    }
  };

  return {
    scan,
    stopScan,
    isScanning,
  };
}
