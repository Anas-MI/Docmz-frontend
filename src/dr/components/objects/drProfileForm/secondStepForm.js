import React from "react";
import { Form, Field } from "formik";
import { Icon, Col, Row , Button } from "antd";
import {
  InputField,
  SelectField,
  DatePickerField,
  UploadField
} from "../../../../components/Fields/FormFields";
import { isRequired } from "../../../../components/Fields/ValidateFields";
export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container second-step-form" onSubmit={handleSubmit}>
    <Row>
      <Col span={24}>
        <Field
          component={InputField}
          name="establishmentName"
          label="Establishment Name"
          validate={isRequired}
          type="text"
          submitCount={submitCount}
          hasFeedback
        />
      </Col>
      <Col span={24}>
        <Field
          component={SelectField}
          name="country"
          label="Country"
          validate={isRequired}
          submitCount={submitCount}
          selectOptions={["USA"]}
          hasFeedback
        />
      </Col>
    </Row>
    <Row 
    // style={{display:"none"}}
    >
      <Col xs={24} className="button_wrapper" type="flex" align="bottom" >
        {/* <Button type="primary">
           <Icon type="arrow-left" /> Back 
        </Button> */}
        <button className="ant-btn ant-btn-primary btn-right" type="submit">
          Next <Icon type="arrow-right" />
        </button>
      </Col>
    </Row>
  </Form>
);
