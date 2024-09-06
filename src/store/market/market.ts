
import { postGetReserves,postGetUsdtToOtherRate, postTotalLpToken } from '@/services/http/amm';
import { postMarketFlashExchangeData, postMarketSwapList, postMarketTransactionData } from '@/services/http/IndexServer';
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


  interface TransactionData {
   transactionCountLast24Hours: string;
   transactionCountLast48To24Hours: string;
   transactionCountChangeRate: number;
   usdtSumLast24Hours: string;
   usdtSumLast48To24Hours: string;
   usdtSumChangeRate: number;
 }
 

 interface flashExchangeData {
   event_id: string;
   d9_token: string;
   usdt_token: string;
   fee_token: string;
   d9_rate: string;
   usdt_rate: string;
   block_number: number;
   block_hash: string;
   timestamp: string;
   extrinsic_hash: string;
   from_address: string;
   to_address: string;
   d9: string;
   usdt: string;
   fee: string;
   actions: string;
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
    rates:Rates,
    marketTransaction:TransactionData,
    flashExchangeDataList:flashExchangeData[],
    curPage:number,
    haveNext:boolean,
    marketTotalLpToken:number,
    MaketSwap1DayList:flashExchangeData[],
    MaketSwap7DayList:flashExchangeData[],
    MaketSwap14DayList:flashExchangeData[],
    MaketSwap30DayList:flashExchangeData[]
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
    },
    marketTransaction:{
       transactionCountLast24Hours: '',
       transactionCountLast48To24Hours: '',
       transactionCountChangeRate: 0,
       usdtSumLast24Hours: '',
       usdtSumLast48To24Hours: '',
       usdtSumChangeRate: 0
    },
    flashExchangeDataList:[],
    curPage:1,
    haveNext:true,
    marketTotalLpToken:0,
    MaketSwap1DayList:[],
    MaketSwap7DayList:[],
    MaketSwap14DayList:[],
    MaketSwap30DayList:[]
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
   async getMarketTransactionData(){
      const metaData=await postMarketTransactionData()
      this.marketTransaction.transactionCountLast24Hours=metaData.data.transaction_count_last_24_hours
      this.marketTransaction.transactionCountLast48To24Hours=metaData.data.transaction_count_last_48_to_24_hours
      this.marketTransaction.transactionCountChangeRate=metaData.data.transaction_count_change_rate
      this.marketTransaction.usdtSumLast24Hours=metaData.data.usdt_sum_last_24_hours
      this.marketTransaction.usdtSumLast48To24Hours=metaData.data.usdt_sum_last_48_to_24_hours
      this.marketTransaction.usdtSumChangeRate=metaData.data.usdt_sum_change_rate
   },
   async getMarketFlashExchangeDataAction(){
      const metaData=await postMarketFlashExchangeData(this.curPage)
      this.curPage=this.curPage+1
      this.flashExchangeDataList=[...this.flashExchangeDataList,...metaData.data.results]
      this.haveNext=metaData.data.next?true:false
      console.log(this.flashExchangeDataList);
      
   },
   async getInitMarketFlashExchangeDataAction(){
      this.curPage=1
      const metaData=await postMarketFlashExchangeData(this.curPage)
      this.flashExchangeDataList=metaData.data.results
      this.haveNext=metaData.data.next?true:false
      console.log(this.flashExchangeDataList);
      
   },
   async getMarketTotalLpTokenAction(){
      const metaData=await postTotalLpToken()
      this.marketTotalLpToken=metaData.data.results
   },
   async getMaketSwap1DayListAction(){
      const metaData=await postMarketSwapList(1)
      this.MaketSwap1DayList=await metaData.data
   },
   async getMaketSwap7DayListAction(){
      const metaData=await postMarketSwapList(7)
      this.MaketSwap7DayList=await metaData.data
   },
   async getMaketSwap14DayListAction(){
      const metaData=await postMarketSwapList(14)
      this.MaketSwap14DayList=await metaData.data
   },
   async getMaketSwap30DayListAction(){
      const metaData=await postMarketSwapList(30)
      this.MaketSwap30DayList=await metaData.data
   },
  async fetchAllData(){
    this.getExchangeRateAction()
    this.getRankAction()
    this.gettBurningTotalsAction()
    this.getPoolsTotalNumber()
    this.getRateUsdtToOther()
    this.getMarketTransactionData()
    this.getInitMarketFlashExchangeDataAction()
    this.getMarketTotalLpTokenAction()
    this.getMaketSwap1DayListAction()
    this.getMaketSwap7DayListAction()
    this.getMaketSwap14DayListAction()
    this.getMaketSwap30DayListAction()
   }
}
});

export default useMarketStore;
