import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import * as AuthActions from '../ducks/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.verifyUserAndLogin(email.trim(), password);
  }

  render() {
    const token = this.props.auth && this.props.auth.token;

    return(
      token ?
      <Redirect to='/' /> :
      <div className="auth-wraper">
        <form onSubmit={this.onSubmit}>
          <div className="auth-box">
            <div className="logo-head">
            </div>
            <h2 className="auth-heading">Sign In</h2>
            {/* error messages */}
            { this.props.auth.message &&
              <div className="error-placement alert alert-danger">
                <i className="fa fa-exclamation-triangle"></i>
                <span>{this.props.auth.message}</span>
              </div>
            }
            <div className="form-group form-material">
              <label>Email</label>
              <input
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
                type="text" className="form-control" placeholder="Enter email "
                required
              />
            </div>
            <div className="form-group password-input form-material">
              <label>Password</label>
              <input
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
                type="password" className="form-control" placeholder="Enter Password"
                required
                />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary form-btn">Login</button>
            </div>
            <div className="forgot-link">
              <Link to='/forgot-password'>
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
