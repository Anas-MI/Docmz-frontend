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
  Carousel,
 

} from "antd";
import AliceCarousel from 'react-alice-carousel'

import { Field } from "formik";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import { patientCardList } from "../../services/api/patient";
import PaymentCard from "../../components/payment/PaymentCard";
import AppointmentPayReview from "./AppointmentPayReview";
import AppointmentDoctor from "./AppointmentDoctor";
import ShowOnCard from "../../components/payment/ShowOnCard";
import './newappointmentap.css'
import Fade from 'react-reveal/Fade';
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
const handleOnDragStart = (e) => e.preventDefault()
// class AppointmentForm extends React.Component{ 
//   render () {
export default function AppointmentForm() {
  const FormOne = Form.create({ name: "appointment_form_one" })(FormStep1);
  const FormTwo = Form.create({ name: "appointment_form_two" })(FormStep2);
  const FormThree = Form.create({ name: "appointment_form_three" })(
    AppointmentPayReview
  );
  let formOne = React.createRef();
  let formTwo = React.createRef();
  let carousel = React.createRef();
  const next = () => {
    carousel.next();
  }
  const previous = () => {
    carousel.prev();
  }
  const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { Step } = Steps;
  const handleSubmit = () => {
    formOne.current.validateFields((err, values) => {
      console.log("ccc", { values });
      if (!err) {
        setFirstStapForm(values);
        console.log("Received values of form: ", values);
        localStorage.setItem('duration',values.duration)
        localStorage.setItem('notes',values.notes)
        localStorage.setItem('reason',values.reason)
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
  const [secondStapForm, setSecondStapForm] = useState("");
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
    console.log('currentstep',data) 
    localStorage.setItem('patientcardid',data.id)
    localStorage.setItem('last4',data.last4)

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
        <div>
       <FormStep2 />
      
       <Button
       type="primary"
       className="ap-appointment-details-btn"
       onClick={(e) => phonesubmit(e)}
      
     >
       Next
   </Button>
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
                      <AliceCarousel mouseTrackingEnabled>
                      {/* <img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" />
                      <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
                      <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
                      <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
                      <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
                      {
                            cards.map( (el, i) => (
                              <div onClick={() => setSavedCardData(el)}>
                                
                              <ShowOnCard
                                key={i}
                                cvvOnCard={''}
                                
                                expDateOnCard={el.exp_month + '/' + el.exp_year}
                                numberOnCard={"xxxx xxxx xxxx " + el.last4}
                                nameOnCard={"shubham"}
                                transactionData=''
                              />
                               
                              </div>
                            ))
                          }
                    </AliceCarousel>
                  
                       {/* <div className="custom-card-list-ap">
                         <Icon type="left-circle" onClick={() => previous()} className='custom-card-list-ap__prevarrow'/>
                           <Carousel ref={node => (carousel = node)} {...props}>
                           {
                             cards.map( (el, i) => (
                              <div onClick={() => setSavedCardData(el)}>
                                
                               <ShowOnCard
                                key={i}
                                cvvOnCard={''}
                                
                                expDateOnCard={el.exp_month + '/' + el.exp_year}
                                numberOnCard={"xxxx xxxx xxxx " + el.last4}
                                nameOnCard={"shubham"}
                                transactionData=''
                               />
                               
                              </div>
                             ))
                           }
                           </Carousel>
                           <Icon type="right-circle" onClick={() => next()} className='custom-card-list-ap__nextarrow'/> */}
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
      )
      }
      {
        currentStep === 3 && (
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
        )
      }
    </div >
  );
}
// }

// export default Form.create()(AppointmentForm)

