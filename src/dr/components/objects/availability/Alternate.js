import React, { Component } from "react";
import {
  Row,
  Col,
  Checkbox,
  TimePicker,
  Icon,
  Divider,
  Button
  
} from "antd";

export default class Alternate extends Component {
  constructor(props) {
    super(props);
  }
  onDaysChange = (e) => {
    const {
      onDaysChange
    } = this.props
    if(typeof onDaysChange === "function"){
      onDaysChange(e)
    }
  }

  onStartTimeChange = time => {
    const {
      onStartTimeChange
    } = this.props
    if(typeof onStartTimeChange === "function"){
      onStartTimeChange(time)
    }
  }
  onEndTimeChange = time => {
    const {
      onEndTimeChange
    } = this.props
    if(typeof onEndTimeChange === "function"){
      onEndTimeChange(time)
    }
  }
  onAdd = () => {
    const {
      onAdd,
      index
    } = this.props
    if(typeof onAdd === "function"){
      onAdd(index || 0)
    }
  }
  onRemove = () => {
    const {
      onRemove,
      index
    } = this.props
    if(typeof onRemove === "function"){
      onRemove(index || 0)
    }
  }
  render() {
    const { 
      startTime,
      endTime,
      weekdays,
      hideRemove,
      hideAdd,
    } = this.props;
 
    
    return (
      <div><Row>
              <Col span={12}>
                  <label>Start Time</label> 
                  <TimePicker value={startTime} onChange={this.onStartTimeChange} />
              </Col>
              <Col span={12}>
                  <label>End Time</label> 
                  <TimePicker value={endTime} onChange={this.onEndTimeChange} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("monday")} value="monday">Monday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("tuesday")} value="tuesday">Tuesday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("wednesday")} value="wednesday">Wednesday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("thursday")} value="thursday">Thursday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("friday")} value="friday">Friday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("saturday")} value="saturday">Saturday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox name="weekDays" onChange={this.onDaysChange} checked={weekdays.includes("sunday")} value="sunday">Sunday</Checkbox>
              </Col>
            </Row>
            <br />
            {!hideRemove && <Button type="danger" style={{marginRight: 10}} onClick={this.onRemove}>-</Button>}
            {!hideAdd && <Button type="info" onClick={this.onAdd}>+</Button>}
            <Divider />
      </div>
    );
  }
}

Alternate.defaultProps = {
  weekdays: []
}