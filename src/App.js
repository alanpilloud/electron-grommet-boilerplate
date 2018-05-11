import React, { Component } from "react";
import GrommetApp from "grommet/components/App";
import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import Menu from "./components/Menu";
import DashboardScreen from "./screens/Dashboard";
import ConfigurationContainer from "./containers/Configuration";
var ipcRenderer = require("electron").ipcRenderer;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    ipcRenderer.send("load");

    // change the route state when the url is changed
    window.addEventListener("hashchange", () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    // Get the screen to display from the chosen route
    let Screen;
    switch (this.state.route) {
      case "/configuration":
        Screen = ConfigurationContainer;
        break;
      default:
        Screen = DashboardScreen;
    }

    return (
      <GrommetApp>
        <Split flex="right">
          <Menu activeRoute={this.state.route} />
          <Box pad="medium">
            <Screen />
          </Box>
        </Split>
      </GrommetApp>
    );
  }
}

export default App;
