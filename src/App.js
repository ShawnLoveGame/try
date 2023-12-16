/*
 * @Author: XiaoJie
 * @Date: 2023-12-12 15:16:56
 * @LastEditors: Shawn
 * @LastEditTime: 2023-12-13 09:37:58
 * @FilePath: \periodic-table-css-master\periodic-table-css-master\src\App.js
 */
import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";
// import Video from "./Video";

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid</small>
      <PeriodicTable />
      {/* <Video /> */}
    </div>
  );
}

export default App;
