import httpRequest from ".";

//增加流动性
export function postAddLiquidity(queryInfo: {
    keypair:string,
    account_id:string,
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

//计算usdt，d9之间的转换
export function postCalculateExchange(queryInfo: {
    keypair:string,
    from_currency:'USDT'|'d9',
    to_currency:'USDT'|'d9',
    from_amount:number
}) {
    return httpRequest.post({
      url: '/amm/add-liquidity/',
      data: queryInfo
    })
  }
  /*postCalculateExchange
   {"results":3047.772740276768}
  */

//????
   export function postCheckNewLiquidity(queryInfo: {
    keypair:string,
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
    keypair:string,
    from_currency:'USDT'|'d9',
    to_currency:'USDT'|'d9',
    from_amount:number
}) {
    return httpRequest.post({
      url: '/amm/estimate-exchange/',
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
    "results": []
}
*/

//类似或同postCalculateExchange
export function postEstimateExchange(queryInfo: {
    keypair:string,
    account_id:string,
    amount:number,
}) {
    return httpRequest.post({
      url: '/amm/check-usdt-balance/',
      data: queryInfo
    })
  }
  /*
  {
    "results": 3047.8976884210188
}
  */

//将usdt兑换成d9
export function postGetD9(queryInfo: {
    keypair:string,
    usdt:number
}) {
    return httpRequest.post({
      url: '/amm/get-d9/',
      data: queryInfo
    })
  }
/*
{
    "results": {
        "block_hash": "0x4952fea0c4d48883e0beaa66b40676d7dc7117da422fcef4c4e0b73d2a3a0959",
        "extrinsic_hash": "0x7e1f7b05079df6f8266171dd7546020a7ba6b95fac9220589b7f8eb17b1e5869"
    }
}
    超出余额返回错误html
*/


//将d9兑换成usdt
export function postGetUsdt(queryInfo: {
    keypair:string,
    d9_amount:number
}) {
    return httpRequest.post({
      url: '/amm/get-usdt/',
      data: queryInfo
    })
  }


//http://d9-test-server.q6z4kzhr.uk/api/amm/liquidity-provider/   跑不通


//移除流动性
export function postRemoveLiquidity(queryInfo: {
    keypair:string,
}) {
    return httpRequest.post({
      url: '/amm/remove-liquidity/',
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


//????账户余额？
export function postRereserves(queryInfo: {
    keypair:string,
}) {
    return httpRequest.post({
      url: '/amm/reserves/',
      data: queryInfo
    })
  }
  /*
  {
    "results": {
        "d9": "22354978.28",
        "usdt": "1466684.07"
    }
}
  */





















   











