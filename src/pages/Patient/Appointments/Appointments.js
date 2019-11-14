import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete,
    Skeleton, Switch, Card, Avatar, Rate,


} from 'antd';

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../Home/Search";
import Navbar from '../../Header/Header';
import './appointments.css'
import Uppermsg from '../Uppermsg';
// import Sidebar from './Sidebar';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { Meta } = Card;
class Appointments extends Component {
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
                            <Content style={{ padding: '0 0px' }}>
                                <Row>

                                    <Col span={14}>
                                        <div style={{ marginTop: 16 }}>
                                            <p style={{ color: 'rgb(0, 35, 75)', fontSize: '18px', fontWeight: 'bold' }}>Upcoming Appointments</p>
                                            <Divider />
                                        </div>
                                        <div className="upcoming-appointments-div">
                                            <Card style={{ marginTop: 16, padding: '20px' }} className="upper-div-card">

                                                <Meta
                                                    avatar={

                                                        <Avatar size={64} icon="user" />
                                                    }
                                                    title="Dr. David Tarica, DMD"
                                                    description="Reason for your visit: Dental Consultation"


                                                />
                                                <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Saturday, Aug 24, 2019</p>




                                                <div className="card-btn-patient-appointments">
                                                    <Button type="primary" className="appointment-cancel-btn"><Icon type="close" />Cancel this appointment</Button>

                                                    <Button type="dashed" className="dashedbtn"><Icon type="bell" />&nbsp;Set a reminder</Button>

                                                </div>
                                            </Card>
                                        </div>

                                    </Col>
                                    <Col span={10}>
                                        <div style={{ marginLeft: '20px', marginTop: 16 }}>
                                            <p style={{ color: 'rgb(0, 35, 75)', fontSize: '18px', fontWeight: 'bold' }}>Previous Doctors</p>
                                            <Divider />
                                        </div>

                                        <Card style={{ marginTop: 16, marginLeft: '20px', padding: '10px' }} className="right-card">

                                            <Row>
                                                <Col span={20}>
                                                    <Meta
                                                        avatar={

                                                            <Avatar size={64} icon="user" />
                                                        }
                                                        title="Dr. David Tarica, DMD"
                                                        description="Dentist"



                                                    />

                                                </Col>
                                                <Col span={4}>
                                                    <Icon type="close" className="right-close-icon" />
                                                </Col>
                                            </Row>
                                            <div className="right-bottom-div">
                                                <span><Icon type="calendar" className="right-calendar" style={{ color: 'rgba(0, 0, 0, 0.30)' }} /> 9-july-2019, 10:30 A.M</span>
                                                <p style={{ color: 'rgba(0, 0, 0, 0.45)', paddingTop: '10px' }}>Consult regarding toothache problem</p>
                                                <p style={{ float: 'right', marginBottom: '0' }}><a href='#'>See Details</a></p>
                                            </div>

                                        </Card>


                                    </Col>
                                </Row>

                                <div className="bottom-card-div">
                                    <Row>
                                        <Col span={24}>
                                            <p style={{ color: 'rgb(0, 35, 75)', fontSize: '18px', fontWeight: 'bold' }}>Your Past Appointments</p>
                                            <Divider />
                                        </Col>
                                        <Col span={24}>
                                            <Card style={{ marginTop: 16, padding: '20px' }} className="left-card">

                                                <Meta
                                                    avatar={

                                                        <Avatar size={64} icon="user" />
                                                    }
                                                    title="Your past appointment with Dr. David Tarica, DMD"
                                                    description="Reason for your visit: Dental Consultation"



                                                />
                                                <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>Saturday, Aug 24, 2019</p>



                                                <Card>
                                                    <p style={{ marginBottom: '0' }}>Leave a review :</p>
                                                    <Row>
                                                        <Col span={22}>
                                                            <p className="prof-para">Would you recommend the professionnal that treated you?</p>
                                                        </Col>
                                                        <Col span={2}>
                                                            <Icon type="right" />
                                                        </Col>
                                                    </Row>

                                                    <Rate />

                                                </Card>
                                                <div className="card-btn-patient-appointments">
                                                    <Button type="primary" className="primarybtn">Book Again</Button>

                                                    <Button type="dashed" className="dashedbtn"><Icon type="bell" />&nbsp;Remind me to Book Later</Button>

                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Content>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>,

            </div>
        )
    }
}

export default Form.create()(Appointments)
