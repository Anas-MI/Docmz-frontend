import React, { Component } from 'react'
import DocSignUp from '../../components/DocSignUp/DocSignUp'
import {validations} from "../../services/validation/validations"
export default class SignUpPage extends Component {
   
    render() {
        return (
            <div className={pageClass}>
                <DocSignUp history={this.props.history} />
            </div>
        )
    }
}
const pageClass = "p-signup-page"