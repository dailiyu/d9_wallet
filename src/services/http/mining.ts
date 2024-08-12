import httpRequest from ".";


export function postgetAccumulativeRewardPool(queryInfo: {
    keypair:string,
  }) {
    return httpRequest.post({
      url:'/mining/get-merchant-volume/',
      data: queryInfo
    })
  }
/*
{
    "results": "638277956830868276"
}
*/

//???
export function postMiningGetMerchantVolume(queryInfo: {
    keypair:string,
  }) {
    return httpRequest.post({
      url:'/mining/get-merchant-volume/',
      data: queryInfo
    })
  }
  /*
  {
    "results": "71747961500117216015"
}
  */