import React, { Component } from "react";
import { Input, Spin ,Alert} from "antd";
import axios from "axios";
import "./docSignUp.css";
import { Formik } from "formik";
import LoginFields from "./signUpFIelds";
import {baseUrl} from "../../constants/constants";
const { Search, } = Input;

export default class DocSignUp extends Component {
  state = {
    isLoading: false,
    isValid: false,
    doctorInfo: [],
    searched: false,
    selectOptions: ["Male", "Female"],
    name: "",
    firstName: "",
    lastName: "",
    credential: "",
    gender: "",
    address: [],
    taxonomies: [],
    identifiers: [],
    doctors:[],
  };

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    
  }
  
 
  async componentDidMount(){
    const Specialty = await axios(baseUrl+`/doctors/get/specialties`);
    let doctors = await Specialty.data.data;
    const spArray=[];
    doctors.forEach(specialty => {
      spArray.push(specialty.name)
    })
    this.setState({ doctors:spArray});
    
  }
  handleSubmit = data => {
    
  };

  handleSearch(value) {
    this.setState({ isLoading: true });
    let url = baseUrl+`/doctors/getinfo/${value}`;
    axios.get(url).then(data => {
      let doctorInfo = data.data.doctorInfo.results[0],
        gender;
      if (doctorInfo.basic.gender === "F") {
        gender = "Female";
      } else {
        gender = "Male";
      }
      if (data.data.doctorInfo.result_count >= 1) {
        this.setState({
          isValid: true,
          doctorInfo,
          name: doctorInfo.basic.name,
          firstName: doctorInfo.basic.first_name,
          lastName: doctorInfo.basic.last_name,
          credential: doctorInfo.basic.credential,
          gender,
          addresses: doctorInfo.addresses,
          searched: true,
          taxonomies: doctorInfo.taxonomies,
          identifiers: doctorInfo.identifiers,
         
        });
      }
    });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
     const {isValid} = this.state
    return (
      <div>
        {
           isValid ?
           <div className={this.state.searched ? "userInfo" : ""}>
          {this.state.searched ? (
            <UserInfo
              searched={this.state.searched}
              values={this.state}
              submit={this.handleSubmit}
              history={this.props.history}
            />
          ) : (
            ""
          )}
        </div>
           :
           <div className="search">
          <br />
          <br />

          <div className="c-doc-signup__searchBox">
            <label>Please Enter Your NPI Number</label>
            <Search
              placeholder="e.g. 456789"
              // placeholder="Search Through NPI"
              onSearch={this.handleSearch}
              enterButton
            />
           
             
          </div>
         
         
          <br />
          <br />
          <center>
               <span className="loaders">{this.state.isLoading ? <Spin /> : ""}</span>
            </center>
        </div>
        

        }
        
        
      </div>
    );
  }
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      notification:'',
      notificationToggle:false,
      isLoading: false,
    }
  }
  handleSubmit = formProps => {
    const { doctors,selectOptions,isLoading, ...formData } = formProps;
     this.setState({
      isLoading:true
     })
     const npi=formData.doctorInfo.number;
     const drInfo=formData.doctorInfo;
     const email=formData.email;
     const password=formData.password;
     const specialty=formData.specialty;
     const phone=formData.phone;
     const newArray={
      ...drInfo,
      email,
      password,
      specialty,
      phone,
      npi
    }
     let url = baseUrl+`/doctors/register`;
     axios.post(url,newArray)
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
          window.localStorage.setItem("user",userInfo)
          this.props.history.push("/login");
        })
      }else{
        this.setState({
          notification:msg,
          notificationToggle:true,
          isLoading:false
        })
      }
    });
  };
  render() {
    const { notificationToggle, notification} = this.state
    return (
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
          initialValues={this.props.values}
          onSubmit={this.handleSubmit}
          render={LoginFields}
        />
        <center>
          <span className="loaders">{this.state.isLoading ? <Spin /> : ""}</span>
        </center>
      </div>
    );
  }
}
