import React from "react";
import { Form, Field } from "formik";
import { Icon, Col, Row, Upload, Button } from "antd";
import {
  InputField,
  SelectField,
  DatePickerField,
  UploadField
} from "../../../../components/Fields/FormFields";
import { isRequired } from "../../../../components/Fields/ValidateFields";
export default function ThirdStepForm({ handleSubmit, values, submitCount,handleReset }) {
  return (
    <Form className="form-container third-step-form" onSubmit={handleSubmit}>
      <div className="form-field-group-fixed">
        <Row>
          <Col span={24} sm={24} md={24}>
            <label>Id Proof</label>
            <p className="info-text">
              Please upload your identity proof to ensure that the ownership of
              your profile remains with only you
            </p>
            <Upload>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
            <br />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={24} sm={24} md={24}>
            <label>Medical Registration Proof</label>
            <p className="info-text">
              Please upload your medical registration prood. Only licensed and
              genuine doctors are listed on DocMZ
            </p>
            <Upload>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
            <br />
            <br />
          </Col>
        </Row>
      </div>

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
}
