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
    Badge


} from 'antd';
import LabelValue from '../../../dr/components/objects/labelValue/LabelValue'

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../Home/Search";
import Navbar from '../../Header/Header';
import './appointments.css'
import Uppermsg from '../Uppermsg';
// import Sidebar from './Sidebar';
import { getpatientDetail } from '../../../services/api/doctors';
import moment from 'moment'
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { Meta } = Card;
class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            street: '',
            sex: '',
            dob: '',
            newbookedFor: [],
            lastencounter: '',
            futureappointmentarr: [],
            size: 'large',
        };

    }

    componentDidMount() {
        this.getpatient();
    }
    getpatient = async (e) => {
        getpatientDetail(localStorage.getItem('patientid'))
            .then(response => {

                console.log('patientdetaial', response.data.data)
                let newpatientarr = response.data.data.appointments
                this.setState({
                    name: response.data.data.name,
                    email: response.data.data.email,
                    phone: response.data.data.phone,
                    // street: response.data.data.Address.street,
                    sex: response.data.data.sex,
                    dob: response.data.data.dob
                })

                console.log(this.state)

                // console.clear();
                // console.log(this.state)
                // var newfilterdatehere = [];
                for (let i = 0; i < newpatientarr.length; i++) {
                    console.log('bookres', moment(newpatientarr[i].bookedFor).format('L'))
                    if (!moment(newpatientarr[i].bookedFor).isAfter(moment())) {
                        this.state.newbookedFor.push(moment(newpatientarr[i].bookedFor).format('L'))
                    }
                    //  console.log('newbookedforarr',this.state.newbookedFor)
                    // this.setState({
                    //     newbookedFor : this.state.newbookedFor.push(newpatientarr[i].bookedFor)
                    // })
                    //   if(apparr[i].booked == true){
                    // console.log(newpatientarr[i])
                    // this.state.counter = +this.state.counter + 1
                    // console.log(this.state.counter)
                }

                console.log('newdatearr', this.state.newbookedFor)
                let moments = this.state.newbookedFor.map(d => moment(d)),
                    maxDate = moment.max(moments)
                console.log('newmaxdateformat', maxDate._d)
                let maxdatevariable = maxDate._d
                console.log(maxdatevariable)
                this.setState({
                    lastencounter: maxdatevariable
                })

                let filterfutureappointmentarr = newpatientarr.filter(function (hero) {
                    return moment(hero.bookedFor).isAfter(moment()) == true;
                    // console.log('hero',hero.booked == true)
                });
                console.log('filterfutureappointmentarr', filterfutureappointmentarr)
                this.setState({
                    futureappointmentarr: filterfutureappointmentarr
                })
                console.log(this.state.futureappointmentarr)


                // let newmaxbook = []
                // newmaxbook = this.state.newbookedFor
                // console.log(this.state.newbookedFor)
                //       let maxDate=new Date(Math.max.apply(null,newmaxbook));
                //     console.log('newmethod',maxDate)

            })
            .catch(e => {
                console.log('error', e);
            });



        //       let moments = this.state.newbookedFor.map(d => moment(d)),
        //  maxDate = moment.max(moments)
        //  console.log('maxdate',maxDate)
        // let newmaxdate = moment().max(this.state.newbookedFor)
        // // let newfilterdatemax = new Date(newmaxdate)
        // console.log('newmaxdate',new Date(newmaxdate))
        // this.setState({
        //     lastencounter : new Date(newmaxdate)
        // })
        // this.state.lastencounter = newfilterdatemax
    }

    render() {

        return (
            <div>
                <Layout className="layout">
                    <Navbar />

                    <Content style={{ padding: '0 50px', marginTop: 64 }} className="custom_layout_ap_aapointment">

                        <div style={{ padding: 24, minHeight: 380 }} className="doctor-header">

                            {/* <Uppermsg /> */}
                            <h3 style={{ paddingBottom: '20px', fontSize: '20px' }}>Let's help you stay on top of your health</h3>

                            <header className="App-header">
                                <Search />
                            </header>
                            <Content style={{ padding: '0 0px' }}>
                                <Row>
                                    <Col span={24}>
                                        <Card style={{ marginTop: 16, padding: '20px' }} className="left-card patient_caard_ap">
                                            <Row>
                                                <Col span={2}>
                                                    <Avatar icon="user" className="patient_avatar_custom_ap" />
                                                </Col>
                                                <Col span={22}>
                                                    <h4>Hey, John Doe</h4>
                                                    <Divider />
                                                    <div className="user_detail_ap">
                                                        <Row>
                                                            <Col span={7}>
                                                                {this.state.phone == undefined ? '' : <p><strong>Phone : </strong>{this.state.phone || 'NO DATA'}</p>}
                                                                {this.state.email == undefined ? '' : <p><strong>Email : </strong>{this.state.email || 'NO DATA'}</p>}



                                                            </Col>

                                                            <Col span={7} offset={10}>
                                                                <p><strong>Provider : </strong>NONE</p>
                                                                {this.state.lastencounter == '' ? '' : <p><strong>Last Encounter : </strong>{moment(this.state.lastencounter).format('LL')}</p>}
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                            </Row>






                                        </Card>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col span={14}>
                                      
                                          <div className="tab_custom_btn_ap">
                                          <Link to="/Appointments">  <Button type="primary" shape="round" active>
                                            Dashboard
                                            </Button></Link>
                                            
                                            <Badge count={5}>
                                            <Button type="primary" shape="round"  disabled>
                                            CCD
                                            </Button></Badge>
                                            <Badge count={7}>
                                            <Button type="primary" shape="round" disabled>
                                            Documents
                                            </Button>
                                            </Badge>
                                            
                                            <Button type="primary" shape="round" disabled>
                                            Discussions
                                            </Button>
                                            
                                            <Link to="/Patient"><Button type="primary" shape="round"  >
                                            Settings
                                            </Button></Link>
                                          
                                            </div>
                                           
                                       
                                    </Col>
                                </Row>
                                <Row>

                                    <Col span={14}>
                                        <div style={{ marginTop: 16 }}>
                                            <p style={{ color: 'rgb(0, 35, 75)', fontSize: '18px', fontWeight: 'bold' }}>Upcoming Appointments</p>
                                            <Divider />
                                        </div>
                                        <div className="upcoming-appointments-div">
                                            {this.state.futureappointmentarr.length ? (
                                                this.state.futureappointmentarr.map(function (item, id) {
                                                    return (
                                                        <Card style={{ marginTop: 16, padding: '20px' }} className="upper-div-card upper-div-card_upcoming_ap" key={id}>
                                                            {/* <Col span={2}>
                                                            <Avatar icon="user" className="patient_avatar_custom_ap" />
                                                            </Col>
                                                            <Col span={12}>
                                                            <h4>DR. {this.state.futureappointmentarr[id].doctor.basic.name}</h4>
                                                            <div className="upper-div-card_ap_below_detail">
                                                        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }} className="upper-div-card_reason">Reason for your visit : {item.reasonForVisit}</span>
                                                            <p style={{ color: 'rgba(0, 0, 0, 0.45)' }} className="upper-div-card_date">{moment(item.bookedFor).format('LL')}</p>
                                                            </div>
                                                            </Col> */}
                                                            <Meta
                                                                className="upper-div-card_title_ap"
                                                                avatar={

                                                                    <Avatar size={64} icon="user" />
                                                                }




                                                            />
                                                            <h4 style={{ textTransform: 'capitalize' }}>DR. {this.state.futureappointmentarr[id].doctor.basic.name}</h4>
                                                            <div className="upper-div-card_ap_below_detail">
                                                                <span style={{ color: 'rgba(0, 0, 0, 0.45)' }} className="upper-div-card_reason">Reason for your visit : {item.reasonForVisit}</span>
                                                                <p style={{ color: 'rgba(0, 0, 0, 0.45)' }} className="upper-div-card_date">{moment(item.bookedFor).format('LL')}</p>
                                                            </div>



                                                            <div className="card-btn-patient-appointments">
                                                                <Button type="primary" className="appointment-cancel-btn"><Icon type="close" />Cancel this appointment</Button>

                                                                <Button type="dashed" className="dashedbtn"><Icon type="bell" />&nbsp;Set a reminder</Button>

                                                            </div>
                                                        </Card>
                                                    );
                                                }, this)
                                            ) : (
                                                    <span>
                                                        <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />
                                                    </span>
                                                )}
                                        </div>

                                    </Col>
                                    <Col span={9} offset={1}>
                                        <div style={{ marginLeft: '20px', marginTop: 16 }}>
                                            <p style={{ color: 'rgb(0, 35, 75)', fontSize: '18px', fontWeight: 'bold' }}>Previous Doctors</p>
                                            <Divider />
                                        </div>

                                        <Card style={{ marginTop: 16, marginLeft: '20px', padding: '10px' }} className="right-card">

                                            <Row>
                                                <Col span={20}>
                                                    <Meta
                                                        className="upper-div-card_title_ap"
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



                                                <Card className="review_custom_ap_rate">
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
                                                <div className="card-btn-patient-appointments_bottom_btn">
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
