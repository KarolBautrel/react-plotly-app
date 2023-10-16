import { SET_HEADER_DISPLAY } from "../actions/headerActions";

const initialState = "WYKRES KOLOWY";

const headerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_HEADER_DISPLAY:
      return action.payload;
    default:
      return state;
  }
};

export default headerReducer;
