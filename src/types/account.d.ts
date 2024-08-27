export interface walletDate {
  mnemonic: string;
  publicKey: string;
  secretKey: string;
  address: string;
  authority?:boolean,
  isSub?:boolean,
  name?:string;
  password?:string,
  value?:number,
}



export interface addressData{
  name:string,
  address:string,
  message?:string
}