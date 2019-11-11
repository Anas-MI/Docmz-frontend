import React from 'react'
import { Form, Field } from "formik";
import { Icon, Col, Row, Upload, Button } from "antd";
import {
    InputField,
    SelectField,
    DatePickerField,
    UploadField
} from "../../../../components/Fields/FormFields";
import { isRequired } from "../../../../components/Fields/ValidateFields";
export default function ThirdStepForm({ handleSubmit, values, submitCount }) {
    return (
        <Form className="form-container third-step-form" onSubmit={handleSubmit}>
            <Row>
                
                <Col span={24} sm={24} md={24} >
                    <label>Id Proof</label>
                    <p className="info-text">Please upload your identity proof to ensure that the ownership of your profile remains with only you</p>
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
                <Col span={24} sm={24} md={24} >
                    <label>Medical Registration Proof</label>
                    <p className="info-text">Please upload your medical registration prood. Only licensed and genuine doctors are listed on DocMZ</p>
                    <Upload>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>
                    </Upload>
                    <br />
                    <br />
                </Col>
            </Row>
            <div className="submit-container" style={{ overflow: "hidden" }}>
                <button className="ant-btn ant-btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </Form>
    )
}
