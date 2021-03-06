/*
 * @Author: your name
 * @Date: 2020-07-14 09:02:07
 * @LastEditTime: 2020-07-16 13:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-register-react\src\utils\request\http.ts
 */
import interceptors from './request'
import qs from 'querystring'
import Axios from 'axios'
const CancelToken = Axios.CancelToken
const source = CancelToken.source()
export class HttpConfig {
  public axios: any

  constructor() {
    //获取axios实例,采用单例模式
    if (!this.axios) {
      this.axios = interceptors.getInterceptors()
    }
  }

  /**
   * 封装get请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public get(url: string, params: object, headersConfig: object = {}) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(url, {
          params: params,
          headers: { isToken: true, ...headersConfig },
          // cancelToken: source.token,
        })
        .then((res: any) => {
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  /**
   * 封装post请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public post(url: string, params: object, headersConfig: object = {}) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, qs.stringify(params as any), {
          headers: { isToken: true, ...headersConfig },
          // cancelToken: new CancelToken((cancel:any)=>{

          // }),
        })
        .then((res: any) => {
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  /**
   * 封装postJson请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public postJson(url: string, params: object, headersConfig: object = {}) {
    let config = {
      'Content-Type': 'application/json',
      ...headersConfig,
    }
    let res = this.post(url, params, config)
    return res
  }

  /**
   * 封装postJson请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public postFile(url: string, params: object, headersConfig: object = {}) {
    let config = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...headersConfig,
    }
    let res = this.post(url, params, config)
    return res
  }
}
let http: any = null
if (!http) {
  http = new HttpConfig()
}

export const HttpServer = http
