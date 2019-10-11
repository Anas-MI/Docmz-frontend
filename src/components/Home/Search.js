import React, { Component } from 'react';
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List } from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import LocationSearchInput from '../AddressAutoComplete/AddressAutoComplete';
import carriers from "../../services/extra/Carriers.json";
import MultiStepSelect from "../multiStepSelect/MultiStepSelect";
import { Redirect } from 'react-router-dom'
import {
  Link
} from "react-router-dom";
const { Option, OptGroup } = Select;
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.carrierChange = this.carrierChange.bind();
    this.searchSubmit = this.searchSubmit.bind();
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);

    this.state = {
      loading: false,
      doctors: [],
      speciality_id: null,
      carriers: [],
      isCarrierFetched: false,
      carrierSelected: false,
      carrierPlan: [],
      isOpen: false
    };
  }



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

    const data = carriers.carriers.map((carrier) => ({
      text: `${carrier.name}`,
      value: carrier.carrierId,
      plan: carrier.plans
    }));
    this.setState({ carriers: data, isCarrierFetched: true });

  }

  carrierChange = (car_plan) => {
    console.log(car_plan);
    this.setState({
      carrierSelected: true,
      carrierPlan: car_plan,
    })
  }
  toggleSelect = (open) => {
    this.setState({
      isOpen: open
    })
  }
  searchSubmit() {
    console.log("xxxxxxxxx");
    this.props.history.push("/search");
  }
  render() {
    const { isCarrierFetched, carriers, value, carrierSelected, carrierPlan, isOpen } = this.state;
    let onChange = (value) => {
      console.log(`selected ${value}`);
      this.setState({ speciality_id: value });
    };
    let onSearch = (val) => {
      console.log('search:', val);
    };
    const { Step } = Steps;
    return (
      <div className="search_box">
        <Select
          suffixIcon={<Icon type="search" />}
          showSearch
          placeholder="Select Specialty"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          className="ant-search-select"

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
        <LocationSearchInput className="ant-search-select" />
        <DatePicker onChange={onChange} className="ant-search-select" />
        <Select
          suffixIcon={<Icon type="bars" />}
          placeholder="custom dropdown render"
          value={value}
          open={isOpen}
          onDropdownVisibleChange={this.toggleSelect}
          className="ant-search-select"
          dropdownRender={menu => (
            <div className="col-12">

              {/* <Row type="flex" onMouseDown={e => e.preventDefault()}>
								<Col span={20}  >
									<Steps current={0} >
										<Step title="Choose carrier" />
										<Step title="Choose plan" />
									</Steps>
								</Col>
							</Row> */}
              {/* <Divider /> */}
              <Row type="flex">

                <Col span={24} className="select-carriers">
                  {carrierSelected ?
                    <List
                      size="small"
                      header={<h4 onClick={() => { this.setState({ carrierSelected: false }) }}> <Icon type="left" /> popular plans</h4>}
                      bordered
                      className="scroll-list"
                      dataSource={carrierPlan}
                      onMouseDown={e => e.preventDefault()}
                      renderItem={
                        plan => <List.Item ><p onClick={(e) => {
                          this.setState({
                            value: plan.name,
                            isOpen: false
                          }); e.preventDefault()
                        }}>{plan.name}</p></List.Item>
                      }
                    />
                    :
                    <List
                      size="small"
                      header={<h4> all carriers</h4>}
                      bordered
                      dataSource={carriers}
                      onMouseDown={e => e.preventDefault()}
                      className="scroll-list"
                      renderItem={
                        carrier => <List.Item ><p onClick={() => { this.carrierChange(carrier.plan) }}>{carrier.text}</p></List.Item>
                      }
                    />
                  }
                </Col>
              </Row>
            </div>
          )}
        >

        </Select>

        <Button type="primary" icon="search" className="search_button">
          <Link to="/search">Search</Link>
        </Button>

        {/* <MultiStepSelect 
					placeholder="placeholder"
					currentStep={0}
					listHeader="popular plans"
					steps={[
						{
							title: "step 1",
							options: [
								{
									title: "option A1"
								},
								{
									title: "option A2"
								},
								{
									title: "option A3"
								},
								{
									title: "option A4"
								},
							]
						},
						{
							title: "step 2",
							options: [
								{
									title: "option B1"
								},
								{
									title: "option B2"
								},
								{
									title: "option B3"
								},
								{
									title: "option B4"
								},
							]
						},
					]}
				/> */}

      </div>
    );
  }
}
