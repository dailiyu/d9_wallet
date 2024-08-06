import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { HttpRequestConfig } from './type'
import useAccountStore from "@/store/account/account"


const accountStore=useAccountStore()


class HttpRequest {
  instance: AxiosInstance

  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)
    // 添加实例级别的请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在请求发送之前做些什么
      return config;
      },
      (error: any) => {
        // 对请求错误做些什么
        return Promise.reject(error)
      },
    )
    //添加响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 对响应数据做些什么
        return response.data
      },
      (error: any) => {
        // 对响应错误做些什么
        return Promise.reject(error)
      },
    )

    // 针对特定的实例添加拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn as (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
        config.interceptors.requestFailureFn,
      )

      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn,
      )
    }
  }

  request<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config) as HttpRequestConfig<T>
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res) as T
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    // 确保 config.data 是一个对象
    if (!config.data || typeof config.data !== 'object') {
      config.data = {};
    }
    // 将 keypair 和 account_id 添加到请求体中
   config.data = {
    ...config.data,
    keypair: accountStore.activeWallet.mnemonic,
    account_id:accountStore.activeWallet.address ,
  };

    return this.request({ ...config, method: 'POST' });
  }


  delete<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HttpRequest
