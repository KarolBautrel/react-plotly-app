import "../MainWindow/MainWindow.css";
import { DataWindowScatterForm } from "./DataWindowScatterForm";
import { DataWindowPieForm } from "./DataWindowPieForm";
import type { DataScatterProps, DataPieProps } from "../MainWindow/types";
type CombinedProps = DataScatterProps &
  DataPieProps & {
    chartDisplay: string;
    onDragStart: React.DragEventHandler<HTMLDivElement>;
    onDragOver: React.DragEventHandler<HTMLDivElement>;
    onDrop: React.DragEventHandler<HTMLDivElement>;
  };

export const DataWindow = ({
  xAxisScatter,
  setXaxisScatter,
  yAxisScatter,
  setYaxisScatter,
  setChartType,
  setNumericPieValues,
  setLegendPieValues,
  chartDisplay,
  onDragStart,
  onDragOver,
  onDrop,
}: CombinedProps) => {
  return (
    <div
      className="left-window-border"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {chartDisplay && chartDisplay === "scatter" ? (
        <DataWindowScatterForm
          setChartType={setChartType}
          xAxisScatter={xAxisScatter}
          setXaxisScatter={setXaxisScatter}
          yAxisScatter={yAxisScatter}
          setYaxisScatter={setYaxisScatter}
        />
      ) : (
        <DataWindowPieForm
          setNumericPieValues={setNumericPieValues}
          setLegendPieValues={setLegendPieValues}
        />
      )}
    </div>
  );
};
