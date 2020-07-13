const { createProxyMiddleware } = require("http-proxy-middleware");
// const isOnline = process.env.NODE_ENV === "production";
const isOnline = true;
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/shopweb-vip/", {
      target: isOnline
        ? "http://114.55.84.73:8751"
        : "http://121.199.19.240:8751",
      changeOrigin: true,
    })
  );
};
