declare module 'qrcode' {
    export function toDataURL(
      text: string,
      options?: {
        width?: number;
        margin?: number;
        color?: {
          dark?: string; // QR code color
          light?: string; // Background color
        };
      }
    ): Promise<string>;
  }
  

  export type validateInfo = {
    password: string,
    name: string,
    newPassword1: string,
    newPassword2: string,
}


// src/types.ts

export interface D9QrCodeData {
  type: 'WalletAddress';
  accountId: string;
  amount: number;
  qrType:string
}


export interface flashExchangeData {
  event_id: string;
  d9_token: string;
  usdt_token: string;
  fee_token: string;
  d9_rate: string;
  usdt_rate: string;
  block_number: number;
  block_hash: string;
  timestamp: string;
  extrinsic_hash: string;
  from_address: string;
  to_address: string;
  d9: string;
  usdt: string;
  fee: string;
  actions: string;
}


export  interface transferData {
  event_id: string;
  d9_token: string;
  usdt_token: string;
  fee_token: string;
  block_number: number;
  block_hash: string;
  timestamp: string; 
  extrinsic_hash: string;
  from_address: string;
  to_address: string;
  d9: string;
  usdt: string;
  fee: string;
  actions: string; 
}

 