import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Search from "./components/Home/Search"
import './App.scss';



function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <Search/>
      </header>
      <Switch>
          <Route
            path="/"
            exact
            component={props => <div {...props} >Home</div>}
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
  )(App)
);

