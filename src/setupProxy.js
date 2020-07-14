/*
 * @Author: your name
 * @Date: 2020-07-14 09:02:07
 * @LastEditTime: 2020-07-14 10:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-register-react\src\setupProxy.js
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
const isOnline = process.env.NODE_ENV === "production";
// const isOnline = true;
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/shopweb-vip/", {
      target: isOnline
        ? "http://114.55.84.73:8751"
        : "http://121.199.19.240:8751",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/analy/", {
      target: "http://www.ovopark.com/",
      changeOrigin: true,
    })
  );
};
