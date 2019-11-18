import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './customdoctorprofile.css'
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Cardcustomcontent extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <>
                <Row>
                    
                    <Col span={12} className="left-side-content-doctor-profile-ap">
                    <h3>Card Info</h3>
                        <Form layout="vertical">
                            <Form.Item label="Enter Name">
                                {getFieldDecorator('title', {
                                    initialValue: ['John Doe'],
                                    rules: [{ required: true, message: 'Please input the your name' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Enter card Number">
                                {getFieldDecorator('Card Number', { initialValue: ['1111 - 2222 - 3333 - 4444'], })(<Input type="textarea" />)}
                            </Form.Item>
                            <Form.Item label="Enter CVV">
                                {getFieldDecorator('CVV', { initialValue: ['123'], })(<Input type="password" />)}
                            </Form.Item>
                            <Form.Item label="Enter Expiration Date">
                                {getFieldDecorator('expiration date', { initialValue: ['123'], })(<Input type="date" />)}
                            </Form.Item>

                        </Form>
                    </Col>




                    <Col span={12}>
                        <img src={require('../images/dr-demo-5.jpg')} />
                        <h4><strong>Dr. Baduashvili Amiran M.D.</strong></h4>
                        <p><strong>10:30 A.M - 12:00 P.M.</strong></p>
                    </Col>

                </Row>

            </>
        )
    }
}

export default Form.create()(Cardcustomcontent)
