import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';
import './Form.scss';
class LoginForm extends Component {
    constructor(){
        super();
        this.state = { 
            errorMessage: '', 
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.loginUsername.value;
        const password = event.target.loginPassword.value;
        Meteor.loginWithPassword({username: username}, password, error => {
            if(error) {
                this.setState({errorMessage: error.reason});           
            } else {
                FlowRouter.go('Dashboard');
                console.log(Meteor.user())
            }
        });
    }
    loginWithFacebook = (event) => {
        event.preventDefault();
        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, err => {
        if (err) {
            console.log('Handle errors here: ', err);
        } else {
            FlowRouter.go('Dashboard');
            console.log(Meteor.user());
        }
        });
    }
    render(){
    return(
    <form className="js-validation-login form-horizontal push-30-t" onSubmit={this.handleSubmit}>
    <div className="form-group">
    <div className="col-xs-12">
        <div className="form-material form-material-primary floating">
        <input className="form-control" type="text" name="loginUsername" />
        <label htmlFor="login-username">Username</label>
        </div>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-12">
        <div className="form-material form-material-primary floating">
        <input className="form-control" type="password" name="loginPassword" />
        <label htmlFor="login-password">Password</label>
        </div>
    </div>
    </div>
    <div className="form-group">
    <div className="col-xs-6">
        <label className="css-input switch switch-sm switch-primary">
        <input type="checkbox" id="login-remember-me" name="login-remember-me" /><span /> Remember Me?
        </label>
    </div>
    <div className="col-xs-6">
        <div className="font-s13 text-right push-5-t">
        <a href="base_pages_reminder_v2.html">Forgot Password?</a>
        </div>
    </div>
    </div>
    <div className="form-group push-30-t">
    <p>{this.state.errorMessage}</p>
        <button className="btn btn-sm btn-block btn-primary" type="submit">Log in</button>
        <hr className="hr-text" data-content="OR" />
        <button onClick={this.loginWithFacebook} className="btn btn-block btn-primary push-10" type="button"><i className="fab fa-facebook pull-left"></i> Continue with Facebook</button>
        <p>If you don't have an account, Register <a href="/register">here</a></p>
    </div>
    </form>
    )
    }
}

export default LoginForm; 