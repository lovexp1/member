import { Interceptors } from "./request";
import qs from "querystring";

export class HttpConfig {
  public axios: any;

  constructor() {
    //获取axios实例,采用单例模式
    if (!this.axios) {
      this.axios = new Interceptors().getInterceptors();
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
          params: qs.stringify(params as any),
          headers: { istoken: true, ...headersConfig },
        })
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
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
        .get(url, {
          params: qs.stringify(params as any),
          headers: { istoken: true, ...headersConfig },
        })
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  /**
   * 封装postJson请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public postJson(url: string, params: object, headersConfig: object = {}) {
    let config = {
      "Content-Type": "application/json",
      ...headersConfig,
    };
    let res = this.post(url, params, config);
    return res;
  }

  /**
   * 封装postJson请求
   * @param url 请求地址
   * @param params 请求参数
   * @param headersConfig 请求头配置
   */
  public postFile(url: string, params: object, headersConfig: object = {}) {
    let config = {
      "Content-Type": "application/x-www-form-urlencoded",
      ...headersConfig,
    };
    let res = this.post(url, params, config);
    return res;
  }
}
let http: object | null = null;
export const HttpServer = function () {
  if (!http) {
    http = new HttpConfig();
  }
  return http;
};
