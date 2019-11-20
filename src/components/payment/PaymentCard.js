//paymentCard.js
import React, { Component } from "react";
import "./Paymnet.scss";
import InputMask from "react-input-mask";
import ReactCardFlip from "react-card-flip";
import { cardNameRegex, getCardDetails } from "./cardRegex";
import { formatCreditCardNumber, frantSvg, backSvg } from "./paymentFun";

import { Alert, Switch , Icon } from "antd";
import { patientCardSave , patientCardStripeCharge,patientCardTestDetails } from "../../services/api/patient";
export default class PaymentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: props.cardNumber,
      cardName: props.name,
      cardDate: props.expDate,
      cardCV: props.cvvNo,
      flip: false,
      cardtype: "",
      maskKey: "9999 9999 9999 9999",
      cardDesingInfo: {
        color: "grey"
      },
      alterToggle: false,
      alertMsg: {
        type: "erorr",
        msg: "",
        status: ""
      },
      saveOptionalValue:false,
      userDetails: JSON.parse(localStorage.getItem("patient"))
    };
  }
  componentDidMount() {
    const { nameOnCard, numberOnCard, expDateOnCard, cvvOnCard } = this.props;
    const formatObjectWithType = formatCreditCardNumber(numberOnCard);
    const nValue =
      formatObjectWithType && formatObjectWithType.val
        ? formatObjectWithType.val
        : numberOnCard;
    const nCardtype =
      formatObjectWithType && formatObjectWithType.type
        ? formatObjectWithType.type
        : "";
    const ncardName = cardNameRegex.find(e => e.cardtype === nCardtype);
    const mask =
      ncardName && ncardName.mask ? ncardName.mask : "9999 9999 9999 9999";
    const cardDesingInfo = getCardDetails(nCardtype);
    this.setState({
      maskKey: mask,
      cardNumber: nValue,
      cardName: nameOnCard,
      cardDate: expDateOnCard,
      cardCV: cvvOnCard,
      cardDesingInfo
    });
  }
  onChangeVlaue(e) {
    const { name, value } = e.target;
    const { cardtype } = this.state;
    if (name === "cardNumber") {
      const formatObjectWithType = formatCreditCardNumber(value);
      const nValue =
        formatObjectWithType && formatObjectWithType.val
          ? formatObjectWithType.val
          : value;
      const nCardtype =
        formatObjectWithType && formatObjectWithType.type
          ? formatObjectWithType.type
          : cardtype;
      const ncardName = cardNameRegex.find(e => e.cardtype === nCardtype);
      const mask =
        ncardName && ncardName.mask ? ncardName.mask : "9999 9999 9999 9999";
      const cardDesingInfo = getCardDetails(nCardtype);
      this.setState({
        [name]: nValue,
        cardtype: nCardtype,
        flip: false,
        maskKey: mask,
        cardDesingInfo
      });
      // this.props.cardResponse({
      //   cardNumber: this.state.cardNumber,
      //   cardName: this.state.cardName,
      //   cardDate: this.state.cardDate,
      //   cardCV: this.state.cardCV
      // });
      return;
    }

    this.setState({
      [name]: value,
      cardtype
    });

    if (name === "cardCV") {
      this.setState({
        flip: true
      });
    } else {
      this.setState({
        flip: false
      });
    }

    // this.props.cardResponse({
    //   cardNumber: this.state.cardNumber,
    //   cardName: this.state.cardName,
    //   cardDate: this.state.cardDate,
    //   cardCV: this.state.cardCV
    // });
  }
  sendToBack() {
    this.props.backButton();
  }
  sendToParent() {
    const { cardNumber, saveOptionalValue,cardName, cardDate, cardCV, userDetails } = this.state;
    const {saveOptional}=this.props;
    if (cardName.length <= 0) {
      const msg = {
        type: "error",
        msg: "Name is required",
        status: "Name Error"
      };
      this.setState({
        alertMsg: msg,
        alterToggle: true
      });
      return false;
    }
    if (cardNumber.length <= 0) {
      const msg = {
        type: "error",
        msg: "Card Number is required",
        status: "Number Error"
      };
      this.setState({
        alertMsg: msg,
        alterToggle: true
      });
      return false;
    }

    if (cardDate.length <= 0) {
      const msg = {
        type: "error",
        msg: "Card Date is required",
        status: "Date Error"
      };
      this.setState({
        alertMsg: msg,
        alterToggle: true
      });
      return false;
    }
    if (cardCV.length <= 0) {
      const msg = {
        type: "error",
        msg: "Security Code is required",
        status: "Security Code Error"
      };
      this.setState({
        alertMsg: msg,
        alterToggle: true
      });
      return false;
    }

    const newDateArray = cardDate.split("/");

    

    if( saveOptionalValue || !saveOptional){
      const data = {
        number: cardNumber,
        exp_month: newDateArray && newDateArray[0] ? newDateArray[0] : 0,
        exp_year: newDateArray && newDateArray[1] ? newDateArray[1] : 0,
        cvc: cardCV,
        customer: userDetails.customerProfile,
        name: cardName
      };
      patientCardSave(data)
      .then(res => {
        const { message, status } = res.data;
        if (status) {
          const msg = {
            type: "success",
            msg: message,
            status: "Card Save"
          };
          this.setState({
            alertMsg: msg,
            alterToggle: true
          });
          this.props.transactionData(data)
        } else {
          const msg = {
            type: "error",
            msg: message,
            status: "Card Save Error"
          };
          this.setState({
            alertMsg: msg,
            alterToggle: true
          });
        }
      })
      .catch(err => {
        const { status, error, message } = err.response.data;
        const msg = {
          type: "error",
          msg: error,
          status: "Error"
        };
        this.setState({
          alertMsg: msg,
          alterToggle: true
        });
      });
    }
    if(!saveOptionalValue){
        const dataSubmit = {
        number: cardNumber,
        exp_month: newDateArray && newDateArray[0] ? newDateArray[0] : 0,
        exp_year: newDateArray && newDateArray[1] ? newDateArray[1] : 0,
        cvc: cardCV,
        name:cardName
     };

      patientCardTestDetails(dataSubmit)
      .then(res=>{
          const {status}=res.data
          if(status){
            const msg = {
              type: "success",
              msg: "Card is valid",
              status: "Success"
            };
            this.setState({
              alertMsg: msg,
              alterToggle: true
            });
            this.props.transactionData(dataSubmit);
          }else{
            const msg = {
              type: "error",
              msg: "Something Was Wrong Please try again",
              status: "Error"
            };
            this.setState({
              alertMsg: msg,
              alterToggle: true
            });
          }
      })
      .catch(err=>{
        const { status, error, message } = err.response.data;
        const msg = {
          type: "error",
          msg: error,
          status: "Error"
        };
        this.setState({
          alertMsg: msg,
          alterToggle: true
        });
      })
    }
   
  
    //this.validateCard() ? console.log("yes") : console.log("no");

    this.props.cardResponse({
      cardNumber: this.state.cardNumber,
      cardName: this.state.cardName,
      cardDate: this.state.cardDate,
      cardCV: this.state.cardCV
    })
  }
  validateCard() {
    const { cardNumber, cardName, cardDate, cardCV } = this.state;
    const dataArray = [
      { name: "cardNumber", type: "cardNumber" },
      { name: "cardName", type: "required" },
      { name: "cardDate", type: "cardDate" },
      { name: "cardCV", type: "cvv" }
    ];
    const type = "";
    if (type === "cardNumber") {
      cardNumber.length >= 13
        ? this.setState({
            cardNumberError: true,
            cardNumberErrorText: "Please enter valid card Number"
          })
        : this.setState({
            cardNumberError: false,
            cardNumberErrorText: ""
          });
    }
    if (type === "required") {
      cardName.length >= 1
        ? this.setState({
            cardNameError: true,
            cardNameErrorText: "Card Name is required"
          })
        : this.setState({
            cardNameError: false,
            cardNameErrorText: ""
          });
    }
    if (type === "cardCV") {
      cardCV.length >= 1
        ? this.setState({
            cardCVError: true,
            cardCVErrorText: "Security Code is required"
          })
        : this.setState({
            cardCVError: false,
            cardCVErrorText: ""
          });
    }
    if (type === "cardCV") {
      cardCV.length >= 1
        ? this.setState({
            cardCVError: true,
            cardCVErrorText: "Security Code is required"
          })
        : this.setState({
            cardCVError: false,
            cardCVErrorText: ""
          });
    }
  }
  svgBack = () => {
    const { cardName, cardCV, cardDesingInfo } = this.state;
    const color =
      cardDesingInfo && cardDesingInfo.color ? cardDesingInfo.color : "gray";
    return backSvg(color, cardCV, cardName);
  };
  svgFrant = () => {
    const { cardNumber, cardName, cardDate, cardDesingInfo } = this.state;
    const color =
      cardDesingInfo && cardDesingInfo.color ? cardDesingInfo.color : "gray";
    return frantSvg(color, cardNumber, cardDate, cardName);
  };

  render() {
    const {
      cardNumber,
      cardName,
      cardCV,
      flip,
      maskKey,
      cardDesingInfo,
      cardDate,
      alterToggle,
      alertMsg,
      saveOptionalValue
    } = this.state;
    const logo =
      cardDesingInfo && cardDesingInfo.logo ? cardDesingInfo.logo : "";
    const { submitText, backBtnText , saveOptional } = this.props;
    return (
      <form className="payment-card-wrapper">
        <div className="payment-card-wrapper__title">Add a Card</div>

        <div className="payment-card-wrapper__card-wrapper-inner">
          <div className="payment-card-wrapper__card">
            <div className="container preload">
              <div className="creditcard ">
                <ReactCardFlip
                  flipSpeedBackToFront={1}
                  flipSpeedFrontToBack={1}
                  isFlipped={this.state.flip}
                  flipDirection="horizontal"
                >
                  <div
                    className="front"
                    key="front"
                    onClick={() => {
                      this.setState({ flip: !flip });
                    }}
                  >
                    <div
                      id="ccsingle"
                      dangerouslySetInnerHTML={{ __html: logo }}
                    ></div>
                    <div
                      dangerouslySetInnerHTML={{ __html: this.svgFrant() }}
                    ></div>
                  </div>
                  <div
                    className="back"
                    key="back"
                    onClick={() => {
                      this.setState({ flip: !flip });
                    }}
                    dangerouslySetInnerHTML={{ __html: this.svgBack() }}
                  ></div>
                </ReactCardFlip>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container-payment">
          {alterToggle && (
            <Alert
              message={alertMsg.status}
              description={alertMsg.msg}
              type={alertMsg.type}
              showIcon
            />
          )}

          <div className="field-container">
            <label for="name">Name</label>
            <input
              id="name"
              maxlength="20"
              type="text"
              value={cardName}
              name="cardName"
              onChange={e => this.onChangeVlaue(e)}
            />
          </div>
          <div className="field-container">
            <label for="cardnumber">Card Number</label>

            <InputMask
              mask={maskKey}
              id="cardnumber"
              type="text"
              // pattern="[0-9]*"
              inputmode="numeric"
              value={cardNumber}
              name="cardNumber"
              maskChar=" "
              onChange={e => this.onChangeVlaue(e)}
            ></InputMask>
          </div>
          <div className="field-container">
            <label for="expirationdate">Expiration (mm/yy)</label>
            <InputMask
              mask="99/99"
              id="expirationdate"
              type="text"
              inputmode="numeric"
              name="cardDate"
              maskChar=" "
              value={cardDate}
              onChange={e => this.onChangeVlaue(e)}
            ></InputMask>
          </div>
          <div className="field-container">
            <label for="securitycode">Security Code</label>
            <InputMask
              mask="9999"
              id="securitycode"
              type="text"
              pattern="[0-9]*"
              inputmode="numeric"
              value={cardCV}
              name="cardCV"
              maskChar=" "
              onChange={e => this.onChangeVlaue(e)}
            ></InputMask>
          </div>
          {saveOptional && (
            <div>
                <label>Save this card</label>
                <br/>
                 <Switch
                  className="switch-custom-button"
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  onChange={()=>{this.setState({
                    saveOptionalValue:!saveOptionalValue
                  })}}
                  defaultChecked={saveOptionalValue}
                />
             </div>
               
            
          )}
        </div>
        <div className="field-container btn-container">
          <button
            className="back-btn"
            type="button"
            onClick={() => this.sendToBack()}
          >
            {backBtnText}
          </button>
          <button
            className="submit-btn"
            type="button"
            onClick={() => this.sendToParent()}
          >
            {submitText}
          </button>
        </div>
      </form>
    );
  }
}
PaymentCard.defaultProps = {
  submitText: "Save",
  backBtnText: "back"
};
