import React from "react";
import { Link } from "react-router-dom";
export const Demo = function () {
  // const;
  return (
    <ul>
      <Link to="/a">跳转链接a</Link>
      <Link to="/b">跳转链接b</Link>
    </ul>
  );
};
