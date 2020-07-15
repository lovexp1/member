/*
 * @Author: your name
 * @Date: 2020-07-15 22:27:09
 * @LastEditTime: 2020-07-15 23:04:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-rejister\src\routers\b\index.ts
 */
import B from "@/view/demo/b";
import B1 from "@/view/demo/b1";
export default [
  {
    path: "/b",
    component: B,
    children: [
      {
        path: "b1",
        component: B1,
      },
    ],
  },
];
