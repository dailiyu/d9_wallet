// src/services/QrControllerService.ts
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { toastController } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { D9QrCodeData } from '../types';
import { QrCodeService } from '@/services/QrCodeService';

export function useQrController() {

  const router = useRouter();
  const isScanning = ref(false);

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

    onMounted(() => {
      const backHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          BarcodeScanner.stopScan();
          document.querySelector('body')?.classList.remove('barcode-scanner-active');
        }
      };
      document.addEventListener('keydown', backHandler);
      return () => document.removeEventListener('keydown', backHandler);
    });

    try {
      const data = await _scan();
      return data;
    } catch (err) {
      console.warn(err);
      await BarcodeScanner.stopScan();
      document.querySelector('body')?.classList.remove('barcode-scanner-active');
    }
    return undefined;
  };

  const _scan = async (): Promise<D9QrCodeData | undefined> => {
    return new Promise((resolve, reject) => {
      document.querySelector('body')?.classList.add('barcode-scanner-active');
      BarcodeScanner.addListener('barcodeScanned', async (result) => {
        console.log('Result:', result.barcode.displayValue);
        const barcodeDataAsString = result.barcode.displayValue;
        try {
          const qrCodeService = new QrCodeService();
          const data = qrCodeService.getCodeData(barcodeDataAsString, true);
          resolve(data);
          document.querySelector('body')?.classList.remove('barcode-scanner-active');
          await BarcodeScanner.stopScan();
        } catch (err) {
          reject(err);
        }
      });
      BarcodeScanner.startScan();
    });
  };

  return {
    scan,
    isScanning,
  };
}
