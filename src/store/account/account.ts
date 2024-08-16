
import { defineStore } from 'pinia';
import { storageAccounts } from '@/storage';
import type { walletDate } from '@/types/account';

interface AccountState {
  walletList: walletDate[];
  activeWallet: walletDate;
  temporaryWallet:walletDate
  password:string,
  temporaryName:string

}

const defaultWallet: walletDate = {
  mnemonic: "",
  publicKey: '',
  secretKey: '',
  address: '',
  name:""
};

//添加前缀
const addPrefix = (wallet: walletDate): walletDate => ({
  ...wallet,
  address: wallet.address.startsWith('Dn') ? wallet.address : `Dn${wallet.address}`
});

const useAccountStore = defineStore('account', {
  state: (): AccountState => ({
    walletList: [],
    activeWallet: defaultWallet,
    temporaryWallet:defaultWallet,
    password:'',
    temporaryName:'',

  }),
  actions: {
    async addWalletAction(wallet: walletDate) {
      wallet = addPrefix(wallet);
      const oldWalletList: walletDate[] = await storageAccounts.get('walletList') ?? [];
      const newWalletList: walletDate[] = [...oldWalletList.map(addPrefix), wallet];
      await storageAccounts.set('walletList', newWalletList);
      this.walletList = newWalletList;
    },
    async addtemporaryWalletAction(wallet: walletDate){
      wallet = addPrefix(wallet);
      this.temporaryWallet=wallet
    },
    async addtemporaryNameAction(name: string){
      this.temporaryName=name
    },
    async changePasswordAction(password: string){
      this.password=password
    },
    async removeWalletAction() {
      await storageAccounts.remove('walletList');
      this.walletList = [];
      this.activeWallet = { ...addPrefix(defaultWallet) };
      await storageAccounts.set('activeWallet', this.activeWallet);
    },
    async loadLocalCacheAction() {
      this.walletList = (await storageAccounts.get('walletList') ?? []).map(addPrefix);
      this.activeWallet = addPrefix(await storageAccounts.get('activeWallet') ?? { ...defaultWallet });
    },
    async changeActiveWallet(index: number) {
      this.activeWallet = addPrefix(this.walletList[index] ?? { ...defaultWallet });
      await storageAccounts.set('activeWallet', this.activeWallet);
    },
  
  }
});

export default useAccountStore;
