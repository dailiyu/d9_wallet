import httpRequest from ".";


export function postUsersListData(queryInfo: any) {
    return httpRequest.post({
      url: '/users/list',
      data: queryInfo
    })
  }




  


  