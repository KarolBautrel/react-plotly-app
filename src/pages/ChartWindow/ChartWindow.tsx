import { useState } from "react";
import Plot from "react-plotly.js";
import Button from "@mui/material/Button";
import "./ChartWindow.css";
import type { ChartProps } from "../MainWindow/types";

export const ChartWindow = ({
  xAxisScatter,
  yAxisScatter,
  xAxisbar,
  yAxisbar,
}: ChartProps) => {
  return (
    <div className="chart-window-border">
      <Plot
        data={[
          {
            x: xAxisScatter ? xAxisScatter : [1, 2, 3],
            y: yAxisScatter ? yAxisScatter : [1, 2, 3],
            type: "scatter",
            mode: "lines",
            marker: { color: "green" },
          },
          {
            type: "bar",
            x: xAxisbar ? xAxisbar : [1, 2, 3],
            y: yAxisbar ? yAxisbar : [1, 2, 3],
          },
        ]}
        layout={{
          width: 1000,
          height: 590,
          title: "Jebac dokodu i sieradzinskiego",
        }}
      />
    </div>
  );
};
