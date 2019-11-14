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
import './authorization.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

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
                                                <p>Authorization Setting</p>
                                                <Divider />

                                                <p style={{ float: 'left' }}>Anas M.i.(Me) – Authorized</p>
                                                <p style={{ float: 'right' }}><a href="#">Revoke</a></p>

                                                <Divider />
                                                <div className="patient-profie-setting-pass">
                                                    <Button type="primary" htmlType="submit" disabled>
                                                        Save
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

export default Authorization
// export default Form.create()(Authorization)
