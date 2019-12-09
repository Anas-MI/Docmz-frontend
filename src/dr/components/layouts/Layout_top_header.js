import React, { Component } from "react";
import { Row, Col, Affix } from "antd";
import Clock from 'react-live-clock';
import classNames from 'classnames'
export default class Layout_header extends Component {
  constructor(props) {
    super(props);
    this.state={
      docInfo:JSON.parse(localStorage.getItem("user")),
    }
  }
  componentDidMount(){
    const {docInfo}=this.state
    if( !docInfo){
      this.props.history.push("/login")
      }
    }
  render() {
    const { docInfo } = this.state;
    const drName=docInfo && docInfo.basic && docInfo.basic.name ? docInfo.basic.name :''
    return (
     
      <div className="c-layout-header">
       <Affix offsetTop={0} >
        <Row type="flex" align="middle" justify="space-between" className="c-layout-header__wrapper">
          <Col className="c-layout-header__col-time">
            <h3 className="c-layout-header__time-text"><Clock format={'dddd, hh:mm A'} ticking={true} /></h3>
          </Col>
          <Col>
            <div className="c-layout-header__heading-box">
              <Row type="flex" justify="center">
                <Col>
                  <HeadingText hasBorder={true} heading="0">Appointments</HeadingText>
                </Col>
                <Col>
                  <HeadingText hasBorder={true} heading="0">Confirmed Revenue</HeadingText>
                </Col>
                <Col>
                  <HeadingText heading="0">Projected Revenue</HeadingText>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="c-layout-header__col-user">
            <span className="c-layout-header__user-test">Dr. {drName.toLowerCase()} </span>
            {"  "}
            <img src="../../../images/dr-demo-5.jpg" alt="user" />
          </Col>
        </Row>
        </Affix>
      </div>
    );
  }
}

const HeadingText = ({heading, children, hasBorder}) => (
  <div className={classNames("c-layout-header__heading-wrapper", {
    "c-layout-header__heading-wrapper--border-rgt": hasBorder
  })} >
    <h4 className="c-layout-header__heading">{heading}</h4>
    <p className="c-layout-header__text">{children}</p>
  </div>
)