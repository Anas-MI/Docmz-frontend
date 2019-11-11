import React, { Component } from "react";
import { Row, Col,Button, Divider } from "antd";
import img from "../../../../images/doctor.png";
export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  startForm = ()=>{
    this.props.startForm();
  }
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col span={12} className="welcome-screen__wrapper">
          <img
              src={img}
              className="welcome-screen__logo"
            />
              <h1 className="welcome-screen__title">Welcome To DocMZ</h1>
              <p>Let's get your account set up. It will take a minute.  </p>
              <Button className="welcome-screen__btn" onClick={this.startForm} type="primary">Get Started</Button>
              <Divider className="welcome-screen__divider" />
              <p className="welcome-screen__footer-text">By Continuing, You agree to the <a href="#" className="welcome-screen__footer-link">Terms of Service</a> and <a href="#" className="welcome-screen__footer-link">Privacy Policy</a></p>
          </Col>
        </Row>
      </div>
    );
  }
}
