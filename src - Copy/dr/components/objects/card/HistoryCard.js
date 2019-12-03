import React, { Component } from 'react'
import { Card, Row, Col, version, Divider, Spin, Icon, Collapse, Avatar, Tooltip } from 'antd';
import classNames from 'classnames'
import axios from 'axios'
import Moment from 'react-moment';
import { getComponentClass, getVersions } from '../../../../services/extra/bem'
import LabelValue from '../labelValue/LabelValue'
import Button from '../buttons/Button'
import moment from "moment";
import './custominfocrd.css'
const Panel = Collapse.Panel;
export default class HistoryCard extends Component {
  constructor() {
    super()
    this.state = {
      filterhistoryarr: [],
      patientid: ''
    }
  }
  componentDidMount() {

    this.getdocdetail();
  }
  getdocdetail = () => {
    axios.get(
      `http://localhost:3001/doctors/getdoc/${localStorage.getItem('doctorid')}`

    )
      .then(response => {
        console.log('docdetailsashbaord', response.data.data.appointments);

        let apparr = response.data.data.appointments
        let filterapparr = apparr.filter(function (hero) {
          return hero.booked == true;
          // console.log('hero',hero.booked == true)
        });
        console.log('filterhostoryapp', filterapparr[0].patient.customerProfile)
        this.setState({
          filterhistoryarr: filterapparr
        })
        console.log(this.state.filterhistoryarr)


        // for(let i=0;i <= this.state.filterhistoryarr.length;++i){
        // this.setState({
        //   patientarr : this.state.filterhistoryarr[i].patient
        // })
        // console.log('patientid',this.state.patientarr)

        // }


      })
      .catch(e => {
        console.log('error', e);
      });
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
    return (
      <div>
        <Row>
          <Col span={24}>

            <Collapse className="info-style-collapse info-style-collapse__custom_ap" accordion>
              {this.state.filterhistoryarr.length ? (
                this.state.filterhistoryarr.map(function (item, id) {
                  return (


                    <Panel header={

                      <Card bordered={false} className={componentClass}>
                        <Row>
                          {/* <Col span={12}>
                          <Row> */}
                          <Col span={7}>
                            {/* <p className={elementClasses.name}>{this.state.filterhistoryarr[0].patient.customerProfile}</p> */}
                            {/* {this.state.filterhistoryarr[id].patient == null ? 'NO NAME' : <span>{this.state.filterhistoryarr[id].patient.name || 'John Doe'}</span>}
                            <p className={elementClasses.status}>active</p> */}
                             <LabelValue parentClass={componentClass} label="Patient Name" >
                              {/* {this.state.filterhistoryarr[0].patient._id} */}
                              {this.state.filterhistoryarr[id].patient == null ? 'NO NAME' : <span>{this.state.filterhistoryarr[id].patient.name || 'John Doe'}</span>}
                            </LabelValue>
                            <LabelValue parentClass={componentClass} label="Status" >  
                            Active
                            </LabelValue>
                          </Col>
                          <Col span={8}>
                            <LabelValue parentClass={componentClass} label="Patient ID" >
                              {/* {this.state.filterhistoryarr[0].patient._id} */}
                              {this.state.filterhistoryarr[id].patient == null ? 'No Patient' : <span>{this.state.filterhistoryarr[id].patient._id}</span>}
                            </LabelValue>
                            <LabelValue parentClass={componentClass} label="Email" >  
                            {this.state.filterhistoryarr[id].patient == null ? 'No Email Found' : <span style={{minWidth : '60%!important'}}>{this.state.filterhistoryarr[id].patient.email}</span>}
                            </LabelValue>
                            <LabelValue parentClass={componentClass} label="Phone" >
                            {this.state.filterhistoryarr[id].patient == null ? 'No Contact Details Found' : <span>{this.state.filterhistoryarr[id].patient.phone}</span>}
                              </LabelValue>
                            <LabelValue parentClass={componentClass} label="Reason For Visit" >{item.reasonForVisit || 'NO DATA'}</LabelValue>
                            <LabelValue parentClass={componentClass} label="Intake Timestamp" ><Moment format="L">{item.bookedFor}</Moment> - <Moment format="LT">{item.bookedFor}</Moment></LabelValue>
                          </Col>
                          <Col span={7} offset={2}>
                          <LabelValue parentClass={componentClass} label="Notes" >{item.description || 'NO DATA'}</LabelValue>
                          </Col>
                          {/* </Row>
                        </Col> */}

                        </Row>
                        <Divider />
                        <Row className={elementClasses.footer} align="middle" justify="space-between" type="flex">
                          <Col span={12}>
                            <Row>
                              <Col span={12}>
                                <LabelValue version="top-bottom" parentClass={componentClass} label="Assigned Case" >41:21:50</LabelValue>
                              </Col>
                              <Col span={12}>
                                <LabelValue version="top-bottom" parentClass={componentClass} label="Case Duration" >41:21:50</LabelValue>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Button shape="round" icon="right" iconPos="right"  />
                          </Col>
                        </Row>
                      </Card>

                    }
                      key={id}>
                      <p>Patient Notes : {item.description || 'NO DATA'}</p>


                      <p>Description : Doctor Description Static Data</p>

                    </Panel>
                  );
                }, this)
              ) : (
                  <span>
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />
                  </span>
                )}


            </Collapse>
          </Col>

        </Row>
        {/* {this.state.filterhistoryarr.length ? (
                this.state.filterhistoryarr.map(function (item, id) {
                  return (
      <Card bordered={false} className={componentClass} key={id}>
        <Row type="flex">
          <Col span={12}>
            <Row>
              <Col span={24/3}>
                <p className={elementClasses.name}>Amelia Cabal</p>
                <p className={elementClasses.status}>active</p>
              </Col>
              <Col span={(24/3) + (24/3)}>
                <LabelValue parentClass={componentClass} label="Patient ID" >{item.patient || 'NO PATIENT ID AVAILABLE'}</LabelValue>
                  <LabelValue parentClass={componentClass} label="Case ID" >{item._id || 'NO CASE ID AVAILABLE'}</LabelValue>
                <LabelValue parentClass={componentClass} label="Facility" >St. Rose Clinic</LabelValue>
                <LabelValue parentClass={componentClass} label="Intake Timestamp" ><Moment format="L">{item.bookedFor}</Moment> - <Moment format="LT">{item.bookedFor}</Moment></LabelValue>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{textAlign : 'center'}}> 
            <LabelValue version="top-bottom" parentClass={componentClass} label="Reffering Notes" >
              {item.description || 'NO DESCRIPTION DATA AVAILABLE'}
            </LabelValue>
          </Col>
        </Row>
        <Divider/>
        <Row className={elementClasses.footer} align="middle" justify="space-between" type="flex">
          <Col span={12}>
            <Row>
              <Col span={12}>
                <LabelValue version="top-bottom" parentClass={componentClass} label="Assigned Case" >41:21:50</LabelValue>
              </Col>
              <Col span={12}>
                <LabelValue version="top-bottom" parentClass={componentClass} label="Case Duration" >41:21:50</LabelValue>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button shape="round" icon="right" iconPos="right" />
          </Col>
        </Row>
      </Card>
       );
      }, this)
    ) : (
        <span>
          <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />
        </span>
      )} */}
      </div>
    )
  }
}
const componentClass = "c-history-card"
const elementClasses = {
  name: getComponentClass("name", componentClass),
  status: getComponentClass("status", componentClass),
  footer: getComponentClass("footer", componentClass),
}