import React, { Component } from 'react';


class PasswordForgot extends Component {
  state = {
    email: '',
  }

  render() {
    return(
      <div className="auth-wraper">
        <form onSubmit={this.onSubmit}>
          <div className="auth-box">
            <div className="logo-head">
            </div>
            {/* error messages */}
            { !this.props &&
              <div className="error-placement">
                <p>{`error`}</p>
              </div>
            }

            <p>We will send you instructions for your password recovery to the email provided</p>

            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                <input
                  value={this.state.email}
                  onChange={(e) => this.setState({email: e.target.value})}
                  type="email" className="form-control" placeholder="Enter email "
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

export default PasswordForgot;
