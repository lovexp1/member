/*
 * @Author: 薛鹏
 * @Date: 2020-07-05 16:09:15
 * @LastEditTime: 2020-07-19 22:59:06
 * @LastEditors: Please set LastEditors
 * @Description: 项目的webpack配置项
 * @FilePath: \member-rejister\config-overrides.js
 */

const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");
const isOnline = process.env.NODE_ENV === "production";

//自定义webpack配置
const webpackConfig = () => (config) => {
  // config.resolve = {
  //   extensions: [".ts", ".tsx", ".js", ".scss"],
  // };
  // config.module = {
  //   rules: [
  //     {
  //       test: /\.(js|jsx|ts|tsx)$/,
  //       use: ["babel-loader", "lazyload-loader"],
  //     },
  //   ],
  // };
  return config;
};
module.exports = override(
  //配置组件的按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css",
  }),
  // 配置路径别名
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  }),
  webpackConfig()
);
