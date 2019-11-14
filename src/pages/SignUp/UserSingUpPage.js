import React, { Component } from 'react'
import UserSignUp from '../../components/UserSignUp/UserSignUp'
import {validations} from "../../services/validation/validations"
export default class UserSingUpPage extends Component {
   
    render() {
       return (
            <div className={pageClass}>
                <UserSignUp history={this.props.history} /> 
            </div>
        )
    }
}
const pageClass = "p-signup-page"