import React from "react";
import { Avatar } from "antd";

export default function AppointmentDoctor({doctor, time}) {
  return (
    <div className="c-appointment-form__doctor">
      <div className="c-appointment-form__doctor-avatar-wrapper">
          {
              doctor.image ? 
              <Avatar size={200} src={doctor.image} /> :
              <Avatar size={200} icon="user" />
          }
      </div>
      <h4 className="c-appointment-form__doctor-title">
          <strong>{doctor.name}</strong>
      </h4>
      <p className="c-appointment-form__doctor-time">
        <strong>{time}</strong>
      </p>
    </div>
  );
}
