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
            name : ''
        };

    }
    getUserDetail = async (e) => {
        try {
            let response = await axios.get("http://localhost:3001/patient/getinfo/5dcba17a2c9ed62528346794");
            console.log('patientdetail', response.data.data)
            this.setState({
                name : response.data.data.name
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getUserDetail()
    }

    render() {

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
                                                <p className="profile-header-custom-patient-ap"><strong>Authorization Setting</strong></p>
                                                <Divider />

                                                <p style={{ float: 'left' }}>{this.state.name} – Authorized</p>
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
