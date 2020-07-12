import { getLanguage, getToken } from "../untils";
//定义语言的传递类型
const languageTypes = new Map([
  ["zh-CN", "SIMPLIFIED_CHINESE"],
  ["en-US", "ENGLISH"],
  ["zh-TW", "TRADITIONAL_CHINESE"],
]);
//定义请求参数
const requestHeaderParams = {
  TIMEZONE_FLAG: "GMT+8:00", // 时区
  CLIENT_FLAG: "web", // 模块名
  LANGUAGE: languageTypes.get(getLanguage()),
  version: "1.0", // 版本号
};

/**
 * 获取请求头参数
 */
export function getAuthenticator() {
  let params = getToken();
  Object.values(requestHeaderParams).map((ele) => {
    params += ` ${ele}`;
  });
  return params;
}
