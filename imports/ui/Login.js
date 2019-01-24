import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';

import LoginForm from './LoginForm';

const Login = () => {
    return (
      <div className="content overflow-hidden">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <div className="block block-themed animated fadeIn">
            <div className="block-header bg-primary">
              <ul className="block-options">
                <li>
                  <a href="base_pages_reminder.html">Forgot Password?</a>
                </li>
                <li>
                  <a href="base_pages_register.html" data-toggle="tooltip" data-placement="left" title="New Account"><i className="si si-plus" /></a>
                </li>
              </ul>
              <h3 className="block-title">Login</h3>
            </div>
            <div className="block-content block-content-full block-content-narrow"> 
              <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
              <p>Welcome, please login.</p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Login; 