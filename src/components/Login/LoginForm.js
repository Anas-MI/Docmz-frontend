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
          window.localStorage.setItem("user",userInfo);
         
          const step = res.data.user.steps;
          if(step.includes(0)){
            this.props.history.push("/dr-profile-stap")
          }else{
            this.props.history.push("dr/dashbord")
          }
        })
      }else{
        this.setState({
          notification:msg,
          notificationToggle:true,
          isLoading:false
        })
      }
  });
    }else{
      const requestData={
        "email":email,
        "password":password
      }
      let url = baseUrl+`/patient/authenticate`;
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
          // localStorage.setItem('sampledata',res.data.user)
          const userInfo=JSON.stringify(res.data.user) ;
          window.localStorage.setItem("patient",userInfo)
        
          console.log('userinfohere',res.data.user)
          console.log(res.data.user.customerProfile)
          localStorage.setItem('customerProfile',res.data.user.customerProfile)
          localStorage.setItem('patientid',res.data.user._id)
          localStorage.setItem('patientphone',res.data.user.phone)
          // if(res.data.user._id.length > 0) {
          //   axios.defaults.headers.common['x-auth-token'] = res.data.user._id;
          //   console.log(axios.defaults.headers.common['x-auth-token'])
          // }
           this.props.history.push("search");
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
    const { notificationToggle, notification} = this.state;
    console.log("xxxxxxxx",{test:this.props});
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
