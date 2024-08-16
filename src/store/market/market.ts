
import { postGetReserves } from '@/services/http/amm';
import { defineStore } from 'pinia';


interface AccountState {
    exchangeRateD9ToUsdt:number,
    exchangeRateUsdtToD9:number,
    d9LiquidityToken:number,
    usdtLiquidityToken:number
}



const useMarketStore = defineStore('market', {
  state: (): AccountState => ({
    exchangeRateD9ToUsdt:0,
    exchangeRateUsdtToD9:0,
    d9LiquidityToken:0,
    usdtLiquidityToken:0
  }),
  actions: {
   async getExchangeRateAction(){
    const metaData=await postGetReserves()
    this.exchangeRateD9ToUsdt=metaData.results.usdt_rate
    this.exchangeRateUsdtToD9=metaData.results.d9_rate
    this.d9LiquidityToken=metaData.results.d9_rate
    this.usdtLiquidityToken=metaData.results.usdt_rate
    console.log(this.exchangeRateD9ToUsdt,this.exchangeRateUsdtToD9,this.d9LiquidityToken, this.usdtLiquidityToken)
    
   },
  async fetchAllData(){
    await this.getExchangeRateAction()
   }
}
});

export default useMarketStore;
