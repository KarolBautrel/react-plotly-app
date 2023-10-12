import "./ChartWindow.css";
import type { ChartScatterProps, ChartPieProps } from "../MainWindow/types";
import { ScatterBarChart } from "./ScatterBarChart/ScatterBarChart";
import { PieChart } from "./PieChart/PieChart";
type CombinedProps = ChartScatterProps &
  ChartPieProps & { chartDisplay: string };

export const ChartWindow = ({
  xAxisScatter,
  yAxisScatter,
  chartType,
  chartDisplay,
  legendPieValues,
  numericPieValues,
}: CombinedProps) => {
  return (
    <div className="chart-window-border">
      {(chartDisplay && chartDisplay === "bar") ||
      chartDisplay === "scatter" ? (
        <ScatterBarChart
          xAxisScatter={xAxisScatter}
          yAxisScatter={yAxisScatter}
          chartType={chartType}
        />
      ) : (
        <PieChart
          legendPieValues={legendPieValues}
          numericPieValues={numericPieValues}
        />
      )}
    </div>
  );
};
