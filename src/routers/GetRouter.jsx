import routers from "./index";
import { routerItem } from "./interface";
import { Route, withRouter, Switch } from "react-router-dom";
import React from "react";

function getRouteDom(routers) {
  // console.log("props----------------", props);
  // let { routes } = props;
  let routerDom = [];
  /**
   * 处理路由数据，将path变为绝对路径
   * @param routeData
   */
  function disposeRoute(routeData) {
    routeData.map((child, index) => {
      let { component, children, path, ...res } = child;
      //判断当前path是否是/开头
      let dom = <Route key={path} path={path} component={component} {...res} />;
      routerDom.push(dom);
      if (children) {
        disposeRoute(children);
      }
    });
  }
  console.log("999999----------------", routers);
  routers.map((child, index) => {
    let { component, children, path, ...res } = child;
    //判断当前path是否是/开头
    let dom = <Route key={path} path={path} component={component} {...res} />;
    routerDom.push(dom);
    disposeRoute(child.children);
  });
  return routerDom;
}
function getRoute() {
  let routerDom = getRouteDom(routers);
  console.log("----------------", <Switch>{routerDom}</Switch>);
  return <Switch>{routerDom}</Switch>;
}
export default withRouter(getRoute);
