import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

import { withTracker } from 'meteor/react-meteor-data';

export default class App extends Component {
  render() {
    return (
      <div>
        APP MAIN
        { this.props.currentUser ?
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