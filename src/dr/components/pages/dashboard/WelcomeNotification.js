import React, { Component } from 'react'
import {  notification } from "antd";
class WelcomeNotification extends Component {
    constructor(props) {
        super(props);
        this.state={
            docInfo:JSON.parse(localStorage.getItem("user")),
          visible:true,
        //   open : false
        }
      }
      componentDidMount(){
        // this.setState({
        //     visible : true
        // })

        // this.toggleWelcome();
        // const openNotification = () => {
        // if(!this.state.open) {
        //     this.setState({
        //         open : true
        //     })
        // }
        
            const args = {
              message: 'Notification Title',
              description:
                'I will never close automatically. I will be close automatically. I will never close automatically.',
              duration: 0,
            };
            notification.open(args);
        //   };
        }

    toggleWelcome = ()=>{
        const { docInfo , visible } = this.state;
      const drName=docInfo && docInfo.basic && docInfo.basic.name ? 'Welcome Dr. ' + docInfo.basic.name+  ' ('+docInfo.basic.credential+')' :''
        notification.open({
          message: 'Welcome Notification',
          description:drName,
            
          onClick: () => {
            // console.log('Notification Clicked!');
            this.setState({
              visible : false
            })
          },
        });
      }
  render() {
    //   if(this.state.visible) {
    //       this.toggleWelcome();
    //   }
      
  
    return (
      <>
        
      </>
    )
  }
}

export default WelcomeNotification
