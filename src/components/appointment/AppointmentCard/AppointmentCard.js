import React, { Component } from 'react'
import classNames from 'classnames'
import  Card from '../../Card/Card'
import { getVersions } from '../../../services/extra/bem'
import { Row, Col } from 'antd';
import AppointmentSlider from '../AppointmentSlider';
export default class AppointmentCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            dates: []
        }
    }
    onDateChange = (date) => {
        console.log({
            date
        })
    }
    render() {
        const {
            title,
            className,
            parentClass,
            type,
        } = this.props
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
                    <Row>
                        <Col offset={2} span={4}>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </Col>
                        <Col span={4}>
                            <p>2</p>
                            <p>2</p>
                            <p>2</p>
                            <p>2</p>
                            <p>2</p>
                        </Col>
                        <Col span={4}>
                            <p>3</p>
                            <p>3</p>
                            <p>3</p>
                            <p>3</p>
                            <p>3</p>
                        </Col>
                        <Col span={4}>
                            <p>4</p>
                            <p>4</p>
                            <p>4</p>
                            <p>4</p>
                            <p>4</p>
                        </Col>
                        <Col span={4}>
                            <p>5</p>
                            <p>5</p>
                            <p>5</p>
                            <p>5</p>
                            <p>5</p>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
