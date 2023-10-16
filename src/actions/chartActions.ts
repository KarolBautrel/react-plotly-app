export const SET_CHART_DISPLAY = "SET_CHART_DISPLAY";

export const setChartDisplay = (display: string) => {
  return {
    type: SET_CHART_DISPLAY,
    payload: display,
  };
};
