import React, { Component } from 'react';
import { Select, DatePicker, Spin } from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import LocationSearchInput from '../AddressAutoComplete/AddressAutoComplete';
const { Option, OptGroup } = Select;
export default class Search extends Component {
	constructor(props) {
		super(props);
		this.lastFetchId = 0;
		this.fetchUser = debounce(this.fetchUser, 800);
	}

	state = {
		loading: false,
		doctors: [],
		speciality_id: null,
		carriers: [],
		isCarrierFetched: false
	};

	handleChange = (value) => {
		this.setState({
			value,
			data: [],
			isCarrierFetched: false
		});
	};

	fetchUser = async (value) => {
		console.log('fetching user', value);
		};
	

	async componentDidMount() {
		this.setState({ loading: true });
		const Specialty = await axios(`http://localhost:3001/doctors/get/specialties`);
		let doctors = await Specialty.data.data;
        this.setState({ doctors, loading: false });
        // this.setState({ data: [], isCarrierFetched: false });
	
        const carriers = await axios('http://localhost:3001/insurance/get/carriers');
		console.log(carriers);
			const data = carriers.data.carriers.map((carrier) => ({
				text: `${carrier.name}`,
				value: carrier.carrierId
			}));
            this.setState({ carriers: data, isCarrierFetched: true });
		console.log({data})
	}

	render() {
		const { isCarrierFetched,carriers,  value } = this.state;
		let onChange = (value) => {
			console.log(`selected ${value}`);
			this.setState({ speciality_id: value });
		};

		let onSearch = (val) => {
			console.log('search:', val);
		};

		return (
			<div>
				<Select
					style={{ width: 400 }}
					showSearch
					placeholder="Select Specialty"
					optionFilterProp="children"
					onChange={onChange}
					onSearch={onSearch}
				>
					<OptGroup label="Popular Specialties">
						{this.state.doctors.flatMap(
							(specialty) =>
								specialty.popular ? (
									<Option value={specialty.speciality_id}>{specialty.name}</Option>
								) : (
									[]
								)
						)}
					</OptGroup>
					<OptGroup label="All Specialties">
						{this.state.doctors.flatMap((specialty) => (
							<Option value={specialty.speciality_id}>{specialty.name}</Option>
						))}
					</OptGroup>
				</Select>
				<LocationSearchInput style={{ width: 400 }} />
				<DatePicker onChange={onChange} />
				<Select
					mode="multiple"
					labelInValue
					value={value}
					placeholder="Select Your Carrier"
					notFoundContent={isCarrierFetched ? null : <Spin size="default" /> }
                    filterOption={false}
					onSearch={this.fetchUser}
					onChange={this.handleChange}
					style={{ width: '100%' }}
				>
                    {carriers.map((d) => <Option key={d.value}>{d.text}</Option>)}
				</Select>
			</div>
		);
	}
}
