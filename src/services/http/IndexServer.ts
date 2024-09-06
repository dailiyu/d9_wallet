import {httpQueryRequest} from ".";




//获取市场交易数据
export function postMarketTransactionData() {
    return httpQueryRequest.get({
      url: '/swap/transfers/day/',
    })
  }


  //获取市场闪兑记录
export function postMarketFlashExchangeData(page:number) {
  return httpQueryRequest.get({
    url: `/swap/transfers/?page=${page}`,
  })
}

export function postUserFlashExchangeData(page:number,queryInfo:{from_address:string,to_address:string}) {
  return httpQueryRequest.post({
    url: `/swap/users/transfers/?page=${page}`,
    data:queryInfo
  })
}


export function postUserD9TransferData(page:number,queryInfo:{from_address:string,to_address:string}) {
  return httpQueryRequest.post({
    url: `/transfers/d9/?page=${page}`,
    data:queryInfo
  })
}

//用户usdt转账记录
export function postUserUsdtTransferData(page:number,queryInfo:{from_address:string,to_address:string}) {
  return httpQueryRequest.post({
    url: `/transfers/usdt/?page=${page}`,
    data:queryInfo
  })
}


//获取最近xx天的闪兑数据
export function postMarketSwapList(days:number) {
  return httpQueryRequest.get({
    url: `/swap/q/transfers/?days=${days}`,
  
  })
}




  




