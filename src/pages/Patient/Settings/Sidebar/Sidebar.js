import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {
   Layout, Menu
} from 'antd';
const { Content, Footer, Header, Sider } = Layout;
class Sidebar extends Component {
  render() {
    return (
      <>
          <Sider width={200} style={{ background: '#fff' }} className="custom-sider-patient">
                                        <Menu
                                            mode="inline"
                                            defaultSelectedKeys={['1']}
                                            defaultOpenKeys={['sub1']}
                                            style={{ height: '100%' }}
                                        >
                                            <Menu.Item key="1">
                                               
                                                {/* <Icon type="file" /> */}
                                                <Link to="/Patient"><span>Profile</span></Link>
                                                {/* <NavLink to="/Patient"><span>Profile</span></NavLink> */}
                                            </Menu.Item>

                                            <Menu.Item key="2">
                                                {/* <Icon type="file" /> */}
                                                {/* <NavLink to="/Password"><span>Password</span></NavLink> */}
                                                <Link to="/Password"><span>Password</span></Link>
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                {/* <Icon type="file" /> */}
                                                <Link to="/Notification"><span>Notification Settings</span></Link>
                                            </Menu.Item>

                                            <Menu.Item key="9">
                                                {/* <Icon type="file" /> */}
                                              <Link to="/Insurance"><span>Insurance</span></Link>
                                            </Menu.Item>
                                            <Menu.Item key="4">
                                                {/* <Icon type="file" /> */}
                                                <Link to ="/Demographic"><span>Demographic Info</span></Link>
                                            </Menu.Item>
                                            <Menu.Item key="5">
                                                {/* <Icon type="file" /> */}
                                               <Link to="/Authorization"> <span>Authorizations</span></Link>
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
      </>
    )
  }
}

export default Sidebar
