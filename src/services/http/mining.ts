import httpRequest from ".";


//
export function postgetAccumulativeRewardPool(queryInfo: {
  keypair:string,
}) {
  return httpRequest.post({
    url:'/mining/get/accumulative/reward/pool/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "totals": "393168.17"
    }
}
*/



//总矿池数量
export function postGetAllVolume(queryInfo: {
  keypair:string,
}) {
  return httpRequest.post({
    url:'/mining/get/all/volume/',
    data: queryInfo
  })
}
/*
{
    "results": 8436419852.302799
}
*/



//当前全球已销毁数量
export function postGetMerchantVolume(queryInfo: {
  keypair:string,
}) {
  return httpRequest.post({          
    url:'/mining/get/merchant/volume/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "totals": "73288828.42"
    }
}
*/

//????
export function postGetSessionVolume(queryInfo: {
  keypair:string,
  session_index:number
}) {
  return httpRequest.post({
    url:'/mining/get/session/volume/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "totals": "437316153.00"
    }
}
*/

//???
export function postGetTotalVolume() {
  return httpRequest.post({
    url:'/mining/get/total/volume/',
   
  })
}
/*
{
    "results": {
        "totals": "812290782.49"
    }
}
*/

















