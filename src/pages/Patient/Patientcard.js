import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
import Patientfooter from './Patientfooter';
import Uppermsg from './Uppermsg';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Patientcard extends Component {
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
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
                <Layout>
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
                                            <Sider>Card Informaion</Sider>
                                            <Content className="personal-content-border">
                                                <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                                                    <Form.Item label="Card Number">
                                                        {getFieldDecorator('cardnumber', {
                                                            initialValue: ['4444-3333-2222-1111'],
                                                            rules: [{ required: true, message: 'Please input your card number!' }],
                                                        })(
                                                            // <Input
                                                            //     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                            //     placeholder="Username"
                                                            //     setFieldsValue="Username"
                                                            // />,
                                                            <Input placeholder="Basic usage" />,
                                                        )}
                                                    </Form.Item>

                                                    <Form.Item label="Card CVV Number">
                                                        {getFieldDecorator('cardcvvnumber', {
                                                            initialValue: ['933'],
                                                            rules: [{ required: true, message: 'Please input your card number!' }],
                                                        })(
                                                            // <Input
                                                            //     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                            //     placeholder="Username"
                                                            //     setFieldsValue="Username"
                                                            // />,
                                                            <Input placeholder="Basic usage"  type="password" />,
                                                        )}
                                                    </Form.Item>
                                                  

                                                  

                                                  
                                                </Form>
                                            </Content>
                                        </Layout>
                                    </Content>
                                </Layout>
                            </Content>
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                    <Patientfooter />
                </Layout>,
				{/* <Content style={{ padding: '0 50px' }}>

					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
						<h1>Find doctors in your network</h1>
						<header className="App-header">
							<Search />
						</header>
						<div className="search_box">
							Home
				</div>
					</div>
				</Content> */}
                {/* <h1>Find doctors in your network</h1>
				<header className="App-header">
				<Search />
				</header>
				<div className="search_box">
					Home
				</div> */}
            </div>
        )
    }
}

export default Form.create()(Patientcard);

