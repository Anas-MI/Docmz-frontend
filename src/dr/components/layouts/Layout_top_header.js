import React, { Component } from 'react';
import { Row, Col , Avatar } from 'antd';

export default class Layout_header extends Component {
	constructor(props) {
		super(props);
	
    }
    
    render() {
       
       return (
           <div>
               <Row>
                    <Col span={4}>
                       <h4>Tuesday , 10.17 AM</h4>
                    </Col>
                    <Col span={4} offset = {16}>
                        <Col span={14} offset = {10}>
                          <a className="headerName">Dr. APJ   </a>{'  '}
                          <Avatar size={32} icon="user" />
                        </Col>
                    </Col>
                </Row>
                   
            </div>
			
		);
	}
}
