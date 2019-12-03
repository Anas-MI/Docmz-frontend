import React, { Component } from 'react'
import { Button as AntButton, Icon } from 'antd'
export default class Button extends Component {
  onClick = e => {
    const {
      onClick
    } = this.props
    if(typeof onClick === 'function'){
      onClick(e)
    }
  }
  render() {
    const {
      type, shape, icon, iconPos
    } = this.props
    return (
      <AntButton onClick={this.onClick} type={type} shape={shape} className={componentClass}>
        {icon && iconPos !== "right" && <Icon type={icon} />}
        More Details
        {icon && iconPos === "right" && <Icon type={icon} />}
      </AntButton>
    )
  }
}

const componentClass = "c-button"

Button.defaultProps = {
  type: "primary"
}