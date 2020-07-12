import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "@/app.scss";
import { Demo } from "./view/demo/index";
import { A } from "./view/demo/a";
import { B } from "./view/demo/b";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Demo></Demo>
        <Route path="/a" component={A}></Route>
        <Route path="/b" component={B}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
