import React from "react";
import { Form, Icon, Input, Button, Row, Col, Divider } from "antd";
export default class AppointmentPayReview extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { onSubmit } = this.props;
        if (typeof onSubmit === "function") {
          onSubmit(values);
        }
      }
    });
  };

  render() {
    const { firstFormData, cardDetails } = this.props;
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={24} className="left-side-content-review-ap">
          <h3>Your appointment will be schedule from <span>10:00 AM - 10:30 AM</span></h3>
          <p>Appointment cost : <b>$30.00</b> </p>
          <Divider/>
         <center>
         <Button type="info">Confirm Booking</Button>
         </center> 
          
            
        </Col>

       
      </Row>
    );
  }
}
