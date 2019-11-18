import React, { Component } from "react";
// import Timelines from "../../objects/timeline/Timelines";
import { Row, Col, Button, Icon } from "antd";
import InfoCard from "../../objects/card/InfoCard";
import ShortCalender from "../../objects/calenders/shortCalender/ShortCalender";
import Timeline_drovar from "../../objects/timeline/Timeline_drovar";
import { Collapse } from 'antd';
import Tour from "react-user-tour";
import "./ddemo.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Panel = Collapse.Panel;
const text1 = `
 Reason for visit - Toothache`;
 const text2 = `Description - Notes Available`
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isTourActive: false,
      tourStep: 1
    };
  }
  componentDidMount() {
    this.setState({
      // isTourActive: true
    });
  }
  showDrawer = () => {
    console.log("drower show");
    this.setState({
      visible: true
    });
  };

  manualnext = (step) => {
    this.setState({
      tourStep: step,
      visible: true
    })
    console.log(this.state.tourStep)

  }

  manualprev = (step) => {
    this.setState({
      tourStep: step
    })
    this.setState({
      visible: false
    });
    console.log('prevstep', this.state.tourStep)
  }

  onClose = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  };
  render() {

    const { visible } = this.state;
    const tourTitleStyle = {
      fontWeight: 700,
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10
    };

    const tourMessageStyle = {
      fontSize: 12,
      paddingLeft: 10
    };
    if (this.state.isTourActive !== false) {
      this.setState({
        visible: false
      })
    }
    return (
      <div>
        <Row>
          <Col
            span={15}
            offset={1}
          // class="stop-1"
          >
            {/* <Timelines /> */}
            <span style={{ paddingTop: 50, display: "block" }}></span>
            <Row>
              <Col>
                <span className="dashboard-heading">Appointments</span>
              </Col>
            </Row>
            <span style={{ paddingTop: 30, display: "block" }}></span>
            <Collapse accordion>
              <Panel header={<InfoCard />}
           key="1">
                {/* <p>{text1} + {text2}</p> */}
                <p>Reason for your visit - <strong>Toothache</strong></p>
                <p>description - <strong>Description</strong></p>
              </Panel>
              <Panel header={<InfoCard />} key="2">
              <p>Reason for your visit - <strong>Toothache</strong></p>
                <p>description - <strong>Description</strong></p>
              </Panel>
              <Panel header={<InfoCard />} key="3">
              <p>Reason for your visit - <strong>Toothache</strong></p>
                <p>description - <strong>Description</strong></p>
              </Panel>
            </Collapse>
            {/* <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>

                    <InfoCard />

                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                    </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion> */}

          </Col>

          <Col
            span={8}
          // class="stop-2"
          >
            <div
              style={{
                paddingLeft: 50
              }}
            >
              <Button onClick={this.showDrawer} className="fr timeline-toggle" type="primary">
                <Icon style={{ fontSize: 20 }} type="schedule" />
              </Button>
              <Timeline_drovar
                visible={visible}
                onClose={() => {
                  this.onClose();
                }}
                class="stop-2"

              />
              {/* <ShortCalender /> */}
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col span={24}>
            <Collapse accordion>
              <Panel header={<InfoCard />}
           key="1">
                <p>{text}</p>
              </Panel>
              <Panel header={<InfoCard />} key="2">
                <p>{text}</p>
              </Panel>
              <Panel header={<InfoCard />} key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row> */}
        {/* <Row>
        
          <Col span={24}>
          <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   
            <InfoCard />
          
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
          </Col>
         
        </Row> */}
        <div style={{ position: "absolute", top: 0 }}>
          <Tour
            active={this.state.isTourActive}
            step={this.state.tourStep}
            onNext={step => this.setState({ tourStep: step })}
            onBack={step => this.setState({ tourStep: step })}
            onCancel={() => this.setState({ isTourActive: false })}
            steps={[
              {
                step: 1,
                selector: ".stop-1",
                title: <div style={tourTitleStyle}>React User Tour</div>,
                body: (
                  <div style={tourMessageStyle}>
                    Provide a simple guided tour around a website utilizing css
                    selectors.
                  </div>
                ),
                position: "bottom"
              },
              {
                step: 2,
                selector: ".stop-2",
                title: <div style={tourTitleStyle}>Simply</div>,
                body: (
                  <div style={tourMessageStyle}>
                    pass in a class class prefixe with `.` or id prefixed with
                    `#`
                  </div>
                )
              },
              {
                step: 3,
                selector: ".stop-3",
                title: <div style={tourTitleStyle}>And</div>,
                body: (
                  <div style={tourMessageStyle}>
                    React User Tour will figure out where to position the
                    element.
                  </div>
                )
              },
              {
                step: 4,
                selector: ".stop-4",
                title: <div style={tourTitleStyle}>Wow</div>,
                body: (
                  <div style={tourMessageStyle}>
                    That sounds amazing, can it be true?
                  </div>
                )
              },
              {
                step: 5,
                selector: ".stop-5",
                title: <div style={tourTitleStyle}>Yes</div>,
                body: <div style={tourMessageStyle}>and guess what?</div>
              },
              {
                step: 6,
                selector: ".stop-6",
                title: <div style={tourTitleStyle}>What?</div>,
                body: (
                  <div style={tourMessageStyle}>
                    we'll even take care of scrolling to elements outside of the
                    viewbox. Enjoy!
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>
    );
  }
}
