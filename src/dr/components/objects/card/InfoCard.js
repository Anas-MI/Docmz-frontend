import React, { Component } from 'react'
import {
    Card, Row, Col, Avatar, Icon
} from 'antd'
import classNames from 'classnames'

export default class InfoCard extends Component {
    componentClass = name => {
        if(typeof name === "string"){
            if(name.includes(",")){
                const newName = name.split(",").map(el => el.trim()).filter(el => el)
                return newName.map(el => `c-info-card__${el}`).join(" ")
            }
            return `c-info-card__${name}`
        }

        if(name.constructor() === Array )
            return name.map(el => `c-info-card__${el}`).join(" ")

        return ``
    }
    render() {
        return (
            <Card bordered={false} className="c-info-card">
                <Row type="flex" align="middle" >
                    <Col span={24/3} className={this.componentClass("user-info, border-col")} >
                        <Avatar size={50} icon="user" className={this.componentClass("avatar")} />
                        <div className={this.componentClass("user-content")}>
                            <p className={this.componentClass("user-name")}>
                                Patient name
                            </p>
                            <p className={this.componentClass("user-number")}>
                                7885544556
                            </p>
                        </div>
                    </Col>
                    <Col span={24/3} className={this.componentClass("calander-col, border-col")} >
                        <div className={this.componentClass("calander-inner")} >
                            <div className={this.componentClass("calander-date")} >
                                <Icon type="calendar" className={this.componentClass("icon")} />
                                22 October 2019
                            </div>
                            <div className={this.componentClass("calander-time")} >
                                <Icon type="clock-circle" className={classNames(this.componentClass("icon"))} />
                                09:00 - 10:00 am
                            </div>
                        </div>
                    </Col>
                    <Col span={24/3} className={this.componentClass("status-col")} >
                        <div className={classNames(this.componentClass("status"), this.componentClass("status--active"))} >
                            Approved
                        </div>
                        <div className={classNames(this.componentClass("more"))} >
                            <Icon type="down" className={classNames(this.componentClass("icon"), this.componentClass("icon--more"))} />
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
