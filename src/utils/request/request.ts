import Axios from "axios";
import { getToken } from "../untils";
import { getAuthenticator } from "./config";
import { Toast } from "antd-mobile";
//定义请求列表中每一项的接口
interface RequestListItem {
  url: string;
  cancel: any;
}
// console.log("Axios----------------", Axios.CancelToken);
const cancelToken = Axios.CancelToken;
//定义拦截器
export class Interceptors {
  public instance: any;
  public source: any;
  public cancelToken: any;
  public requestList: RequestListItem[];
  constructor() {
    //初始化axios实例
    this.instance = Axios.create({ timeout: 5000 });
    // 初始化axios取消令牌
    // this.cancelToken = Axios.CancelToken;
    // this.source = this.cancelToken.source();
    //初始化正在请求的列表
    this.requestList = [];
    //初始化拦截器
    this.initInterceptors();
  }

  //获取axios实例
  public getInterceptors() {
    return this.instance;
  }

  /**
   * 初始化拦截器
   */
  public initInterceptors() {
    /**
     * 定义请求拦截器，处理每次请求前的逻辑
     * 此处进行token验证的处理
     */
    this.instance.interceptors.request.use(
      (config: any) => {
        //判断当前请求是否需要token
        if (config.headers.isToken) {
          const token: string | undefined = getToken();
          if (token) {
            config.headers.authenticator = getAuthenticator();
          }
        }
        const url: string = this.getUrl(config);
        this.stopRepeatRequest(
          this.requestList,
          url,
          `${config.url} 请求被中断`
        );
        //发起请求前创建请求令牌
        new cancelToken((cancel: any) => {
          // 只有当请求的地址、请求方法、请求参数一致时才认为是同一个请求，后面根据url去判断
          this.requestList.push({
            url: url,
            cancel: cancel,
          });
        });
        console.log(
          "this.requestList----------------request",
          this.requestList
        );
        return config;
      },
      (error: any) => {
        console.error("请求参数错误", error);
      }
    );
    /**
     * 在此对后台数据处进行全局错误处理
     * 此处仅做错误判断，不对后台数据进行过滤
     */
    this.instance.interceptors.response.use(
      (res: any) => {
        console.log("res----------------", res);
        const url: string = this.getUrl(res.config);
        //请求成功后从请求列表中移除此请求
        this.allowRequest(this.requestList, url);
        console.log("this.requestList----------------res", this.requestList);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          this.errorHandle(res);
          return Promise.reject(res.data);
        }
      },
      (error: any) => {
        console.log(
          "Axios.isCancel(error)----------------",
          Axios.isCancel(error)
        );
        //判断当前请求是否被撤销了
        if (Axios.isCancel(error)) {
          console.error("取消了请求", error.message);
        } else {
          const { response } = error;
          const url: string = this.getUrl(response.config);
          //请求成功后从请求列表中移除此请求
          this.allowRequest(this.requestList, url);
          console.log(
            "this.requestList----------------error",
            this.requestList
          );
          if (response) {
            // 请求已发出，但是不在2xx的范围
            this.errorHandle(response);
            return Promise.reject(response.data);
          } else {
            // 处理断网的情况
            Toast.fail("网络连接异常,请稍后再试!");
          }
        }
      }
    );
  }

  /**
   * http握手错误
   * @param res  响应回调,根据不同响应进行不同操作
   */
  private errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        Toast.fail("请求的资源不存在");
        break;
      default:
        Toast.fail("连接错误");
    }
  }

  /**
   *
   * @param requestList 正在请求的url列表
   * @param url 当前请求地址的url
   * @param errorMsg 取消请求的提示
   */
  private stopRepeatRequest(
    requestList: RequestListItem[],
    url: string,
    errorMsg: string = ""
  ) {
    //判断当前请求是否在正在请求的列表中，如果在则去撤销列表中的此请求
    for (let i = 0; i < requestList.length; i++) {
      if (requestList[i].url === url) {
        requestList[i].cancel(errorMsg);
        requestList.splice(i, 1);
        break;
      }
    }
  }

  /**
   * 从请求列表中移除特定的请求
   * @param requestList 正在请求的url列表
   * @param url 当前请求地址的url
   */
  private allowRequest(requestList: RequestListItem[], url: string) {
    for (let i = 0; i < requestList.length; i++) {
      if (requestList[i].url === url) {
        requestList.splice(i, 1);
        break;
      }
    }
  }

  /**
   * 获取请求的url，用来标识唯一请求
   * @param config
   */
  private getUrl(config: any) {
    const data = config.method === "get" ? config.params : config.data;
    return `${config.url}${JSON.stringify(data)}&${config.method}`;
  }
}
