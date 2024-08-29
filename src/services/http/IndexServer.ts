import {httQueryRequest} from ".";




//获取市场交易数据
export function postMarketTransactionData() {
    return httQueryRequest.get({
      url: '/swap/transfers/day/',
    })
  }
  



