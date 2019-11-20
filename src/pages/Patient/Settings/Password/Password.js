import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete
} from 'antd';

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../../Home/Search";
import Navbar from '../../../Header/Header';
import './password.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
import Buttonspatient from '../Button/Buttonspatient';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Layout className="layout">
                    <Navbar />

                    <Content style={{ padding: '0 50px', marginTop: 64 }} className="custom-home-content-ap">

                        <div style={{ background: 'transparent', padding: 24, minHeight: 380 }} className="doctor-header">
                            <Uppermsg />
                            <header className="App-header">
                                <Search />
                            </header>
                            <Content style={{ padding: '0', marginTop : '30px' }}>
                                <Layout style={{ padding: '24px 0'
                                //  background: '#fff'
                                  }}>

                                    <Sidebar />
                                    <Content style={{  minHeight: 280 }} className="custom-home-content-inner-ap-patient">

                                        <Layout>

                                            <Content className="patient-profile-content">
                                                <p className="profile-header-custom-patient-ap"><strong>Password</strong></p>
                                                <Divider />

                                                <Form onSubmit={this.handleSubmit}>
                                                    <p className="static-header"><strong>Enter your current password</strong></p>
                                                    <Form.Item hasFeedback>
                                                        {getFieldDecorator('password', {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your password!',
                                                                },
                                                                {
                                                                    validator: this.validateToNextPassword,
                                                                },
                                                            ],
                                                        })(<Input.Password />)}
                                                    </Form.Item>
                                                    <p className="static-header"><strong>Choose your password</strong></p>
                                                    <Form.Item hasFeedback>
                                                        {getFieldDecorator('password', {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your password!',
                                                                },
                                                                {
                                                                    validator: this.validateToNextPassword,
                                                                },
                                                            ],
                                                        })(<Input.Password />)}
                                                    </Form.Item>
                                                    <Form.Item hasFeedback>
                                                        <p className="static-header"><strong>Confirm your password</strong></p>
                                                        {getFieldDecorator('confirm', {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: 'Please confirm your password!',
                                                                },
                                                                {
                                                                    validator: this.compareToFirstPassword,
                                                                },
                                                            ],
                                                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                                    </Form.Item>
                                                </Form>

                                                <Divider />
                                                <Buttonspatient />
                                             

                                            </Content>
                                        </Layout>
                                    </Content>
                                </Layout>
                            </Content>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>,

    </div>
        )
    }
}

export default Form.create()(Password)
