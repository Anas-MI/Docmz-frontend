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
import Search from "../Home/Search";
import Navbar from '../Header/Header';
import './patient.css'
import Sidebar from './Settings/Sidebar/Sidebar';
import Uppermsg from './Uppermsg';
import Buttonspatient from './Settings/Button/Buttonspatient';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Patienthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
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

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

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
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="91">+91</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
                <Layout className="layout">
                    <Navbar />

                    <Content style={{ padding: '0 50px', marginTop: 64 }}>

                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }} className="doctor-header">
                            <Uppermsg />
                            <header className="App-header">
                                <Search />
                            </header>
                            <Content style={{ padding: '0 50px' }}>
                                <Layout style={{ padding: '24px 0', background: '#fff' }}>

                                    <Sidebar />
                                    <Content style={{ padding: '0 24px', minHeight: 280 }}>

                                        <Layout>

                                            <Content className="patient-profile-content">
                                                <p>Profile</p>
                                                <Divider />
                                                <p className="static-header"><strong>Name</strong></p>
                                                <p>Anas M.i. - Please call us at (855) 962-3621 to change your name.</p>
                                                <Divider dashed />
                                                <p className="static-header"><strong>Email</strong></p>
                                                <Form.Item>
                                                    {getFieldDecorator('email', {
                                                        initialValue: ['username@gmail.com'],
                                                        rules: [
                                                            {
                                                                type: 'email',
                                                                message: 'The input is not valid E-mail!',
                                                            },
                                                            {
                                                                required: true,
                                                                message: 'Please input your E-mail!',
                                                            },
                                                        ],
                                                    })(<Input />)}
                                                </Form.Item>
                                                <Divider dashed />

                                                <p className="static-header"><strong>Phone Number</strong></p>
                                                <Form.Item>
                                                    {getFieldDecorator('phone', {
                                                        initialValue: ['9765058596'],
                                                        rules: [{ required: true, message: 'Please input your phone number!' }],
                                                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                                                </Form.Item>
                                                <Divider dashed />
                                                <p className="static-header"><strong>Address</strong></p>
                                                <Form.Item>
                                                    {getFieldDecorator('address', {
                                                        initialValue: ['Demo Address Here'],
                                                        rules: [{ required: true, message: 'Please input your address!' }],
                                                    })(

                                                        <Input placeholder="Basic usage" />,
                                                    )}
                                                </Form.Item>
                                                <Divider dashed />
                                                <p className="static-header"><strong>Gender</strong></p>
                                                <Form.Item>
                                                    {getFieldDecorator('address', {
                                                        initialValue: ['Male'],
                                                        rules: [{ required: true, message: 'Please input your address!' }],
                                                    })(

                                                        <Input placeholder="Basic usage" />,
                                                    )}
                                                </Form.Item>
                                                <Divider dashed />
                                                <p className="static-header"><strong>Date of Birth</strong></p>
                                                <Form.Item>
                                                    {/* {getFieldDecorator('date-picker')(<DatePicker />)} */}
                                                    {getFieldDecorator('dateofbirth', {
                                                        initialValue: ['2019-11-13'],
                                                        rules: [{ required: true, message: 'Please input your address!' }],
                                                    })(

                                                        <Input placeholder="Basic usage" />,
                                                    )}
                                                </Form.Item>
                                                <Divider />
                                                <Row>
                                                    <Col span={18}>
                                                   <Buttonspatient />
                                                    </Col>
                                                    <Col span={6}>
                                                    <p><a href='#'>Deactivate</a> my account</p>
                                                    </Col>
                                                </Row>
                                               
                                                

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

        );
    }
}

export default Form.create()(Patienthome);
