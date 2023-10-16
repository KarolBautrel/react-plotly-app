import "../MainWindow/MainWindow.css";
import type { ChartScatterProps, ChartPieProps } from "../MainWindow/types";
import { ScatterBarChart } from "./ScatterBarChart/ScatterBarChart";
import { PieChart } from "./PieChart/PieChart";
type CombinedProps = ChartScatterProps &
  ChartPieProps & {
    chartDisplay: string;
    onDragStart: React.DragEventHandler<HTMLDivElement>;
    onDragOver: React.DragEventHandler<HTMLDivElement>;
    onDrop: React.DragEventHandler<HTMLDivElement>;
    headerDisplay: string;
  };

export const ChartWindow = ({
  xAxisScatter,
  yAxisScatter,
  chartType,
  chartDisplay,
  legendPieValues,
  numericPieValues,
  onDragStart,
  onDragOver,
  onDrop,
  headerDisplay,
}: CombinedProps) => {
  return (
    <div
      className="right-window-border"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h4>{headerDisplay}</h4>
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
