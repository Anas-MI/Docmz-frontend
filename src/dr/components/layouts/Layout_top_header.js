import React, { Component } from "react";
import { Row, Col, notification } from "antd";

export default class Layout_header extends Component {
  constructor(props) {
    super(props);
    this.state={
      docInfo:JSON.parse(localStorage.getItem("user")),
      visible:true
    }
  }
  componentDidMount(){
    const {docInfo}=this.state
    if(!docInfo._id){
      this.props.history.push("/login")
      }
      this.toggleWelcom();
    }
    toggleWelcom = ()=>{
      const { docInfo , visible } = this.state;
    console.log("xxxx",{docInfo})
    const drName=docInfo && docInfo.basic && docInfo.basic.name ? 'Welcome to dr. ' + docInfo.basic.name+  ' ('+docInfo.basic.credential+')' :''
      notification.open({
        message: 'Welcome Notification',
        description:drName
          ,
        onClick: () => {
          // console.log('Notification Clicked!');
        },
      });
    }
  render() {
    const { docInfo , visible } = this.state;
    
    const drName=docInfo && docInfo.basic && docInfo.basic.name ? docInfo.basic.name :''
    
    return (
      <div className="c-layout-header">
       
        <Row className="c-layout-header__wrapper">
          <Col span={4} className="c-layout-header__col-time">
            <h3>Tuesday , 10.17 AM</h3>
          </Col>
          <Col span={6} offset={14} className="c-layout-header__col-user">
            <a>Dr. {drName} </a>
            {"  "}
            <img src="../../../images/dr-demo-5.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}
