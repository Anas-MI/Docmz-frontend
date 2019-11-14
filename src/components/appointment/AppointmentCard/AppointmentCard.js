import React, { Component } from 'react'
import classNames from 'classnames'
import  Card from '../../Card/Card'
import { getVersions } from '../../../services/extra/bem'
import { Row, Col } from 'antd';
import AppointmentSlider from '../AppointmentSlider';
import getDatesFromArray from '../../../services/scheduler/getDatesFromArray';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'
export default class AppointmentCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            dates: [],
        }
    }
    onDateChange = dates => this.setState({dates})
    render() {
        const {
            title,
            className,
            parentClass,
            type,
            appointments
        } = this.props
        
        console.log({
            aaaaaaaaaaa: appointments
        })
        const { dates } = this.state
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
                            <Row type="flex" className="c-appointment-card__scroll-row">
                                <Dates appointments={appointments} dates={dates} />
                            </Row>
                        </CustomScroll>
                    </div>
                </Card>
            </div>
        )
    }
}
const Dates = ({appointments, dates})=> 
    dates.map((el, i)=> {
        const datesArr = getDatesFromArray(appointments, el);
        console.log({
            datesArr, appointments, el
        })
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
     