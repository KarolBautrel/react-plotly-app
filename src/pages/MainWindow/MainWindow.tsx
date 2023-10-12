import React, { useState, useContext } from "react";
import { useChartContext } from "../../context/useChartContext";
import "./MainWindow.css";
import { ChartWindow } from "../ChartWindow/ChartWindow";
import { DataWindow } from "../DataWindow/DataWindow";

export const MainWindow: React.FC = () => {
  const [xAxisScatter, setXaxisScatter] = useState<string[]>([
    "2013-10-04 22:23:00",
    "2013-11-04 22:23:00",
    "2013-12-04 22:23:00",
  ]);
  const [yAxisScatter, setYaxisScatter] = useState<number[]>([5, 15, 10]);
  const [chartType, setChartType] = useState<string>("bar");
  const [numericPieValues, setNumericPieValues] = useState<number[]>([1, 2, 4]);
  const [legendPieValues, setLegendPieValues] = useState<string[]>([
    "a",
    "b",
    "c",
  ]);
  const { chartDisplay } = useChartContext();
  return (
    <div className="main-window-container">
      <DataWindow
        xAxisScatter={xAxisScatter}
        setXaxisScatter={setXaxisScatter}
        yAxisScatter={yAxisScatter}
        setYaxisScatter={setYaxisScatter}
        chartType={chartType}
        setChartType={setChartType}
        setNumericPieValues={setNumericPieValues}
        setLegendPieValues={setLegendPieValues}
        chartDisplay={chartDisplay}
      />
      <ChartWindow
        xAxisScatter={xAxisScatter}
        yAxisScatter={yAxisScatter}
        chartType={chartType}
        chartDisplay={chartDisplay}
        numericPieValues={numericPieValues}
        legendPieValues={legendPieValues}
      />
    </div>
  );
};
