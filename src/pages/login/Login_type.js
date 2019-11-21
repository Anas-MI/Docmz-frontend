import React, { PureComponent } from "react";
import { Icon, Row, Col } from "antd";
// import { fadeIn } from 'react-animations'
import { AnimateOnChange } from 'react-animation'
export default class Login_type extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            toggle:false,
         }
    }
    toggleDown(){
        this.setState({
            toggle:!this.state.toggle
        })
    }
  render() {
    const { icon, title, details, children } = this.props;
    const {toggle} = this.state
    return (
      <div>
        <Row>
          <Col span="24">
            <Icon type={icon} style={{ fontSize: "35px" }} />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={8} xl={12}>
            <h3 onClick={()=>this.toggleDown()} className="login-title">{title}</h3>
            <p>{details}</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="login-icon">
          <AnimateOnChange
               animationIn="fadeIn" animationOut="fadeOut"
               durationOut="600"
               style={{width:"100%"}}
            >
           {toggle ? 
            <Icon type="arrow-up" onClick={()=>this.toggleDown()} style={{ fontSize: "24px" }} />
             :
             <Icon type="arrow-right" onClick={()=>this.toggleDown()} style={{ fontSize: "24px" }} />}
            </AnimateOnChange>
          </Col>
        </Row>
        <Row>
          <Col span="20">
          <AnimateOnChange
               animationIn="popIn" animationOut="fadeOut"
               durationOut="600"
               style={{width:"100%"}}
            >
            {toggle ? 
           
               children  :''}
               </AnimateOnChange>
           </Col>
        </Row>
      </div>
    );
  }
}
