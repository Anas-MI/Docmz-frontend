import React from "react";
import { Form, Field } from "formik";
import { Icon, Col, Row ,Button} from "antd";
import {
  InputField,
  InputNumberField
} from "../../../../components/Fields/FormFields";
import { isRequired } from "../../../../components/Fields/ValidateFields";
export default ({ handleSubmit, values, submitCount,handleReset }) => (
  <Form className="form-container second-step-form" onSubmit={handleSubmit}>
    <Row className="form-field-group-fixed">
      <Col span={24}>
        <Field
          component={InputNumberField}
          name="price"
          label="Consultation Fees"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          maxLength={5}
          prefix={<Icon type="dollar" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      </Col>
    </Row>
    <Row 
    className="form-field-group-button"
    // style={{display:"none"}}
    >
      <Col xs={24} className="button_wrapper" type="flex" align="bottom" >
        
        <Button onClick={handleReset} type="primary" id="backButton" form->
           <Icon type="arrow-left" /> Back 
        </Button>
        <button className="ant-btn ant-btn-primary btn-right" type="submit">
          Next <Icon type="arrow-right" />
        </button>
      </Col>
    </Row>
  </Form>
);
