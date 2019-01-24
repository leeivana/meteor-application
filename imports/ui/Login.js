import React, { Component } from 'react'; 

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    console.log(email, password);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="loginEmail" />
        <input type="password" name="loginPassword" />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login; 