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
  Typography
} from "antd";
import FormStep1 from "./FormStep1";
import { patientCardList } from "../../services/api/patient";
import PaymentCard from "../../components/payment/PaymentCard";
import AppointmentPayReview from "./AppointmentPayReview";
import AppointmentDoctor from "./AppointmentDoctor";

const stepStyle = {
  marginBottom: 60,
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

  const cardDetailsWithNextStep = data => {
    setCardDetails(data);
    setCurrentStep(2);
  };
  const card = getCardData();
  const [currentStep, setCurrentStep] = useState(0);
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
    setCurrentStep(2);
  };

  return (
    <div className="c-appointment-form">
      <div className="c-appointment-form__header">
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
            title="Payment"
          />
          <Step
            status={currentStep < 3 ? "finish" : "process"}
            title="Review and Pay"
          />
        </Steps>
      </div>
      {currentStep === 0 && (
        <Row type="flex">
          <Col span={12}>
            <div className="c-appointment-form__steps">
              <div className="c-appointment-form__step">
                <FormOne ref={formOne} />
              </div>
              <Button
               type="primary"
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
              <AppointmentDoctor doctor={{name: "doctor name"}} time="1040 - 1240" />
            </div>
          </Col>
        </Row>
      )}
      {currentStep === 1 && (
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
                    <div>
                      <List
                        bordered
                        dataSource={cards}
                        renderItem={item => (
                          <List.Item onClick={() => setSavedCardData(item)}>
                            <p className="c-appointment-form__card-number">
                              xxxx xxxx xxxx {item.last4}
                              
                              <span className="c-appointment-form__card-icon">
                                <Icon type="credit-card" />
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
        </Row>
      )}
      {currentStep === 2 && (
        <Row type="flex">
          <Col span={24}>
            <FormThree
              firstFormData={firstStapForm}
              cardDetails={cardDetails}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}
