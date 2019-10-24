import React, { Component } from "react";
import { Row, Col, Avatar } from "antd";

export default class Layout_header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-layout-header">
        <Row className="c-layout-header__wrapper">
          <Col span={4} className="c-layout-header__col-time">
            <h3>Tuesday , 10.17 AM</h3>
          </Col>
          <Col span={4} offset={16} className="c-layout-header__col-user">
            <a>Dr. Marcus Barnes </a>
            {"  "}
            <img src="../../../images/dr-demo-5.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}
