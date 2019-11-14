import React, { PureComponent } from "react";
import { Formik } from "formik";
import UserSingUpFIelds from "./UserSingUpFIelds";
import { Row, Col , Alert} from "antd";
import { patientRegistration } from "../../services/api/patient";
const initialValues = {
  selectOptions: ["Doctor", "Patient"]
};

export default class UserSignUp extends PureComponent {

  constructor(props) {
    super(props);
    this.state={
      notification:'',
      notificationToggle:false,
      isLoading: false,
    }
  }

  handleSubmit = formProps => {
    const { email, password, phone, firstname, lastname } = formProps;
    const { type } = this.props;
    console.log({ formProps });
    patientRegistration({
      firstName: firstname,
      lastName: lastname,
      email,
      phone,
      password
    })
    .then(res => {
      const msg={
        error:res.data.status,
        msg:res.data.message
      }
      if(res.data.status){
        this.setState({
          notification:msg,
          isLoading:false
        },()=>{
          const userInfo=JSON.stringify(res.data.data) ;
          window.localStorage.setItem("patient",userInfo)
          this.props.history.push("search");
        })
      }else{
        this.setState({
          notification:msg,
          notificationToggle:true,
          isLoading:false
        })
      }
    })
      .catch(err => {
        console.log('error',{ err });

        const msg={
          error: false,
          msg:err.response && err.response.data && err.response.data.error
        }
        this.setState({
          notification:msg,
          notificationToggle:true,
          isLoading:false
        })
      });
  };

  render() {
    const { notificationToggle, notification} = this.state
    return(
      <Row>
      <Col span="12" xs={24} sm={24} md={6} lg={6} xl={6} />
      <Col
        style={{
          border: `1px solid #ccc`,
          padding: 40,
          marginTop: 40
        }}
        span="12"
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
      >
        {
            notificationToggle && notification &&
            <Alert
            message={notification.error}
            description={notification.msg}
            type="error"
            showIcon
          />
          }
        <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          render={UserSingUpFIelds}
        />
      </Col>
    </Row>
    )
  }
}
