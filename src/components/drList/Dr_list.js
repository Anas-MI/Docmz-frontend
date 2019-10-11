import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col, Row,
} from 'antd';
// import debounce from 'lodash/debounce';
// import axios from 'axios';
import {
  getDoctors
} from '../../services/redux/actions'
import Dr_single_card from "./Dr_single_card";
import Search from "../Home/Search";
import DrCardLong from "./DrCardLong";
import AppointmentSlider from "../appointment/AppointmentSlider"
// const { Option, OptGroup } = Select;
class Dr_list extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getDoctors()
  }

  render() {

    return (
      <div>
        <header className="App-header">
				  <Search />
				</header>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row >
            <Col span={8} offset={10}>
              <AppointmentSlider />
            </Col>
          </Row>
          <Row gutter={16}>
             <Col span={18}>
              {
                this.props.doctors.map((el, key) => (
                  <DrCardLong key={key} doctor={el} />
                ))
              }
            </Col>

          </Row>
        </div>

      </div>
    );
  }
}
Dr_list.defaultProps = {
  doctors: []
}
const mapStateToProps = state => ({
  doctors: state.doctors.all
})
export default connect(mapStateToProps, {
  getDoctors
})(Dr_list)