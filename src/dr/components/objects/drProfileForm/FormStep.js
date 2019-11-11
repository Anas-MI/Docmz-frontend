import React, { Component } from 'react'

export default class FormStep extends Component {
    render() {
        return (
            <div className={componentClass}>
                {this.props.children}
            </div>
        )
    }
}
const componentClass = "c-from-step"