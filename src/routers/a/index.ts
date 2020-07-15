/*
 * @Author: your name
 * @Date: 2020-07-15 22:26:53
 * @LastEditTime: 2020-07-16 00:58:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\routers\a\index.ts
 */
import A from "@/view/demo/a";
import A1 from "@/view/demo/a1";
export default [
  {
    path: "/a",
    component: A,
    children: [
      {
        path: "a1",
        component: A1,
        children: [{ path: "a11", component: A1 }],
      },
    ],
  },
];
