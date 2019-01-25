import React, { Component } from 'react'; 
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'; 
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Form.scss';
class RegisterForm extends Component {
  constructor(){
    super();
    this.state = {
      errorMessage: '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.registerUsername.value;
    const email = event.target.registerEmail.value;
    const password = event.target.registerPassword.value;
    const password2 = event.target.registerPassword2.value;
    if(password !== password2){
      this.setState({
        errorMessage: 'Passwords do not match!',
      })
    } else {
      Accounts.createUser({
        username, 
        email,
        password,
      }, error => {
        if(error) {
          console.log(Meteor.userId());
          console.log(Meteor.user());
          console.log('reason', error.reason);
          this.setState({errorMessage: error.reason})
        } 
        FlowRouter.go('Dashboard');
      });
    }
  }
  render(){
    return(
      <form className="js-validation-register form-horizontal push-50-t push-50" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="form-material form-material-success">
              <input className="form-control" type="text" name="registerUsername" placeholder="Please enter a username" />
              <label htmlFor="register-username">Username</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="form-material form-material-success">
              <input className="form-control" type="email" name="registerEmail" placeholder="Please provide your email" />
              <label htmlFor="register-email">Email</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="form-material form-material-success">
              <input className="form-control" type="password" name="registerPassword" placeholder="Choose a strong password.." />
              <label htmlFor="register-password">Password</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="form-material form-material-success">
              <input className="form-control" type="password" name="registerPassword2" placeholder="..and confirm it" />
              <label htmlFor="register-password2">Confirm Password</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <label className="css-input switch switch-sm switch-success">
              <input type="checkbox" id="register-terms" name="register-terms" /><span /> I agree with terms &amp; conditions
            </label>
          </div>
        </div>
        <div className="form-group">
          <p>{this.state.errorMessage}</p>
          <button className="btn btn-block btn-success" type="submit"><i className="fa fa-plus pull-right" /> Sign Up</button>
          <hr className="hr-text" data-content="OR" />
          <button className="btn btn-block btn-primary push-10" type="button"><i className="fa fa-facebook pull-left"></i> Continue with Facebook</button>
        </div>
        <p>Already have an account? Log in <a href="/">here</a></p>
      </form>
    )
  }
}

export default RegisterForm; 