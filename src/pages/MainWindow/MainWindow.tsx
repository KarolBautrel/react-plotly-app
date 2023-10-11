import React, { useState } from "react";

import "./MainWindow.css";
import { ChartWindow } from "../ChartWindow/ChartWindow";
import { DataWindow } from "../DataWindow/DataWindow";
export const MainWindow: React.FC = () => {
  const [xAxisScatter, setXaxisScatter] = useState<string[]>([
    "2013-10-04 22:23:00",
    "2013-11-04 22:23:00",
    "2013-12-04 22:23:00",
  ]);
  const [yAxisScatter, setYaxisScatter] = useState<number[]>([0, 0, 0]);
  const [chartType, setChartType] = useState<string>("scatter");
  return (
    <div className="main-window-container">
      <DataWindow
        xAxisScatter={xAxisScatter}
        setXaxisScatter={setXaxisScatter}
        yAxisScatter={yAxisScatter}
        setYaxisScatter={setYaxisScatter}
        chartType={chartType}
        setChartType={setChartType}
      />
      <ChartWindow
        xAxisScatter={xAxisScatter}
        yAxisScatter={yAxisScatter}
        chartType={chartType}
      />
    </div>
  );
};
