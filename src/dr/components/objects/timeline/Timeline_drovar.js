import React, { Component } from "react";
import { Row, Col, Divider, Drawer, Alert } from "antd";
import ShortCalender from "../calenders/shortCalender/ShortCalender";

export default class Timeline_drovar extends Component {
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

    return (
      <div className="c-timeline-drower">
        <Drawer
          title="Availability Timeline"
          placement="right"
          closable={true}
          onClose={() => this.onCloseTo()}
          visible={visible}
          width={350}
          mask={false}
        >
          <ShortCalender />
          <div className="c-timeline-drower__row">
              Time
            <div data-time="08:00" className="c-timeline-drower__col">
                <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-2"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            </div>
            <div data-time="09:00" className="c-timeline-drower__col">
            </div>
            <div data-time="10:00" className="c-timeline-drower__col">
            </div>
            <div data-time="11:00" className="c-timeline-drower__col">
            </div>
            <div data-time="12:00" className="c-timeline-drower__col">
                <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-5"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="success"
                />
            </div>
            <div data-time="01:00" className="c-timeline-drower__col">
            </div>
            <div data-time="02:00" className="c-timeline-drower__col">
            </div>
            <div data-time="03:00" className="c-timeline-drower__col">
            </div>
            <div data-time="04:00" className="c-timeline-drower__col">
            
            </div>
            <div data-time="05:00" className="c-timeline-drower__col">
            </div>
            <div data-time="06:00" className="c-timeline-drower__col">
            <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-3"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            </div>
            <div data-time="07:00" className="c-timeline-drower__col">
            </div>
            <div data-time="08:00" className="c-timeline-drower__col">
            </div>
            <div data-time="09:00" className="c-timeline-drower__col">
            
            </div>
          </div>
         
        </Drawer>
      </div>
    );
  }
}
