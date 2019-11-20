import React, { Component } from 'react'
import classNames from 'classnames'
import  Card from '../../Card/Card'
import { getVersions } from '../../../services/extra/bem'
import { Row, Col, Spin, Icon } from 'antd';
import AppointmentSlider from '../AppointmentSlider';
import getDatesFromArray from '../../../services/scheduler/getDatesFromArray';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'
import { getAppointments } from '../../../services/api';
import RoundedPopup from '../../RoundedPopup/RoundedPopup';
import AppointmentForm from "../AppointmentForm"
export default class AppointmentCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            dates: [],
            appointments: [],
            isLoading: true
        }
    }
    onDateChange = dates => {
        const doctorObj = JSON.parse(localStorage.getItem("user"))
        const {
            _id: doctor
        } = doctorObj
        const limit = 5
        const date = new Date(dates[0])
        this.setState({
            isLoading: true,
            dates
        }, ()=> {
            getAppointments({doctor, limit, date })
            .then(res => {
                if(res.data && res.data.data){
                    const {
                        data
                    } = res.data
                    this.setState({
                        appointments: data,
                        isLoading: false
                    })
                }else{
                    this.setState({
                        isLoading: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false
                })
                console.log({err})
            })
        })
    }
    
    render() {
        const {
            title,
            className,
            parentClass,
            type,
        } = this.props
        
        const { dates, appointments, isLoading } = this.state
        
        
        
        const typeClass =  getVersions(type, "c-appointment-card")
        const parent    = `${parentClass}__appointment-card`
        return (
            <div className={classNames("c-appointment-card", {
                [className]: className,
                [typeClass]: typeClass,
                [parent]: parentClass
            })}>
                <Card parentClass="" title={title}>
                    <AppointmentSlider onDateChange={this.onDateChange} />
                    <div  className="c-appointment-card__scroll-wrapper">
                        <CustomScroll heightRelativeToParent="100%">
                            <Row type="flex" className={classNames("c-appointment-card__scroll-row", {
                                "c-appointment-card__scroll-row--loading": isLoading
                            })}>
                                {!isLoading && <Dates appointments={appointments} dates={dates} />}
                                {isLoading && <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />}
                            </Row>
                        </CustomScroll>
                    </div>
                    <RoundedPopup width={900} visible={true} >
                        <AppointmentForm  />
                    </RoundedPopup>
                </Card>
            </div>
        )
    }
}
const Dates = ({appointments, dates})=> 
    dates.map((el, i)=> {
        const datesArr = getDatesFromArray(appointments, el);
        return (<Col className="c-appointment-card__date-col" offset={i === 0 && 2} key={i} span={4}>
            {datesArr.map((elx, i) => 
                <span key={i} 
                    className={classNames("c-appointment-card__date-btn", {
                        "c-appointment-card__date-btn--disabled": !elx
                    })}
                    onClick={()=> {
                        if(elx){
                            alert(`${elx}`)
                            // alert(`${el}|${elx}`)
                        }
                    }}
                >
                    {elx ? elx : ""}
                </span>
            )}
        </Col>)
    })
     