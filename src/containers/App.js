import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => {
  return {
    layers: state.layers,
    configuration: state.configuration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadIPC: values => {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
