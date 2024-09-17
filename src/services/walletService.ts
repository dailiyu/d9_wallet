
import { ref } from 'vue';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate, mnemonicValidate, cryptoWaitReady, mnemonicToMiniSecret } from '@polkadot/util-crypto';
import { isHex, hexToU8a } from '@polkadot/util'; // 从 @polkadot/util 导入
import type { walletDate } from '@/types/account';

import useAccountStore from '@/store/account/account';

const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });

const accountStore = useAccountStore();

export const useWalletService = () => {
  const mnemonic = ref<string>('');
  const publicKey = ref<string>('');
  const secretKey = ref<string>('');
  const address = ref<string>('');

  const createMnemonic = () => {
    let validMnemonic = false;
    let newMnemonic = '';
    while (!validMnemonic) {
      newMnemonic = mnemonicGenerate();
      validMnemonic = mnemonicValidate(newMnemonic);
    }
    mnemonic.value = newMnemonic;
    return mnemonic.value;
  };

  // 创建一个钱包数据
  const preCreateWallet = async () => {
    await cryptoWaitReady();
    const generatedMnemonic = createMnemonic();
    const pair = keyring.addFromMnemonic(generatedMnemonic);
    publicKey.value = Buffer.from(pair.publicKey).toString('hex');
    const seed = mnemonicToMiniSecret(generatedMnemonic);
    const  secretKey = Buffer.from(seed).toString('hex');
    const  address = pair.address;
    const walletDate: walletDate = {
      mnemonic: generatedMnemonic,
      publicKey: publicKey.value,
      secretKey: secretKey,
      address: address,
      path:''
    };
    return walletDate;
  };

  // 添加钱包
  const addWallet = async () => {
    const walletDate = await preCreateWallet();
    accountStore.addWalletAction(walletDate);
  };

  // 通过助记词导入钱包
  const importFromMnemonic = async (inputMnemonic: string): Promise<walletDate> => {
    await cryptoWaitReady();
    const pair = keyring.addFromMnemonic(inputMnemonic);
    const  publicKey = Buffer.from(pair.publicKey).toString('hex');
    const seed = mnemonicToMiniSecret(inputMnemonic);
    const  secretKey = Buffer.from(seed).toString('hex');
    const  address = pair.address;

    return {
      mnemonic: inputMnemonic,
      publicKey: publicKey,
      secretKey: secretKey,
      address: address,
      path:''
    };
  };


// 解码 Base64 为对象
const decodeBase64ToObject=<T>(base64String: string): T =>{
  // 使用 atob 将 Base64 字符串解码为 JSON 字符串
  const jsonString = atob(base64String);
  // 将 JSON 字符串转换为对象
  return JSON.parse(jsonString) as T;
}


 
interface importObjType{
  mnemonic:string,
  path:string

}

// 新增：通过私钥导入钱包
const importFromSecretKey = async (inputSecretKey: string): Promise<walletDate> => {
  const importObj:importObjType=decodeBase64ToObject(inputSecretKey)
  if(importObj.path==''){
    await cryptoWaitReady();
    const  pair = keyring.addFromMnemonic(importObj.mnemonic);
    const  publicKey  = Buffer.from(pair.publicKey).toString('hex');
    const  seed = mnemonicToMiniSecret(importObj.mnemonic);
    const  secretKey= Buffer.from(seed).toString('hex');
    const  address = pair.address;
      // 返回钱包数据
  const walletData: walletDate = {
    mnemonic: importObj.mnemonic, 
    publicKey: publicKey,
    secretKey: secretKey,
    address: address,
    path:''
  };
  return walletData;
  }else{
      return preCreateSubWallet(importObj.mnemonic,importObj.path)
  };
};

  // 清空钱包
  const removeWallet = async () => {
    accountStore.removeWalletAction();
  };

  // 改变当前的钱包
  const changeActiveWallet = async (index: number) => {
    accountStore.changeActiveWallet(index);
  };

  // 创建子钱包数据
  const preCreateSubWallet = async (parentMnemonic: string,path:string) => {
    await cryptoWaitReady();
    // 初始化 keyring
    const keyring = new Keyring({ type: 'sr25519' ,ss58Format: 9 });
    // 使用助记词生成父钱包密钥对
    const parentPair = keyring.addFromMnemonic(parentMnemonic);
    const derivedPair = parentPair.derive(path);
   // 返回钱包数据
  const walletData: walletDate = {
    mnemonic: parentMnemonic, 
    publicKey: Buffer.from(derivedPair.publicKey).toString('hex'),
    secretKey: '',
    address: derivedPair.address,
    path:path
  };
  return walletData
  
  };




  // 添加子钱包
  // const addSubWallet = async (derivationPath: string) => {
  //   const parentMnemonic = mnemonic.value || createMnemonic();
  //   const subWalletDate = await preCreateSubWallet(parentMnemonic, derivationPath);
  //   accountStore.addWalletAction(subWalletDate);
  // };

  return {
    mnemonic,
    publicKey,
    secretKey,
    address,
    createMnemonic,
    preCreateWallet,
    addWallet,
    importFromMnemonic,
    importFromSecretKey, // 新增的导入功能
    removeWallet,
    changeActiveWallet,
    preCreateSubWallet,
    // addSubWallet
  };
};
