import React, { Component } from "react";
import { Row, Col, notification } from "antd";

export default class Layout_header extends Component {
  constructor(props) {
    super(props);
    this.state={
      docInfo:JSON.parse(localStorage.getItem("user")),
      visible:false
    }
  }
  componentDidMount(){
    const {docInfo}=this.state
    if( !docInfo){
      this.props.history.push("/login")
      }
      
    }
    // toggleWelcom = ()=>{
    //   const { docInfo , visible } = this.state;
    // const drName=docInfo && docInfo.basic && docInfo.basic.name ? 'Welcome Dr. ' + docInfo.basic.name+  ' ('+docInfo.basic.credential+')' :''
    //   notification.open({
    //     message: 'Welcome Notification',
    //     description:drName
    //       ,
    //     onClick: () => {
    //       // console.log('Notification Clicked!');
    //       this.setState({
    //         visible : false
    //       })
    //     },
    //   });
    // }
  render() {
    // if(this.state.visible) {
    //   this.toggleWelcom();
    // }
    

    const { docInfo , visible } = this.state;
    
    const drName=docInfo && docInfo.basic && docInfo.basic.name ? docInfo.basic.name :''
    
    return (
     
      <div className="c-layout-header">
       
        <Row type="flex" align="middle" justify="space-between" className="c-layout-header__wrapper">
          <Col className="c-layout-header__col-time">
            <h3 className="c-layout-header__time-text">Tuesday , 10.17 AM</h3>
          </Col>
          <Col className="c-layout-header__col-user">
            <a className="c-layout-header__user-test">Dr. {drName.toLowerCase()} </a>
            {"  "}
            <img src="../../../images/dr-demo-5.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}
