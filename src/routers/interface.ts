/*
 * @Author: 薛鹏
 * @Date: 2020-07-15 23:11:49
 * @LastEditTime: 2020-07-16 12:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\routers\interface.ts
 */
/**
 * 定义每个路由配置的接口
 */
export interface routerItem {
  path: string
  component: any
  children?: routerItem[] | any
  render?: any
}
