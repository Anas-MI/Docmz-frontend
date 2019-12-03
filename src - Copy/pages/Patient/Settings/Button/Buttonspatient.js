import React, { Component } from 'react'
import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete
} from 'antd';
class Buttonspatient extends Component {
  render() {
    return (
      <>
         <div className="patient-profie-setting-pass">
                                                <Button type="primary" >
                                                    Save
                                                    </Button>
                                                    <Button  htmlType="submit">
                                                    Cancel
                                                    </Button>
                                                    </div>
      </>
    )
  }
}

export default Buttonspatient
