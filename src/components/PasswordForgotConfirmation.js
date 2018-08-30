import React, { Component } from 'react';

class PasswordForgotConfirmation extends Component {
  state = {
    password: '',
    passwordConfirmation: '',
  }

  render() {
    return(
      <div className="auth-wraper">
        <form onSubmit={this.onSubmit}>
          <div className="auth-box">
            <div className="logo-head">
              <img src="" alt=""/>
            </div>
            {/* error messages */}
            { !this.props &&
              <div className="error-placement">
                <p>{`error`}</p>
              </div>
            }

            <div className="form-group">
              <label>Password</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-key"></i></span>
                <input
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                  type="password" className="form-control" placeholder="Enter password "
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password Confirmation</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-key"></i></span>
                <input
                  value={this.state.passwordConfirmation}
                  onChange={(e) => this.setState({passwordConfirmation: e.target.value})}
                  type="password" className="form-control" placeholder="Enter password confirmation"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary form-btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default PasswordForgotConfirmation;
