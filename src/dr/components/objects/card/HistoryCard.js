import React, { Component } from 'react'
import { Card, Row, Col, version ,Divider } from 'antd';
import { getComponentClass, getVersions } from '../../../../services/extra/bem'
import LabelValue from '../labelValue/LabelValue'
import Button from '../buttons/Button'
export default class HistoryCard extends Component {
  render() {
    return (
      <Card bordered={false} className={componentClass}>
        <Row type="flex">
          <Col span={12}>
            <Row>
              <Col span={24/3}>
                <p className={elementClasses.name}>Amelia Cabal</p>
                <p className={elementClasses.status}>active</p>
              </Col>
              <Col span={(24/3) + (24/3)}>
                <LabelValue parentClass={componentClass} label="Patient ID" >10321465</LabelValue>
                <LabelValue parentClass={componentClass} label="Case ID" >16001</LabelValue>
                <LabelValue parentClass={componentClass} label="Facility" >St. Rose Clinic</LabelValue>
                <LabelValue parentClass={componentClass} label="Intake Timestamp" >10:22 10/10/2019</LabelValue>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <LabelValue version="top-bottom" parentClass={componentClass} label="Reffering Notes" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestiae esse est sint rem non, odio eligendi cum quia alias!
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
    )
  }
}
const componentClass = "c-history-card"
const elementClasses = {
  name    : getComponentClass("name", componentClass),
  status  : getComponentClass("status", componentClass),
  footer  : getComponentClass("footer", componentClass),
}