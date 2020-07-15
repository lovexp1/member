import React from "react";
import api from "@/api/member/index";
export default function A() {
  function clickA() {
    let params = {
      isAddDevNode: 1,
      showType: 5,
      isQueryAll: 1,
      moduleId: 2,
    };
    api.getDepartmentsTree(params);
  }
  return <div onClick={clickA}>我是a</div>;
}
