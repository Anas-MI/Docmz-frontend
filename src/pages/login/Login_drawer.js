import React, { Component } from 'react';
import { Drawer, Button , Row, Col} from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import LoginForm from "../../components/Login/LoginForm"
// const { Option, OptGroup } = Select;
import Login_type from "./Login_type";
export default class Login_drawer extends Component {
	constructor(props) {
		super(props);
	    this.state={ 
            visible: false, 
            placement: 'top',
            childrenDrawer:false
        }
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
      showChildrenDrawer = () => {
        this.setState({
          childrenDrawer: true,
        });
      };
      onChildrenDrawerClose = () => {
        this.setState({
          childrenDrawer: false,
        });
      };
    
    render() {
		return (
			<div>
                <div>
                  <Button type="primary" onClick={this.showDrawer}>
                    Open
                    </Button>
                    <Drawer
                    title="Login Page"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    height={"100vh"}
                    mask={false}
                    closable={true}

                    >
                   <Row type="flex" justify="space-around" align="middle" className="login-wrapper">
                      <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                         <Login_type 
                         icon="user" 
                         title="Patient Login"
                          details="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                          >
                             <LoginForm type="Patient" history={this.props.history} />
                         </Login_type>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                         <Login_type 
                          icon="plus" 
                          title="Doctor Login"
                          details="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                          >
                            <LoginForm type="Doctor" history={this.props.history} />
                            </Login_type>
                      </Col>
                     
                    </Row>
                 
                    </Drawer>
                </div>
		
			</div>
			
		);
	}
}
