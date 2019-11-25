import React from "react";
import { Form, Icon, Input, Button, Row, Col, Divider, Checkbox, Modal } from "antd";
import Firstmodel from "./Firstmodel";
import Secondmodal from "./SecondModal";
export default class AppointmentPayReview extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      secondvisible: false,

      checked: true,
      disabled: false,
      informedconsent  :false,
      privacypolicy : false

    }

  }
  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };
  informedchange = () => {
this.setState({
  informedconsent: !this.state.informedconsent
})
  }

  policychange = () => {
    this.setState({
      privacypolicy : !this.state.privacypolicy
    })
  }
  showModal2 = () => {
    this.setState({
      secondvisible: true,

    });
  }
  showModal = () => {
    this.setState({
      visible: true,

    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      secondvisible: false

    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      secondvisible: false
    });
  };
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
    let confirmbtn;
    if(this.state.informedconsent && this.state.privacypolicy){
      confirmbtn = (
        <div>
           <Button type="primary" className="ap-appointment-details-btn">Confirm</Button>
        </div>
      )
    }
    else {
      confirmbtn = (
        <div> <Button type="primary"  disabled>Confirm</Button></div>
      )
    }
    const { getFieldDecorator } = this.props.form;
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const { firstFormData, cardDetails } = this.props;
    return (
      <div className="review-custom-section-ap">
        <Row>
          <Col span={12}>
            <h2>Appointment Details</h2>

            <div classame="review-custom-section-ap__visit-details">
              <p><strong>Consultation Method : </strong>Video</p>
              <p><strong>Reason for visit :</strong> Toothache</p>
              <p><strong>Duration : </strong>6 Months</p>
              <p><strong>Consultation Cost : </strong>$40.00</p>
            </div>
          </Col>

          <Col span={12}>
            <h2>Payment Method</h2>


            <p>Visa ending in : 4242</p>

            <h2>Insurance</h2>


            <p>No Insurance Addedd</p>
            <h2>Primary Care Physician</h2>


            {/* <p>No Data Yet.</p> */}


          </Col>
        </Row>
        <Divider />
        <Row>
          <div className="review-custom-section-ap__checkbox-ap">
            <Col span={24}>

              <Checkbox
                checked={this.state.informedconsent}
                onChange={() => this.informedchange()}

              >
                I certify that I have read and accept the terms of <span onClick={this.showModal} style={{ color: '#82bbe9' }}>Doc Mz's Informed Consent</span>.
            </Checkbox>

              <Checkbox
               checked={this.state.privacypolicy}
               onChange={() => this.policychange()}
              >
                I have read <span onClick={this.showModal2} style={{ color: '#82bbe9' }}>Doc Mz's Informed Consent</span> and I acknowledge that I have the ability to print a hard copy of Privacy Policy for my records.
            </Checkbox>

            </Col>

            <Col span={24}>
              <center> 
                 {/* <Button type="primary">Primary</Button> */}
                 {confirmbtn}

                 </center>
            </Col>
          </div>
        </Row>
        <Row>
          <Modal
            title="Informed Consent for DocMz"
            width={1024}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Firstmodel />
          </Modal>

          <Modal
            title="Privacy and policy terms of DocMz"
            width={1024}
            visible={this.state.secondvisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Secondmodal />
          </Modal>
        </Row>


      </div>
      // <Row type="flex" justify="space-around" align="middle">
      //   <Col span={24} className="left-side-content-review-ap">
      //     <h3>Your appointment will be schedule for <strong>Toothache</strong> on <strong>2<sup>nd</sup> December 2020</strong> at <span>10:00 AM - 10:30 AM</span></h3>
      //     <p>Consultation cost : <b>$30.00</b> </p>
      //     <Divider/>
      //    <center>
      //    <Button type="info">Confirm Booking</Button>
      //    </center> 


      //   </Col>


      // </Row>
    );
  }
}
