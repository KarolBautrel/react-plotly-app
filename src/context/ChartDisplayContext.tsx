import { Dispatch, SetStateAction, createContext } from "react";
interface ChartContextValue {
  chartDisplay: string;
  setChartDisplay: Dispatch<SetStateAction<string>>;
}
export const ChartContext = createContext<ChartContextValue | undefined>(
  undefined
);
