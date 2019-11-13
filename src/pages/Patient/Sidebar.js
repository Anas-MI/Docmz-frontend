import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
   Layout, Menu
} from 'antd';
const { Content, Footer, Header, Sider } = Layout;
class Sidebar extends Component {
  render() {
    return (
      <>
          <Sider width={200} style={{ background: '#fff' }}>
                                        <Menu
                                            mode="inline"
                                            defaultSelectedKeys={['1']}
                                            defaultOpenKeys={['sub1']}
                                            style={{ height: '100%' }}
                                        >
                                            <Menu.Item key="1">
                                                {/* <Icon type="file" /> */}
                                                <Link to="/Patient"><span>Account Information</span></Link>
                                            </Menu.Item>

                                            <Menu.Item key="2">
                                                {/* <Icon type="file" /> */}
                                                <Link to="/Patientcard"><span>Card Info</span></Link>
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                {/* <Icon type="file" /> */}
                                                <span>Previous Doctor</span>
                                            </Menu.Item>

                                            <Menu.Item key="9">
                                                {/* <Icon type="file" /> */}
                                                <span>Log Out</span>
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
      </>
    )
  }
}

export default Sidebar
