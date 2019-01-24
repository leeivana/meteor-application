import React, { Component } from 'react'; 

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false, 
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.loginUsername.value;
    const password = event.target.loginPassword.value;
    Meteor.loginWithPassword(username, password, error => {
      console.error(error);
    });
    if(Meteor.user()){
      this.setState({
        loggedIn: true, 
      })
    }
    console.log('user', Meteor.user());
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
            <div className="col-xs-12 col-sm-6 col-md-4">
                <button className="btn btn-block btn-primary" type="submit" value="Login"><i className="si si-login pull-right"></i> Log in</button>
            </div>
        </div>
        <p>If you don't have an account, Register <a href="/register">here</a></p>
    </form>
    )
  }
}

export default LoginForm; 