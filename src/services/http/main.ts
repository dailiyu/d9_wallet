import {httpRequest} from ".";



//销毁代币数量至少为100
export function postMiningBurning(queryInfo: {
    amount:number
  }) {
    return httpRequest.post({
      url: '/main/mining/get/total/burned/',
      data: queryInfo
    })
  }


//当前全球已销毁数量
export function postGetTotalBurned() {
    return httpRequest.post({
      url: '/main/mining/get/total/burned/',

    })
  }
/*
{
    "results": "736245356.4193"
}
*/


//销毁挖矿页部分数据
  export function postGetUserBurningProfile() {
    return httpRequest.post({
      url: '/main/mining/get/user/burning/profile/',
    })
  }
  /*
  {
    "results": {
        "amount_burned": "1100.00",//??销毁总数
        "balance_due": "3299.40",//??剩余产出
        "balance_paid": "0.60",//总提币数
        "last_withdrawal": "1719664029000",//上次燃烧时间？
        "last_burn": "1722842154000"//上次提取时间？
    }
}
  */


//提取 可提代币
export function postMiningWithdraw() {
    return httpRequest.post({
      url: '/main/mining/withdraw/',
    })
  }


  //获取用户部分信息
export function postRefreshUsersProfile() {
    return httpRequest.post({
      url: '/users_profile/get/',
    })
  }
/*
{
    "results": {
        "account_id": "Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
        "balance_d9": "3478.4718",
        "balance_usdt": "104.57",
        "burning_profile": {
            "amount_burned": "1300.00",//销毁总数量
            "balance_due": "3899.40",//剩余产出总量
            "balance_paid": "0.60",//总提币数
            "last_withdrawal": "1719664029000",//上次提取时间
            "last_burn": "1722938067000"//最后销毁时间
        },
        "expiry_date": "1764914046000",//？？？商家码有效截止时间？？？
        "merchant_profile": {
            "green_points": "1053175.34",//积分总量
            "relationship_green_points": "0.00",//
            "relationship_red_points": "0.00",//
            "last_conversion": "1723006299000",//上次兑换时间
            "redeemed_usdt": "0.00",
            "redeemed_d9": "4948.59",//基本+加速可兑换
            "created_at": "1715666208000"
        }
    }
}
*/

//用户已投票列表
export function postProfileGetUserNodeVote() {
  return httpRequest.post({
    url: '/users_profile/get/user/node/vote/',
  })
}
/*
{
    "results": [
        {
            "node_id": "DnxQFMWQVMQ2FkgXyVwA6n8ZRCCVmjAB2hg29Fak5UqhjcM8E",
            "node_name": "xq13491",
            "vote": "4"
        },
        {
            "node_id": "DnwTSMJJZ9PKMiQw355kajHGwC8VcdN5YN4JpHcdahH131drr",
            "node_name": "cgm2024",
            "vote": "50"
        },
        {
            "node_id": "DnvXyvZwhJeNYkt28yKuYeozGQ6E7DtPgfuJbhJh2jwzz6h6f",
            "node_name": "Tt134",
            "vote": "8"
        },
        {
            "node_id": "DnviwP2zGkj9FVJy4SLtep2jWHJFvhTVNdN4LLdAi1YZMyDPp",
            "node_name": "yy14133",
            "vote": "21"
        },
        {
            "node_id": "DnzX3ATUJrRHkMUwgRZM88b8SEctCAMUhfYkHqV5zL1ZEqVfZ",
            "node_name": "6888",
            "vote": "11"
        },
        {
            "node_id": "DnwMkMNPB2D98xcH4jKYaE4d6Y43Ah7sBLDbUyUumoSCnYGoD",
            "node_name": "tiancixQD9",
            "vote": "6"
        }
    ]
}
*/






