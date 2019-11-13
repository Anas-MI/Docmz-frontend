import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Dr_list from "./components/drList/Dr_list"
import Home from "./pages/Home/Home";
import DoctorsProfile from "./pages/DoctorsProfile";
import Dr_layout from "./dr/components/Dr_layout";
import Login_drawer from "./pages/login/Login_drawer"
import SignUpPage from "./pages/SignUp/SignUpPage"
import Payment from "./components/payment/Payment";
import UserSingUpPage from "./pages/SignUp/UserSingUpPage";
import MultiStepProfileUpdate from "./dr/components/pages/profile/MultiStepProfileUpdate";
import './App.scss';
import  Demomultisteps  from './dr/components/Demoform/Demomultisteps';
import  Firststepformdemo  from './dr/components/objects/drProfileForm/Firststepformdemo';
import Newtour from './dr/components/objects/drProfileForm/Newtour';
import Demotour from './dr/components/pages/dashboard/Demotour';
import Patienthome from './pages/Patient/Home';
import Patientcard from './pages/Patient/Patientcard';




function App() {
   
  return (
    <div className="App">
      <Switch>
          <Route
            path="/"
            exact
            component={props => <Home {...props} />}
          />
          <Route
            path="/login"
            exact
            component={props => <Login_drawer {...props} />}
          />
          <Route path="/signup" component={props => <SignUpPage {...props} /> } />
          <Route path="/user-sign" component={props => <UserSingUpPage {...props} /> } />
          
          <Route
            path="/doctors"
            component={props => <DoctorsProfile {...props} />}
          />
          <Route
            path="/search"
            component={props => <Dr_list {...props} />}
          />
          <Route
            path="/payment"
            component={props => <Payment {...props} />}
          />
     
          <Route
            path="/dr"
            component={props => <Dr_layout {...props} />}
          />
   
          <Route
                path="/dr-profile-stap"
                component={props => <MultiStepProfileUpdate {...props} />}
           />
             <Route path="/demo" exact = {true} component = {Demomultisteps} />
             <Route path="/firstformdemo"  
             component = {Firststepformdemo}
            // component={props => <Firststepformdemo {...props} />}
            />
             <Route path="/Newtour" exact = {true} component = {Newtour} />
             <Route path="/Demotour" exact = {true} component = {Demotour} />
             <Route path="/Patient" exact = {true} component = {Patienthome} />
             <Route path="/Patientcard" exact = {true} component = {Patientcard} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
});
export default withRouter(
  connect(
    mapStateToProps,
  )(App)
);

