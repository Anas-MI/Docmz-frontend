import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Divider } from 'antd';
import './customdoctorprofile.css'
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Reviewcustomcontent extends Component {
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

                    <Col span={10} className="left-side-content-review-ap">
                        <h3>Review</h3>
                        <Divider />
                        <Row>
                            <Col span={12}>
                                <p>Reason for Visit : Toothache</p>
                            </Col>
                            <Col span={12}>
                                <p>Duration : 6 Months</p>
                            </Col>
                            <Col span={24}>
                                <p>Description : 
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestiae esse est sint rem non, odio eligendi cum quia alias!
                                </p>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col span={10}>
                                <p>Name : John Doe</p>
                            </Col>
                            <Col span={14}>
                                <p>Card Number : 1111-2222-3333-4444</p>
                            </Col>
                            <Col span={12}>
                                <p>CVV : 999</p>
                            </Col>
                            <Col span={12}>
                                <p>Expiration Date : 12/Dec/2024</p>
                            </Col>

                        </Row>
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

export default Form.create()(Reviewcustomcontent)
