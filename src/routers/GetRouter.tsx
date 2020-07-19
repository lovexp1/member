import routers from "./index";
import { Route, withRouter, Switch } from "react-router-dom";
import React from "react";
import interceptors from "@/utils//request/request.ts";
import { routerItem } from "./interface";
import reactLoadable from "react-loadable";
import RouterLoading from "./RouterLoading";

function getRouteDom(routers: routerItem[]) {
  let routerDom: any = [];
  /**
   * 处理路由数据，将path变为绝对路径
   * @param routeData
   */
  // 声明函数的类型
  function disposeRoute(routeData: routerItem[]): any;
  function disposeRoute(routeData: routerItem[]) {
    routeData.map((child, index) => {
      let { component, path, children, ...res } = child;
      /**
       * 统一进行路由的懒加载处理
       * 由于webpack编译es6时,import()不能变量，但一定要用变量的时候，可以通过字符串模板来提供部分信息给webpack
       */
      let components = reactLoadable({
        loader: () => import(`@/view${component}`),
        loading: RouterLoading,
      });
      let dom = (
        <Route
          key={path}
          path={path}
          component={components}
          children={children && disposeRoute(children)}
          {...res}
        ></Route>
      );
      routerDom.push(dom);
      return dom;
    });
  }

  /**
   * 拿到当前正在padding的接口，在路由跳转的时候统一处理
   */
  const requestList = interceptors.requestList;
  requestList.map((ele: any) => {
    ele.cancel();
  });
  disposeRoute(routers);
  return routerDom;
}
function getRoute() {
  let routerDom = getRouteDom(routers);
  return <Switch>{routerDom}</Switch>;
}
export default withRouter(getRoute);
