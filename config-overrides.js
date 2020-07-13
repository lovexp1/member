const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");
const isOnline = process.env.NODE_ENV === "production";

//自定义webpack配置
const webpackConfig = () => (config) => {
  // config.resolve = {
  //   extensions: [".ts", ".tsx", ".js", ".scss"],
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
