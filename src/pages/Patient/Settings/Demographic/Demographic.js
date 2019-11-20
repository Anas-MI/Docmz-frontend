import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu, Typography, Form,
    Input,
    Tooltip,
    Cascader,
    Checkbox,
    AutoComplete,
    Radio
} from 'antd';

import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "../../../Home/Search";
import Navbar from '../../../Header/Header';
import './demographic.css'
import Sidebar from '../Sidebar/Sidebar';
import Uppermsg from '../../Uppermsg';
import Buttonspatient from '../Button/Buttonspatient';
const { Option, OptGroup } = Select;
const { Content, Footer, Header, Sider } = Layout;
const { SubMenu } = Menu;
const AutoCompleteOption = AutoComplete.Option;
class Demographic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            race: [],
            ethnicity: '',
            zip: ''
        };
    }
    getZipDetail = async (e) => {
        try {
            let response = await axios.get("http://localhost:3001/patient/getinfo/5dcba17a2c9ed62528346794");
            console.log('patientdetail', response.data.data)
            this.setState({
                zip: response.data.data.zip
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getZipDetail()
    }
    raceclick = e => {
        console.log('racebvalue', e.target.value)
        const { value } = e.target
        // functional setState because we're building off of the previous state
        this.setState(prevState => ({
            // copy over any other values from state
            ...prevState,
            race: [
                ...prevState.race,
                value
            ]
        }))
        //     let newracearr = []
        //     if (this.state.racearr.indexOf(e.target.value) < 1) {
        //         newracearr.push(e.target.value)
        //     }

        //   await this.setState({
        //        racearr: newracearr
        //     })
        //     console.log(this.state.racearr)
        //    let newarr = []
        //    newarr.push({e.target.value})

        console.log(this.state.race)
    }
    ethnicityhandler = e => {

        this.setState({
            ethnicity: e.target.value
        })
        console.log('ethinicity', this.state.ethnicity)
    }
    demographicsubmit = e => {
        e.preventDefault();
        let body = {
            race: this.state.race,
            ethnicity: this.state.ethnicity,
            zip: this.state.zip,
            id : '5dcba17a2c9ed62528346794'
        }
        console.log('notibody', body)
        axios
            .post(
                'http://localhost:3001/patient/update',body

            )
            .then(response => {
                console.log('dr detail', response);
                    if(response.data.status == true){
                        alert(response.data.message)
                    }
                // this.state.prodbatch = response.data.data.items

                // this.forceUpdate();
                // if (response.data.data.description == "Item deleted successfully") {
                //     alert("Product deleted successfully");
                //     this.forceUpdate();
                //     this.handleClick();
                // }
            })
            .catch(e => {
                console.log('error', e);
            });
    }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const {zip} = this.state
        return (
            <div>
                <Layout className="layout">
                    <Navbar />

                    <Content style={{ padding: '0 50px', marginTop: 64 }}>

                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }} className="doctor-header">
                            <Uppermsg />
                            <header className="App-header">
                                <Search />
                            </header>
                            <Content style={{ padding: '0 50px' }}>
                                <Layout style={{ padding: '24px 0', background: '#fff' }}>

                                    <Sidebar />
                                    <Content style={{ padding: '0 24px', minHeight: 280 }}>

                                        <Layout>

                                            <Content className="patient-profile-content">
                                                <p>Demographic Info (optional)</p>
                                                <Divider />

                                                <Form onSubmit={this.handleSubmit}>
                                                    <p className="static-header"><strong>Race select one or more</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('AIAN', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="American Indian or Alaska Native" onClick={e => this.raceclick(e)}>
                                                                American Indian or Alaska Native
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('asian', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Asian" onClick={e => this.raceclick(e)}>
                                                                Asian
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('BAA', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Black or African American" onClick={e => this.raceclick(e)}>
                                                                Black or African American
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('NH', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Native Hawaiian" onClick={e => this.raceclick(e)}>
                                                                Native Hawaiian
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('OPI', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Other Pacific Islander" onClick={e => this.raceclick(e)}>
                                                                Other Pacific Islander
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('White', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="White" onClick={e => this.raceclick(e)}>
                                                                White
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('Other', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="Other" onClick={e => this.raceclick(e)}>
                                                                Other
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item>
                                                        {getFieldDecorator('DeclinetoAnswer', {
                                                            valuePropName: 'checked',
                                                        })(
                                                            <Checkbox value="WhDecline to Answerite" onClick={e => this.raceclick(e)}>
                                                                Decline to Answer
                                                    </Checkbox>
                                                        )}
                                                    </Form.Item>
                                                    <Divider dashed />

                                                    <p className="static-header"><strong>Ethnicity</strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('radio-group')(
                                                            <Radio.Group>
                                                                <Radio value="Hispanic or Latino" onClick={e => this.ethnicityhandler(e)}>Hispanic or Latino</Radio>
                                                                <Radio value="Not Hispanic or Latino" onClick={e => this.ethnicityhandler(e)}>Not Hispanic or Latino</Radio>
                                                                <Radio value="Decline to Answer" onClick={e => this.ethnicityhandler(e)}>Decline to Answer</Radio>
                                                            </Radio.Group>,
                                                        )}
                                                    </Form.Item>

                                                    <Divider dashed />
                                                    <p className="static-header"><strong>Zip <small>(Optional)</small></strong></p>
                                                    <Form.Item>
                                                        {getFieldDecorator('zip', {
                                                            initialValue: `${zip}`,
                                                            
                                                        })(

                                                            <Input placeholder="Basic usage" onChange={(e) => this.setState({zip : e.target.value})} />,
                                                        )}
                                                    </Form.Item>
                                                </Form>

                                                <Divider />
                                                {/* <Buttonspatient /> */}
                                                <div className="patient-profie-setting-pass">
                                                <Button type="primary" onClick={e => this.demographicsubmit(e)}>
                                                    Save
                                                    </Button>
                                                    <Button  htmlType="submit">
                                                    Cancel
                                                    </Button>
                                                    </div>


                                            </Content>
                                        </Layout>
                                    </Content>
                                </Layout>
                            </Content>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>,

</div>
        )
    }
}

export default Form.create()(Demographic)
