import { useState } from "react";
import type { DataPieProps } from "../MainWindow/types";

export const DataWindowPieForm = ({
  setNumericPieValues,
  setLegendPieValues,
}: DataPieProps) => {
  const [numericLocalValues, setNumericLocalValues] = useState<string>("");
  const [legendLocalData, setLegendLocalData] = useState<string>("");

  const onSubmit = () => {
    setNumericPieValues(numericLocalValues.split(",").map(Number));
    setLegendPieValues(legendLocalData.split(",").map(String));
    console.log(legendLocalData.split(",").map(String));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div style={{ width: "100%" }}>
            <label>Numeric Values:</label>
            <input
              type="text"
              value={numericLocalValues}
              onChange={(e) => setNumericLocalValues(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", marginBottom: "10px" }}>
            <label>Items:</label>
            <input
              type="text"
              value={legendLocalData}
              onChange={(e) => setLegendLocalData(e.target.value)}
            />
          </div>
        </div>

        <button type="button" onClick={onSubmit}>
          Update Values
        </button>
      </form>
    </div>
  );
};
