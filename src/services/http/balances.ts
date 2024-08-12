import httpRequest from ".";


//获取账户D9余额
export function postGetD9Balances(queryInfo: {
    keypair:string,
    account_id:string
}) {
    return httpRequest.post({
      url: '/balances/get-balances/',
      data: queryInfo
    })
  }
  /*
  {
    "results": {
        "account_id": "Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
        "balance_d9": "1641.8489"
    }
}
  */

//锁定的资产？？？
export function postGetLocks(queryInfo: {
    keypair:string,
    account_id:string
}) {
    return httpRequest.post({
      url: '/balances/get-locks/',
      data: queryInfo
    })
  } 
  /*
  {
    "results": []
}
  */


//d9转账
export function postTransfer(queryInfo: {
    keypair:string,
    to_address:string,
    amount:number//d9数量
}) {
    return httpRequest.post({
      url: '/balances/get-locks/',
      data: queryInfo
    })
  }
/*
{
    "results": {
        "block_hash": "0x410b0a5fb011783d48782f7789112ad816ee135f9032dfdcbdae158e94206bfa",
        "extrinsic_hash": "0x59153e832171bf42a51bb1242a0d2a98a8f975d78deb149f939d4c4dc4e0adb8"
    }
}
//余额不足
{
    "results": null
}
*/












