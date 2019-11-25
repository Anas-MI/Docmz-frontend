import React, { Component } from 'react';
// import Banner from '../components/Banner/Banner'
import Section from '../components/Sections/Section';
import AppointmentCard from '../components/appointment/AppointmentCard/AppointmentCard';
import DoctorInfo from '../components/drList/DoctorInfo';
import { getDoctorById } from '../services/api';
import getDatesFromArray from '../services/scheduler/getDatesFromArray';
import RatingCard from '../components/RatingCard/RatingCard';
import { Row, Col, Divider } from 'antd';
import './customdoctorprofile.css'
import ReviewCard from '../components/ReviewCard/ReviewCard';
import { Modal, Button, Steps, message, Form, Icon, Input } from 'antd';
import Firstcontentcustom from './Firstcontentcustom'
import Cardcustomcontent from './Cardcustomcontent'
import Reviewcustomcontent from './Reviewcustomcontent'
const { Step } = Steps;
const steps = [
	{
		title: 'First',
		content: <Firstcontentcustom />,
	},
	{
		title: 'Second',
		content: <Cardcustomcontent />,
	},
	{
		title: 'Last',
		content: <Reviewcustomcontent />,
	},
];
function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
 class DoctorsProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			docId: null,
			isLoading: true,
			visible: false,
			current: 0,
		};
	}
	next() {
		const current = this.state.current + 1;
		this.setState({ current });
	}

	prev() {
		const current = this.state.current - 1;
		this.setState({ current });
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	componentDidMount() {
		 // To disabled submit button at the beginning.
		 this.props.form.validateFields();
		const doctor = JSON.parse(localStorage.getItem('user'));
		const { _id: docId } = doctor;
		this.setState({ docId });
		if (docId) {
			getDoctorById(docId)
				.then((res) => {
					if (res.data && res.data.status) {
						const { data } = res.data;
						console.log({ data });
						this.setState({
							appointments: data.appointments,
							isLoading: false
						});
						// getDatesFromArray(data.appointments, new Date())
					}
				})
				.catch((err) => {
					console.log({ err });
					this.setState({
						isLoading: false
					});
				});
		}
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			console.log('Received values of form: ', values);
		  }
		});
	  };
	render() {
		const { current } = this.state;
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		// Only show error after a field is touched.
		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');
		return (
			<div className="p-doctors-profile">
				{/* <Banner parentClass="p-doctors" image="//via.placeholder.com/1920x1080/fff" /> */}
				<Section
					className="p-doctors-profile__section"
					bgImg={
						'https://www.thehealthy.com/wp-content/uploads/2017/09/02_doctor_Insider-Tips-to-Choosing-the-Best-Primary-Care-Doctor_519507367_Stokkete.jpg'
					}
					type={[, 'bg-black-alpha', 'shadow']}
				>
					<div className="c-container p-doctors-profile__container">
						<DoctorInfo />
						<AppointmentCard type="shadow" title="Make Your Next Appointment" />
					</div>
				</Section>
				<div className="c-container p-doctors-profile__container">
					<Row>
						<Col span={24}>
							<div style={{ clear: 'both', marginTop: '160px' }} />
						</Col>
						<Col className="p-doctors-profile__left-col" span={16}>
							<div>
							
							
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">About Dr. Andrew Fagelman</h3>
								<p className="p-doctors-profile__text__ap">
									Dr. Andrew Fagelman is board certified with the American Board of Internal Medicine
									and current physician at SOHO Health NY.
									{/* <br /> */}
									Providing general medical care in the heart of SOHO. Dr. Fagelman provides a full
									range our services include sick visits, routine physicals, treatment of chronic
									medical conditions to travel counseling for that upcoming trip.
									<br />The office accepts most insurance plans
								</p>
							</div>
							<br />
							<br />
							<RatingCard />
							<Divider />
							<ReviewCard
								name="John doe"
								overall={5}
								bedsideManner={4.5}
								waitTime={3.5}
								communication={3}
								review="I saw Ellen, the Nurse Practitioner. Let me tell you, she was AMAZING. I have had extremely unusual symptoms for 4 months. I’ve seen specialist after specialist at major hospitals. All have agreed that something is wrong with my body, but no one has cared to dig deeper because it’s not immediately diagnosable. She cares! She wants to figure it out! For the first time in a long time, I have hope. I HIGHLY recommend her. Take it from someone who’s had bad experiences with doctors who don’t care, she does."
								img="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							/>
							<ReviewCard
								name="John doe"
								overall={5}
								bedsideManner={4.5}
								waitTime={3.5}
								communication={3}
								review="I saw Ellen, the Nurse Practitioner. Let me tell you, she was AMAZING. I have had extremely unusual symptoms for 4 months. I’ve seen specialist after specialist at major hospitals. All have agreed that something is wrong with my body, but no one has cared to dig deeper because it’s not immediately diagnosable. She cares! She wants to figure it out! For the first time in a long time, I have hope. I HIGHLY recommend her. Take it from someone who’s had bad experiences with doctors who don’t care, she does."
							/>
							<ReviewCard
								name="John doe"
								overall={5}
								bedsideManner={4.5}
								waitTime={3.5}
								communication={3}
								review="I saw Ellen, the Nurse Practitioner. Let me tell you, she was AMAZING. I have had extremely unusual symptoms for 4 months. I’ve seen specialist after specialist at major hospitals. All have agreed that something is wrong with my body, but no one has cared to dig deeper because it’s not immediately diagnosable. She cares! She wants to figure it out! For the first time in a long time, I have hope. I HIGHLY recommend her. Take it from someone who’s had bad experiences with doctors who don’t care, she does."
								img="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							/>
							<ReviewCard
								name="John doe"
								overall={5}
								bedsideManner={4.5}
								waitTime={3.5}
								communication={3}
								review="I saw Ellen, the Nurse Practitioner. Let me tell you, she was AMAZING. I have had extremely unusual symptoms for 4 months. I’ve seen specialist after specialist at major hospitals. All have agreed that something is wrong with my body, but no one has cared to dig deeper because it’s not immediately diagnosable. She cares! She wants to figure it out! For the first time in a long time, I have hope. I HIGHLY recommend her. Take it from someone who’s had bad experiences with doctors who don’t care, she does."
								img="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							/>
						</Col>
						<Col span={8}>
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">In-network insurances</h3>
								<p className="c-title__ap">1199SEIUAetnaAmerican Republic Insurance Company</p>
							</div>

							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Specialties</h3>
								<p className="c-title__ap">Primary Care Doctor</p>
							</div>
							<br />
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Practice names</h3>
								<p className="c-title__ap">Soho Health NY</p>
							</div>
							<br />
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Hospital affiliations</h3>
								<p className="c-title__ap">Beth Israel Medical Center - Petrie Division</p>
							</div>
							<br />
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Board certifications</h3>
								<p className="c-title__ap">American Board of Internal Medicine</p>
							</div>
							<br />
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Education and training</h3>
								<p className="c-title__ap">
									Medical School - State University of New York, Buffalo, Doctor of Medicine Saint
									Vincent Catholic Medical Center, Residency in Internal Medicine Maimonides Medical
									Center, Internship in General Surgery
								</p>
							</div>
							<br />
							<div>
								<h3 className="c-title p-doctors-profile__title p-doctors-profile__title__ap">Awards and publications</h3>
								<p className="c-title__ap">
									Journal of Urology - "Efficacy, Safety, and Use of Viagra in Clinical
									Practice."Critical Care Resident of the Year - 2003
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Form.create()(DoctorsProfile)
