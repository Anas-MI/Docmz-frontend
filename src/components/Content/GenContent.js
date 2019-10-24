import React, { Component } from 'react'

export default class GenContent extends Component {
    render() {
        const {
            title, 
            content,
            children
        } = this.props
        return (
            <div className="c-gen-content">
                <h3 className="c-gen-content__title">{title}</h3>
                <p className="c-gen-content__content">{content}</p>
            </div>
        )
    }
}
