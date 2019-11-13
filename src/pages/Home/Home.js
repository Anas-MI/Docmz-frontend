import React, { Component } from 'react';
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List, Breadcrumb, Layout, Menu } from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
import Search from "./Search";
import Navbar from '../Header/Header';
import './newhome.css'
const { Option, OptGroup } = Select;
const { Content, Footer } = Layout;

export default class Home extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				<Layout>
					<Navbar />
					<Content style={{ padding: '0 50px', marginTop: 64 }}>

						<div style={{ background: '#fff', padding: 24, minHeight: 380 }} className="doctor-header">
							<h1>Find doctors in your network</h1>
							<header className="App-header">
								<Search />
							</header>
							<div className="search_box">
								<p><strong>Top specialties on Docmz:</strong></p>
							</div>
							<center>
								<div className="gutter-example">
									<Row gutter={16}>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box drimg-wrapper">
												<img src={require('./img/primarycare-foreground___3vr-_.svg')} />

											</div>
											<p className="primary-care-para"><strong>Primary Care</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box obgyn-foreground-wrapper">
												<img src={require('./img/obgyn-foreground___3n8U5.svg')} />
											</div>
											<p className="primary-care-para"><strong>OBGYN</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box dentists-foreground-wrapper">
												<img src={require('./img/dentists-foreground___1aHuD.svg')} />
											</div>
											<p className="primary-care-para"><strong>Dentist</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box dermatology-foreground-wrapper">
												<img src={require('./img/dermatology-foreground___2S85y.svg')} />
											</div>
											<p className="primary-care-para"><strong>Dermatologist</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box therapy-foreground-wrapper">
												<img src={require('./img/therapy-foreground___2RKbo.svg')} />
											</div>
											<p className="primary-care-para"><strong>Psychiatrist</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box optometry-foreground-wrapper">
												<img src={require('./img/optometry-foreground___CpXD2.svg')} />
											</div>
											<p className="primary-care-para"><strong>Eye Doctor</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box ent-foreground-wrapper">
												<img src={require('./img/ent-foreground___20BiN.svg')} />
											</div>
											<p className="primary-care-para"><strong>ENT</strong></p>
										</Col>
										<Col className="gutter-row" span={6}>
											<div className="gutter-box gastro-foreground-wrapper">
												<img src={require('./img/gastro-foreground___3xErH.svg')} />
											</div>
											<p className="primary-care-para"><strong>Gastroenterologist</strong></p>
										</Col>
									</Row>
									{/* <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
									<Col className="gutter-row" span={6}>
										<div className="gutter-box therapy-foreground-wrapper">
											<img src={require('./img/therapy-foreground___2RKbo.svg')} />
										</div>
										<p className="primary-care-para"><strong>Psychiatrist</strong></p>
									</Col>
									<Col className="gutter-row" span={6}>
										<div className="gutter-box optometry-foreground-wrapper">
											<img src={require('./img/optometry-foreground___CpXD2.svg')} />
										</div>
										<p className="primary-care-para"><strong>Eye Doctor</strong></p>
									</Col>
									<Col className="gutter-row" span={6}>
										<div className="gutter-box ent-foreground-wrapper">
											<img src={require('./img/ent-foreground___20BiN.svg')} />
										</div>
										<p className="primary-care-para"><strong>ENT</strong></p>
									</Col>
									<Col className="gutter-row" span={6}>
										<div className="gutter-box gastro-foreground-wrapper">
											<img src={require('./img/gastro-foreground___3xErH.svg')} />
										</div>
										<p className="primary-care-para"><strong>Gastroenterologist</strong></p>
									</Col>
								</Row> */}
								</div>,
							</center>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>,
				{/* <Content style={{ padding: '0 50px' }}>

					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
						<h1>Find doctors in your network</h1>
						<header className="App-header">
							<Search />
						</header>
						<div className="search_box">
							Home
				</div>
					</div>
				</Content> */}
				{/* <h1>Find doctors in your network</h1>
				<header className="App-header">
				<Search />
				</header>
				<div className="search_box">
					Home
				</div> */}
			</div>

		);
	}
}
