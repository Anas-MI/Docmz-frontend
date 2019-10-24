import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import classNames from 'classnames'
import { getComponentClass, getVersions } from '../../../../services/extra/bem'
export default class BarCard extends Component {
    render() {
        const {
            icon, children, type
        } = this.props
        const typeClass     = getVersions(type, componentClass)
        return (
            <div className={classNames(componentClass, {
                [typeClass]: type
            })}>
                <Row type="flex" align="middle" className={innerClass}>
                    <Col className={iconWrapClass}>
                        <Icon className={iconClass} type={icon} />
                    </Col>
                    <Col className={contentClass}>
                        {children}
                    </Col>
                </Row>
            </div>
        )
    }
}
const componentClass = "c-bar-card"
const innerClass    = getComponentClass("inner", componentClass)
const iconWrapClass = getComponentClass("icon-wrap", componentClass)
const iconClass     = getComponentClass("icon-wrap", componentClass)
const contentClass  = getComponentClass("content-wrap", componentClass)