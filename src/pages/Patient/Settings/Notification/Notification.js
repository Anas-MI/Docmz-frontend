import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete,
    
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
            // checked: true,
            disabled: false,
            wellnessReminder: false,
            appointmentReminderText: false,
            notify: false
        };
    }
    onchange = e => {
        this.setState({
            wellnessReminder: e.target.checked,
            appointmentReminderText: e.target.checked,
            notify: e.target.checked
        });

    }
    appointmentchange = e => {
        this.setState({
            appointmentReminderText: e.target.checked,
        });

    }
    notifychange = e => {
        this.setState({
            notify: e.target.checked
        });

    }
    // toggleChecked = () => {
    //     this.setState({ wellnessReminder: !this.state.checked });
    // };

    // toggleDisable = () => {
    //     this.setState({ disabled: !this.state.disabled });
    // };
    getNotificationdetail = async (e) => {
        try {
            let response = await axios.get("http://localhost:3001/patient/getinfo/5dcba17a2c9ed62528346794");
            console.log('patientdetail', response.data.data)
            this.setState({
                wellnessReminder: response.data.data.wellnessReminder,
                appointmentReminderText: response.data.data.appointmentReminderText,
                notify: response.data.data.notify
            })
            console.log(this.state.wellnessReminder)
        }
        catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getNotificationdetail();


    }


    notificationsubmit = e => {
        e.preventDefault();
        let body = {
            wellnessReminder: this.state.wellnessReminder,
            appointmentReminderText: this.state.appointmentReminderText,
            notify: this.state.notify
        }
        console.log('notibody', body)
        axios
            .post(
                'http://localhost:3001/patient/update/5dcba17a2c9ed62528346794', body

            )
            .then(response => {
                console.log('dr detail', response);
                    if(response.data.status == true){
                        alert(response.data.message)
                    }
                // this.state.prodbatch = response.data.data.items

                // this.forceUpdate();
                // if (response.data.data.description == "Item deleted successfully") {
                //     alert("Product deleted successfully");
                //     this.forceUpdate();
                //     this.handleClick();
                // }
            })
            .catch(e => {
                console.log('error', e);
            });
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };

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

                                                <Form
                                                //  onSubmit={e => this.notificationsubmit(e)}
                                                >
                                                    <p className="static-header"><strong>Emails</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('wellnessReminder', {
                                                            valuePropName: 'wellnessReminder',
                                                        })(
                                                            // <Checkbox value="wellnessReminder">
                                                            //    Wellness Reminders
                                                            // </Checkbox>
                                                            <Checkbox
                                                                checked={this.state.wellnessReminder}
                                                                // setFieldsValue={this.state.wellnessReminder}
                                                                disabled={this.state.disabled}
                                                                onChange={this.onchange}
                                                            >
                                                                Wellness Reminders
                                                          </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Divider dashed />

                                                    <p className="static-header"><strong>Text Messages</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('appointmentReminderText', {
                                                            valuePropName: 'appointmentReminderText',
                                                        })(
                                                            // <Checkbox value="wellnessReminder">
                                                            //    Wellness Reminders
                                                            // </Checkbox>
                                                            <Checkbox
                                                                checked={this.state.appointmentReminderText}
                                                                // setFieldsValue={this.state.wellnessReminder}
                                                                disabled={this.state.disabled}
                                                                onChange={this.appointmentchange}
                                                            >
                                                                Appointment reminders
                                                          </Checkbox>
                                                        )}
                                                    </Form.Item>

                                                    <Form.Item>
                                                        {getFieldDecorator('notify', {
                                                            valuePropName: 'notify',
                                                        })(
                                                            // <Checkbox value="wellnessReminder">
                                                            //    Wellness Reminders
                                                            // </Checkbox>
                                                            <Checkbox
                                                                checked={this.state.notify}
                                                                // setFieldsValue={this.state.wellnessReminder}
                                                                disabled={this.state.disabled}
                                                                onChange={this.notifychange}
                                                            >
                                                                Notify if appointment is rescheduled or cancelled
                                                          </Checkbox>
                                                        )}
                                                    </Form.Item>


                                                </Form>

                                                <Divider />
                                                {/* <Buttonspatient /> */}
                                                <div className="patient-profie-setting-pass">
                                                    <Button type="primary" htmlType="submit" onClick={e => this.notificationsubmit(e)}>
                                                        Save
                                                    </Button>
                                                    <Button htmlType="submit">
                                                        Cancel
                                                    </Button>
                                                </div>


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
