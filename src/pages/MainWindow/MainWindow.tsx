import React, { useState } from "react";
import "./MainWindow.css";
import { ChartWindow } from "../ChartWindow/ChartWindow";
import { DataWindow } from "../DataWindow/DataWindow";

export const MainWindow: React.FC<{
  chartDisplay: string;
  headerDisplay: string;
}> = ({ chartDisplay, headerDisplay }) => {
  const [windowPosition, setWindowPosition] = useState<number>(1);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);

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
  const handleDragStart = (item: string) => {
    setDraggedItem(item);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (item: string) => {
    if (
      (draggedItem === "DataWindow" && item === "ChartWindow") ||
      (draggedItem === "ChartWindow" && item === "DataWindow")
    ) {
      setWindowPosition((prevPosition) => (prevPosition === 1 ? 2 : 1));
    }

    setDraggedItem(null);
  };
  const commonPropsDataWindow = {
    xAxisScatter: xAxisScatter,
    setXaxisScatter: setXaxisScatter,
    yAxisScatter: yAxisScatter,
    setYaxisScatter: setYaxisScatter,
    chartType: chartType,
    setChartType: setChartType,
    setNumericPieValues: setNumericPieValues,
    setLegendPieValues: setLegendPieValues,
    chartDisplay: chartDisplay,
    onDragStart: () => handleDragStart("DataWindow"),
    onDragOver: handleDragOver,
    onDrop: () => handleDrop("DataWindow"),
  };

  const commonPropsChartWindow = {
    xAxisScatter: xAxisScatter,
    yAxisScatter: yAxisScatter,
    chartType: chartType,
    chartDisplay: chartDisplay,
    numericPieValues: numericPieValues,
    legendPieValues: legendPieValues,
    onDragStart: () => handleDragStart("ChartWindow"),
    onDragOver: handleDragOver,
    onDrop: () => handleDrop("ChartWindow"),
    headerDisplay: headerDisplay,
  };
  return (
    <div className="main-window-container">
      {windowPosition === 1 ? (
        <>
          <DataWindow {...commonPropsDataWindow} />
          <ChartWindow {...commonPropsChartWindow} />
        </>
      ) : (
        <>
          <ChartWindow {...commonPropsChartWindow} />
          <DataWindow {...commonPropsDataWindow} />
        </>
      )}
    </div>
  );
};
