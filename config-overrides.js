const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");
const isOnline = process.env.NODE_ENV === "production";
//自定义webpack配置
const webpackConfig = () => (config) => {
  //配置请求代理
  config.devServer = {
    open: true, //配置自动启动浏览器
    port: 8088, // 端口号
    proxy: {
      "/shopweb-vip/*": {
        changeOrigin: true,
        target: isOnline
          ? "http://114.55.84.73:8751"
          : "http://121.199.19.240:8751",
      },
    },
  };
  return config;
};
module.exports = override(
  webpackConfig(),
  //配置组件的按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css",
  }),
  // 配置路径别名
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  })
);
