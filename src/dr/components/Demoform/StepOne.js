'use strict'
import React from 'react'
// import { Form, Field } from "formik";
// import {
//   InputField,
//   SelectField,
//   DatePickerField,
//   UploadField
// } from "../../../../components/Fields/FormFields";
// import MultiImageSelector from "../../../../components/Fields/MultiImageSelector";
// import { isRequired } from "../../../../components/Fields/ValidateFields";
// import { Icon, Col, Row } from "antd";
import { Form, Icon, Input, Button } from 'antd';
const selectYearOption = [...Array(100).keys()];
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: '',
      newusername : 'demo'
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  render () {
    const {  getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    
    // Only show error after a field is touched.
    const usernameError = isFieldTouched(this.state.newusername) && getFieldError(this.state.newusername);
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('newusername', {
            rules: [{ required: true, message: 'Please input your username!' }],
            
          }
         
          )(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              setFieldsValue={this.state.newusername}
              name="newusername"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default Form.create()(StepOne);
