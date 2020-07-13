import React from "react";
import api from "@/api/member/index";
console.log("----------------", api);
export function A() {
  function clickA() {
    let params = {
      startTime: "2020-07-01",
      endTime: "2020-07-14",
      enterpriseId: 211,
      type: 2,
    };
    api.getFaceEnterpriseRecord(params);
  }
  return <div onClick={clickA}>我是a</div>;
}
