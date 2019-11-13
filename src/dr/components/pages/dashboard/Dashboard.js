import React, { Component } from "react";
// import Timelines from "../../objects/timeline/Timelines";
import { Row, Col, Button } from "antd";
import InfoCard from "../../objects/card/InfoCard";
import ShortCalender from "../../objects/calenders/shortCalender/ShortCalender";
import Timeline_drovar from "../../objects/timeline/Timeline_drovar";
import Tour from "react-user-tour";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isTourActive: false,
      tourStep: 1,
      // timelinevisible : false

    };
  }
  componentDidMount() {
    this.setState({
      isTourActive: true
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
      tourStep: step ,
      visible : true
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
     console.log('prevstep',this.state.tourStep)
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
    if(this.state.isTourActive == false){
      this.setState({
        visible : false
      })
    }
    return (
      <div>
        <div class="stop-1">
          <Row

          >
            <Col span={16}

            >
              {/* <Timelines /> */}

              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />

            </Col>
            <Col span={8}
            // class="stop-2"
            >
              <div
                style={{
                  paddingLeft: 50
                }}
                class="stop-2"

              >
                <Button onClick={this.showDrawer} className="fr" type="primary">Timeline</Button>
                <Timeline_drovar
                  visible={visible}
                  onClose={() => {
                    this.onClose();
                  }}
                // className="stop-1"
                />
                {/* <ShortCalender /> */}
              </div>
            </Col>
          </Row>
        </div>
        {/* <Row>
        <Col span={2}
        className="stop-1"
        >
        Demo content
        </Col>
        </Row>
        <Row>
        <Col span={4}
        className="stop-2"
        >
       Demo content 2
        </Col>
        </Row>
        <Row>
        <Col span={2}
        className="stop-3"
        >
       Demo content 3
        </Col>
        </Row>   */}



        <div style={{ position: "absolute", top: 0 }}>
          <Tour
            active={this.state.isTourActive}
            step={this.state.tourStep}
            // onNext={(step) => this.setState({ tourStep: step })}
            onNext={(step) => this.manualnext(step)}
            onBack={(step) => this.manualprev(step)}
            onCancel={() => this.setState({ isTourActive: false })}
            steps={[
              {
                step: 1,
                selector: ".stop-1",
                title: <div style={tourTitleStyle}>React User Tour</div>,
                body: <div style={tourMessageStyle}>Provide a simple guided tour around a website utilizing css selectors.</div>,
                position: "bottom"
              },
              {
                step: 2,
                selector: ".stop-2",
                title: <div style={tourTitleStyle}>Simply</div>,
                body: <div style={tourMessageStyle}>pass in a class class prefixe with `.` or id prefixed with `#`</div>
              },
              // {
              //   step: 3,
              //   selector: ".stop-3",
              //   title: <div style={tourTitleStyle}>And</div>,
              //   body: <div style={tourMessageStyle}>React User Tour will figure out where to position the element.</div>
              // },
              // {
              //   step: 4,
              //   selector: ".stop-4",
              //   title: <div style={tourTitleStyle}>Wow</div>,
              //   body: <div style={tourMessageStyle}>That sounds amazing, can it be true?</div>
              // },
              // {
              //   step: 5,
              //   selector: ".stop-5",
              //   title: <div style={tourTitleStyle}>Yes</div>,
              //   body: <div style={tourMessageStyle}>and guess what?</div>
              // },
              // {
              //   step: 6,
              //   selector: ".stop-6",
              //   title: <div style={tourTitleStyle}>What?</div>,
              //   body: <div style={tourMessageStyle}>we'll even take care of scrolling to elements outside of the viewbox. Enjoy!</div>
              // }
            ]}
          />
        </div>
      </div>
    );
  }
}
