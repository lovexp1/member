/*
 * @Author: 薛鹏
 * @Date: 2020-07-11 21:56:57
 * @LastEditTime: 2020-07-15 22:48:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\utils\untils.ts
 */

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
 * @param languageName language的变量名
 */
export function getLanguage(languageName: string = "member_language") {
  return localStorage.getItem(languageName) || "zh-CN";
}

/**
 *把中划线字符替换为驼峰
 * @param str 要替换的字符
 */
export function camelize(str: string) {
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}
