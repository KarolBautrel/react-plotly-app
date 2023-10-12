import { useContext } from "react";
import { ChartContext } from "./ChartDisplayContext";
export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error(
      "useChartContext must be used within a ChartContext.Provider"
    );
  }
  return context;
};
