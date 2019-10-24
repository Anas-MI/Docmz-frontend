import React, { Component } from 'react'
import { Calendar, Col, Row, Icon } from 'antd'
import classNames from 'classnames'
import moment from 'moment'

export default class ShortCalender extends Component {
    renderHeader = ({ value, type, onChange, onTypeChange }) => {
      const currentMonth = moment().month()
        return (
          <div className="c-short-calender__header" style={{ padding: 10 }}>
            <Row type="flex" justify="space-between">
              <Col>
                <Icon className={classNames("c-short-calender__header-icon c-short-calender__header-icon--left ",{
                  "c-short-calender__header-icon--disabled": !(value.month() > currentMonth)
                })} onClick={()=> {
                    const newValue = value.clone().subtract(1, "M");
                    const newMonth = newValue.month()
                    const newYear  = newValue.year()
                    const now = value.clone().month(newMonth).year(newYear);
                    onChange(now);
                }} type="left" />
              </Col>
              <Col>
              {`${moment(value).format("MMMM, YYYY")}`}
              </Col>
              <Col>
              
                <Icon className="c-short-calender__header-icon c-short-calender__header-icon--right" onClick={()=> {
                    const newValue = value.clone().add(1, 'M');
                    const newMonth = newValue.month()
                    const newYear  = newValue.year()
                    const now = value.clone().month(newMonth).year(newYear);
                    onChange(now);
                }} type="right" />
              </Col>
            </Row>
          </div>
        );
      }

    render() {
        return (
            <div className="c-short-calender">
                <Calendar 
                    fullscreen={false} 
                    headerRender={this.renderHeader}
                />
            </div>
        )
    }
}
        