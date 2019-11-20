import React ,{useState} from "react";
import { Form, Icon, Input, Button, Container, Row, Col, Avatar, Steps } from "antd";
import FormStep1 from "./FormStep1";
const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};
export default function AppointmentForm() {
  const FormOne = Form.create({ name: "appointment_form_one" })(
    FormStep1
  );
  let formOne = React.createRef();
  const {
    Step
  } = Steps
  const handleSubmit = () => {
    formOne.current.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const [currentStep, setCurrentStep] = useState(0)
  return (
    <div className="c-appointment-form">
      <div className="c-appointment-form__header">
      <Steps
          type="navigation"
          size="small"
          current={currentStep}
          onChange={(e) => setCurrentStep(e)}
          style={stepStyle}
        >
          <Step status="finish" title="finish 1" />
          <Step status="finish" title="finish 2" />
          <Step status="process" title="current process" />
          <Step status="wait" title="wait" disabled />
        </Steps>
      </div>
      <Row type="flex">
        <Col span={12} >
          <div className="c-appointment-form__steps">
            <div className="c-appointment-form__step">
              <FormOne ref={formOne} />
              <Button onClick={()=> {
                  if(typeof formOne.current.submit === "function"){
                    formOne.current.submit(handleSubmit)
                  }
              }} >afds</Button>
            </div>
          </div>
        </Col>
        <Col span={12} >
          <div className="c-appointment-form__doctor-wrapper">
              <div>
                <Avatar shape="square" size={200} icon="user" />
              </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
