import React, { Component } from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import Availability_drower from "../objects/availability/Availability_drower";
import { Link } from "react-router-dom";
import DrLogo from "../dr-logo/DrLogo";
import { isRequired } from "../../../components/Fields/ValidateFields";
import './newlayoutap.css'
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
      <div className="custom-sidebar-icon-ap">
        <DrLogo small={this.props.isOpen} />
        <Menu className="doctor-nav" theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            {/* <Icon type="pie-chart" /> */}
            <Link to="/dr">
            <img src={require('./time.png')} />
            <span>
              
                Appointments
            </span>
            </Link>
          </Menu.Item>
          {/* <SubMenu
            key="2"
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
          </SubMenu> */}
          <Menu.Item key="5">
            {/* <Icon type="pie-chart" /> */}
            <Link to="/dr/patients/single">
            <img src={require('./dropper.png')} />
            <span>
            Patients
            </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            {/* <Icon type="pie-chart" /> */}
            <Link to="/dr/patients/single">
            <img src={require('./payment-method.png')} />

            <span>
             Payments
            </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.showDrawer}>
          {/* <Icon type="pie-chart" /> */}
          <img src={require('./available.png')} />
              Availability
            </Menu.Item>
            <Menu.Item key="4">
            {/* <Icon type="pie-chart" /> */}
            <Link to="/dr/calendar">
            <img src={require('./agenda.png')} />
            <span>
             Calendar
              </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
            {/* <Icon type="history" /> */}
            <Link to="/dr/history">
            <img src={require('./folder.png')} />
            <span>History</span></Link>
          </Menu.Item>
          <Menu.Item key="11" className="custom-footer-icon-ap">
            {/* <Icon type="history" /> */}
            <img src={require('./folderpref.png')} />
            <span>Preferences</span>
          </Menu.Item>
          <Menu.Item key="12" className="custom-footer-icon-ap">
            {/* <Icon type="history" /> */}
            <img src={require('./social-care.png')} />
            <span>Help & Support</span>
          </Menu.Item>
          {/* <SubMenu
            key="6"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
          {/* <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item> */}
         
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
