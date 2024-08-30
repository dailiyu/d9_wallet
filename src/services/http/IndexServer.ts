import {httpQueryRequest} from ".";




//获取市场交易数据
export function postMarketTransactionData() {
    return httpQueryRequest.get({
      url: '/swap/transfers/day/',
    })
  }


  //获取市场闪兑记录
export function postMarketFlashExchangeData(page:number=1) {
  return httpQueryRequest.get({
    url: `/swap/transfers/?page=${page}`,
  })
}


  




