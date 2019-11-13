import React, { Component } from 'react'
import './patient.css'
import {
    Layout
 } from 'antd';
const {  Footer } = Layout;
class Patientfooter extends Component {
  render() {
    return (
      <>
         <div style={{height: "calc(100vh - 80px)" }}>
         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
   </div>
      </>
    )
  }
}

export default Patientfooter
