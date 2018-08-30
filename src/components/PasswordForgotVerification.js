import React, { Component } from 'react';


class PasswordForgotVerification extends Component {
  state = {
    email: '',
  }

  render() {
    return(
      <div className="auth-wraper">
        <form onSubmit={this.onSubmit}>
          <div className="auth-box">
            <div className="logo-head">
              <img src="" alt=""/>
            </div>

            <p>
              We have sent you a verification email, please click on the link
              to reset your password.
            </p>

          </div>
        </form>
      </div>
    )
  }
}

export default PasswordForgotVerification;
