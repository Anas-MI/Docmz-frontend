import React, { Component } from 'react'
import {
    Card, Row, Col, Avatar, Icon, Button
} from 'antd'
import classNames from 'classnames'
import './custominfocrd.css'
import axios from 'axios'

export default class InfoCard extends Component {
    constructor() {
        super()
        this.state = {
            filterpatientdetailarr : []

        }
    }
    componentDidMount() {
        this.getdocdetail();
    }
    getdocdetail =  () =>  
  {
  axios.get(
    `http://localhost:3001/doctors/getdoc/${localStorage.getItem('doctorid')}`

  )
  .then(response => {
    console.log('docdetailsashbaord', response.data.data.appointments);
    console.log(response.data.data.appointments.length)
    let apparr = response.data.data.appointments
    let filterapparr =  apparr.filter(function(hero) {
      return hero.booked == true;
      // console.log('hero',hero.booked == true)
    });
    console.log('filterapparrrdata',filterapparr)
    this.setState({
      filterpatientdetailarr : filterapparr
    })
  
    // for(let i=0;i <= apparr.length;++i){
    //   console.log('bookres',apparr[i].booked)
    //   if(apparr[i].booked == true){
    //     console.log(apparr[i])
    //     // this.state.counter = +this.state.counter + 1
    //     // console.log(this.state.counter)
    //   }
    // }
   

  })
  .catch(e => {
    console.log('error', e);
  });
}
    
    componentClass = name => {
        if(typeof name === "string"){
            if(name.includes(",")){
                const newName = name.split(",").map(el => el.trim()).filter(el => el)
                return newName.map(el => `c-info-card__${el}`).join(" ")
            }
            return `c-info-card__${name}`
        }

        if(name.constructor() === Array )
            return name.map(el => `c-info-card__${el}`).join(" ")

        return ``
    }


    render() {
        return (
            <Card bordered={false} className="c-info-card">
               
               
                <Row type="flex" align="middle" >
                    <Col span={24/3} className={this.componentClass("user-info, border-col")} >
                        <Avatar size={50} icon="user" className={this.componentClass("avatar")} />
                        <div className={this.componentClass("user-content")}>
                            <p className={this.componentClass("user-name")}>
                              patient name
                            </p>
                            <p className={this.componentClass("user-number")}>
                                7885544556
                            </p>
                        </div>
                    </Col>
                    <Col span={24/3} className={this.componentClass("calander-col, border-col")} >
                        <div className={this.componentClass("calander-inner")} >
                            <div className={this.componentClass("calander-date")} >
                                <Icon type="calendar" className={this.componentClass("icon")} />
                                22 October 2019
                            </div>
                            <div className={this.componentClass("calander-time")} >
                                <Icon type="clock-circle" className={classNames(this.componentClass("icon"))} />
                                09:00 - 10:00 am
                            </div>
                        </div>
                    </Col>
                    <Col span={24/3} className={this.componentClass("status-col")} >
                        <div className={classNames(this.componentClass("status"), this.componentClass("status--active"))} >
                            Approved
                        </div>
                        <div className={classNames(this.componentClass("more"))} >
                            {/* <Icon type="down" className={classNames(this.componentClass("icon"), this.componentClass("icon--more"))} /> */}
                            {/* <Icon type="close" /> */}
                            <Button type="primary" className="custom-infocard-btn-ap">Cancel</Button>
                        </div>
                    </Col>
                    </Row>
                    
               
            </Card>
        )
    }
}
