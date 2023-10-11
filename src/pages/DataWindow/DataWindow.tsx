import "./DataWindow.css";
import { DataWindowForm } from "./DataWindowForm";
import type { DataProps } from "../MainWindow/types";
export const DataWindow = ({
  xAxisScatter,
  setXaxisScatter,
  yAxisScatter,
  setYaxisScatter,
  setChartType,
}: DataProps) => {
  return (
    <div className="data-window-border">
      <DataWindowForm
        setChartType={setChartType}
        xAxisScatter={xAxisScatter}
        setXaxisScatter={setXaxisScatter}
        yAxisScatter={yAxisScatter}
        setYaxisScatter={setYaxisScatter}
      />
    </div>
  );
};
