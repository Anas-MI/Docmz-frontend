import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Dashboard from "./pages/dashboard/Dashboard"
function Dr_layout() {
  return (
    <div className="App">
        
      <Switch>
          <Route
            path="/dashbord"
            component={props => <Dashboard {...props} />}
          />
         <Route
            path="/"
            component={props => <Dashboard {...props} />}
          />
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
  )(Dr_layout)
);

