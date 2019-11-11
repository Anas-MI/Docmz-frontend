import React from "react";
import { Form, Field } from "formik";
import {
  InputField,
  SelectField
} from "../Fields/FormFields";
import {
  validateEmail,
  isRequired,
  validatePassword
} from "../Fields/ValidateFields";
import { Icon} from 'antd';
import "./login.css"
export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={InputField}
      name="email"
      type="email"
      label="Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
    <Field
      component={InputField}
      name="password"
      type="password"
      label="Password"
      validate={validatePassword}
      submitCount={submitCount}
      hasFeedback
      password
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
  
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Submit
      </button>
    </div>
  </Form>
);
