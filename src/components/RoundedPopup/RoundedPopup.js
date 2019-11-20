import React from 'react'
import { Modal } from 'antd'

export default function RoundedPopup({children, ...props}) {
    return (
        <Modal {...props} className="c-rounded-popup">
            {children}
        </Modal>
    )
}

RoundedPopup.defaultProps = {
    header: null,
    footer: null
}