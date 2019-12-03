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
  
export class Firststepformdemo extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
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
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        {/* <Form className="form-container"  onSubmit={this.props.handleSubmit}>
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Field
          component={SelectField}
          name="experience"
          label="Years Of Experience"
          validate={isRequired}
          submitCount={this.props.submitCount}
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
          submitCount={this.props.submitCount}
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
    
  </Form> */}

<Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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

export default Form.create()(Firststepformdemo);