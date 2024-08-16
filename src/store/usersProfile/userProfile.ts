

import { defineStore } from 'pinia';
import { postUsdtBalance } from '@/services/http/usdt';
import {postGetD9Balances} from "@/services/http/balances"
import { postUsersProfile } from '@/services/http/main';

interface userProfileState {
    usdtBalance:number,
    d9Balance:number,
    greenPoints:number,
    lastConversion:number,
    expiryDate:number,

}



const useUserProfileStore = defineStore('userProfile', {
  state: (): userProfileState => ({
    usdtBalance:0,
    d9Balance:0,
    greenPoints:0,
    lastConversion:0,
    expiryDate:0
  }),
  actions: {
    async getUsdtBalanceAction(){
        const usdtBalance=await postUsdtBalance()
        this.usdtBalance=usdtBalance.results.balance_usdt
        console.log(this.usdtBalance); 
      },
      async getD9BalanceAction(){
        const d9Balance=await postGetD9Balances()
        this.d9Balance=d9Balance.results.balance_d9
        console.log(this.d9Balance); 
      },
      async getUserProfileAction(){
        const metaData=await postUsersProfile()
        this.greenPoints=metaData.results.merchant_profile.green_points
      },
      async fetchAllData(){
        this.getUsdtBalanceAction()
        this.getD9BalanceAction()
        this.getUserProfileAction()
      }
}
});

export default useUserProfileStore;
