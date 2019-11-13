import React, { Component } from 'react'
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Dropdown } from 'antd';
import './customheader.css'
const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
class Navbar extends Component {
  render() {
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
            {/* <Menu.Item key="2">Log in/Sign up &nbsp; <Icon type="down" /></Menu.Item> */}
            <Dropdown overlay={menu}>
    <a className="ant-dropdown-link ant-dropdown-link-home" href="#">
    Log in/Sign up &nbsp; <Icon type="down" />
    </a>
  </Dropdown>
            {/* <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
      </>
    )
  }
}

export default Navbar
