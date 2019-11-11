import React, { PureComponent } from "react";
import { Formik } from "formik";
import UserSingUpFIelds from "./UserSingUpFIelds"
import { Row , Col } from "antd";
const initialValues = {
  selectOptions: ["Doctor", "Patient"],
  };

export default class UserSignUp extends PureComponent {
  handleSubmit = formProps => {
    const {  email, password } = formProps;
    const {type} = this.props;
    alert(
      `Email: ${email} \nType: ${type}\nPassword: ${password} \ntype: ${type}`
    );
  };

  render = () => (
    <Row>
      <Col span="12" xs={24} sm={24} md={6} lg={6} xl={6}  />
      <Col style={{
          border: `1px solid #ccc`,
          padding: 40,
          marginTop: 40
        }} span="12" xs={24} sm={24} md={12} lg={12} xl={12} >
        <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        render={UserSingUpFIelds}
      />
      </Col>
    </Row>
    
  );
}
