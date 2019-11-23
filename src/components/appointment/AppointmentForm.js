import React, { useState } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Container,
  Row,
  Col,
  Avatar,
  Steps,
  List,
  Typography,
  Divider,
  Radio,
  Tooltip,
  Cascader,
  Select,
  Checkbox,
  AutoComplete,
  Carousel
   
} from "antd";
import {  Field } from "formik";
import FormStep1 from "./FormStep1";
import { patientCardList } from "../../services/api/patient";
import PaymentCard from "../../components/payment/PaymentCard";
import AppointmentPayReview from "./AppointmentPayReview";
import AppointmentDoctor from "./AppointmentDoctor";
import './newappointmentap.css'

const stepStyle = {
  marginBottom: 37,
  boxShadow: "0px -1px 0 0 #e8e8e8 inset"
};
let cards = [];
const getCardData = () => {
  const userDetails = JSON.parse(localStorage.getItem("patient"));
  patientCardList(userDetails.customerProfile)
    .then(res => {
      const { data } = res.data.data;
      cards = data;
    })
    .catch(err => {
      console.log({ err });
    });
};
// class AppointmentForm extends React.Component{ 
//   render () {
export default function AppointmentForm() {
  const FormOne = Form.create({ name: "appointment_form_one" })(FormStep1);
  const FormThree = Form.create({ name: "appointment_form_three" })(
    AppointmentPayReview
  );
  let formOne = React.createRef();
  const { Step } = Steps;
  const handleSubmit = () => {
    formOne.current.validateFields((err, values) => {
      console.log("ccc", { values });
      if (!err) {
        setFirstStapForm(values);
        console.log("Received values of form: ", values);
        setCurrentStep(1);
      }
    });
  };

  const onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  const cardDetailsWithNextStep = data => {
    setCardDetails(data);
    setCurrentStep(2);
  };

  const card = getCardData();
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [firstStapForm, setFirstStapForm] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [addCard, addCardToggle] = useState(false);
  const onStepChange = e => {
    if (e < currentStep) {
      setCurrentStep(e);
    }
  };
  const toggleCard = () => {
    addCardToggle(!addCard);
  };
  const setSavedCardData = data => {
    setCardDetails(data);
    setCurrentStep(3);
    console.log('currentstep', data.id)

  };
  const phonesubmit = e => {
    // setCardDetails(data);
    setCurrentStep(2);
  };
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  // const prefixSelector = getFieldDecorator('prefix', {
  //   initialValue: '86',
  // })(
  //   <Select style={{ width: 70 }}>
  //     <Option value="86">+86</Option>
  //     <Option value="87">+87</Option>
  //   </Select>,
  // );
  // const { Option } = Select
  // const { getFieldDecorator } = this.props.form;
  return (
    <div className="c-appointment-form">
      <div className="c-appointment-form__header ap-appointment-form-custom">
        <Steps
          type="navigation"
          size="small"
          current={currentStep}
          onChange={onStepChange}
          style={stepStyle}
        >
          <Step
            status={currentStep < 1 ? "finish" : "process"}
            title="Details"
          />
          <Step
            status={currentStep < 2 ? "finish" : "process"}
            title="Visit Type"
          />
          <Step
            status={currentStep < 3 ? "finish" : "process"}
            title="Payment"
          />
          <Step
            status={currentStep < 4 ? "finish" : "process"}
            title="Review and Pay"
          />

        </Steps>
      </div>

      {/* <div className="below-para-steps-custom-ap">
        <p>We just need a few details to make your appointment smooth</p>
        <Divider />
      </div> */}
      {currentStep === 0 && (
        <div>
          <Row>
            <Col span={24}>
              <p className="below-para-steps-custom-ap">We just need a few details to make your appointment smooth</p>
              <Divider />
            </Col>
          </Row>
          <Row type="flex">

            <Col span={12}>
              <div className="c-appointment-form__steps">
                <div className="c-appointment-form__step custom-ap-details-form-label">
                  <FormOne ref={formOne} />
                </div>
                <Button
                  type="primary"
                  className="ap-appointment-details-btn"
                  onClick={() => {
                    if (typeof formOne.current.submit === "function") {
                      formOne.current.submit(handleSubmit);
                    }
                  }}
                >
                  Next
              </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className="c-appointment-form__doctor-wrapper">
                <AppointmentDoctor doctor={{ name: "doctor name" }} time="1040 - 1240" />
              </div>
            </Col>
          </Row>
        </div>
      )}
      {currentStep === 1 && (
        <div className="second-step-custom-ap">
          <Row>
            <Col span={24}>
              <h2 >John, Let's get you taken care of</h2>

            </Col>
          </Row>
          <Row >
            <Col span={24} style={{ textAlign: 'center' }}>
              <p className="visit-type-para-ap">Which type of visit would you like?</p>
            </Col>

            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 5, offset: 7 }}>

              <Icon type="phone" className="second-step-custom-ap__icons" />

            </Col >
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 2 }}>
              <Icon type="mobile" className="second-step-custom-ap__icons"/>
            </Col>
            <Col span={24} align="middle">
              <p className="video-phone-para"><a href="#">Video vs Phone visits. Learn how they work</a></p>
            </Col>
           </Row>
           <Row >
           
           
            <Divider />
            <Col span={24} style={{ textAlign: 'center' }}>
              <p className="visit-type-para-ap">What's the best number to reach you during your visit?</p>
            </Col>
            <Col span={12} >
              <p className="second-step-custom-ap__phone">8562025363</p>
             
              
            </Col>
            <Col span={12}>
              {/* <p className="second-step-custom-ap_why-para_ap">Why do we need this?</p> */}
              <Tooltip title="We may reach out if there are changes to your visit.">
              <Icon type="question-circle" className="second-step-custom-ap__iconhelp" />
  </Tooltip>,
            </Col>

          </Row>
          <Row>
            <Col span={24}>
              <Button
                type="primary"
                className="ap-appointment-details-btn"
                onClick={() => phonesubmit()}
              >
                Next
              </Button>
            </Col>
          </Row>
          {/* <Row type="flex">
          <Col span={24}>
            <div className="c-appointment-form__steps">
              <div className="c-appointment-form__step">
                <div className="">
                  {addCard ? (
                    <PaymentCard
                      cvvOnCard={""}
                      expDateOnCard={""}
                      numberOnCard={""}
                      nameOnCard={""}
                      cardResponse={response => {
                        console.log("response", { response });
                      }}
                      transactionData={e => {
                        cardDetailsWithNextStep(e);
                      }}
                      saveOptional={true}
                      backButton={() => {
                        toggleCard();
                      }}
                    />
                  ) : (
                      <div className="custom-card-list-ap">
                      
                      
                        <List
                        className="custom-card-list-data-ap"
                          bordered
                          dataSource={cards}
                          renderItem={item => (
                       
                            

                       
                            <List.Item onClick={() => setSavedCardData(item)}>
                                
                               <p className="c-appointment-form__card-number">
                          
                                xxxx xxxx xxxx {item.last4}  
                          <span className="middle-content-date">{item.exp_month}/{item.exp_year}</span>
                                <span className="c-appointment-form__card-icon">
                                  <span style={{fontSize : '18px'}}>{item.brand}</span> - <Icon type="credit-card" />
                                </span>
                              
                              </p> 
                             
                            </List.Item>
                          )}
                        />
                        <Button
                          className="c-appointment-form__card-tgl-btn"
                          onClick={() => {
                            toggleCard();
                          }}
                        >
                          Add New <Icon type="plus" />
                        </Button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <Row>
            <Col span={24}>
              <p className="below-para-steps-custom-ap">We will not share your payment details</p>
              <Divider />
            </Col>
          </Row>
          <Row type="flex">
            <Col span={24}>
              <div className="c-appointment-form__steps">
                <div className="c-appointment-form__step">
                  <div className="">
                    {addCard ? (
                      <PaymentCard
                        cvvOnCard={""}
                        expDateOnCard={""}
                        numberOnCard={""}
                        nameOnCard={""}
                        cardResponse={response => {
                          console.log("response", { response });
                        }}
                        transactionData={e => {
                          cardDetailsWithNextStep(e);
                        }}
                        saveOptional={true}
                        backButton={() => {
                          toggleCard();
                        }}
                      />
                    ) : (
                        <div className="custom-card-list-ap">

<Carousel afterChange={onChange}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
      </div>
      <div>
      <h3>5</h3>
    </div>
  </Carousel>,
  {/* <ShowOnCard
                                cvvOnCard={''}
                                expDateOnCard={item.exp_month +'/'+item.exp_year}
                                numberOnCard={"xxxx xxxx xxxx "+item.last4}
                                nameOnCard={item.name}
                                transactionData=''
                              /> */}
                          {/* <List
                            className="custom-card-list-data-ap"
                            bordered
                            dataSource={cards}
                            renderItem={item => (




                              <List.Item onClick={() => setSavedCardData(item)}>
                            
                                <p className="c-appointment-form__card-number">

                                  xxxx xxxx xxxx {item.last4}
                                  <span className="middle-content-date">{item.exp_month}/{item.exp_year}</span>
                                  <span className="c-appointment-form__card-icon">
                                    <span style={{ fontSize: '18px' }}>{item.brand}</span> - <Icon type="credit-card" />
                                  </span>

                                </p>
                             
                              </List.Item>
                            )}
                          /> */}
                          <Button
                            className="c-appointment-form__card-tgl-btn"
                            onClick={() => {
                              toggleCard();
                            }}
                          >
                            Add New <Icon type="plus" />
                          </Button>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {currentStep === 3 && (
        <div>
        
          <Row type="flex">
            <Col span={24}>
              <FormThree
                firstFormData={firstStapForm}
                cardDetails={cardDetails}
              />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
// }

// export default Form.create()(AppointmentForm)

