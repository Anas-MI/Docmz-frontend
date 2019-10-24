import React, { Component } from "react";
// import Timelines from "../../objects/timeline/Timelines";
import { Row, Col, Button } from "antd";
import InfoCard from "../../objects/card/InfoCard";
import ShortCalender from "../../objects/calenders/shortCalender/ShortCalender";
import Timeline_drovar from "../../objects/timeline/Timeline_drovar";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showDrawer = () => {
    console.log("drower show");
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  };
  render() {
    const { visible } = this.state;

    return (
      <div>
        <Row>
          <Col span={16}>
            {/* <Timelines /> */}
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </Col>
          <Col span={8}>
            <div
              style={{
                paddingLeft: 50
              }}
            >
              <Button onClick={this.showDrawer} className="fr" type="primary">Timeline</Button>
              <Timeline_drovar
                visible={visible}
                onClose={() => {
                  this.onClose();
                }}
              />
              {/* <ShortCalender /> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
