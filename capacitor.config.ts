import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'd9_wallet',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    BarcodeScanner: {
      scanTypes: ['QR_CODE']  // 指定只扫描QR码
    }
  }
};

export default config;
