import {httpRequest} from ".";


//获取usdt余额
export function postUsdtBalance() {
    return httpRequest.post({
      url: '/usdt/get/balances/',
    
    })
  }
/*
{
    "results": {
        "balance_usdt": "91.00"
    }
}
*/


//???
export function postAllowanceBurnMining(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/burn/mining/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0x87a126b360d9194c76d0d45df008bd903d6dc463cd7781e86919fe036c89b852",
        "extrinsic_hash": "0x253a182a5cf0ac5cb647717ffd6860670b351cbb144ac0ca7cf3fd07f0fa8669"
    }
}
*/
//???
export function postAllowanceCrossChain(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/cross/chain/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0x6586331542e2b49cdd96a657267a83b8d4a395fc51f4d099cb485f5e2e27503f",
        "extrinsic_hash": "0x6ef2ec367f2c76637035c2d5c5c40fb95832c30391346664bb18385356bffc12"
    }
}
*/


//???
export function postAllowanceDecrease(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/decrease/',
    data: queryInfo
  })
}

//??
export function postAllowanceIncrease(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/increase/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0xbaf8ce73dd8c46b11a41f3dae371802a9a893b937e8eea36a569d9738eec9613",
        "extrinsic_hash": "0x101c14fb03a2cd6e9e2780c4c9fdadb0c63b83301aa90e891a36f22c832b9a16"
    }
}
*/
//??
export function postAllowanceMainMining(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/main/mining/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0xa9d73e1b15e07b05e405ae01eb2c11402463c16953f7caee1e6e49b05746517c",
        "extrinsic_hash": "0xf39b782f8676770491c6d44471861ef675d8457bc8de11d6c5cc0fcfc2b14221"
    }
}
*/

export function postAllowanceMarketMaker(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/market/maker/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "block_hash": "0x4038464afbaa05ffc0bba4324dff0177698efc89eeae50fe8e9e15efbe3f9f1d",
        "extrinsic_hash": "0x535d570780e5ef1a68dc3fc40d554ac858c098160a8fa8f5604650fbd4347a83"
    }
}
*/

export function postAllowanceMerchant(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/merchant/',
    data: queryInfo
  })
}


export function postAllowanceMining(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/mining/',
    data: queryInfo
  })
}


export function postAllowanceNodeReward(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/node/reward/',
    data: queryInfo
  })
}

export function postAllowanceUsdt(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/allowance/usdt/',
    data: queryInfo
  })
}

export function postUsdtApprove(queryInfo: {
  amount:number
}) {
  return httpRequest.post({
    url: '/usdt/approve/',
    data: queryInfo
  })
}


//获取usdt余额
export function postGetBalances() {
  return httpRequest.post({
    url: '/usdt/approve/',
 
  })
}
/*
{
    "results": {
        "balance_usdt": "106.57"
    }
}
*/

//???
export function postTotalSupply() {
  return httpRequest.post({
    url: '/usdt/approve/',
 
  })
}
/*
{
    "results": 1000000000000
}
*/


//usdt转账
export function postUsdtTransfer(queryInfo: {
  amount:number,
  to_address:string
}) {
  return httpRequest.post({
    url: '/usdt/approve/',
    data: queryInfo
  })
}

//???也是usdt转账？？
export function postUsdtTransferFrom(queryInfo: {
  amount:number,
  to_address:string,
  from_address:string
}) {
  return httpRequest.post({
    url: '/usdt/transfer/from/',
    data: queryInfo
  })
}



