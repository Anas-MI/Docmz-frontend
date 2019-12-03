'use strict'
import React, {Component} from 'react'
import { steps } from './steps'
import MultiStep from 'react-multistep'
import './custom.css'
// import './normalize.css'
import './prog-tracker.css'
import './skeleton.css'
export class Demomultisteps extends Component {
//   constructor () {
//     super()
//     this.state = { 
//       firstName: '', 
//       lastName: ''
//     }
//     this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
//     this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
//   }

//   handleFirstNameChanged (event) {
//     this.setState({firstName: event.target.value})
//   }

//   handleLastNameChanged (event) {
//     this.setState({lastName: event.target.value})
//   }

  render () {
    return (
      <div>
       <div>
     
       <div class="c-multistep-update-profile__heading">Let's get to know each other</div>
       <div className="c-multistep-update-profile__form-body_demo">
            <div className="c-multistep-dr-form">
      <MultiStep steps={steps} />
      </div>
      </div>
    </div>
      </div>
    )
  }
}

export default Demomultisteps
