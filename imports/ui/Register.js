import React, { Component } from 'react'; 

class Register extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.registerEmail.value;
    const password = event.target.registerPassword.value;
    console.log('Form submitted');
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