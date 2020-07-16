import routers from './index'
import { Route, withRouter, Switch } from 'react-router-dom'
import React from 'react'
import interceptors from '@/utils//request/request.ts'

function getRouteDom(routers) {
  let routerDom = []
  /**
   * 处理路由数据，将path变为绝对路径
   * @param routeData
   */
  function disposeRoute(routeData) {
    routeData.map((child, index) => {
      let { component, path, children, ...res } = child
      let dom = (
        <Route
          key={path}
          path={path}
          component={component}
          children={children && disposeRoute(children)}
          {...res}
        ></Route>
      )
      routerDom.push(dom)
      return dom
    })
  }

  /**
   * 拿到当前正在padding的接口，在路由跳转的时候统一处理
   */
  const requestList = interceptors.requestList
  requestList.map((ele) => {
    ele.cancel()
  })
  disposeRoute(routers)
  return routerDom
}
function getRoute() {
  let routerDom = getRouteDom(routers)
  return <Switch>{routerDom}</Switch>
}
export default withRouter(getRoute)
