import React, { Component } from 'react'
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List } from 'antd';
import './insurance.css'
import debounce from 'lodash/debounce';
import axios from 'axios';
import LocationSearchInput from '../../../../components/AddressAutoComplete/AddressAutoComplete';
import carriers from "../../../../services/extra/Carriers.json";

import {
    Link
} from "react-router-dom";
const { Option, OptGroup } = Select;
class Insurancesearch extends Component {
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
            isOpen: false,
            car_plan_text: ''
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
        console.log('cariershere', carriers)
        // console.log('carriersmap',carriers.map((carrier)))
        const data = carriers.carriers.map((carrier) => ({
            text: `${carrier.name}`,
            value: carrier.carrierId,
            plan: carrier.plans
        }));

        this.setState({ carriers: data, isCarrierFetched: true });
        console.log('datahere', data)
        this.setState({ loading: true });
        const Specialty = await axios.get(`http://localhost:3001/doctors/get/specialties`)
        console.log('speciality', Specialty)
        let doctors = await Specialty.data.data;
        this.setState({ doctors, loading: false });

        // const data = carriers.carriers.map((carrier) => ({
        //   text: `${carrier.name}`,
        //   value: carrier.carrierId,
        //   plan: carrier.plans
        // }));
        // this.setState({ carriers: data, isCarrierFetched: true });

    }

    carrierChange = (carrier) => {


        console.log(carrier);

        this.setState({
            carrierSelected: true,
            carrierPlan: carrier,
        })
    }
    planchangefunc = (plan) => {
        // event.preventDefault()
        console.log('plan name func', plan)
        this.setState({
            value: plan,
            isOpen: false
        });
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
            <>
                <Select
                    suffixIcon={<Icon type="bars" />}
                    placeholder="custom dropdown render"
                    value={value}
                    open={isOpen}
                    onDropdownVisibleChange={this.toggleSelect}
                    className="ant-search-select dropdown-placeholder-selection-insurance"
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

                                <Col span={24} className="select-carriers custom-ant-selection-single-home">
                                    {carrierSelected ?
                                        <List
                                            size="small"
                                            header={<h4 onClick={() => { this.setState({ carrierSelected: false }) }}> <Icon type="left" /> popular plans</h4>}
                                            bordered
                                            className="scroll-list"
                                            dataSource={carrierPlan}
                                            onMouseDown={e => e.preventDefault()}
                                            renderItem={
                                                plan => <List.Item ><p onClick={() => {
                                                    //   this.setState({
                                                    //     value: plan.name,
                                                    //     isOpen: false
                                                    //   }); e.preventDefault()
                                                    this.planchangefunc(plan.name)
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
                                                carrier => <List.Item >
                                                    <p onClick={() => { this.carrierChange(carrier.plan) }}>{carrier.text}</p>
                                                </List.Item>
                                            }
                                        />
                                    }
                                </Col>
                            </Row>
                        </div>
                    )}
                >

                </Select>

            </>
        )
    }
}

export default Insurancesearch
