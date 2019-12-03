import React, { Component } from 'react'
import classNames from 'classnames'
import { Card as CardD} from 'antd';
import { getVersions } from '../../services/extra/bem';
export default class Card extends Component {
    render() {
        const  {
            icon, src, 
            className,
            parentClass,
            type,
            size,
            children,
            ...rest
        } = this.props
        const typeClass =  getVersions(type, "c-card")
        const parent    = `${parentClass}__card`
        return (
            <CardD {...rest} className={classNames("c-card", {
                [className]: className,
                [typeClass]: typeClass,
                [parent]: parentClass
            })}>
                {children}
            </CardD>
        )
    }
}
