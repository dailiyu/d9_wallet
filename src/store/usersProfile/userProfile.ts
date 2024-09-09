import type{ flashExchangeData, transferData } from './../../types/index';
import { defineStore } from "pinia";
import { postUsdtBalance } from "@/services/http/usdt";
import { postGetD9Balances } from "@/services/http/balances";
import { postProfileGetUserNodeVote } from "@/services/http/main";
import {
  postGetMerchantExpiry,
  postGetUserProfile,
  postQrcodeGenerate,
  postReferralsGetDirectCount,
} from "@/services/http/merchant";
import { postGetNodeRewardsData, postvoteNumber } from "@/services/http/node";
import useAccountStore from "../account/account";
import { postBurningPortfolio } from "@/services/http/burning";
import { postUserD9TransferData, postUserFlashExchangeData, postUserUsdtTransferData } from "@/services/http/IndexServer";
import { postLiquidityProvider } from '@/services/http/amm';

const accountStore = useAccountStore();

interface voteData {
  node_id: string;
  node_name: string;
  vote: number;
}



interface userProfileState {
  usdtBalance: number;
  d9Balance: number;
  totalIntegral: number;
  lastConversion: number;//最后兑换时间
  expiryDate: number;
  basicConvertibility: number;
  acceleratedConvertibility: number;
  convertibility: number;
  totalVotes: number;
  votesSpent: number;
  rewardsNumber: number;
  voteList: voteData[];
  airdropsNumber: number;
  merchantCodeString: string;
  userCodeString:string;
  amountBurned: number; // 销毁总数量
  balanceDue: number; // 剩余产出总量
  balancePaid: number; // 总提币数
  lastWithdrawal: number; // 最后提取时间，使用 Unix 时间戳
  lastBurn: number; // 最后燃烧时间，使用 Unix 时间戳
  merchantCodeExpiry:number,
  curPage:number,
  flashExchangeDataList:flashExchangeData[],
  haveNext:boolean,
  d9TransferList:transferData[],
  curD9TransferPage:number,
  hasD9TransferNext:boolean,
  curUsdtTransferPage:number,
  usdtTransferList:transferData[],
  hasUsdtTransferNext:boolean,
  userLpToken:number
}

const useUserProfileStore = defineStore("userProfile", {
  state: (): userProfileState => ({
    usdtBalance: 0,
    d9Balance: 0,
    totalIntegral: 0,
    lastConversion: 0,
    expiryDate: 0,
    basicConvertibility: 0,
    acceleratedConvertibility: 0,
    convertibility: 0,
    totalVotes: 0,
    votesSpent: 0,
    rewardsNumber: 0,
    voteList: [],
    airdropsNumber: 0,
    merchantCodeString: "",
    userCodeString:'',
    amountBurned: 0, // 销毁总数量
    balanceDue: 0, // 剩余产出总量
    balancePaid: 0, // 总提币数
    lastWithdrawal: 0, // 最后提取时间，使用 Unix 时间戳
    lastBurn: 0, // 最后燃烧时间，使用 Unix 时间戳
    merchantCodeExpiry:0,
    curPage:1,
    flashExchangeDataList:[],
    haveNext:true,
    d9TransferList:[],
    curD9TransferPage:1,
    hasD9TransferNext:true,
    usdtTransferList:[],
    curUsdtTransferPage:1,
    hasUsdtTransferNext:true,
    userLpToken:0
  }),
  actions: {
    async getUsdtBalanceAction() {
      const usdtBalance = await postUsdtBalance();
      this.usdtBalance = usdtBalance.data.results.balance_usdt;
      console.log(this.usdtBalance);
    },
    async getD9BalanceAction() {
      const d9Balance = await postGetD9Balances();
      console.log(d9Balance);

      this.d9Balance = d9Balance.data.results.balance_d9;
      console.log(this.d9Balance);
    },
    async getUserProfileAction() {
      const metaData = await postGetUserProfile();
      this.totalIntegral = metaData.data.results.green_points;
      this.basicConvertibility =
        metaData.data.results.relationship_green_points;
      this.acceleratedConvertibility =
        metaData.data.results.relationship_red_points;
      this.convertibility = metaData.data.results.redeemed_usdt;
    },
    async getVoteNumberAction() {
      const metaData = await postvoteNumber();
      this.totalVotes = metaData?.data?.results?.total;
      this.votesSpent = metaData?.data?.results?.delegated;
    },
    async getNodeRewardsDataAction() {
      const metaData = await postGetNodeRewardsData({
        node_id: accountStore.activeWallet.address,
      });
      this.rewardsNumber = metaData.data.results;
    },
    async getVoteListAction() {
      const metaData = await postProfileGetUserNodeVote();
      this.voteList = metaData.data.results;
    },
    async getAirdropNumberAction() {
      try {
        const metaData = await postReferralsGetDirectCount();
        this.airdropsNumber = metaData.data.results;
        
      } catch (error) {
        console.log("airdrop", error);
      }
    },
    async merchantQrcodeGenerateAction(amount: number = 0) {
      const metaData = await postQrcodeGenerate({ amount:0,type: 'merchant'});
      this.merchantCodeString = metaData.data.results;
    },
    async userQrcodeGenerateAction(amount: number = 0) {
      const metaData = await postQrcodeGenerate({ amount,type:'transfer' });
      this.userCodeString = metaData.data.results;
    },
    async getBurningPortfolioAction() {
      const metaData = await postBurningPortfolio();
      this.amountBurned=metaData.data.results.amount_burned
      this.balanceDue=metaData.data.results.balance_due
      this.balancePaid=metaData.data.results.balance_paid  
      this.lastWithdrawal=metaData.data.results.last_withdrawal
      console.log(this.lastWithdrawal);
      
      this.lastBurn=metaData.data.results.last_burn
    },
    async getMerchantCodeExpiryAction(){
      const metaData=await postGetMerchantExpiry()
      this.merchantCodeExpiry=metaData.data.results
    },
    async getUserFlashExchangeDataAction(){
      const metaData=await postUserFlashExchangeData(this.curPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.curPage=this.curPage+1
      this.flashExchangeDataList=[...this.flashExchangeDataList,...metaData.data.results]
      this.haveNext=metaData.data.next?true:false
      console.log('user',this.flashExchangeDataList);
    },
    async getUserD9TransferAction(){
      const metaData=await postUserD9TransferData(this.curD9TransferPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.curD9TransferPage=this.curD9TransferPage+1
      this.d9TransferList=[...this.d9TransferList,...metaData.data.results]
      this.hasD9TransferNext=metaData.data.next?true:false
      console.log('d9transfer',  this.d9TransferList);
    },
    async getUserUsdtTransferAction(){
      const metaData=await postUserUsdtTransferData(this.curUsdtTransferPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.curUsdtTransferPage=this.curUsdtTransferPage+1
      this.usdtTransferList=[...this.usdtTransferList,...metaData.data.results]
      this.hasUsdtTransferNext=metaData.data.next?true:false
      console.log('usdttransfer',  this.usdtTransferList);
    },
    async getInitUserFlashExchangeDataAction(){
      this.curPage=1
      const metaData=await postUserFlashExchangeData(this.curPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.flashExchangeDataList=metaData.data.results
      this.haveNext=metaData.data.next?true:false
      console.log('user',this.flashExchangeDataList);
    },
    async getInitUserD9TransferAction(){
      this.curD9TransferPage=1
      const metaData=await postUserD9TransferData(this.curD9TransferPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.d9TransferList=metaData.data.results
      this.hasD9TransferNext=metaData.data.next?true:false
      console.log('d9transfer',  this.d9TransferList);
    },
    async getInitUserUsdtTransferAction(){
      this.curUsdtTransferPage=1
      const metaData=await postUserUsdtTransferData(this.curUsdtTransferPage,{'from_address':accountStore.activeWallet.address,"to_address":accountStore.activeWallet.address})
      this.usdtTransferList=metaData.data.results
      this.hasUsdtTransferNext=metaData.data.next?true:false
      console.log('usdttransfer',  this.usdtTransferList);
    },
    async getUserLpTokenAction(){
      const metaData=await postLiquidityProvider()
      this.userLpToken=metaData.data.results
    },
    async clearStoreAction() {
      this.usdtBalance = 0;
      this.d9Balance = 0;
      this.totalIntegral = 0;
      this.lastConversion = 0;
      this.expiryDate = 0;
      this.basicConvertibility = 0;
      this.acceleratedConvertibility = 0;
      this.convertibility = 0;
      this.totalVotes = 0;
      this.votesSpent = 0;
      this.rewardsNumber = 0;
      this.voteList = [];
      this.airdropsNumber = 0;
      this.merchantCodeString = "";
      this.userCodeString = "";
      this.amountBurned = 0;
      this.balanceDue = 0;
      this.balancePaid = 0;
      this.lastWithdrawal = 0;
      this.lastBurn = 0;
      this.merchantCodeExpiry = 0;
      this.curPage = 1;
      this.flashExchangeDataList = [];
      this.haveNext = true;
      this.d9TransferList = [];
      this.curD9TransferPage = 1;
      this.hasD9TransferNext = true;
      this.usdtTransferList = [];
      this.curUsdtTransferPage = 1;
      this.hasUsdtTransferNext = true;
      this.userLpToken = 0;
    },
    async fetchAllData() {
      this.getUsdtBalanceAction();
      this.getD9BalanceAction();
      this.getUserProfileAction();
      this.getVoteListAction()
      this.merchantQrcodeGenerateAction();
      this.userQrcodeGenerateAction()
      this.getVoteNumberAction();
      this.getNodeRewardsDataAction();
      this.getAirdropNumberAction();
      this.getBurningPortfolioAction();
      this.getMerchantCodeExpiryAction();
      this.getInitUserUsdtTransferAction()
      this.getInitUserD9TransferAction()
      this.getInitUserFlashExchangeDataAction()
      this.getUserLpTokenAction()
    },
  },
});

export default useUserProfileStore;
