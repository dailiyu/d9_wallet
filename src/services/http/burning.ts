import httpRequest from ".";


//????
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
      url:'/burning/portfolio/',
      data: queryInfo
    })
  }
  /*
  {
    "results": {
        "account_id": "Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
        "amount_burned": "2100.00",
        "balance_due": "6299.40",
        "balance_paid": "0.60",//总提币数
        "last_withdrawal": "1719664029000",//上次提取
        "last_burn": "1721809947000"//上次燃烧
    }
}
  */


//销毁代币
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

//????
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

































