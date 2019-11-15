import React, { Component } from 'react'
import { Rate, Card, Row, Col, } from 'antd';

export default class RatingCard extends Component {
    render() {
        return (
            <div className="c-rating-card">
                <Row type="flex" className="c-rating-card__row">
                    <Col span={8} className="c-rating-card__overall-col">
                        <p className="c-rating-card__overall-title">Overall rating</p>
                        <span className="c-rating-card__overall-rating">4.5</span>
                        <Rate className="c-rating-card__stars" allowHalf defaultValue={2.5} />
                    </Col>
                    <Col span={16} className="c-rating-card__reviews-wrapper">
                        <Card className="c-rating-card__reviews-card">
                            <Row type="flex">
                                <Col span={12}>
                                    <BarLabel label="Check-in" value={4} />
                                </Col>
                                <Col span={12}>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const BarLabel = ({label, value, max=5}) => (
    <div className="c-bar-label">
        <div className="c-bar-label__label">
            {label}
        </div>
        <div className="c-bar-label__bar">
            <div className="c-bar-label__bar-line">
                <div style={{width: `${(value/max) * 100}%`}} className="c-bar-label__bar-line-bg">
                </div>
            </div>
            <div className="c-bar-label__value">{value.toFixed(1)}</div>
        </div>
    </div>
)