import React, { Component } from 'react';
import { Input, Spin } from 'antd';
import axios from 'axios';
import './docSignUp.css';
import { Formik } from 'formik';
import LoginFields from './signUpFIelds';
import { Descriptions } from 'antd';

const { Search } = Input;

export default class SignUp extends Component {
	state = {
		isLoading: false,
		isValid: false,
		doctorInfo: [],
		searched: false,
		selectOptions: [ 'Male', 'Female' ],
		name: '',
		firstName: '',
		lastName: '',
		credential: '',
        gender: '',
		address:[],
		taxonomies:[],
		identifiers:[]
	};

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSubmit = (data) => {
		console.log(data);
		// const { type, email, password } = formProps;
		// alert(
		//   `Email: ${email} \n Type: ${type}\n Password: ${password}`
		// );
	};

	handleSearch(value) {
		this.setState({ isLoading: true });
		console.log(value);
		let url = `http://localhost:3001/doctors/getinfo/${value}`;
		axios.get(url).then((data) => {
			let doctorInfo = data.data.doctorInfo.results[0],
				gender;
			if (doctorInfo.basic.gender === 'F') {
				gender = 'Female';
			} else {
				gender = 'Male';
			}
			console.log(data);
			if (data.data.doctorInfo.result_count >= 1) {
				this.setState({
					isValid: true,
					doctorInfo,
					name: doctorInfo.basic.name,
					firstName: doctorInfo.basic.first_name,
					lastName: doctorInfo.basic.last_name,
					credential: doctorInfo.basic.credential,
                    gender,
                    addresses:doctorInfo.addresses,
					searched: true,
					taxonomies: doctorInfo.taxonomies,
					identifiers: doctorInfo.identifiers
				});
				console.log(this.state);
			}
		});
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1500);
	}

	render() {
		return (
			<div>
				<div className="search">
					<br />
					<br />

					<div className="searchBox">
						<Search placeholder="Search Through NPI" onSearch={this.handleSearch} enterButton />
					</div>
					<span className="loader">{this.state.isLoading ? <Spin /> : ''}</span>
					<br />
					<br />
				</div>
                <div className={this.state.searched ? "userInfo" :"" }>
                {this.state.searched ?
				(<UserInfo searched={this.state.searched} values={this.state} submit={this.handleSubmit}/>):('')}
                </div>
            </div>
		);
	}
}

class UserInfo extends Component {



	render() {
		return (
            <div>
                <Formik initialValues={this.props.values} onSubmit={this.props.submit} render={LoginFields} />
                {console.log(this.props.values)}
			<Descriptions title="Other Info" layout="vertical">
				
                {this.props.values.addresses.map(address => (
                    <Descriptions.Item label="Address" span={2}>
                        {address.address_1}, {address.address_2}, {address.city} {address.state}, {address.postal_code} {address.country_name}. 
				</Descriptions.Item>
				))}
				{this.props.values.taxonomies.map(taxonomy => (
					<Descriptions.Item label="Taxonomy" span={2}>
					Code: {taxonomy.code}<br/><br/>  
					Description: {taxonomy.desc}
			</Descriptions.Item>
				))}
				{this.props.values.identifiers.map(identifier => (
					<Descriptions.Item label="Identifier" span={2}>
					Issuer: {identifier.issuer? identifier.issuer : identifier.desc}<br/><br/>  
					Description: {identifier.identifier}
					</Descriptions.Item>
				))}
			</Descriptions></div>
		);
	}
}
