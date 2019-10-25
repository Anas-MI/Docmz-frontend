import React, { Component } from 'react'
import classNames from 'classnames'
import { getComponentClass, getVersions } from '../../../../services/extra/bem';
export default class LabelValue extends Component {
  render() {
    const {
        label, value, children, parentClass, version
    } = this.props
    const parent = parentClass && `${parentClass}__label-value` 
    const versionClass = getVersions(version, componentClass)
    return (
      <div className={classNames(componentClass, {
        [parent]: parent,
        [versionClass]: version
      })}>
        <span className={labelClass}>{label}</span>
        <span className={valueClass}>{value || children}</span>
      </div>
    )
  }
}

const componentClass = "c-label-value"
const labelClass     = getComponentClass("label", componentClass)
const valueClass     = getComponentClass("value", componentClass)