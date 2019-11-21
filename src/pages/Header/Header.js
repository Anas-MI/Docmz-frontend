import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {  Icon, Drawer, Layout, Menu, Dropdown,Row,Col } from 'antd';
import './customheader.css';
import Login_drawer from "../login/Login_drawer";
import LoginForm from "../../components/Login/LoginForm";
import Login_type from "../../pages/login/Login_type";
const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="#">
        <Link to="/Patient">
       Settings
        </Link>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="#">
      <Link to="/Appointments">
      Appointments
        </Link>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#" onClick={()=>{logoutPatient()}}>
        Logout
      </a>
    </Menu.Item>
  </Menu>
);
function logoutPatient(){
  localStorage.removeItem("patient");
}
class Navbar extends Component {
  constructor(props) {
		super(props);
	    this.state={ 
            visible: false, 
            placement: 'top',
            userDetails : JSON.parse(localStorage.getItem("patient")) ?  JSON.parse(localStorage.getItem("patient")) : false
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
  render() {
    const {userDetails} = this.state;
    console.log("xxxxxx",this.props.history);
    return (
      <>
      
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor : '#ffffff' ,borderBottom: '1px solid #e8e8e8'}}>
          <div className="logo doctor-logo-home"><h4>LOGO</h4></div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '62px', float: 'right'}}
          >
            <Menu.Item key="1">List your practice on Docmz &nbsp; | </Menu.Item>
            {userDetails && userDetails._id ?
           <Dropdown overlay={menu}>
           <a className="ant-dropdown-link ant-dropdown-link-home" >
           {userDetails.name} &nbsp; <Icon type="down" />
           </a>
         </Dropdown>
            :
            
            <Menu.Item key="2" onClick={()=>{this.showDrawer()}} > Log in</Menu.Item>
            }
          </Menu>
        </Header>
        {/* code for drawer open and close start */}
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
                    {/* code for drawer open and close end */}
        
      </>
    )
  }
}

export default Navbar
