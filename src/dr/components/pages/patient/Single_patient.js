import React, { Component } from "react";
import { Row, Col, Icon, Menu, Tabs } from "antd";
import Cards_tabs from "../../objects/card/Cards_tabs";
import BarCard from "../../objects/card/BarCard";
const { TabPane } = Tabs;
export default class Single_patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
      mode: "left"
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Row>
          <Col span={6}>
            <img
              src="../../../../images/dr-demo-5.jpg"
              className="patient-profile__user-profile"
            />
          </Col>
          <Col span={18}>
            <div className="patient-profile__wrapper">
              <Row>
                <Col span={12}>
                  <div className="patient-profile__name-section">
                    <h2>
                      Patient Name <Icon type="environment" />
                    </h2>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="patient-profile__menu-section">
                    <Menu
                      onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal"
                    >
                      <Menu.Item key="mail">
                        <Icon type="mail" />
                        Message
                      </Menu.Item>
                      <Menu.Item key="app">
                        <Icon type="printer" />
                        Print
                      </Menu.Item>
                      <Menu.Item key="share">
                        <Icon type="share-alt" />
                        Share
                      </Menu.Item>
                    </Menu>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="patient-profile__details ">
                    <table className="patient-profile__details-table">
                      <tr>
                        <th>AGE</th>
                        <td>26</td>
                        <th>CONTACT</th>
                        <td>+91 - 456456789</td>
                      </tr>
                      <tr>
                        <th>BIRTH</th>
                        <td>26-10-2019</td>
                        <th>ADDRESS</th>
                        <td>Cecilia Chapman 711-2880 Nulla St.</td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="patient-profile__details-tab-wrapper">
          <Col span={24}>
            <Tabs defaultActiveKey="1" tabPosition={mode}>
              <TabPane tab="OVERVIEW" key={1}>
                <Cards_tabs
                  title="What is Lorem Ipsum?"
                  details={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  border="right"
                />
              </TabPane>
              <TabPane tab={`TEST RESULTS`} key={2}>
                <Cards_tabs
                  title="TEST RESULTS"
                  details={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  border="right"
                />
              </TabPane>
              <TabPane tab={`NOTES`} key={3}>
                <Cards_tabs
                  title="NOTES"
                  details={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  border="right"
                />
              </TabPane>
              <TabPane tab={`APPOINTMENTS`} key={4}>
                <Cards_tabs
                  title="APPOINTMENTS"
                  details={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  border="right"
                />
              </TabPane>
              <TabPane tab={`CARE PLAN`} key={5}>
                <Cards_tabs
                  title="CARE PLAN"
                  details={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.`}
                  border="right"
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row
          className="patient-profile__bottom-tabs"
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col span={6} className="patient-profile__bottom-tabs-col">
            <BarCard icon="percentage" type="top">
              <h4>Blood Pressure</h4>
              <p>
                <span>130/90</span>mm/hg
              </p>
            </BarCard>
          </Col>
          <Col span={6} className="patient-profile__bottom-tabs-col">
            <BarCard icon="heart" type="bottom">
              <h4>Heart Rate</h4>
              <p>
                <span>180</span>bsm
              </p>
            </BarCard>
          </Col>
          <Col span={6} className="patient-profile__bottom-tabs-col">
            <BarCard icon="fire" type="top">
              <h4>Glucose</h4>
              <p>
                <span>82</span>mg/ol
              </p>
            </BarCard>
          </Col>
          <Col span={6} className="patient-profile__bottom-tabs-col">
            <BarCard icon="coffee" type="bottom">
              <h4>Temperature</h4>
              <p>
                <span>35</span>°C
              </p>
            </BarCard>
          </Col>
        </Row>
      </div>
    );
  }
}
