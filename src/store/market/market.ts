
import { postGetReserves,postGetUsdtToOtherRate } from '@/services/http/amm';
import { makerTransactionsList } from '@/services/http/IndexServer';
import { postGetTotalBurned } from '@/services/http/main';
import { postGetAllVolume } from '@/services/http/mining';
import { postGetRank } from '@/services/http/node';
import { defineStore } from 'pinia';

 interface nodeData{
    node_id: string,
    node_name: string,
    sharing_percent: number,
    accumulative_votes: number,
  }

  interface Data {
    d9: string;
    usdt: string;
    accountId: string;
  }

  interface Rates{
   USD:number,
   CNY:number,
   EUR:number,
   HKD:number,
   JPY:number,
   VND:number,
   THB:number,
   MYR:number
  }
  
  interface Transaction {
    id: string;
    blockNumber: string;
    blockHash: string;
    timestamp: string;
    extrinsicHash: string;
    fee: string;
    kind: string;
    contract: string;
    contractAddress: string;
    data: Data;

  }
  

interface AccountState {
    exchangeRateD9ToUsdt:number,
    exchangeRateUsdtToD9:number,
    d9LiquidityToken:number,
    usdtLiquidityToken:number,
    nodeRankList:nodeData[],
    transactionList:Transaction[],
    TotalBurned:number,
    poolsTotalNumber:number,
    rates:Rates
}





const useMarketStore = defineStore('market', {
  state: (): AccountState => ({
    exchangeRateD9ToUsdt:0,
    exchangeRateUsdtToD9:0,
    d9LiquidityToken:0,
    usdtLiquidityToken:0,
    nodeRankList:[],
    transactionList:[],
    TotalBurned:0,
    poolsTotalNumber:0,
    rates:{
       USD: 0,
       CNY: 0,
       EUR: 0,
       HKD: 0,
       JPY: 0,
       VND: 0,
       THB: 0,
       MYR: 0
    }
  }),
  actions: {
   async getExchangeRateAction(){
    const metaData=await postGetReserves()
    this.exchangeRateD9ToUsdt=metaData.data.results.usdt_rate
    this.exchangeRateUsdtToD9=metaData.data.results.d9_rate
    this.d9LiquidityToken=metaData.data.results.d9_token
    this.usdtLiquidityToken=metaData.data.results.usdt_token
    console.log(this.exchangeRateD9ToUsdt,this.exchangeRateUsdtToD9,this.d9LiquidityToken, this.usdtLiquidityToken)
    
   },
   async getRankAction(){
      const metaData=await postGetRank()
      this.nodeRankList=metaData.data.results

   },
   async getTransactionListAction(){
      const metaData=await makerTransactionsList()
      this.transactionList=metaData.data.results
   },
   async gettBurningTotalsAction(){
      const metaData=await postGetTotalBurned()
      this.TotalBurned=metaData.data.results
   },
   async getPoolsTotalNumber(){
      const metaData=await postGetAllVolume()
      this.poolsTotalNumber=metaData.data.results
   },
   async getRateUsdtToOther(){
      const metaData=await postGetUsdtToOtherRate()
      const ratesResults=metaData.data.results
      this.rates.CNY=ratesResults.find((item: { name: string; }) => item.name === 'cny').price
      this.rates.EUR=ratesResults.find((item: { name: string; }) => item.name === 'eur').price
      this.rates.HKD=ratesResults.find((item: { name: string; }) => item.name === 'hkd').price
      this.rates.JPY=ratesResults.find((item: { name: string; }) => item.name === 'jpy').price
      this.rates.MYR=ratesResults.find((item: { name: string; }) => item.name === 'myr').price
      this.rates.USD=ratesResults.find((item: { name: string; }) => item.name === 'usd').price
      this.rates.VND=ratesResults.find((item: { name: string; }) => item.name === 'vnd').price
      this.rates.THB=ratesResults.find((item: { name: string; }) => item.name === 'thb').price
   },
  async fetchAllData(){
   this.getExchangeRateAction()
   this.getRankAction()
    this.getTransactionListAction()
    this.gettBurningTotalsAction()
    this.getPoolsTotalNumber()
    this.getRateUsdtToOther()
   }
}
});

export default useMarketStore;
