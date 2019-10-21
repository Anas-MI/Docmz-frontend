import React, { Component } from 'react';
import { Layout , Menu , Icon ,Breadcrumb} from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout_header from "./layouts/Layout_header";
import Layout_top_header from "./layouts/Layout_top_header";
import Layout_footer from "./layouts/Layout_footer";
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
                    <Layout_top_header />
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        
                        <Switch>
                            <Route
                              path="/dashbord"
                              component={props => <Dashboard {...props} />}
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
