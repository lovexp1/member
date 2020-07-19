/*
 * @Author: your name
 * @Date: 2020-07-15 22:26:53
 * @LastEditTime: 2020-07-20 00:12:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\routers\a\index.ts
 * 特别注意：所有的路由页面必须在page文件夹下，此处直接写page文件夹下的路径即可
 */
export default [
  {
    path: "/a",
    component: "/demo/a",
    children: [
      {
        path: "a1",
        component: "/demo/a1",
        children: [
          {
            path: "a11",
            component: "/demo/a1",
          },
        ],
      },
    ],
  },
];
