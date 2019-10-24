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
const { Option } = Select;
export default class Availability_drower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "vertical"
    };
  }
  onCloseTo = () => {
    this.props.onClose();
  };

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  timeonChange(time, timeString) {
    console.log(time, timeString);
  }
  render() {
    const { visible } = this.props;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
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
          <Form layout={"vertical"}>
            <Row>
              <Col span={12}>
                  <label>Start Time</label> 
                  
                  <TimePicker onChange={this.timeonChange} />
                
              </Col>
              <Col span={12}>
                  <label>End Time</label> 
                  <TimePicker onChange={this.timeonChange} />
               
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24}>
               
                  <label>Appointment Duration</label>
                  
                  <Tooltip title="Max Calling Time" className="fr form-tolltip">
                    <Icon type="exclamation-circle" />
                  </Tooltip>
                
                <Radio.Group
                  defaultValue="15"
                  onChange={this.handleFormLayoutChange}
                >
                  <Radio.Button value="15">15M</Radio.Button>
                  <Radio.Button value="30">30M</Radio.Button>
                  <Radio.Button value="45">45M</Radio.Button>
                  <Radio.Button value="60">60M</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col span={24}>
                
                  
                  <label>Time Between Appointments</label>
                  <Tooltip title="Differnt time between two Calls" className="fr form-tolltip">
                    <Icon type="exclamation-circle" />
                  </Tooltip>
                
                <Radio.Group
                  defaultValue="none"
                  onChange={this.handleFormLayoutChange}
                >
                  <Radio.Button value="none">None</Radio.Button>
                  <Radio.Button value="5">5M</Radio.Button>
                  <Radio.Button value="10">10M</Radio.Button>
                  <Radio.Button value="custom">Custom</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>

            <Divider />
            <h4>
              <Icon type="retweet" spin /> Repeat Availability
            </h4>
            <p>Choose any day to the weel to repeat this availabilty</p>

            <Row>
              <Col span={12}>
                <Checkbox>Monday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Tuesday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox>Wednesday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Thursday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox>Friday</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Saturday</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Checkbox>Sunday</Checkbox>
              </Col>
            </Row>

            <Divider />
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}
