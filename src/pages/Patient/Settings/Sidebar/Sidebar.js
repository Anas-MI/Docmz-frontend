import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {
   Layout, Menu
} from 'antd';
import './sidebar.css'
const { Content, Footer, Header, Sider } = Layout;
class Sidebar extends Component {
  render() {
    // const {active}=this.props
    // const activeLink=active && active > 0 ? active : 1
    return (
      <>
          <Sider width={200} style={{ background: '#fff' }} className="custom-sider-patient">
                                        <Menu
                                            mode="inline"
                                            // defaultSelectedKeys={[activeLink]}
                                            defaultOpenKeys={['sub1']}
                                            style={{ height: '100%' }}
                                        >
                                            <Menu.Item key="1">
                                               
                                                {/* <Icon type="file" /> */}
                                                {/* <Link to="/Patient"><span>Profile</span></Link> */}
                                                <NavLink to="/Patient" activeClassName="selected"><span>Profile</span></NavLink>
                                            </Menu.Item>

                                            <Menu.Item key="2">
                                                {/* <Icon type="file" /> */}
                                                <NavLink to="/Password" activeClassName="selected"><span>Password</span></NavLink>
                                                {/* <Link to="/Password" ><span>Password</span></Link> */}
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                {/* <Icon type="file" /> */}
                                                <NavLink to="/Notification" activeClassName="selected"><span>Notification Settings</span></NavLink>
                                            </Menu.Item>

                                            <Menu.Item key="9">
                                                {/* <Icon type="file" /> */}
                                              <NavLink to="/Insurance" activeClassName="selected"><span>Insurance</span></NavLink>
                                            </Menu.Item>
                                            <Menu.Item key="4">
                                                {/* <Icon type="file" /> */}
                                                <NavLink to ="/Demographic"  activeClassName="selected"><span>Demographic Info</span></NavLink>
                                            </Menu.Item>
                                            <Menu.Item key="5">
                                                {/* <Icon type="file" /> */}
                                               <NavLink to="/Authorization"  activeClassName="selected"> <span>Authorizations</span></NavLink>
                                            </Menu.Item>
                                            <Menu.Item key="6">
                                                {/* <Icon type="file" /> */}
                                               <NavLink to="/Payment"  activeClassName="selected"> <span>Payment</span></NavLink>
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
      </>
    )
  }
}

export default Sidebar
