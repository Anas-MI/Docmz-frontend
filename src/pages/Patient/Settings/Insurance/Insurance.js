import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete,
    Radio ,
    Table, Tag 
} from 'antd';

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../../Home/Search";
import Navbar from '../../../Header/Header';
import './insurance.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
import Buttonspatient from '../Button/Buttonspatient';
import Insurancesearch from './Insurancedropdown';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Plan and Carrier',
      dataIndex: 'PlanandCarrier',
      key: 'PlanandCarrier',
    },
    {
      title: 'Member ID',
      dataIndex: 'MemberID',
      key: 'MemberID',
    },
    {
        title: 'Photo',
        dataIndex: 'Photo',
        key: 'Photo',
      }
  ];
  
  const data = [
    {
      key: '1',
      type: 'Sample Data',
      PlanandCarrier: <Insurancesearch />,
      MemberID: 'Sample Data',
      Photo: 'N/A',
    },
    {
      key: '2',
      type: 'Sample Data',
      PlanandCarrier:  <Insurancesearch />,
      MemberID: 'Sample Data',
      Photo: 'N/A',
    },
    {
      key: '3',
      type: 'Sample Data',
      PlanandCarrier:  <Insurancesearch />,
      MemberID: 'Sample Data',
      Photo: 'N/A',
    },
  ];
class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
  
  render() {
  
    return (
        <div>
        <Layout className="layout">
            <Navbar />

            <Content style={{ padding: '0 50px', marginTop: 64 }}>

                <div style={{ background: '#fff', padding: 24, minHeight: 380 }} className="doctor-header">
                    <Uppermsg />
                    <header className="App-header">
                        <Search />
                    </header>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>

                            <Sidebar />
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>

                                <Layout>

                                    <Content className="patient-profile-content">
                                        <p>Insurance</p>
                                        <Divider />

                                        <Table columns={columns} dataSource={data} />

                                        <Divider />
                                        <Buttonspatient />


                                    </Content>
                                </Layout>
                            </Content>
                        </Layout>
                    </Content>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>,

</div>
    )
  }
}

export default Insurance
