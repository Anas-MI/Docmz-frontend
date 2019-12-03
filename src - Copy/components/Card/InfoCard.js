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
        const {values} =this.props;
        return (
            <Card bordered={false} className="c-sign-card">
                <Row type="flex" align="middle" >
                    <Col span={24/2} className={this.componentClass("user-info,'' ")} >
                       
                        <h3 className="doc-signup-fields__title">
                            {values.name && values.name.toLowerCase()}
                            {values.credential && <span> ({values.credential})</span>}
                         </h3>
                         
                    </Col>
                    <Col span={24/2} className={this.componentClass("user-info,'' ")} >
                       
                    <p className="doc-signup-fields__gender"> 
                             {values.gender && values.gender === "Female" ? (
                                <span> <Icon type="woman"/></span>
                                ) : (
                                    <span>   <Icon type="man"/></span>
                                )}
                         </p>
                         
                    </Col>
                </Row>
               
            </Card>
        )
    }
}
