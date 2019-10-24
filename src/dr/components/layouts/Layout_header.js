import React, { Component } from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import Availability_drower from "../objects/availability/Availability_drower";
import { Link } from "react-router-dom";
import DrLogo from "../dr-logo/DrLogo";
export default class Layout_header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showDrawer = () => {
    console.log("drower show");
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  };
  render() {
    const { SubMenu } = Menu;
    const { visible } = this.state;
    return (
      <div>
        <DrLogo />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>
              <Link to="/dr">Dashboard</Link>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="control" />
                <span>Settings</span>
              </span>
            }
          >
            <Menu.Item key="3" onClick={this.showDrawer}>
              Availability
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/dr/calendar">Availability Calendar</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="12">
            <Icon type="pie-chart" />
            <span>
              <Link to="/dr/patients/single">Patients</Link>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
        <Availability_drower
          visible={visible}
          onClose={() => {
            this.onClose();
          }}
        />
      </div>
    );
  }
}
