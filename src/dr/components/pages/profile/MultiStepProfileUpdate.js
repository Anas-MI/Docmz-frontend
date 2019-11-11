import React, { Component } from "react";
import { Row, Col, Progress, Button , Icon } from "antd";
import { Formik } from "formik";
import FirstStapForm from "../../objects/drProfileForm/FirstStapForm";
import MultiStepProfileForm from "../../objects/drProfileForm/MultiStepProfileForm";
import SecondStepForm from "../../objects/drProfileForm/secondStepForm";
import ThirdStepForm from "../../objects/drProfileForm/ThirdStepForm";
import FourStepForm from "../../objects/drProfileForm/FourStepForm";
import WelcomeScreen from "../../objects/drProfileForm/WelcomeScreen";
import { WELLCOME_PANEL_HEADING } from "../../../../constants/texts";
export default class MultiStepProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
      step: 3,
      steps: [],
      activeIndex: 0,
      welcome: true
    };
  }
  submitForm = () =>{
    const {activeIndex}=this.state;
    console.log('xxxxxxx',{ ref: this.refs});
    console.log('final-step api integration')
    // console.log(activeIndex)
   // this.refs.activityForm.getWrappedInstance().submit();
    // document.getElementById("from-"+activeIndex).click(); activityForm
  }
  handleSubmit = formProps => {
    this.setState({
      activeIndex: 1
    });
    console.log({
      formProps
    });
  };
  handleSubmit2 = formProps => {
    console.log({
      formProps
    });
    this.setState({
      activeIndex: 2
    });
  };
  handleSubmit3 = formProps => {
    console.log({
      formProps
    });
    this.setState({
      activeIndex: 3
    });
  };
  handleSubmit4 = formProps => {
    this.setState({
      activeIndex: 4
    });
    // alert("done");
    
  };
  render() {
    const { welcome, activeIndex } = this.state;
    const progressNo =
      activeIndex == 0
        ? 1
        : activeIndex === 1
        ? 25
        : activeIndex === 2
        ? 50
        : activeIndex === 3
        ? 75
        : activeIndex === 4
        ? 100
        : 0;
    return (
      <div>
        <MultiStepProfileForm activeIndex={welcome ? 0 : 1}>
          <WelcomeScreen
            startForm={() => {
              this.setState({ welcome: false });
            }}
          />
          <div>
          <div className={componentClass + "__progress-bar"}>
            <Progress
              className="progress-bar-speed"
              percent={progressNo}
              showInfo={false}
              strokeWidth={3}
              className={componentClass + "__progress"}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
            />
          </div>
          <div className={componentClass + "__wrapper"}>
            <div className={componentClass + "__heading"}>
              {WELLCOME_PANEL_HEADING[activeIndex]}
            </div>
            <div className={componentClass + "__form-body"}>
              <MultiStepProfileForm activeIndex={activeIndex} 
              preViewButton={()=>{this.setState({activeIndex:activeIndex-1})}}>
                <Row className={componentClass}>
                  <Col span={24}>
                    <Formik
                      initialValues={this.state}
                      onSubmit={this.handleSubmit}
                      render={FirstStapForm}
                      ref="activityForm"
                    />
                  </Col>
                </Row>
                <Row className={componentClass}>
                  <Col span={24}>
                    <Formik
                      initialValues={this.state}
                      onSubmit={this.handleSubmit2}
                      render={SecondStepForm}
                    />
                  </Col>
                </Row>
                <Row className={componentClass}>
                  <Col span={24}>
                    <Formik
                      initialValues={this.state}
                      onSubmit={this.handleSubmit3}
                      render={ThirdStepForm}
                    />
                  </Col>
                </Row>
                <Row className={componentClass} >
                  <Col span={24}>
                    <Formik
                      initialValues={this.state}
                      onSubmit={this.handleSubmit4}
                      render={FourStepForm}
                    />
                  </Col>
                </Row>
              </MultiStepProfileForm>
              <Row>
                <Col xs={24} className="button_wrapper" type="flex" align="bottom" >
                {activeIndex > 0 ?
                  <Button type="primary" 
                  onClick={()=>{this.setState({activeIndex:activeIndex-1})}}>
                    <Icon type="arrow-left" /> Back 
                  </Button>
                  :''}
                  <Button className="btn-right"
                  // onClick={()=>{this.setState({activeIndex:activeIndex+1})}}
                   onClick={()=>this.submitForm()} 
                    type="primary">
                    {/* Next <Icon type="arrow-right" /> */}
                    Submit
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        </MultiStepProfileForm>
  
      </div>
    );
  }
}

const componentClass = "c-multistep-update-profile";
