import React, { Component } from 'react'
import classNames from 'classnames'
export default class DrLogo extends Component {
    render() {
        const {
            small
        } = this.props
        return (
            <div className={classNames("c-dr-logo", {
                "c-dr-logo--small": small
            })}>
                DocMZ
            </div>
        )
    }
}
