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
import Search from "../../pages/Home/Search";
import DrCardLong from "./DrCardLong";
import AppointmentSlider from "../appointment/AppointmentSlider"
// const { Option, OptGroup } = Select;
class Dr_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArr : []
    }
  }

  componentDidMount() {
    this.props.getDoctors()
  }

  render() {
    
    return (
      <div>
        <div className={`${componentClass}__search-wrap`}>
				  <Search />
				</div>

        <div style={{ padding: '30px 8px'  }}>
          <Row >
            <Col span={8} offset={10}>
              <AppointmentSlider onDateChange={(e)=> {
                this.setState({
                  dateArr: e
                })
              }} />
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop : "30px"}}>
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
const componentClass = "c-dr-list"
Dr_list.defaultProps = {
  doctors: []
}
const mapStateToProps = state => ({
  doctors: state.doctors.all
})
export default connect(mapStateToProps, {
  getDoctors
})(Dr_list)