export type DataScatterProps = {
  xAxisScatter: string[];
  setXaxisScatter: React.Dispatch<React.SetStateAction<string[]>>;
  yAxisScatter: number[];
  setYaxisScatter: React.Dispatch<React.SetStateAction<number[]>>;
  chartType?: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
};

export type DataPieProps = {
  setNumericPieValues: React.Dispatch<React.SetStateAction<number[]>>;
  setLegendPieValues: React.Dispatch<React.SetStateAction<string[]>>;
};
export type ChartPieProps = {
  numericPieValues: number[];
  legendPieValues: string[];
};

export type ChartScatterProps = {
  xAxisScatter: string[];
  yAxisScatter: number[];
  chartType?: any;
};
