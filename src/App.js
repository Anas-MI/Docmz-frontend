import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Dr_list from "./components/drList/Dr_list"
import Home from "./pages/Home/Home";
import DoctorsProfile from "./pages/DoctorsProfile";
import Dr_layout from "./dr/components/Dr_layout";
import './App.scss';



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
            path="/doctors"
            exact
            component={props => <DoctorsProfile {...props} />}
          />
          <Route
            path="/search"
            
            component={props => <Dr_list {...props} />}
          />
          <Route
            path="/dr"
            component={props => <Dr_layout {...props} />}
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

