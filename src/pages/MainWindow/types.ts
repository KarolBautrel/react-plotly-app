export type DataProps = {
  xAxisScatter: string[];
  setXaxisScatter: React.Dispatch<React.SetStateAction<string[]>>;
  yAxisScatter: number[];
  setYaxisScatter: React.Dispatch<React.SetStateAction<number[]>>;
  chartType?: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
};

export type ChartProps = {
  xAxisScatter: string[];
  yAxisScatter: number[];
  chartType?: any;
};
