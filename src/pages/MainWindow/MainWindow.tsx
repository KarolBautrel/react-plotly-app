import React, { useState } from "react";

import "./MainWindow.css";
import { ChartWindow } from "../ChartWindow/ChartWindow";
import { DataWindow } from "../DataWindow/DataWindow";
export const MainWindow: React.FC = () => {
  const [xAxisScatter, setXaxisScatter] = useState<number[]>([0, 0, 0]);
  const [yAxisScatter, setYaxisScatter] = useState<number[]>([0, 0, 0]);
  const [xAxisbar, setXAxisbar] = useState<number[]>([0, 0, 0]);
  const [yAxisbar, setYAxisbar] = useState<number[]>([0, 0, 0]);
  return (
    <div className="main-window-container">
      <DataWindow
        xAxisScatter={xAxisScatter}
        setXaxisScatter={setXaxisScatter}
        yAxisScatter={yAxisScatter}
        setYaxisScatter={setYaxisScatter}
        xAxisbar={xAxisbar}
        setXAxisbar={setXAxisbar}
        yAxisbar={yAxisbar}
        setYAxisbar={setYAxisbar}
      />
      <ChartWindow
        xAxisScatter={xAxisScatter}
        yAxisScatter={yAxisScatter}
        xAxisbar={xAxisbar}
        yAxisbar={yAxisbar}
      />
    </div>
  );
};
