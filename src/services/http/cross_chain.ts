import { httpCrossChainRequest } from ".";

//获取交易id
export function getTransactionID(address:string) {
    return httpCrossChainRequest.get({
      url: `/transfer/id/next/${address}`,
    })
  }

  