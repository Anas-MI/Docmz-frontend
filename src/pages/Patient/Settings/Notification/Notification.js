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
import './notification.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
import Buttonspatient from '../Button/Buttonspatient';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Notification extends Component {
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
                                                <p>Notification Settings</p>
                                                <Divider />

                                                <Form onSubmit={this.handleSubmit}>
                                                    <p className="static-header"><strong>Emails</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('wellness', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Wellness Reminders">
                                                               Wellness Reminders
                                                            </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Divider dashed />
                                                   
                                                    <p className="static-header"><strong>Text Messages</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('appointmentreminder', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="appointmentreminder">
                                                               Appointment reminders
                                                            </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                   
                                                    <Form.Item>
                                                        {getFieldDecorator('appointmentchangereminder', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="appointmentchangereminder">
                                                               Notify if appointment is rescheduled or cancelled
                                                            </Checkbox>
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

export default Form.create()(Notification)
