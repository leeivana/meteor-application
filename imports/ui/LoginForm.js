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
                console.log(error);
                console.log('reason', error.reason);                
            } else {
                FlowRouter.go('Dashboard');
            }
        });
    }
    render(){
    return(
    <form className="js-validation-login form-horizontal push-30-t push-50" onSubmit={this.handleSubmit}>
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
            <div className="col-xs-12">
                <label className="css-input switch switch-sm switch-primary">
                    <input type="checkbox" id="login-remember-me" name="login-remember-me" /><span></span> Remember Me?
                </label>
            </div>
        </div>
        <div className="form-group">
            <button className="btn btn-block btn-primary" type="submit" value="Login"><i className="si si-login pull-right"></i> Log in</button>
            <hr className="hr-text" data-content="OR" />
            <button className="btn btn-block btn-primary push-10" type="button"><i className="fa fa-facebook pull-left"></i> Continue with Facebook</button>
        </div>
        <p>If you don't have an account, Register <a href="/register">here</a></p>
    </form>
    )
    }
}

export default LoginForm; 