import React from "react";
import type { ChartProps } from "../../MainWindow/types";
import Plot from "react-plotly.js";

export const ScatterBarChart = ({
  xAxisScatter,
  yAxisScatter,
  chartType,
}: ChartProps) => {
  return (
    <div>
      <Plot
        data={[
          {
            x: xAxisScatter ? xAxisScatter : [1, 2, 3],
            y: yAxisScatter ? yAxisScatter : [1, 2, 3],
            type: chartType ? chartType : "bar",
            mode: "lines",
            marker: { color: "green" },
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
