import { useState } from "react";
import type { DataScatterProps } from "../MainWindow/types";
import { generateDateList } from "../../utils/dateListGenerator";
export const DataWindowScatterForm = ({
  setXaxisScatter,
  yAxisScatter,
  setYaxisScatter,
  setChartType,
}: DataScatterProps) => {
  const [fromDatetime, setFromDatetime] = useState("");
  const [toDatetime, setToDatetime] = useState("");
  const [localYAxisScatter, setLocalYAxisScatter] = useState(
    yAxisScatter.join(",")
  );
  const [localChartType, setLocalChartType] = useState("");

  const onSubmit = () => {
    const dateRange = generateDateList(fromDatetime, toDatetime);
    setXaxisScatter(dateRange);
    setYaxisScatter(localYAxisScatter.split(",").map(Number));
    setChartType(localChartType);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div style={{ width: "100%" }}>
            <label>From:</label>
            <input
              type="date"
              value={fromDatetime}
              onChange={(e) => setFromDatetime(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "10px" }}>
            <label>To:</label>
            <input
              type="date"
              value={toDatetime}
              onChange={(e) => setToDatetime(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Y Axis Scatter:</label>
          <input
            type="text"
            value={localYAxisScatter}
            onChange={(e) => setLocalYAxisScatter(e.target.value)}
          />
        </div>
        <div>
          <label>Chart Type:</label>
          <select
            value={localChartType}
            onChange={(e) => setLocalChartType(e.target.value)}
          >
            <option value="bar">Bar</option>
            <option value="scatter">Scatter</option>
            <option value="pie">Pie</option>
          </select>
        </div>
        <button type="button" onClick={onSubmit}>
          Update Values
        </button>
      </form>
    </div>
  );
};
