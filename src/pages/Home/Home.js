import React, { Component } from 'react';
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List } from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "./Search";
const { Option, OptGroup } = Select;
export default class Home extends Component {
	constructor(props) {
		super(props);
	
	}
    render() {
		return (
			<div>
				<header className="App-header">
				<Search />
				</header>
				<div className="search_box">
					Home
				</div>
			</div>
			
		);
	}
}
