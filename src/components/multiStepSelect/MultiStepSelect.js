import React, { Component } from 'react';
import { Select, DatePicker, Spin, Icon, Divider, Row, Col, Button, Steps, List } from 'antd';
class MultiStepSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      currentStep: props.currentStep || 0,
      totalSteps: props.steps.length ? (props.steps.length - 1) : 0,
      listHeader: [props.listHeader],
      value: props.value,
    }
  }
  toggleSelect = open => {

    this.setState({
      isOpen: open
    })
  }
  prevStep = () => {
    if(this.state.currentStep > 0)
    this.setState(prevState => ({
      currentStep : prevState.currentStep - 1,
      listHeader: prevState.listHeader.splice(0,prevState.listHeader.length - 1)
    }))
  }
  nextStep = () => {
    if(this.state.currentStep < this.state.totalSteps)
    this.setState(prevState => ({
      currentStep : prevState.currentStep + 1
    }))
  }
  onOptionSelect = value => {
    const {
      fixedHeader,
    } = this.props
    const {
      currentStep,
      totalSteps
    } = this.state
    console.log({
      currentStep,
      totalSteps,
    })
    if(totalSteps === currentStep){
      this.setState({
        value,
        isOpen: false
      })
    }else{
      this.setState(prevState => ({
        listHeader: fixedHeader ? [prevState.listHeader] : [prevState.listHeader, value]
      }), this.nextStep)
    }
  }
  render() {
    const {
      placeholder,
      steps,
    } = this.props
    const {
      value,
      currentStep,
      isOpen,
      listHeader,
    } = this.state
    const stepTitles = steps.map(el => el.title)
    const stepOptions = steps.map(el => el.options)
    const { Step } = Steps;
    const carrierSelected = false;
    const carrierPlan = [];
    const carriers = [];
    return (
      <div className="multi-step-select">
        <Select
          style={{ width: '100%' }}
          placeholder={placeholder}
          value={value}
          open={isOpen}
          onDropdownVisibleChange={this.toggleSelect}
          dropdownRender={menu => (
            <div className="col-12" onMouseDown={e => e.preventDefault()}>
              <Row type="flex" >
                <Col span={12} offset={4} >
                  <Steps current={currentStep} >
                    {
                      stepTitles.map((el, index) => <Step key={index} title={el} />)
                    }
                  </Steps>
                </Col>
              </Row>
              <Row type="flex">
                <Col span={24} className="select-carriers">
                  <List
                    size="small"
                    header={
                      <h4 onClick={this.prevStep}> <Icon type="left" /> {listHeader}</h4>
                    }
                    bordered
                    className="scroll-list"
                    dataSource={stepOptions[currentStep]}
                    renderItem={
                      plan => <List.Item
                        data-value={plan.title}
                        onClick={this.onOptionSelect.bind(null, plan.title)}
                      >{plan.title}</List.Item>
                    }
                  />
                </Col>
              </Row>
            </div>
          )}
        >

        </Select>
      </div>
    );
  }
}

MultiStepSelect.defaultProps = {
  isOpen: false,
  steps: [],
  currentStep: 0,
}

export default MultiStepSelect;