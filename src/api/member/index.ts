import { HttpServer } from "@/utils/request/http";
import { postUrl } from "./apilist";
console.log("HttpServer----------------", HttpServer);
let apiList: any = {};
Object.keys(postUrl).map((ele) => {
  apiList[ele] = function (params: any) {
    return HttpServer.post(postUrl[ele], params);
  };
});
console.log("apiList----------------", apiList);
export default apiList;
