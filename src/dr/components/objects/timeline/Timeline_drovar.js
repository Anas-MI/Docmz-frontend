import React, { Component } from "react";
import { Row, Col, Divider, Drawer, Alert } from "antd";
import ShortCalender from "../calenders/shortCalender/ShortCalender";
import './customtimeline.css'
import { getDoctorDetail } from '../../../../services/api/doctors';
import { getAppointmentsOfDate, getDoctorTimeLine } from '../../../../services/extra/DoctorHelpers';
import moment from "moment";

export default class Timeline_drovar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "vertical",
      appointments: getAppointmentsOfDate(props.appointments,new Date()),
      selectedDate: moment()
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
    return (
      <div className="c-timeline-drower">
        <Drawer
          title="Availability Timeline"
          placement="right"
          closable={true}
          onClose={() => this.onCloseTo()}
          visible={visible}
          width={350}
          mask={false}
          className="custom-timeline-drover-style-aakash"
        >
          <ShortCalender onSelect={(selectedDate)=> {
            this.setState({
              appointments: getAppointmentsOfDate(appointments, selectedDate),
              selectedDate
            }, ()=> {
              console.log({
                appointments: this.state.appointments
              })
            })
          }} />
          <div className="c-timeline-drower__row">
              Time
            {/* <div data-time="08:00" className="c-timeline-drower__col">
                <Alert
                    className="c-timeline-drower__msg c-timeline-drower__msg--span-2"
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                />
            </div> */}
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
                        message="Info Text"
                        // description="Info Description Info Description Info Description Info Description"
                        description={moment(el.bookedFor).format("HH:mm")}
                        type="info"
                    />}
                  </div>
                )
              })
            }
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
