const { override, fixBabelImports } = require("customize-cra");
//自定义webpack配置
const webpackConfig = () => (config) => {
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
