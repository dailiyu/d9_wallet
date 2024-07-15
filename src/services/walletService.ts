import { ref } from 'vue';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate, mnemonicValidate, cryptoWaitReady } from '@polkadot/util-crypto';

const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });

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

  const preCreateWallet = async (): Promise<{ mnemonic: string[], publicKey: string, secretKey: string, address: string }> => {
    await cryptoWaitReady();
    const generatedMnemonic = createMnemonic();
    const keypair = keyring.addFromMnemonic(generatedMnemonic);

    publicKey.value = Buffer.from(keypair.publicKey).toString('hex');
    secretKey.value = Buffer.from(keypair.encodePkcs8()).toString('hex');
    address.value = keypair.address;

    return {
      mnemonic: generatedMnemonic.split(' '),
      publicKey: publicKey.value,
      secretKey: secretKey.value,
      address: address.value,
    };
  };

  const importFromMnemonic = async (inputMnemonic: string,): Promise<{ mnemonic: string[], publicKey: string, secretKey: string, address: string }> => {
    await cryptoWaitReady();
    const keypair = keyring.addFromMnemonic(inputMnemonic);

    publicKey.value = Buffer.from(keypair.publicKey).toString('hex');
    secretKey.value = Buffer.from(keypair.encodePkcs8()).toString('hex');
    address.value = keypair.address;

    return {
      mnemonic: inputMnemonic.split(' '),
      publicKey: publicKey.value,
      secretKey: secretKey.value,
      address: address.value,
    };
  };

  return {
    mnemonic,
    publicKey,
    secretKey,
    address,
    createMnemonic,
    preCreateWallet,
    importFromMnemonic,
  };
};
