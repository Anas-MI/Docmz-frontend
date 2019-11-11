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
import MultiStepProfileUpdate from "./pages/profile/MultiStepProfileUpdate"
export default class Dr_layout extends Component {
	constructor(props) {
		super(props);
	
    }
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    render() {
       const { Header, Content, Sider } = Layout;
      
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
                              path="/dr/dashbord"
                              exact
                              component={props => <Dashboard {...props} />}
                            />
                            <Route
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
               

            </div>
			
		);
	}
}
