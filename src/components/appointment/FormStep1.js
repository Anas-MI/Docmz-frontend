import React from "react";
import { Form, Icon, Input, Button } from 'antd';


export default class FormStep1 extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const {
            onSubmit
          } = this.props
          if(typeof onSubmit === "function"){
            onSubmit(values)
          }
        }
      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('reason', {
              rules: [{ required: true, message: 'Please tell us a reason.' }],
            })(
              <Input
                placeholder="Whats the reason for your appointment?"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('duration', {
            //   rules: [{ required: true, message: 'Please tell us a reason.' }],
            })(
              <Input
                placeholder="For how long are you suffering?"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('notes', {
            //   rules: [{ required: true, message: 'Please tell us a reason.' }],
            })(
              <Input.TextArea
                placeholder="For how long are you suffering?"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  