/*
 * @Author: 薛鹏
 * @Date: 2020-07-13 00:16:18
 * @LastEditTime: 2020-07-15 22:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\api\member\index.ts
 */

import { HttpServer } from "@/utils/request/http";
import { postUrl } from "./apilist";
let apiList: any = {};
Object.keys(postUrl).map((ele) => {
  apiList[ele] = function (params: any) {
    return HttpServer.post(postUrl[ele], params);
  };
});
export default apiList;
