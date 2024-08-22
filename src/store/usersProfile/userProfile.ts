

import { defineStore } from 'pinia';
import { postUsdtBalance } from '@/services/http/usdt';
import {postGetD9Balances} from "@/services/http/balances"
import { postProfileGetUserNodeVote,  } from '@/services/http/main';
import { postGetUserProfile, postQrcodeGenerate, postReferralsGetDirectCount } from '@/services/http/merchant';
import {postGetNodeRewardsData, postvoteNumber} from "@/services/http/node"
import useAccountStore from '../account/account';

const  accountStore=useAccountStore()


interface voteData {
  node_id: string
  node_name: string,
  vote: number
}

interface userProfileState {
    usdtBalance:number,
    d9Balance:number,
    totalIntegral:number,
    lastConversion:number,
    expiryDate:number,
    basicConvertibility:number,
    acceleratedConvertibility:number,
    convertibility:number,
    totalVotes:number,
    votesSpent:number,
    rewardsNumber:number,
    voteList:voteData[],
    airdropsNumber:number,
    merchantCodeString:string
}


const useUserProfileStore = defineStore('userProfile', {
  state: (): userProfileState => ({
    usdtBalance:0,
    d9Balance:0,
    totalIntegral:0,
    lastConversion:0,
    expiryDate:0,
    basicConvertibility:0,
    acceleratedConvertibility:0,
    convertibility:0,
    totalVotes:0,
    votesSpent:0,
    rewardsNumber:0,
    voteList:[],
    airdropsNumber:0,
    merchantCodeString:''
  }),
  actions: {
    async getUsdtBalanceAction(){
        const usdtBalance=await postUsdtBalance()
        this.usdtBalance=usdtBalance.data.results.balance_usdt
        console.log(this.usdtBalance); 
      },
      async getD9BalanceAction(){
        const d9Balance=await postGetD9Balances()
        console.log(d9Balance);
        
        this.d9Balance=d9Balance.data.results.balance_d9
        console.log(this.d9Balance); 
      },
      async getUserProfileAction(){
        const metaData=await postGetUserProfile()
        this.totalIntegral=metaData.data.results.green_points
        this.basicConvertibility=metaData.data.results.relationship_green_points
        this.acceleratedConvertibility=metaData.data.results.relationship_red_points
        this.convertibility=metaData.data.results.redeemed_usdt
      },
      async getVoteNumberAction(){
       const metaData=  await postvoteNumber()
        this.totalVotes=metaData?.data?.results?.total
        this.votesSpent=metaData?.data?.results?.delegated
      },
      async getNodeRewardsDataAction(){
        const metaData=await postGetNodeRewardsData({node_id:accountStore.activeWallet.address})
        this.rewardsNumber=metaData.data.results
      },
      async getVoteListAction(){
        const metaData= await postProfileGetUserNodeVote()
        this.voteList=metaData.data.results
      },
      async getAirdropNumberAction(){
        try {
          const metaData=  await postReferralsGetDirectCount()
          this.airdropsNumber=metaData.data.results
          console.log('---', this.airdropsNumber);
          
        } catch (error) {
          console.log('airdrop',error);
        }
      },
      async merchantQrcodeGenerate(amount:number=0){
        const metaData=await postQrcodeGenerate({amount})
        this.merchantCodeString=metaData.data.results
      },
      async fetchAllData() {
         this.getUsdtBalanceAction();
         this.getD9BalanceAction();
         this.getUserProfileAction();
         this.merchantQrcodeGenerate()
         this.getVoteNumberAction();  
         this.getNodeRewardsDataAction();
         this.getAirdropNumberAction();
      } 
    
}
});

export default useUserProfileStore;
