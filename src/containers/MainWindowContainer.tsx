import { connect } from "react-redux";
import { MainWindow } from "../pages/MainWindow/MainWindow";

const mapStateToProps = (state: any) => ({
  chartDisplay: state.chartDisplay,
  headerDisplay: state.headerDisplay,
});

export default connect(mapStateToProps)(MainWindow);
