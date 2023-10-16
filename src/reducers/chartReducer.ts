import { SET_CHART_DISPLAY } from "../actions/chartActions";

const initialState = "pie";

const chartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CHART_DISPLAY:
      return action.payload;
    default:
      return state;
  }
};

export default chartReducer;
