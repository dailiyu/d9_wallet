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
    secretKey.value = Buffer.from(seed).toString('hex');
    address.value = pair.address;
    const walletDate: walletDate = {
      mnemonic: generatedMnemonic,
      publicKey: publicKey.value,
      secretKey: secretKey.value,
      address: address.value,
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
    publicKey.value = Buffer.from(pair.publicKey).toString('hex');
    const seed = mnemonicToMiniSecret(inputMnemonic);
    secretKey.value = Buffer.from(seed).toString('hex');
    address.value = pair.address;

    return {
      mnemonic: inputMnemonic,
      publicKey: publicKey.value,
      secretKey: secretKey.value,
      address: address.value,
    };
  };

// 新增：通过私钥导入钱包
const importFromSecretKey = async (inputSecretKey: string): Promise<walletDate> => {
  await cryptoWaitReady();

  // 直接使用提供的私钥，不进行其他检查
  const seed = hexToU8a(inputSecretKey);
  // 使用私钥生成密钥对
  const pair = keyring.addFromSeed(seed);

  // 更新钱包信息
  publicKey.value = Buffer.from(pair.publicKey).toString('hex');
  secretKey.value = inputSecretKey; // 保持输入的私钥格式
  address.value = pair.address;

  // 返回钱包数据
  const walletData: walletDate = {
    mnemonic: '', // 通过私钥导入时没有助记词
    publicKey: publicKey.value,
    secretKey: secretKey.value,
    address: address.value,
  };
  console.log(walletData);
  
  return walletData;
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
  const preCreateSubWallet = async (parentMnemonic: string) => {
    await cryptoWaitReady();
    // 初始化 keyring
    const keyring = new Keyring({ type: 'sr25519' ,ss58Format: 9 });
    // 使用助记词生成父钱包密钥对
    const parentPair = keyring.addFromMnemonic(parentMnemonic);
    // 随机生成派生路径，确保子钱包唯一性
    const randomDerivationPath = `//${Math.floor(Math.random() * 1000000)}`;  // 生成随机整数作为派生路径
    console.log(`Generated Derivation Path: ${randomDerivationPath}`);
    // 使用随机派生路径生成子钱包密钥对
    const derivedPair = parentPair.derive('/1');
  
    
  
    // // 子钱包的密钥对已经从父钱包派生，因此无需手动处理私钥
    // const secretKey = Buffer.from(derivedPair.secretKey).toString('hex');  // 使用派生后的密钥对获取私钥
  
    // const walletData: walletDate = {
    //   mnemonic: parentMnemonic,  // 父钱包的助记词
    //   publicKey: publicKey,      // 子钱包的公钥
    //   secretKey: secretKey,      // 派生后的子钱包私钥
    //   address: address,          // 子钱包地址
    // };
    console.log(derivedPair,address);
    //return walletData;
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
