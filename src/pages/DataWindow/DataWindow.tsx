import "./DataWindow.css";
import React, { useState } from "react";

import type { DataProps } from "../MainWindow/types";
export const DataWindow = ({
  xAxisScatter,
  setXaxisScatter,
  yAxisScatter,
  setYaxisScatter,
  xAxisbar,
  setXAxisbar,
  yAxisbar,
  setYAxisbar,
}: DataProps) => {
  const [localXAxisScatter, setLocalXAxisScatter] = useState(
    xAxisScatter.join(",")
  );
  const [localYAxisScatter, setLocalYAxisScatter] = useState(
    yAxisScatter.join(",")
  );
  const [localXAxisbar, setLocalXAxisbar] = useState(xAxisbar.join(","));
  const [localYAxisbar, setLocalYAxisbar] = useState(yAxisbar.join(","));
  const handleSubmit = () => {
    setXaxisScatter(localXAxisScatter.split(",").map(Number));
    setYaxisScatter(localYAxisScatter.split(",").map(Number));
    setXAxisbar(localXAxisbar.split(",").map(Number));
    setYAxisbar(localYAxisbar.split(",").map(Number));
  };
  return (
    <div className="data-window-border">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>X Axis Scatter:</label>
          <input
            type="text"
            value={localXAxisScatter}
            onChange={(e) => setLocalXAxisScatter(e.target.value)}
          />
        </div>
        <div>
          <label>Y Axis Scatter:</label>
          <input
            type="text"
            value={localYAxisScatter}
            onChange={(e) => setLocalYAxisScatter(e.target.value)}
          />
        </div>
        <div>
          <label>X Axis Bar:</label>
          <input
            type="text"
            value={localXAxisbar}
            onChange={(e) => setLocalXAxisbar(e.target.value)}
          />
        </div>
        <div>
          <label>Y Axis Bar:</label>
          <input
            type="text"
            value={localYAxisbar}
            onChange={(e) => setLocalYAxisbar(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Update Values
        </button>
      </form>
    </div>
  );
};
