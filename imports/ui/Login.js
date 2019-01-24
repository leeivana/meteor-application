import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';
import './assets/css/oneui.css';
import './assets/css/bootstrap.min.css';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false, 
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const emailVar = event.target.loginEmail.value;
    const passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar, function(error){
      console.log(error);
    });
    if(Meteor.user()){
      this.setState({
        loggedIn: true, 
      })
    }
    console.log('user', Meteor.user());
  }
  render(){
    return (
      // <div>

      // <form onSubmit={this.handleSubmit}>
      //   <input type="email" name="loginEmail" />
      //   <input type="password" name="loginPassword" />
      //   <input type="submit" value="Login" />
      // </form>


    <div className="block-content block-content-full block-content-narrow"> 
      <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
      <p>Welcome, please login.</p>
        <form className="js-validation-login form-horizontal push-30-t push-50" >
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="form-material form-material-primary floating">
                        <input className="form-control" type="email" name="loginEmail" />
                        <label for="login-username">Username</label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <div className="form-material form-material-primary floating">
                        <input className="form-control" type="password" name="loginPassword" />
                        <label for="login-password">Password</label>
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
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <button className="btn btn-block btn-primary" type="submit" value="Login"><i className="si si-login pull-right"></i> Log in</button>
                </div>
            </div>
        </form>
    </div>
      // </div>

      
    )
  }
}

export default Login; 