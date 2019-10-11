import React, { Component } from 'react';
import {
    Card, Row, Col
} from 'antd'
import { getName, getAddress, getTaxonomy } from "../../services/extra/DoctorHelpers";
class DrCardLong extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    render() {
        const {
            doctor
        } = this.props
        const title     = getName(doctor)
        const address   = getAddress(doctor)
        const taxonomy  = getTaxonomy(doctor)
        if(address.trim() === "")
        return null
        
        return (
            <div className="c-dr-card-long">
                <Card>
                    <Row>
                        <Col span={6}>
                            <img src="http://via.placeholder.com/200x200" />
                        </Col>
                        <Col className="c-dr-card-long__description" span={8}>
                            <h3 className="c-dr-card-long__title">{title}</h3>
                            <p className="c-dr-card-long__designation">{taxonomy}</p>
                            <p className="c-dr-card-long__address">{address}</p>
                        </Col>
                        <Col span={10}>
                            dasdsf
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default DrCardLong;