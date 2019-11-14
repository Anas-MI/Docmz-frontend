import React, { Component } from 'react'
import { Modal } from 'antd';
import Payment from '../payment/Payment';
import PaymentCard from '../payment/PaymentCard';

export default class PaymentCardForm extends Component {
    render() {
        return (
            <div className="c-payment-card-form">
                <div className="c-payment-card-form__inner">
                    <div className="c-payment-card-form__row">
                        <div className="c-payment-card-form__col c-payment-card-form__col--card">
                            card
                        </div>
                        <Modal width={900} className="c-payment-card-form__modal" centered footer={null} visible={false} >
                            <Payment />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
