
import { defineStore } from 'pinia';
import { storageAccounts } from '@/storage';
import type { walletDate } from '@/types/account';

interface AccountState {
  walletList: walletDate[];
  activeWallet: walletDate;
  temporaryWallet:walletDate
  password:string,
  temporaryName:string
  activeIndex:number,
  isFirstMainWallet:boolean,
  selectedLanguage:string
}

const defaultWallet: walletDate = {
  mnemonic: "",
  publicKey: '',
  secretKey: '',
  address: '',
  name:"",
  authority:false,
  isSub:false
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
    activeIndex:0,
    isFirstMainWallet:true,
    selectedLanguage:'zh'
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
      await storageAccounts.set('password',password)
    },
    async changeNameAction(newName:string){
      const index = await storageAccounts.get('activeIndex')
      console.log("activeIndex",index);
  
      this.walletList[index].name=newName
      await storageAccounts.set('walletList',this.walletList);
      await storageAccounts.set('activeWallet', this.activeWallet);
      this.activeWallet.name=newName
    },
    async removeWalletAction() {
      await storageAccounts.remove('walletList');
      this.walletList = [];
      this.activeWallet = { ...addPrefix(defaultWallet) };
      await storageAccounts.set('activeWallet', this.activeWallet);
    },
  
    async changeIsFirstMainWallet(isFirst:boolean){
        this.isFirstMainWallet=isFirst
        await storageAccounts.set('isFirstMainWallet',isFirst)
    },
    async changeSelectedLanguageAction(language:string){
      this.selectedLanguage=language
      await storageAccounts.set('language', language)
    },
    async changeActiveWallet(index: number) {
      this.activeWallet = addPrefix(this.walletList[index] ?? { ...defaultWallet });
      await storageAccounts.set('activeWallet', this.activeWallet);
      this.activeIndex=index
      await storageAccounts.set('activeIndex', index);
    },
    async deleteWalletAction(){
      this.walletList.splice(this.activeIndex,1)
      this.activeWallet=this.walletList[0]
      this.activeIndex=0
      await storageAccounts.set('walletList', this.walletList);
    },
    async updateStorageWalletAction(){
      await storageAccounts.set('walletList', this.walletList);
    },
    async updateWalletValueAction(value:number){
      this.walletList[this.activeIndex].value=value
    },
    async loadLocalCacheAction() {
      this.walletList = (await storageAccounts.get('walletList') ?? []).map(addPrefix);
      this.activeWallet = addPrefix(await storageAccounts.get('activeWallet') ?? { ...defaultWallet });
      this.password= await storageAccounts.get('password')
      this.activeIndex=await storageAccounts.get('activeIndex')
      this.isFirstMainWallet=await storageAccounts.get('isFirstMainWallet')
      this.selectedLanguage=await storageAccounts.get('language')
      // console.log( '-------',this.selectedLanguage);
      
    },
  }
});

export default useAccountStore;
