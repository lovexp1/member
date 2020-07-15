/*
 * @Author: your name
 * @Date: 2020-07-15 22:38:25
 * @LastEditTime: 2020-07-15 23:25:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\routers\index.ts
 */
import { routerItem } from "./interface";
const appRouter: routerItem[] = [];

const files = require.context("./", true, /index.ts$/);
files.keys().map((key) => {
  if (key == "./index.ts") return;
  let file = files(key).default;
  appRouter.push(...file);
});

/**
 * 得到路由表的配置信息
 * @param routers 路由配置表
 */
function getRouterConfig(routers: routerItem[]) {
  /**
   * 处理路由数据，将path变为绝对路径
   * @param routeData
   */
  function disposeRoute(routeData: routerItem[], prevPath: string) {
    routeData.map((child) => {
      //判断当前path是否是/开头
      if (!child.path.startsWith("/")) {
        child.path = prevPath + "/" + child.path;
      }
      if (child.children) {
        disposeRoute(child.children, child.path);
      }
    });
  }
  routers.map((child) => {
    if (child.children) {
      disposeRoute(child.children, child.path);
    }
  });
  return routers;
}
const routers = getRouterConfig(appRouter);
export default routers;
