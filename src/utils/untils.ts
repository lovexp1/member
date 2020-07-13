/**
 * 注册所有的localStorage变量
 * 往localstorage中存值必须在此处定义
 */
export const LOCALSTORAGE_KEYS = {
  //当前语言环境
  LANGUAGE: "member_language",
  TOKEN: "member_token",
};

/**
 * 获取token
 * @param tokenName token的变量名
 */
export function getToken(tokenName: string = "member_token") {
  return localStorage.getItem(tokenName) || "";
}

/**
 * 获取语言环境
 */
export function getLanguage(languageName: string = "member_language") {
  return localStorage.getItem(languageName) || "zh-CN";
}
