// src/services/QrCodeService.ts
import { D9QrCodeData } from '../types';

export class QrCodeService {
  getCodeData(code: string, _throw = false): D9QrCodeData | undefined {
    try {
      // 解析二维码中的URL
      const url = new URL(code);
      const params = new URLSearchParams(url.search);

      // 提取查询参数
      const accountId = params.get('account_id');
      const amount = params.get('amount');
      const qrType=params.get('type')
      if (accountId && amount&&qrType) {
        const data: D9QrCodeData = {
          type: 'WalletAddress',
          accountId,
          amount: parseFloat(amount),
          qrType
        };
        return data;
      } else {
        console.warn('account_id or amount is missing');
        if (_throw) throw new Error('account_id or amount is missing');
        return undefined;
      }
    } catch (err) {
      console.warn('Unsupported QR code', err);
      if (_throw) throw new Error('Unsupported QR code');
      return undefined;
    }
  }
}
