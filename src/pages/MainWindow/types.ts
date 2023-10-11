export type DataProps = {
  xAxisScatter: number[];
  setXaxisScatter: React.Dispatch<React.SetStateAction<number[]>>;
  yAxisScatter: number[];
  setYaxisScatter: React.Dispatch<React.SetStateAction<number[]>>;
  xAxisbar: number[];
  setXAxisbar: React.Dispatch<React.SetStateAction<number[]>>;
  yAxisbar: number[];
  setYAxisbar: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ChartProps = {
  xAxisScatter: number[];
  yAxisScatter: number[];
  xAxisbar: number[];
  yAxisbar: number[];
};
