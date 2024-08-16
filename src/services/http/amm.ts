import httpRequest from ".";

//增加流动性
export function postAddLiquidity(queryInfo: {
    usdt_amount:number,
    d9_amount:number
}) {
    return httpRequest.post({
      url: '/amm/add/liquidity/',
      data: queryInfo 
    })
  }
  /*postAddLiquidity
  {
    "results": {
        "block_hash": "0xc52a6ae227422e22eade3f1fcfbfd00d241bd329cfbe92e2f3890c61147ad4a4",
        "extrinsic_hash": "0xf5770460ec508f8c7a57bf61180411d2b6a36d7e79f3c92c039eef10221d3205"
    }
}
  */

//????检查新的流动资金xx
export function postCheckNewLiquidity(queryInfo: {
  usdt_liquidity:number,
  d9_liquidity:number,
}) {
  return httpRequest.post({
    url: '/amm/check-new-liquidity/',
    data: queryInfo
  })
}
/*postCheckNewLiquidity
{
  "results": null
}
  or
  {
  "results": []
}
*/


//检查钱包usdt是否足够amount
export function postCheckUsdtBalance(queryInfo: {
  from_currency:'USDT'|'d9',
  to_currency:'USDT'|'d9',
}) {
  return httpRequest.post({
    url: '/amm/compute/exchange/rate/',
    data: queryInfo
  })
}
/*
够
{
  "results": []
}
不够
{
    "results": "USDTBalanceInsufficient"
}
*/

//崩
// export function postComputeExchangeRate(queryInfo: {
//   from_currency:'USDT'|'d9',
//   to_currency:'USDT'|'d9',

// }) {
//   return httpRequest.post({
//     url: '/amm/check/usdt/balance/',
//     data: queryInfo
//   })
// }

//{
//   "results": {
//       "rate": "14.15",
//       "meta_data": 14.152819650959568
//   }
// }


//usdt与dusdt与d9转换的大概估算
export function postEstimateExchange(queryInfo: {
  from_currency:'USDT'|'d9',
  to_currency:'USDT'|'d9',
  from_amount:number
}) {
  return httpRequest.post({
    url: '/amm/check/usdt/balance/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "rate": {
            "usdt": "200.00",
            "d9": "3025.54"
        },
        "meta_data": {
            "usdt": 20000,
            "d9": 3025549326718422
        }
    }
}
*/

//将usdt兑换成d9
export function postGetD9(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/amm/check/usdt/balance/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0x534ea07a5a9012a43a260582e9f4e7856270abe4b54696f8b88faa9a000183f8",
        "extrinsic_hash": "0x72305e25b274d22382358086c80c0778364b7ecd51b907dce8be8bfb37fcd839"
    }
}
*/

//流动性代币数量和汇率
export function postGetReserves() {
  return httpRequest.post({
    url: '/amm/get/reserves/',
    
  })
}
/*
{
    "results": {
        "d9_token": "22285734.94",//流动性代币
        "usdt_token": "1472771.50",//
        "d9_rate": 15.1318,
        "usdt_rate": 0.06609
    }
}
*/



//将d9兑换成usdt
export function postGetUsdt(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/amm/get/usdt/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0x74668dc533cc724c15df375bb6ce05fea7225b551f07590f1129329fde57154f",
        "extrinsic_hash": "0xebfcdf477142ef31e7b12797cd83fd47bca572a8bebe0ece28b02115364f1070"
    }
}
*/


//移除流动性
export function postRemoveLiquidity(queryInfo: {
  keypair:string,
}) {
  return httpRequest.post({
    url: '/amm/remove/liquidity/',
    data: queryInfo
  })
}
/*
{
  "results": {
      "block_hash": "0xf17239bbba2794c5e288eb82c117f938ea26d0c9c2eadc41bc06b8a655b87bdd",
      "extrinsic_hash": "0x2099ee4b6b7489da9cf5d1d986e7208206f691efc4ddbea9914b31452e9404ee"
  }
}
*/










































   











