import React from "react";
import { Form, Field } from "formik";
import {
  InputField,
  SelectField,
  DatePickerField,
  UploadField
} from "../../../../components/Fields/FormFields";
import MultiImageSelector from "../../../../components/Fields/MultiImageSelector";
import { isRequired } from "../../../../components/Fields/ValidateFields";
import { Icon, Col, Row } from "antd";
const selectYearOption = [...Array(100).keys()];
export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container"  onSubmit={handleSubmit}>
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Field
          component={SelectField}
          name="experience"
          label="Years Of Experience"
          validate={isRequired}
          submitCount={submitCount}
          selectOptions={selectYearOption}
          hasFeedback
        />
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Field
          component={DatePickerField}
          name="dob"
          label="Date Of Birth"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          style={{ width: "95%", marginLeft: "10px" }}
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
       <div class="ant-col ant-form-item-label"><label class="" title="Upload Your Picture">Upload Your Picture</label></div>
        <MultiImageSelector />
      </Col>
    </Row>
   
    
    <Row 
    // style={{display:"none"}}
    >
      <Col xs={24} className="button_wrapper" type="flex" align="bottom" >
        <button 
        id="from-0"
         className="ant-btn ant-btn-primary btn-right" type="submit">
          Next <Icon type="arrow-right" />
        </button>
      </Col>
    </Row>
    
  </Form>
);
