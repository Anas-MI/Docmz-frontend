import React, { Component } from "react";
import {
  Row,
  Col,
  Drawer,
  Icon,
  Form,
  Select,
  Checkbox,
  Tooltip,
  Button,
  Radio,
  TimePicker,
  Divider
} from "antd";
import Alternate from "./Alternate";
import { weekdays } from "moment";
import { scheduler } from "../../../../services/scheduler/scheduler";
const { Option } = Select;
export default class Availability_drower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "vertical",
      startTime: null,
      endTime: null,
      duration: "15",
      gap: "none",
      weekdays: [],
      weekdaysArr: [
        {
          days: [],
          startTime: null,
          endTime: null
        }
      ]
    };
  }
  onCloseTo = () => {
    this.props.onClose();
  };

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };
  onDurationChange = e => {
    const { value } = e.target;
    this.setState({
      duration: value
    });
  };
  onGapChange = e => {
    const { value } = e.target;
    this.setState({
      gap: value
    });
  };
  onDaysChange = e => {
    const { weekdays } = this.state;
    const { value } = e.target;
    if (weekdays.includes(value)) {
      this.setState({
        weekdays: weekdays.filter(el => el !== value)
      });
    } else {
      this.setState({
        weekdays: [...weekdays, value]
      });
    }
  };
  onWeekDayChange = (e, index) => {
    const { weekdaysArr } = this.state;
    const { value } = e.target;
    const inInCurrent = weekdaysArr[index].days.some(el => el === value);
    const isInOther = weekdaysArr.some(el => el.days.some(elx => elx === value));
    if(inInCurrent){
      this.setState({
        weekdaysArr: weekdaysArr.map((el , i)=>{
          if(i !== index) return el
            return {
              ...el,
              days: el.days.filter(elx => elx !== value)
            }
        })
      })
    }else if(isInOther){
      this.setState({
        weekdaysArr: weekdaysArr.map((el , i)=>{
          if(i !== index) return {
            ...el,
            days: el.days.filter(elx => elx !== value) 
          }
            return {
              ...el,
              days: [...el.days, value]
            }
        })
      })
    }else {
      this.setState({
        weekdaysArr: weekdaysArr.map((el, i)=> {
          if(i !== index) return el
            return {
              ...el,
              days: [...el.days, value]
            }
        })
      })
    }
  }
  onWeekTimeChange(time, index, isStart){
    if(isStart){
      this.setState(prevState => ({
        weekdaysArr: prevState.weekdaysArr.map((el, i)=> {
          if(index === i){
            return {
              ...el,
              startTime: time
            }
          }
          return el
        })
      }))
    }else{
      this.setState( prevState => ({
        weekdaysArr:prevState.weekdaysArr.map((el, i)=> {
          if(index === i){
            return {
              ...el,
              endTime: time
            }
          }
          return el
        })
      }))
    }
  }
  timeonChange(time, timeString) {
    console.log(time, timeString);
  }
  onStartTimeChange = startTime => {
    this.setState({
      startTime
    });
  };
  onEndTimeChange = endTime => {
    this.setState({
      endTime
    });
  };
  onSubmit = () => {
    const { startTime, endTime, duration, gap, weekdays, weekdaysArr } = this.state;
    scheduler({
      startTime,
      endTime,
      duration,
      gap,
      weekdays,
      weekdaysArr,
    });
  };
  render() {
    const { visible } = this.props;
    const {
      formLayout,
      startTime,
      endTime,
      duration,
      gap,
      weekdays,
      weekdaysArr
    } = this.state;
   
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div>
        <Drawer
          title="Set Availability"
          placement="left"
          closable={false}
          onClose={() => this.onCloseTo()}
          visible={visible}
          width={350}
        >
          <Form onSubmit={this.onSubmit} layout={"vertical"}>
            
            <Row>
              <Col span={24}>
                <label>Appointment Duration</label>

                <Tooltip title="Max Calling Time" className="fr form-tolltip">
                  <Icon type="exclamation-circle" />
                </Tooltip>

                <Radio.Group
                  defaultValue="15"
                  value={duration}
                  onChange={this.onDurationChange}
                >
                  <Radio.Button value="15">15M</Radio.Button>
                  <Radio.Button value="30">30M</Radio.Button>
                  <Radio.Button value="45">45M</Radio.Button>
                  <Radio.Button value="60">60M</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <label>Time Between Appointments</label>
                <Tooltip
                  title="Differnt time between two Calls"
                  className="fr form-tolltip"
                >
                  <Icon type="exclamation-circle" />
                </Tooltip>

                <Radio.Group
                  defaultValue="none"
                  value={gap}
                  onChange={this.onGapChange}
                >
                  <Radio.Button value="none">None</Radio.Button>
                  <Radio.Button value="5">5M</Radio.Button>
                  <Radio.Button value="10">10M</Radio.Button>
                  <Radio.Button value="custom">Custom</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <br />
         
            <p>Choose any day to the weel to repeat this availabilty</p>

           
            {
              weekdaysArr.map((week, index)=> {
                return (<Alternate key={index}
                  weekdays={week.days}
                  onDaysChange={(e)=> {
                    this.onWeekDayChange(e, index)
                  }}
                  onStartTimeChange={(e)=> {
                    this.onWeekTimeChange(e, index, true)
                  }}
                  onEndTimeChange={(e)=> {
                    this.onWeekTimeChange(e, index, false)
                  }}
                  startTime={week.startTime}
                  endTime={week.endTime}
                  onAdd={()=> {
                    this.setState({
                      weekdaysArr: [...weekdaysArr, {
                        days: [],
                        startTime: null,
                        endTime: null
                      }]
                    })
                  }}
                  hideRemove={index === 0}
                  onRemove={()=> {
                    if(weekdaysArr.length > 1){
                      this.setState({
                        weekdaysArr: weekdaysArr.filter((el, i) => i !== index)
                      })
                    }
                  }}
                  index={index} />)
              })
            }
            <Form.Item {...buttonItemLayout}>
              <Button onClick={this.onSubmit}>Submit</Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}
