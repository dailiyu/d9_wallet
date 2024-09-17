import { httpCrossChainRequest } from ".";

export enum ChainEnum {
  D9 = 'D9',
  TRON = 'TRON',
}

//获取交易id
export function getTransactionID(address:string) {
    return httpCrossChainRequest.get({
      url: `/transfer/id/next/${address}`,
    })
  }



  export function callApiCreateCommit(queryInfo:{
    transferId: string
    fromAddress: string
    toAddress: string
    amount: number
    fromChain: ChainEnum
    toChain: ChainEnum
  }){
    return httpCrossChainRequest.post({
      url: '/transfer/commit',
      data:queryInfo
    })
  }

  export function finishD9ToTronTransfer(queryInfo:{
    transferId: string
    fromAddress: string
    toAddress: string
    amount: number
    fromChain: ChainEnum
    toChain: ChainEnum   
  }){
    return httpCrossChainRequest.post({
      url: '/transfer/dispatch',
      data:queryInfo
    })
  }


  
  