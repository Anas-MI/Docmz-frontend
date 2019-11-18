import React, { Component } from 'react'
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Drawer, Input, Popover } from 'antd';
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
            car_plan_text: '',
            visible: false,
            planvalue: '',
            planvaluestatus: false,
        };


    }

    showDrawer = () => {
        this.setState({
            visible: true,
            // isOpen: false
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
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

    suffixiconhandler() {
        console.log('test')
        this.setState({ planvaluestatus: false })
    }
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
            visible: true
        })
    }
    planchangefunc = (plan) => {
        // event.preventDefault()
        console.log('plan name func', plan)
        this.setState({
            value: plan,
            planvaluestatus: true,
            isOpen: false,
            planvalue: plan,
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
        const menu = (
            <div
                style={{
                    height: 200,
                    width: '500px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid #ebedf0',
                    borderRadius: 2,
                    // padding: 48,
                    textAlign: 'center',
                    background: '#fafafa',
                }}
            >
                {/* Render in this
    <div style={{ marginTop: 16 }}> */}
                <Button type="primary" onClick={this.showDrawer}>
                    Open
      </Button>
                {/* </div> */}
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
        const content = (
            <div
                style={{
                    height: '300px',
                    width: '350px',
                    overflow: 'hidden',
                    position: 'relative',
                    // border: '1px solid #ebedf0',
                    // borderRadius: 2,
                    // padding: 48,
                    textAlign: 'center',
                    background: '#fafafa',
                }}
            >
                {/* Render in this
<div style={{ marginTop: 16 }}> */}
                <List
                    size="small"
                    header={
                        <p style={{ fontSize: '20px', textAlign: 'left' }}><strong> Choose carrier </strong></p>
                    }
                    bordered
                    dataSource={carriers}
                    onMouseDown={e => e.preventDefault()}
                    className="scroll-list"
                    renderItem={
                        carrier => <List.Item >

                            <p onClick={() => { this.carrierChange(carrier.plan) }}>

                                {carrier.text}
                            </p>
                        </List.Item>
                    }
                    style={{ cursor: 'pointer' }}
                />
                {/* <Button type="primary" onClick={this.showDrawer}>
                Open
</Button> */}
                {/* </div> */}
                <Drawer

                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute', padding: '0' }}
                >
                    <List
                        size="small"
                        header={
                            <p onClick={() => { this.setState({ carrierSelected: false }) }}
                                style={{ fontSize: '20px', textAlign: 'left' }}>
                                <Icon type="left" onClick={() => this.onClose()} style={{ paddingRight: '10px' }} />
                                <strong>Choose Plan</strong></p>
                        }
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
                        style={{ cursor: 'pointer' }}
                    />
                </Drawer>
            </div>
        );
        let planevaluerender;
        if (this.state.planvaluestatus) {
            planevaluerender = (
                <Row type="flex">

                    <Col span={24} className="select-carriers custom-ant-selection-single-home">
                        <div className="planvalue-render">
                            {/* <Input defaultValue={this.state.planvalue}
                                suffix={<Icon type="edit" onClick={() => this.suffixiconhandler()} />}
                            >
                                {this.state.planvalue}
                            </Input> */}
                            <p>{this.state.planvalue} <Icon type="edit" className="edit-icon-insurance-ap" onClick={() => this.suffixiconhandler()} /></p>


                        </div>
                    </Col></Row>
            )
        }
        else {
            planevaluerender = (
                <Popover content={content} trigger="click" placement="bottom" className="insurance-ant-popover-inner-content-newsearch">
                    {/* <Button>Click to select your plan and carrier</Button> */}
                    <Input placeholder="Click to select your plan and carrier"
                        suffix={<Icon type="bars" />}
                        // className="upper-input-width-newsearch"

                    />

                </Popover>
            )
        }
        return (
            <>
                <Row type="flex">

                    <Col span={24} className="select-carriers custom-ant-selection-single-home">
                        {planevaluerender}
                    </Col></Row>
                {/* <Select
                    suffixIcon={<Icon type="bars" />}
                    placeholder="custom dropdown render"
                    value={value}
                    open={isOpen}
                    onDropdownVisibleChange={this.toggleSelect}
                    className="ant-search-select dropdown-placeholder-selection-insurance"
                    dropdownRender={menu => (
                        <div className="col-12">

                            <Row type="flex" onMouseDown={e => e.preventDefault()}>
								<Col span={20}  >
									<Steps current={0} >
										<Step title="Choose carrier" />
										<Step title="Choose plan" />
									</Steps>
								</Col>
							</Row>
                            <Divider />
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

                </Select> */}

            </>
        )
    }
}

export default Insurancesearch
