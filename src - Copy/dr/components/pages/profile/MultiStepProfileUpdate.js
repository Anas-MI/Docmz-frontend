import React, { Component } from "react";
import { Row, Col, Progress, Button, Icon } from "antd";
import { Formik } from "formik";
import FirstStapForm from "../../objects/drProfileForm/FirstStapForm";
import MultiStepProfileForm from "../../objects/drProfileForm/MultiStepProfileForm";
import SecondStepForm from "../../objects/drProfileForm/secondStepForm";
import ThirdStepForm from "../../objects/drProfileForm/ThirdStepForm";
import FourStepForm from "../../objects/drProfileForm/FourStepForm";
import WelcomeScreen from "../../objects/drProfileForm/WelcomeScreen";
import { updateProfile } from "../../../../services/api";
import { WELLCOME_PANEL_HEADING } from "../../../../constants/texts";
export default class MultiStepProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
      step: 3,
      steps: [],
      activeIndex: 0,
      welcome: true,
      docInfo: JSON.parse(localStorage.getItem("user")),
      isLoading: true
    };
  }
  componentDidMount() {
    const { docInfo } = this.state;
    const steps = docInfo.steps;
    const activeStapIndex = steps.indexOf(0);
    if (activeStapIndex >= 1) {
      this.setState({
        welcome: false,
        activeIndex: activeStapIndex,
        isLoading:false
      });
    }else{
      this.setState({
        isLoading:false
      });
    }
  }
  submitForm = () => {
    const { activeIndex } = this.state;
    console.log("xxxxxxx", { ref: this.refs });
    console.log("final-step api integration");
    // console.log(activeIndex)
    // this.refs.activityForm.getWrappedInstance().submit();
    // document.getElementById("from-"+activeIndex).click(); activityForm
  };
  handleSubmit = formProps => {
    const { docInfo } = this.state;
    const data = {
      experience: formProps.experience,
      id: docInfo._id,
      dob: formProps.dob._d,
      steps: [1, 0, 0, 0]
    };
    updateProfile(data)
      .then(res => {
        if (res.data && res.data.status) {
          this.setState({
            activeIndex: 1,
          });
        } else{
          console.log({ res });
        }
      })
      .catch(err => {
        console.log({ err });
      });
  };
  handleSubmit2 = formProps => {
     const { docInfo } = this.state;
    const data = {
      country: formProps.country,
      id: docInfo._id,
      establishmentName: formProps.establishmentName,
      steps: [1, 1, 0, 0]
    };
    updateProfile(data)
      .then(res => {
        if (res.data && res.data.status) {
          this.setState({
            activeIndex: 2,
          });
        } else{
          console.log({ res });
        }
      })
      .catch(err => {
        console.log({ err });
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
    // this.setState({
    //   activeIndex: 4
    // });
    const { docInfo } = this.state;
    const data = {
      fee: formProps.price,
      id: docInfo._id,
      steps: [1, 1, 1, 1]
    };

    updateProfile(data)
      .then(res => {
        if (res.data && res.data.status) {
          this.props.history.push("/dr/dashbord")
        } else{
          console.log({ res });
        }
      })
      .catch(err => {
        console.log({ err });
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
                <MultiStepProfileForm
                  activeIndex={activeIndex}
                  preViewButton={() => {
                    this.setState({ activeIndex: activeIndex - 1 });
                  }}
                >
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
                        onReset={() => {
                          this.setState({
                            activeIndex: activeIndex - 1
                          });
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className={componentClass}>
                    <Col span={24}>
                      <Formik
                        backButton={() => {
                          this.setState({
                            activeIndex: activeIndex - 1
                          });
                        }}
                        initialValues={this.state}
                        onSubmit={this.handleSubmit3}
                        onReset={() => {
                          this.setState({
                            activeIndex: activeIndex - 1
                          });
                        }}
                        render={ThirdStepForm}
                      />
                    </Col>
                  </Row>
                  <Row className={componentClass}>
                    <Col span={24}>
                      <Formik
                        backButton={() => {
                          this.setState({
                            activeIndex: activeIndex - 1
                          });
                        }}
                        initialValues={this.state}
                        onSubmit={this.handleSubmit4}
                        onReset={() => {
                          this.setState({
                            activeIndex: activeIndex - 1
                          });
                        }}
                        render={FourStepForm}
                      />
                    </Col>
                  </Row>
                </MultiStepProfileForm>
                {/* <Row>
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
                    Submit
                  </Button>
                </Col>
              </Row> */}
              </div>
            </div>
          </div>
        </MultiStepProfileForm>
      </div>
    );
  }
}

const componentClass = "c-multistep-update-profile";
