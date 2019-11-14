import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete,
    Radio 
} from 'antd';

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../../Home/Search";
import Navbar from '../../../Header/Header';
import './demographic.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
import Buttonspatient from '../Button/Buttonspatient';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Demographic extends Component {
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
                                                <p>Demographic Info (optional)</p>
                                                <Divider />

                                                <Form onSubmit={this.handleSubmit}>
                                                    <p className="static-header"><strong>Race select one or more</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('AIAN', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="American Indian or Alaska Native">
                                                                American Indian or Alaska Native
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('asian', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Asian">
                                                                Asian
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('BAA', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Black or African American">
                                                                Black or African American
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('NH', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Native Hawaiian">
                                                                Native Hawaiian
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('OPI', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Other Pacific Islander">
                                                                Other Pacific Islander
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('White', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="White">
                                                                White
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('Other', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Other">
                                                                Other
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('DeclinetoAnswer', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="WhDecline to Answerite">
                                                                Decline to Answer
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Divider dashed />

                                                    <p className="static-header"><strong>Ethnicity</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('radio-group')(
                                                            <Radio.Group>
                                                                <Radio value="HispanicorLatino">Hispanic or Latino</Radio>
                                                                <Radio value="NotHispanicorLatino">Not Hispanic or Latino</Radio>
                                                                <Radio value="DeclinetoAnswer">Decline to Answer</Radio>
                                                            </Radio.Group>,
                                                        )}
                                                    </Form.Item>
                                                
                                                <Divider dashed />
                                                <p className="static-header"><strong>Zip <small>(Optional)</small></strong></p>
                                                <Form.Item>
                                                    {getFieldDecorator('zip', {
                                                        initialValue: ['205123'],
                                                        rules: [{ required: true, message: 'Please input your zipcode!' }],
                                                    })(

                                                        <Input placeholder="Basic usage" />,
                                                    )}
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

export default Form.create()(Demographic)
