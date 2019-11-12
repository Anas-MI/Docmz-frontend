import React, { Component } from 'react';
import { Layout} from 'antd';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout_header from "./layouts/Layout_header";
import Layout_top_header from "./layouts/Layout_top_header";
import Layout_footer from "./layouts/Layout_footer";
import Calendars from "./pages/calendar/Calendars";
import Single_patient from "./pages/patient/Single_patient";
import History from './pages/history/History';
import MultiStepProfileUpdate from "./pages/profile/MultiStepProfileUpdate";
import Tour from "react-user-tour";
// import './drlayout.css';
export default class Dr_layout extends Component {
	constructor(props) {
		super(props);
    this.state = {
      collapsed: false,
      isTourActive: false,
			tourStep: 1
     
    };
    }
    componentDidMount() {
      this.setState({
        isTourActive: false
      });
    }
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    render() {
       const { Header, Content, Sider } = Layout;
       const { steps } = this.state;
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
      
		return (
      
			<div>
    
                <Layout style={{ minHeight: '100vh' }} theme="light">
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                       <Layout_header />
                    </Sider>
                    <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                       <Layout_top_header history={this.props.history} />
                    </Header>
                    <Content style={{ margin: '25px 16px' }}>
                        
                        <Switch>
                       
  
                            <Route
                            // style={{width: 200, height: 100, left: "60%", top: 0, position: "absolute", backgroundColor: "red"}}
                              className="stop-1"
                              path="/dr/dashbord"
                              exact
                              component={props => <Dashboard {...props} />}
                            />
                            <Route
                              className="stop-2"
                              path="/dr/calendar"
                              exact
                              component={props => <Calendars {...props} />}
                            />
                            <Route
                              path="/dr/patients/single"
                              exact
                              component={props => <Single_patient {...props} />}
                            />
                            <Route
                              path="/dr/history"
                              exact
                              component={props => <History {...props} />}
                            />
                            
                          
                          <Route
                              path="/"
                              
                              component={props => <Dashboard {...props} />}
                            />
                          
                        </Switch>
                    </Content>
                    <Layout_footer />
                    
                    </Layout>
                </Layout>
                <div style={{position: "absolute", top: 0}}>
					<Tour
						active={this.state.isTourActive}
						step={this.state.tourStep}
						onNext={(step) => this.setState({tourStep: step})}
						onBack={(step) => this.setState({tourStep: step})}
						onCancel={() => this.setState({isTourActive: false})}
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
							{
								step: 3,
								selector: ".stop-3",
								title: <div style={tourTitleStyle}>And</div>,
								body: <div style={tourMessageStyle}>React User Tour will figure out where to position the element.</div>
							},
							{
								step: 4,
								selector: ".stop-4",
								title: <div style={tourTitleStyle}>Wow</div>,
								body: <div style={tourMessageStyle}>That sounds amazing, can it be true?</div>
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
								body: <div style={tourMessageStyle}>we'll even take care of scrolling to elements outside of the viewbox. Enjoy!</div>
							}
						]}
					/>
				</div>
            </div>
           
		);
	}
}
