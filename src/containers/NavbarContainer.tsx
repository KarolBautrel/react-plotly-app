import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { setChartDisplay } from "../actions/chartActions";
import { setHeaderDisplay } from "../actions/headerActions";
import { Navbar } from "../components/Navbar/Navbar";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setChartDisplay: (type: string) => dispatch(setChartDisplay(type)), // zmienione z handleSetChartDisplay na setChartDisplay
  setHeaderDisplay: (type: string) => dispatch(setHeaderDisplay(type)), // zmienione z handleSetHeaderDisplay na setHeaderDisplay
});

export default connect(null, mapDispatchToProps)(Navbar);
