import httpRequest from ".";


//获取商家码倒计时
export function postGetMerchantExpiry() {
  return httpRequest.post({
    url:'/merchant/get/merchant/expiry/',
  })
}
/*
{
  "results": {
      "expiry_date": "1764914046000"
  }
}
*/


//积分兑换页信息
export function postGetUserProfile() {
  return httpRequest.post({
    url:'/merchant/get/user/profile/',
  })
}
/*
{
    "results": {
        "green_points": "1051360.02",//积分总量          
        "relationship_green_points": "0.00",//基础可兑换
        "relationship_red_points": "0.00",//加速兑换
        "last_conversion": "1722843390000",//最后兑换时间
        "redeemed_usdt": "0.00",//可兑换
        "redeemed_d9": "4870.18",//xx
        "created_at": "1715666208000"
    }
}
*/



//用d9赠送积分？？？
export function postMerchantGivePointsD9(queryInfo: {
  keypair:string,
  consumer_id:string,
  amount:number
}) {
  return httpRequest.post({
    url:'/merchant/give/point/d9/',
    data: queryInfo
  })
}
/*
{
  "results": {
      "block_hash": "0x54639163ff7c7053813f7f0c07f544f401b95ba75986c4bc3831904eccc29fe1",
      "extrinsic_hash": "0x01925a85897c3307396cd518f027b936c8c5f440a6f98ece9cb0960809497db4"
  }
}
*/

//用usdt赠送积分？？？
export function postMerchantGivePointsUsdt(queryInfo: {
  keypair:string,
  consumer_id:string,
  amount:number
}) {
  return httpRequest.post({
    url:'/merchant/give/point/usdt/',
    data: queryInfo
  })
}


  //积分兑换
  export function postMerchantRedeemD9() {
    return httpRequest.post({
      url:'/merchant/redeem/d9/',
    })
  }

  //用d9转账给商家
  export function postSendD9Payment(queryInfo: {
    keypair:string,
    merchant_id:string,//账号地址
    amount:number
  }) {
    return httpRequest.post({
      url:'/merchant/send/d9/payment/',
      data: queryInfo
    })
  }

//用usdt转账给商家
  export function postSendUsdtPayment(queryInfo: {
    keypair:string,
    merchant_id:string,
    amount:number
  }) {
    return httpRequest.post({
      url:'/merchant/send/usdt/payment/',
      data: queryInfo
    })
  }



//开通商家码
export function postMerchantSubscribe(queryInfo: {
  keypair:string,
  usdt_base_units:number//月数的十倍
}) {
  return httpRequest.post({
    url:'/merchant/subscribe/',
    data: queryInfo
  })
}


//生成二维码???
export function postQrcodeGenerate(queryInfo: {
  amount:number//设置收款金额 默认0即可
}) {
  return httpRequest.post({
    url:'/qrcode/generate/',
    data: queryInfo
  })
}
/*
{
    "results": "http://d9-test-server.q6z4kzhr.uk/api/qrcode/process/?account_id=Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z&amount=1"
}
*/

//扫码用的
export function getQrcodeProcessList(queryInfo: {
  amount:number
}) {
  return httpRequest.get({
    url:'/qrcode/process/',
    params: queryInfo
  })
}
/*
{
    "results": {
        "account_id": "Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
        "amount": "1"
    }
}
*/

//空投次数
export function postReferralsGetDirectCount() {
  return httpRequest.get({
    url:'/referrals/get/direct/count/'
  })
}
/*
{
    "results": 1
}
*/





























//用d9赠送积分？？？
export function postMerchantD9Payment(queryInfo: {
    keypair:string,
    merchant_id:string,
    d9_amount:number
  }) {
    return httpRequest.post({
      url:'/merchant/d9-payment/',
      data: queryInfo
    })
  }


//？？？
  export function postGetAccount(queryInfo: {
    keypair:string,
    account_id:string
  }) {
    return httpRequest.post({
      url:'/merchant/get-account/',
      data: queryInfo
    })
  }
/*
{
    "results": {  // 查询结果的容器
        "gas_consumed": {  // 已消耗的gas信息
            "ref_time": 1340733760,  // 执行操作消耗的时间相关gas
            "proof_size": 32427      // 证明大小相关的gas消耗
        },
        "gas_required": {  // 完成操作所需的gas信息
            "ref_time": 19137536000, // 完成操作需要的时间相关gas
            "proof_size": 512000     // 完成操作需要的证明大小相关gas
        },
        "storage_deposit": {  // 存储数据所需的费用信息
            "Charge": 0       // 当前的存储费用为0
        },
        "debug_message": "",  // 用于调试的消息，当前为空表示无错误
        "result": {  // 操作结果的容器
            "Ok": {  // 表示操作成功
                "flags": [], // 标志位或状态信息，当前为空数组表示无特殊状态
                "data": {  // 账户的具体信息
                    "Ok": {  // 数据获取成功
                        "green_points": 105123126,  // 账户积累的积分或奖励
                        "relationship_factors": [  // 账户关系因素
                            0,  // 关系因素1
                            0   // 关系因素2
                        ],
                        "last_conversion": 1722843390000,  // 上次兑换操作的时间戳（毫秒级别）
                        "redeemed_usdt": 0,  // 已兑换的USDT数量，当前为0
                        "redeemed_d9": 4870187917633516,  // 已兑换的D9币数量
                        "created_at": 1715666208000  // 账户创建时间的时间戳（毫秒级别）
                    }
                }
            }
        }
    }
}
*/











//跑不通
  export function postMerchantUsdtPayment(queryInfo: {
    keypair:string,
    merchant_id:string,
    usdt_amount:number
  }) {
    return httpRequest.post({
      url:'/merchant/usdt-payment/',
      data: queryInfo
    })
  }


  















