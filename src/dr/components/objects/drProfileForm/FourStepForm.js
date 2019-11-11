import React from "react";
import { Form, Field } from "formik";
import { Icon, Col, Row } from "antd";
import {
  InputField,
  InputNumberField,
  
} from "../../../../components/Fields/FormFields";
import { isRequired } from "../../../../components/Fields/ValidateFields";
export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container second-step-form" onSubmit={handleSubmit}>
    <Row>
      <Col span={24}>
        <Field
          component={InputNumberField}
          name="price"
          label="Consultation Fees"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          maxLength={5}
          prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}
          
        />
      </Col>
    </Row>
    <div className="submit-container" style={{ overflow: "hidden" }}>
      <button className="ant-btn ant-btn-primary" type="submit">
        Submit
      </button>
    </div>
  </Form>
);
