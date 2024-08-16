import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { HttpRequestConfig } from './type'

class HttpRequest {
  instance: AxiosInstance

  constructor(config: HttpRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      (error: any) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: any) => Promise.reject(error)
    )

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
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config) as HttpRequestConfig<T>
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res) as T
          }
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }

  get<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  async post<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    // 延迟加载 useAccountStore
    const accountStore = (await import('@/store/account/account')).default();

    const keypair = accountStore.activeWallet.mnemonic;
    const accountId = accountStore.activeWallet.address;

    console.log({
      ...config,
      method: 'POST',
      data: {
        ...config.data,
        keypair: keypair,
        account_id: accountId,
      },
    });

    return this.request({
      ...config,
      method: 'POST',
      data: {
        ...config.data,
        keypair: keypair,
        account_id: accountId,
      },
    });
  }

  delete<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HttpRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HttpRequest

