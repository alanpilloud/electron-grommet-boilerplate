import React, { Component } from "react";
import Sidebar from "grommet/components/Sidebar";
import GrommetMenu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import HomeIcon from "grommet/components/icons/base/Home";
import ConfigureIcon from "grommet/components/icons/base/Configure";

class Menu extends Component {
  getRouteStyle(routeName) {
    let activeBorderColor = "transparent";
    let activeRoute = this.props.activeRoute;

    if (activeRoute === "") {
      activeRoute = "/home";
    }

    if (activeRoute === routeName) {
      activeBorderColor = "steelBlue";
    }

    return {
      borderColor: activeBorderColor
    };
  }

  render() {
    return (
      <Sidebar style={{ width: "auto" }} justify="between" colorIndex="light-2">
        <GrommetMenu primary={true}>
          <Anchor label="Home" icon={<HomeIcon />} href="#/home" style={this.getRouteStyle("/home")} />
          <Anchor
            label="Configuration"
            icon={<ConfigureIcon />}
            href="#/configuration"
            style={this.getRouteStyle("/configuration")}
          />
        </GrommetMenu>
      </Sidebar>
    );
  }
}

export default Menu;
