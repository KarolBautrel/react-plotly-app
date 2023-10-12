import Plot from "react-plotly.js";
import type { ChartPieProps } from "../../MainWindow/types";

export const PieChart = ({
  legendPieValues,
  numericPieValues,
}: ChartPieProps) => {
  return (
    <div>
      <Plot
        data={[
          {
            values: numericPieValues ? numericPieValues : [1, 2, 5],
            labels: legendPieValues
              ? legendPieValues
              : ["nie", "ma", "wynikow"],
            type: "pie",
          },
        ]}
        layout={{
          width: 1000,
          height: 590,
          title: "Training Plot",
        }}
      />
    </div>
  );
};
