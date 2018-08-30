import React, { Component } from 'react';

class PasswordReset extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="dashboard-wraper">
          	<div className="dashboard-sidebar">
          		<ul className="sidebar-nav">
                <li><a href="/profile"><i className="icon icon-profile"></i>Profile</a></li>
          			<li className="active"><a href="/reset_password"><i className="icon icon-password"></i>Reset Password</a></li>
          		</ul>
            </div>

            <div className="dashboard-content">
              <div className="dashboard-content-head">
                <h2>Reset Password</h2>
              </div>
              <div className="dashboard-content-body">
                <div className="password-reset-form">
                  <div className="form-group">
                    <label>New Passsword</label>
                    <input type="password" className="form-control" placeholder="••••••"/>
                  </div>
                  <div className="form-group">
                    <label>Retype New Password</label>
                    <input type="password" className="form-control" placeholder="••••••"/>
                  </div>

                  <div className="profile-action">
                    <button type="submit" class="btn btn-primary form-btn">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordReset;
