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