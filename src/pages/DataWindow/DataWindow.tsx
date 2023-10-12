import "./DataWindow.css";
import { DataWindowScatterForm } from "./DataWindowScatterForm";
import { DataWindowPieForm } from "./DataWindowPieForm";
import type { DataScatterProps, DataPieProps } from "../MainWindow/types";
type CombinedProps = DataScatterProps & DataPieProps & { chartDisplay: string };

export const DataWindow = ({
  xAxisScatter,
  setXaxisScatter,
  yAxisScatter,
  setYaxisScatter,
  setChartType,
  setNumericPieValues,
  setLegendPieValues,
  chartDisplay,
}: CombinedProps) => {
  return (
    <div className="data-window-border">
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
