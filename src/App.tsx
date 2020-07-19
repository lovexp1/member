import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "@/app.scss";
// import RouterGuard from "@/routers/RouterGuard";
import { Demo } from "./view/demo/index";
import GetRouter from "@/routers/GetRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Demo></Demo>
        {/* <RouterGuard></RouterGuard> */}
        <Switch>
          <GetRouter></GetRouter>
          {/* <Route path="/a" component={A}></Route>
          <Route path="/b" component={B}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
