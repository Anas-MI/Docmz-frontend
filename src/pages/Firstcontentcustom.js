import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './customdoctorprofile.css'
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Firstcontentcustom extends Component {
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
                    <h3>Personal Info</h3>
                        <Form layout="vertical">
                            <Form.Item label="Reason for visit">
                                {getFieldDecorator('title', {
                                    initialValue: ['Toothache'],
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Duration">
                                {getFieldDecorator('description',{ initialValue: ['6 Months'],})(<Input type="textarea" />)}
                            </Form.Item>
                            <Form.Item label="Description">
                                {getFieldDecorator('description',{ initialValue: ['Lorem ipsum'],})(<Input type="textarea" />)}
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

export default Form.create()(Firstcontentcustom)
