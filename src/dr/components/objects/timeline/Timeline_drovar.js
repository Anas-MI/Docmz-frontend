import React, { Component } from "react";
import { Row, Col, Divider, Drawer, Alert, Badge } from "antd";
import ShortCalender from "../calenders/shortCalender/ShortCalender";
import './customtimeline.css'
import { getDoctorDetail } from '../../../../services/api/doctors';
import { getAppointmentsOfDate, getDoctorTimeLine } from '../../../../services/extra/DoctorHelpers';
import moment from "moment";
import './customtimeline.css'

export default class Timeline_drovar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "vertical",
      appointments: getAppointmentsOfDate(props.appointments,new Date()),
      selectedDate: moment(),
      appointmentlength : ''
    };
  }
  componentDidMount(){
  }
  onCloseTo = () => {
    this.props.onClose();
  };
  
  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  timeonChange(time, timeString) {
    console.log(time, timeString);
  }
  render() {
    const title = `Appointment Availability - ${this.state.appointmentlength || 0}`
    const { visible, appointments } = this.props;
    const { formLayout, appointments: stateAppointment, selectedDate } = this.state;
    console.log({__props__: this.props})
    const timeLineArr = getDoctorTimeLine({
      timeSlot: 15,
      allAppointments: this.props.allAppointments,
      date: selectedDate
    })
    console.log({
      timeLineArr
    })
    let appointmentdata;
    if(this.state.appointmentlength > 0)
    {
      appointmentdata = (
        <div>
           Time
        {
          timeLineArr.dates && timeLineArr.dates.map((elx, i) => {
            console.log("tttt", {
              elx: elx.milliseconds(), 
              stateAppointment: stateAppointment.map(el => moment(el.bookedFor).milliseconds())
            })
            const el = stateAppointment.find(el => {
              if(! el.booked ) return false
              const bookedMom = moment(el.bookedFor)
              return bookedMom.format("HH:mm") === elx.format("HH:mm")
            })
            return (
              <div key={i} data-time={moment(elx).format("HH:mm")} className="c-timeline-drower__col">
                {el && <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-1"
                    // message="Info Text"
                    message = {el.reasonForVisit || 'Reason For Visit Not Available'}
                    // description="Info Description Info Description Info Description Info Description"
                    description={moment(el.bookedFor).format("HH:mm")}
                    type="info"
                />}
              </div>
            )
          })
        }
        </div>
      )
    }
    else {
      appointmentdata = (
        <center><h3>You don't have any Appointments Today.</h3></center>
      )
    }
    return (
      <div className="c-timeline-drower">
        <Drawer
          title= {title}
          // title = "Availability Timeline"
          placement="right"
          closable={true}
          onClose={() => this.onCloseTo()}
          visible={visible}
          width={350}
          mask={false}
          className="custom-timeline-drover-style-aakash"
        
        >
         
          <ShortCalender 
          className="badge1"
          data-badge="6"
          onSelect={(selectedDate)=> {
            this.setState({
              appointments: getAppointmentsOfDate(appointments, selectedDate),
              selectedDate
            }, ()=> {
              console.log({
                appointments: this.state.appointments
              },this.setState({appointmentlength : this.state.appointments.length}))
            })
          }} />
         
          <div className="c-timeline-drower__row">
             
            {/* <div data-time="08:00" className="c-timeline-drower__col">
                <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-2"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            </div> */}
            {/* {
              timeLineArr.dates && timeLineArr.dates.map((elx, i) => {
                console.log("tttt", {
                  elx: elx.milliseconds(), 
                  stateAppointment: stateAppointment.map(el => moment(el.bookedFor).milliseconds())
                })
                const el = stateAppointment.find(el => {
                  if(! el.booked ) return false
                  const bookedMom = moment(el.bookedFor)
                  return bookedMom.format("HH:mm") === elx.format("HH:mm")
                })
                return (
                  <div key={i} data-time={moment(elx).format("HH:mm")} className="c-timeline-drower__col">
                    {el && <Alert
                        className="c-timeline-drower__msg c-timeline-drower__msg--span-1"
                        // message="Info Text"
                        message = {el.reasonForVisit || 'Reason For Visit Not Available'}
                        // description="Info Description Info Description Info Description Info Description"
                        description={moment(el.bookedFor).format("HH:mm")}
                        type="info"
                    />}
                  </div>
                )
              })
            } */}
            {appointmentdata}
            {/* {
              stateAppointment.map((el, i)=> <div key={i} data-time={moment(el.bookedFor).format("HH:mm")} className="c-timeline-drower__col">
              <Alert
                  className="c-timeline-drower__msg c-timeline-drower__msg--span-1"
                  message="Info Text"
                  // description="Info Description Info Description Info Description Info Description"
                  description={moment(el.bookedFor).format("HH:mm")}
                  type="info"
              />
          </div>)
            } */}
            {/* <div data-time="09:00" className="c-timeline-drower__col">
            </div>
            <div data-time="10:00" className="c-timeline-drower__col">
            </div>
            <div data-time="11:00" className="c-timeline-drower__col">
            </div>
            <div data-time="12:00" className="c-timeline-drower__col">
                <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-5"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="success"
                />
            </div>
            <div data-time="01:00" className="c-timeline-drower__col">
            </div>
            <div data-time="02:00" className="c-timeline-drower__col">
            </div>
            <div data-time="03:00" className="c-timeline-drower__col">
            </div>
            <div data-time="04:00" className="c-timeline-drower__col">
            
            </div>
            <div data-time="05:00" className="c-timeline-drower__col">
            </div>
            <div data-time="06:00" className="c-timeline-drower__col">
            <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-3"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            </div>
            <div data-time="07:00" className="c-timeline-drower__col">
            </div>
            <div data-time="08:00" className="c-timeline-drower__col">
            </div>
            <div data-time="09:00" className="c-timeline-drower__col">
            
            </div> */}
          </div>
         
        </Drawer>
      </div>
    );
  }
}
