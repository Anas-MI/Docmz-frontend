import React, { Component } from "react";
// import Timelines from "../../objects/timeline/Timelines";
import { Row, Col, Button, Icon, Card, Avatar, Badge, Spin, Tooltip, notification, Popconfirm, message } from "antd";
import classNames from 'classnames'
import InfoCard from "../../objects/card/InfoCard";
import { getDoctors } from '../../../../services/redux/actions';
import { getNotifications } from '../../../../services/redux/actions';
import { connect } from 'react-redux'
import ShortCalender from "../../objects/calenders/shortCalender/ShortCalender";
import Timeline_drovar from "../../objects/timeline/Timeline_drovar";
import { Collapse } from 'antd';
import Tour from "react-user-tour";
import Moment from 'react-moment';
import "./ddemo.css";
import axios from 'axios'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import moment from "moment";
import { getDoctorDetail } from "../../../../services/api";
import WelcomeNotification from "./WelcomeNotification";
const Panel = Collapse.Panel;
const text1 = `
 Reason for visit - Toothache`;
const text2 = `Description - Notes Available`
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isTourActive: false,
      tourStep: 1,
      counter: '0',
      filterappointmentarr: [],
      allAppointments: [],
      open: true
    };
  }



  getdocdetail = (e) => {
    getDoctorDetail(localStorage.getItem('doctorid'))
      .then(response => {
        console.log('docdetailsashbaord', response.data.data.appointments);

        let apparr = response.data.data.appointments
        let filterapparr = apparr.filter(function (hero) {
          return hero.booked == true;
          // console.log('hero',hero.booked == true)
        });
        console.log('filterapparrrdata', apparr)
        this.setState({
          filterappointmentarr: filterapparr,
          allAppointments: apparr
        })
        // this.state.allAppointments = apparr
        console.log('allApp', this.state.filterappointmentarr)

        // for(let i=0;i <= apparr.length;++i){
        //   console.log('bookres',apparr[i].booked)
        //   if(apparr[i].booked == true){
        //     console.log(apparr[i])
        //     // this.state.counter = +this.state.counter + 1
        //     // console.log(this.state.counter)
        //   }
        // }


      })
      .catch(e => {
        console.log('error', e);
      });
  }


  async componentDidMount() {
    this.setState({
      // isTourActive: true
      // open : true

    });
    this.props.getDoctors()
    // if(this.state.open){
    await this.props.getNotifications()
    // }
    // console.log('docdetails',localStorage.getItem('user'))
    // console.log('patientdetail',localStorage.getItem('patient'))
    this.getdocdetail();

    //  (console.log('final redmer'))

  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  manualnext = (step) => {
    this.setState({
      tourStep: step,
      visible: true
    })
  }

  manualprev = (step) => {
    this.setState({
      tourStep: step
    })
    this.setState({
      visible: false
    });
  }

  onClose = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  };
  confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  componentClass = name => {
    if (typeof name === "string") {
      if (name.includes(",")) {
        const newName = name.split(",").map(el => el.trim()).filter(el => el)
        return newName.map(el => `c-info-card__${el}`).join(" ")
      }
      return `c-info-card__${name}`
    }

    if (name.constructor() === Array)
      return name.map(el => `c-info-card__${el}`).join(" ")

    return ``
  }
  manualapprove = (item) => {
    console.log('something', item)
    let approvetime = new Date(item.bookedFor)
    let body = {
      patient: 'John Doe',
      time: approvetime.toLocaleTimeString('en-US'),
      date: moment(approvetime).format('L'),
      address: 'NO DATA',
      timeSlot: item._id,
      email: 'patienemail@gmail.com',
      doctor: localStorage.getItem('docname')
    }
    console.log('approvebody', body)
    axios
      .post(
        'http://localhost:3001/appointment/approve', body

      )
      .then(response => {
        console.log('approveappointmernt', response);
        if (response.data.status == true) {
          alert(response.data.message)
          window.location.reload();
          // this.setState({
          //   success : true
          // })
          // const success = () => {
          //   message.success('This is a success message');
          // };
        }

      })
      .catch(e => {
        console.log('error', e);
      });
  }
  render() {


    // const args = {
    //   message: 'Notification Title',
    //   description:
    //     'I will never close automatically. I will be close automatically. I will never close automatically.',
    //   duration: 0,
    // };

    const { visible, filterappointmentarr, allAppointments } = this.state;
    // console.clear()
    console.log({
      __allAppointments: allAppointments
    })
    const tourTitleStyle = {
      fontWeight: 700,
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10
    };

    const tourMessageStyle = {
      fontSize: 12,
      paddingLeft: 10
    };
    if (this.state.isTourActive !== false) {
      this.setState({
        visible: false
      })
    }
    return (
      <div>
        {/* {!this.state.open ? '' : <WelcomeNotification />}    */}
        {/* <WelcomeNotification /> */}
        {/* {notification.open(args)} */}
        <Row>
          <Col
            span={15}
            offset={1}
          // class="stop-1"
          >
            {/* <Timelines /> */}
            <span style={{ paddingTop: 50, display: "block" }}></span>
            <Row>
              <Col>
                <span className="dashboard-heading">Appointments</span>
              </Col>
            </Row>
            <span style={{ paddingTop: 30, display: "block" }}></span>
            <Collapse className="info-style-collapse" accordion>
              {this.state.filterappointmentarr.length ? (
                this.state.filterappointmentarr.map(function (item, id) {
                  return (

                    <Panel header={
                      // <InfoCard />
                      <Card bordered={false} className="c-info-card">


                        <Row type="flex" align="middle" >
                          <Col span={24 / 3} className={this.componentClass("user-info, border-col")} >
                            <Avatar size={50} icon="user" className={this.componentClass("avatar")} />
                            <div className={this.componentClass("user-content")}>
                              <p className={this.componentClass("user-name")}>
                                {item.name || 'patient name'}
                              </p>
                              <p className={this.componentClass("user-number")}>
                                {item.number || '1234567892'}
                              </p>
                            </div>
                          </Col>
                          <Col span={24 / 3} className={this.componentClass("calander-col, border-col")} >
                            <div className={this.componentClass("calander-inner")} >
                              <div className={this.componentClass("calander-date")} >
                                <Icon type="calendar" className={this.componentClass("icon")} />
                                {<Moment format="LL">{item.bookedFor}</Moment> || '22 October 2019'}
                              </div>
                              <div className={this.componentClass("calander-time")} >
                                <Icon type="clock-circle" className={classNames(this.componentClass("icon"))} />
                                {<Moment format="LT">{item.bookedFor}</Moment> || '8:30 A.M.'}
                              </div>
                            </div>
                          </Col>
                          <Col span={24 / 3} className={this.componentClass("status-col")} >
                            {item.approved == true ?
                              <div className={classNames(this.componentClass("status"), this.componentClass("status--active"))} >
                                Approved</div> :
                              <div className={classNames(this.componentClass("status-notapproved"), this.componentClass("status--active"))} >
                                <Tooltip title="Approve this Appointment">
                                  <span onClick={this.manualapprove.bind(this, item)} style={{ color: 'red' }}>Need Approval</span>
                                </Tooltip>
                              </div>
                            }
                            <div className={classNames(this.componentClass("more"), (this.componentClass('more_ap_custom')))} >
                              {/* <Icon type="down" className={classNames(this.componentClass("icon"), this.componentClass("icon--more"))} /> */}
                              {/* <Icon type="close" /> */}
                              {/* <Button type="primary" className="custom-infocard-btn-ap">Cancel</Button> */}
                              <Popconfirm
                                title="Are you sure Cancel this Appointment?"
                                onConfirm={this.confirm}
                                onCancel={this.cancel}
                                okText="Yes"
                                cancelText="No"
                              >
                               <Icon type="ellipsis" />
                              </Popconfirm>
                            </div>
                          </Col>
                        </Row>


                      </Card>

                    }
                      key={id}>



                      {!item.reasonForVisit ? '' : <p>Reason for visit : {item.reasonForVisit || 'NO DATA'}</p>}

                      {!item.description ? '' : <p>Description : {item.description || 'NO DATA'}</p>}
                      {!item.duration ? '' : <p>Duration : {item.duration || 'NO DATA'}</p>}
                    </Panel>
                  );
                }, this)
              ) : (
                  <span>
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />
                  </span>
                )}


            </Collapse>
            {/* <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion> */}

          </Col>

          <Col
            span={8}
          // class="stop-2"
          >
            <div
              style={{
                paddingLeft: 50
              }}
            >
              <Button onClick={this.showDrawer} className="fr timeline-toggle" type="primary">
                <Icon style={{ fontSize: 20 }} type="schedule" />
              </Button>
              <Timeline_drovar
                visible={visible}
                onClose={() => {
                  this.onClose();
                }}
                class="stop-2"
                allAppointments={allAppointments}
                appointments={filterappointmentarr}
              />
              {/* <ShortCalender /> */}
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col span={24}>
            <Collapse accordion>
              <Panel header={<InfoCard />}
           key="1">
                <p>{text}</p>
              </Panel>
              <Panel header={<InfoCard />} key="2">
                <p>{text}</p>
              </Panel>
              <Panel header={<InfoCard />} key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row> */}
        {/* <Row>
        
          <Col span={24}>
          <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
          </Col>
         
        </Row> */}
        <div style={{ position: "absolute", top: 0 }}>
          <Tour
            active={this.state.isTourActive}
            step={this.state.tourStep}
            onNext={step => this.setState({ tourStep: step })}
            onBack={step => this.setState({ tourStep: step })}
            onCancel={() => this.setState({ isTourActive: false })}
            steps={[
              {
                step: 1,
                selector: ".stop-1",
                title: <div style={tourTitleStyle}>React User Tour</div>,
                body: (
                  <div style={tourMessageStyle}>
                    Provide a simple guided tour around a website utilizing css
                    selectors.
                  </div>
                ),
                position: "bottom"
              },
              {
                step: 2,
                selector: ".stop-2",
                title: <div style={tourTitleStyle}>Simply</div>,
                body: (
                  <div style={tourMessageStyle}>
                    pass in a class class prefixe with `.` or id prefixed with
                    `#`
                  </div>
                )
              },
              {
                step: 3,
                selector: ".stop-3",
                title: <div style={tourTitleStyle}>And</div>,
                body: (
                  <div style={tourMessageStyle}>
                    React User Tour will figure out where to position the
                    element.
                  </div>
                )
              },
              {
                step: 4,
                selector: ".stop-4",
                title: <div style={tourTitleStyle}>Wow</div>,
                body: (
                  <div style={tourMessageStyle}>
                    That sounds amazing, can it be true?
                  </div>
                )
              },
              {
                step: 5,
                selector: ".stop-5",
                title: <div style={tourTitleStyle}>Yes</div>,
                body: <div style={tourMessageStyle}>and guess what?</div>
              },
              {
                step: 6,
                selector: ".stop-6",
                title: <div style={tourTitleStyle}>What?</div>,
                body: (
                  <div style={tourMessageStyle}>
                    we'll even take care of scrolling to elements outside of the
                    viewbox. Enjoy!
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  doctors: state.doctors.all,
  notifications: state.notifications.all
})
export default connect(mapStateToProps, {
  getDoctors, getNotifications
})(Dashboard)
