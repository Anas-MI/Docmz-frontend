import React, { PureComponent } from "react";
import { Formik } from "formik";
import LoginFields from "./Loginfields";
import {  Spin ,Alert} from "antd";
import axios from "axios";
import {baseUrl} from "../../constants/constants";
export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      notification:'',
      notificationToggle:false,
      isLoading: false,
    }
  }
  handleSubmit = formProps => {
    const {  email, password } = formProps;
    const {type}=this.props;
    if(type=="Doctor"){
      const requestData={
        "email":email,
        "password":password
      }
      let url = baseUrl+`/doctors/authenticate`;
      axios.post(url,requestData)
     .then(res => {
      const msg={
        error:res.data.status,
        msg:res.data.error
      }
      if(res.data.status){
        this.setState({
          notification:msg,
          isLoading:false
        },()=>{
          const userInfo=JSON.stringify(res.data.user) ;
          window.localStorage.setItem("user",userInfo)
          this.props.history.push("dr/dashbord");
        })
      }else{
        this.setState({
          notification:msg,
          notificationToggle:true,
          isLoading:false
        })
      }
    });
    }
   
  };
  render(){
    const { notificationToggle, notification} = this.state
    return(
      <div>
         {
            notificationToggle && notification &&
            <Alert
            message={notification.error}
            description={notification.msg}
            type="error"
            showIcon
          />
          }
        
          <br/>
         <Formik
      initialValues={this.props}
      onSubmit={this.handleSubmit}
      render={LoginFields}
    />
      </div>
     
    )
  }

}
