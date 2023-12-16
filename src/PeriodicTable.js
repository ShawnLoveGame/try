/*
 * @Author: XiaoJie
 * @Date: 2023-12-12 15:16:56
 * @LastEditors: Shawn
 * @LastEditTime: 2023-12-12 16:31:09
 * @FilePath: \periodic-table-css-master\periodic-table-css-master\src\PeriodicTable.js
 */
import React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#FFB6C1",
  //"alkaline earth metal": "#EC674E",
  "alkaline earth metal": "#FFA07A",
  "diatomic nonmetal": "#C1D9CE",
  "alkali metal": "#EC674E",
  "transition metal": "#FFFF00",
  "actinide":"#9370DB",
  "post-transition metal": "#4682B4",
  "polyatomic nonmetal":"#B0E2FF",
  lanthanide: "#8A2BE2",
  metalloid: "#98FB98",
};

const PeriodicTable = () => {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className="element"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
            backgroundColor:colorMap[element.category]
          }}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;
