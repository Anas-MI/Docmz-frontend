import React, { Component } from "react";
import { Carousel , Col ,Row , Button , Icon } from "antd";
import FormStep from "./FormStep";
export default class MultiStepProfileForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: props.activeIndex
    }
  }
  componentDidMount(){
    const { 
      activeIndex
    } = this.state;
    this.slider.goTo(activeIndex)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.activeIndex !== this.props.activeIndex){
      this.slider.goTo(nextProps.activeIndex)
    }
  }
  onClick = e => {
    const { onClick } = this.props;
    if (typeof onClick === "function") {
      onClick(e);
    }
  };
  preViewBtn = () =>{
    this.props.preViewButton();
  }
  onNext = e => {
    const { onNext } = this.props;
    if (typeof onNext === "function") {
      onNext(e);
    }
  }
  render() {
    const { 
      children
    } = this.props;
    const { 
      activeIndex
    } = this.state;
    const a= this.props.activeIndex;
    return <div className={componentClass}>
      <Carousel 
      dots={false}
      ref={c => (this.slider = c)}
        activeIndex={activeIndex}
      >
        {children.map((el, key) => <FormStep 
          key={key} 
          >{el}</FormStep>
        )}
      </Carousel>
      
  

    </div>;
  }
}
MultiStepProfileForm.defaultProps = {
  activeIndex: 0
}
const componentClass = "c-multistep-dr-form";
const carouselSetting = {
  dotPosition: "top"
}