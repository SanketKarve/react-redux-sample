import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './fonts.css';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PasswordForgot from './components/PasswordForgot';
import PasswordForgotVerification from './components/PasswordForgotVerification';
import PasswordForgotConfirmation from './components/PasswordForgotConfirmation';
import PasswordReset from './components/PasswordReset';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    const token = this.props.auth.token;
    return (
      <Router>
        <div>
          {/* routes */}
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} token={token}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard} token={token}/>
            <PrivateRoute exact path="/reset_password" component={PasswordReset} token={token}/>
            <Route path="/sign_in" component={Login}/>
            <Route path="/sign_up" component={Signup}/>
            <Route path="/forgot-password" component={PasswordForgot}/>
            <Route path="/forgot-password-verification" component={PasswordForgotVerification}/>
            <Route path="/forgot-password-confirmation" component={PasswordForgotConfirmation}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


/**
 * A helper private route component
 * check if the autentication granted, then only allow to route to the component
 * refactor to another file if required at other palces
 */
const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated(token) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


/**
 * Authenticated checks if an access token is available in the state
 */
const authenticated = (token) => {
  return !!token;
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);


// export default App;
