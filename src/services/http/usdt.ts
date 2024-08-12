import httpRequest from ".";


export function postUsdtBalance(queryInfo: {
    keypair:string,
    account_id:string 
}) {
    return httpRequest.post({
      url: '/usdt/balances/',
      data: queryInfo
    })
  }







