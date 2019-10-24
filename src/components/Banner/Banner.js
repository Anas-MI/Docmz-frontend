import React, { Component } from 'react'
import classNames from "classnames";
import { getVersions } from '../../services/extra/bem';

export default class Banner extends Component {
    render() {
        const {
            parentClass,
            type,
            image
        } = this.props
        const typeClass =  getVersions(type, "c-banner")
        const parent    = `${parentClass}__banner`
        return (
            <div className={classNames("c-banner", {
                [parent]: parentClass,
                [typeClass]: typeClass,
            })}>
                <img className="c-banner__img" src={image} alt="banner" />
            </div>
        )
    }
}
