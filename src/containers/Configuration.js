import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Configuration from "../screens/Configuration";
import * as actionCreators from "../actions/configuration";

const mapStateToProps = state => {
  return {
    configuration: state.configuration
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
