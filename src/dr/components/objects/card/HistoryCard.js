import React, { Component } from 'react'
import { Card, Row, Col, version ,Divider, Spin, Icon } from 'antd';
import axios from 'axios'
import Moment from 'react-moment';
import { getComponentClass, getVersions } from '../../../../services/extra/bem'
import LabelValue from '../labelValue/LabelValue'
import Button from '../buttons/Button'
export default class HistoryCard extends Component {
  constructor() {
    super ()
    this.state = {
      filterhistoryarr : []
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
        console.log('filterhostoryapp', filterapparr)
        this.setState({
          filterhistoryarr: filterapparr
        })

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
  render() {
    return (
      <div>
         {this.state.filterhistoryarr.length ? (
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
      )}
      </div>
    )
  }
}
const componentClass = "c-history-card"
const elementClasses = {
  name    : getComponentClass("name", componentClass),
  status  : getComponentClass("status", componentClass),
  footer  : getComponentClass("footer", componentClass),
}