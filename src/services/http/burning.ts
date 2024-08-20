import httpRequest from ".";


//????xxx
export function postBurningAncestors(queryInfo: {
    keypair:string,
    account_id:string
  }) {
    return httpRequest.post({
      url: '/burning/ancestors/',
      data: queryInfo
    })
  }
  /*
  {
    "results": [
        "vobz55veN6ejufwW8NMJtAXNvh88GMBQa1LWHX8sQpAd3Dq",
        "v13n2yeidohw7TFL8f9KojG1CcTuGMnbyFxuaFacvZNYQ7U"
    ]
}
  */


//全球算力总值
export function postBurningGlobalComputingPower(queryInfo: {
    keypair:string,
    account_id:string
  }) {
    return httpRequest.post({
      url:'/burning/global-computing-power/',
      data: queryInfo
    })
  }
  /*
  {
    "results": 0.000125
}
  */



//挖矿销毁部分数据
export function postBurningPortfolio(queryInfo: {
    keypair:string,
    account_id:string
  }) {
    return httpRequest.post({
      url:'/main/mining/get/user/burning/profile/',
      data: queryInfo
    })
  }
  /*
 {
    "results": {
        "amount_burned": "1400.00",//销毁总数量
        "balance_due": "4199.40",//剩余产出总量
        "balance_paid": "0.60",//总提币数
        "last_withdrawal": "1719664029000",//最后提取时间
        "last_burn": "1723714638000"//最后燃烧时间
    }
}
  */


//销毁代币接口1
export function postBurningToken(queryInfo: {
    keypair:string,
    account_id:string,
    amount:number//Amount must be at least 100
  }) {
    return httpRequest.post({
      url:'/burning/token/',
      data: queryInfo
    })
  }
/*
{
    "results": {
        "block_hash": "0x995b2466e37f92f5f4bbe13a2bb378c150f6d73538457e3f73f68d7a0a80a2a2",
        "extrinsic_hash": "0x6607757d3827a15334eee9437a5224fa08e6f0978856fd9ef2ad90b26b472845"
    }
}
{
    "amount": [
        "Amount must be at least 100."
    ]
}
*/

//当前全球已销毁数量
export function postBurningTotals(queryInfo: {
    keypair:string
  }) {
    return httpRequest.post({
      url:'/burning/totals/',
      data: queryInfo
    })
  }
  /*
  {
    "results": "733790456.4193"
}
  */

//每天提取可提代币
export function postBurningWithdraw(queryInfo: {
    keypair:string
  }) {
    return httpRequest.post({
      url:'/burning/withdraw/',
      data: queryInfo
    })
  }
/*
{
    "results": null
}
*/

































