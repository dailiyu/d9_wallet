import { defineStore } from 'pinia';
import { storageAccounts } from '@/storage';
import type { walletDate } from '@/types/account';

interface AccountState {
  walletList: walletDate[];
  activeWallet:walletDate
}

const useLoginStore = defineStore('login', {
  state: (): AccountState => ({
    walletList: [],
    activeWallet:{
      mnemonic: [],
      publicKey: '',
      secretKey: '',
      address: ''
    }
  }),
  actions: {
    async addWalletAction(wallet: walletDate) {
      // 获取本地存储中的 walletList
      const oldWalletList: any = await storageAccounts.get('walletList');
      const newWalletList: walletDate[] = [...oldWalletList, wallet];
      await storageAccounts.set('walletList', newWalletList);
      this.walletList = newWalletList;
    },
    async loadLocalCacheAction(){
      this.walletList=await storageAccounts.get('walletList');
      this.activeWallet= this.walletList[0]
    },
    changeActiveWallet(index:number){
      this.activeWallet= this.walletList[index]
    }
  }
});

export default useLoginStore;

