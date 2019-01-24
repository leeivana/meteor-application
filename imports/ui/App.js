import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import './assets/css/oneui.css';
import './assets/css/bootstrap.min.css';
// import './assets/img';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: this.props.currentUser,
    }
  }
  render() {
    return (
      <div style={{backgroundColor: '#f3f1ef'}}>
        { this.state.loggedIn ?
        <div>You're Already Logged In!</div>
        :
        <div>
          <Login />
          <Register />
        </div>
        }
      </div>
    );
  }
}