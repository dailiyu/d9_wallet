import { BASE_URL, TIME_OUT,QUERY_URL } from './config'
import HttpRequest from './request'
// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/utils/cache'

 export const httpRequest = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // requestSuccessFn: (config) => {
    //   // 每一个请求都自动携带token
    //   const token = localCache.getCache(LOGIN_TOKEN)
    //   if (config.headers && token) {
    //     // 类型缩小
    //     config.headers.Authorization = 'Bearer ' + token
    //   }
    //   return config
    // }
  },
})

 export const httpQueryRequest = new HttpRequest({
  baseURL: QUERY_URL,
  timeout: TIME_OUT,
  interceptors: {
    // requestSuccessFn: (config) => {
    //   // 每一个请求都自动携带token
    //   const token = localCache.getCache(LOGIN_TOKEN)
    //   if (config.headers && token) {
    //     // 类型缩小
    //     config.headers.Authorization = 'Bearer ' + token
    //   }
    //   return config
    // }
  },
})










