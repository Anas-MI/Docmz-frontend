import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Drawer, Layout, Menu, Dropdown, Row, Col, Button } from "antd";
import { AnimateOnChange } from "react-animation";
import "./customheader.css";
import Login_drawer from "../login/Login_drawer";
import LoginForm from "../../components/Login/LoginForm";
import Login_type from "../../pages/login/Login_type";
import drImage from "../../images/doctor.svg"
import patientImage from "../../images/patient.svg"

const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        <Link to="/Patient">Settings</Link>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        <Link to="/Appointments">Appointments</Link>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
        href="#"
        onClick={() => {
          logoutPatient();
        }}
      >
        Logout
      </a>
    </Menu.Item>
  </Menu>
);
function logoutPatient() {
  localStorage.removeItem("patient");
}
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      placement: "top",
      toggle: false,
      toggleDr:false,
      loginFormVisible: false,
      userDetails: JSON.parse(localStorage.getItem("patient"))
        ? JSON.parse(localStorage.getItem("patient"))
        : false
    };
  }
  toggleDown() {
    this.setState({
      toggle: !this.state.toggle,
      toggleDr: false
    });
  }
  toggleDownDr() {
    this.setState({
      toggleDr: !this.state.toggleDr,
      toggle: false,
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { userDetails, loginFormVisible ,toggle,toggleDr} = this.state;
    return (
      <>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            // backgroundColor: "#ffffff",
            // borderBottom: "1px solid #e8e8e8"
          }}
        >
          <div className="logo doctor-logo-home">
            <h4>LOGO</h4>
          </div>
          <div className="custom_ap_menu">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "62px", float: "right" }}
          >
            <Menu.Item key="1">List your practice on Docmz &nbsp; | </Menu.Item>
            {userDetails && userDetails._id ? (
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link ant-dropdown-link-home">
                  {userDetails.name} &nbsp; <Icon type="down" />
                </a>
              </Dropdown>
            ) : (
              <Menu.Item
                key="2"
                onClick={() => {
                  this.showDrawer();
                }}
              >
                {" "}
                Log in
              </Menu.Item>
            )}
          </Menu>
          </div>
        </Header>
        {/* code for drawer open and close start */}
        <Drawer
          title="Login Page"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          height={"100vh"}
          mask={false}
          closable={true}
        >
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            className="login-wrapper"
          >
            <Col xs={24} sm={24} md={12} lg={8} xl={12}>
              <Row>
                <Col span="24">
                  {/* <Icon type={'user'} style={{ fontSize: "35px" }} /> */}
                  <img src={patientImage} className="login-icon-image"/>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                  <h3 onClick={() => this.toggleDown()} className="login-title">
                    Patient Login
                  </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link to="/user-sign"><Button type="primary">Register as a Patient</Button> </Link>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="login-icon"
                >
                  <AnimateOnChange
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    durationOut="600"
                    style={{ width: "100%" }}
                  >
                    {toggle ? (
                      <Icon
                        type="arrow-up"
                        onClick={() => this.toggleDown()}
                        style={{ fontSize: "24px" }}
                      />
                    ) : (
                      <Icon
                        type="arrow-right"
                        onClick={() => this.toggleDown()}
                        style={{ fontSize: "24px" }}
                      />
                    )}
                  </AnimateOnChange>
                </Col>
              </Row>
              <Row>
                <Col span="20">
                  <AnimateOnChange
                    animationIn="popIn"
                    animationOut="fadeOut"
                    durationOut="600"
                    style={{ width: "100%" }}
                  >
                    {toggle ? 
                     <LoginForm
                     type="Patient"
                     history={this.props.history}
                     closeTab={loginFormVisible}
                   />
                    : ""}
                  </AnimateOnChange>
                </Col>
              </Row>
             
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row>
                <Col span="24">
                  {/* <Icon type={'plus'} style={{ fontSize: "35px" }} /> */}
                  <img src={drImage} className="login-icon-image"/>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                  <h3 onClick={() => this.toggleDownDr()} className="login-title">
                  Doctor  Login
                  </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link to="/signup"><Button type="primary">Register as a Doctor</Button> </Link>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="login-icon"
                >
                  <AnimateOnChange
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    durationOut="600"
                    style={{ width: "100%" }}
                  >
                    {toggleDr ? (
                      <Icon
                        type="arrow-up"
                        onClick={() => this.toggleDownDr()}
                        style={{ fontSize: "24px" }}
                      />
                    ) : (
                      <Icon
                        type="arrow-right"
                        onClick={() => this.toggleDownDr()}
                        style={{ fontSize: "24px" }}
                      />
                    )}
                  </AnimateOnChange>
                </Col>
              </Row>
              <Row>
                <Col span="20">
                  <AnimateOnChange
                    animationIn="popIn"
                    animationOut="fadeOut"
                    durationOut="600"
                    style={{ width: "100%" }}
                  >
                    {toggleDr ? 
                     <LoginForm
                     type="Doctor"
                     history={this.props.history}
                    
                   />
                    : ""}
                  </AnimateOnChange>
                </Col>
              </Row>
             
            </Col>
          </Row>
        </Drawer>
        {/* code for drawer open and close end */}
      </>
    );
  }
}

export default Navbar;
