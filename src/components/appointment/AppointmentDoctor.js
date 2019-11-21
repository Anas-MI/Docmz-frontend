import React from "react";
import { Avatar } from "antd";
import './newappointmentap.css';
export default function AppointmentDoctor({doctor, time}) {
  return (
    <div className="c-appointment-form__doctor">
      <div className="c-appointment-form__doctor-avatar-wrapper">
          {
              doctor.image ? 
              <Avatar size={200} src={doctor.image} /> 
            
              :
              // <Avatar size={200} icon="user" />
              <img src={require('./doctor(1).png')} width='200' />
          }
      </div>
      <h4 className="c-appointment-form__doctor-title">
          {/* <strong>{doctor.name}</strong> */}
          Amiran Baduashvili
      </h4>
      <p className="c-appointment-form__doctor-time">
        {/* <strong>{time}</strong> */}
        <p className="custom-doctor-time-span-ap">3:20 P.M</p>
        <p className="custom-doctor-date-span-ap">12<sup>th</sup> December, 2019</p>
      </p>
    </div>
  );
}

