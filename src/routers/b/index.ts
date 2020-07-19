/*
 * @Author: 薛鹏
 * @Date: 2020-07-15 22:27:09
 * @LastEditTime: 2020-07-20 00:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置文件
 * @FilePath: \member-rejister\src\routers\b\index.ts
 * 特别注意：所有的路由页面必须在page文件夹下，此处直接写page文件夹下的路径即可
 */

export default [
  {
    path: "/b",
    component: "/demo/b",
    children: [
      {
        path: "b1",
        component: "/demo/b1",
      },
    ],
  },
];
