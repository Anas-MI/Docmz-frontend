import React from "react";
import { Form, Field } from "formik";
import {
  InputField,
  SelectField
} from "../Fields/FormFields";
import {
  validateEmail,
  isRequired,
  validateName,
  validatePassword
} from "../Fields/ValidateFields";
import { Icon} from 'antd';
// import "./login.css"
export default ({ handleSubmit, values, submitCount, populate }) => (

  <Form className="form-container" onSubmit={handleSubmit}>
      {console.log({values})}
    <Field
      component={InputField}
      name="name"
      type="text"
      label="Name"
      value={values.name}
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
      disabled
    //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
    <Field
      component={InputField}
      name="firstName"
      type="text"
      value={values.firstName}
      label="First Name"
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
      disabled
    //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
    <Field
      component={InputField}
      name="lastName"
      type="text"
      value={values.lastName}
      label="Last Name"
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
      disabled
    //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
    <Field
      component={InputField}
      name="credential"
      type="text"
      value={values.credential}
      label="Credential"
      disabled
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
    //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
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
    <Field
      component={SelectField}
      name="gender"
      label="Gender:"
      disabled
      defaultValue={values.gender}
      selectOptions={values.selectOptions}
      validate={isRequired}
      submitCount={submitCount}
      tokenSeparators={[","]}
      style={{ width: 200 }}
      hasFeedback
    />
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Submit
      </button>
    </div>
  </Form>
);
