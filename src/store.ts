import { createStore, combineReducers } from "redux";
import chartReducer from "./reducers/chartReducer";
import headerReducer from "./reducers/headerReducer";

const rootReducer = combineReducers({
  chartDisplay: chartReducer,
  headerDisplay: headerReducer,
});

const store = createStore(rootReducer);

export default store;
