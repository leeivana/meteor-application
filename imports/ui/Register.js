import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';

class Register extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const emailVar = event.target.registerEmail.value;
    const passwordVar = event.target.registerPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
    console.log('user', Meteor.user());

  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="email" name="registerEmail" />
            <input type="password" name="registerPassword" />
            <input type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}

export default Register; 