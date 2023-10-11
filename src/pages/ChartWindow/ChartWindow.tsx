import "./ChartWindow.css";
import type { ChartProps } from "../MainWindow/types";
import { ScatterBarChart } from "./ScatterBarChart/ScatterBarChart";
export const ChartWindow = ({
  xAxisScatter,
  yAxisScatter,
  chartType,
}: ChartProps) => {
  return (
    <div className="chart-window-border">
      {(chartType && chartType === "bar") || chartType === "scatter" ? (
        <ScatterBarChart
          xAxisScatter={xAxisScatter}
          yAxisScatter={yAxisScatter}
          chartType={chartType}
        />
      ) : (
        <h1>elo</h1>
      )}
    </div>
  );
};
