import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';


import App from '../imports/ui/App';
import Login from '../imports/ui/Login';
import LoadingSpinner from '../imports/ui/LoadingSpinner';
import Register from '../imports/ui/Register';
import Dashboard from '../imports/ui/Dashboard';


const NeedsAuth = withTracker(() => {
  const isLoggingIn = Meteor.loggingIn();
  const isLoggedIn = Boolean(Meteor.userId());
  return { isLoggingIn, isLoggedIn };
})(
  ({ children, isLoggedIn, isLoggingIn }) => (
    isLoggingIn ? <LoadingSpinner /> : isLoggedIn ? children : <Login />
  )
)

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(App, {
      content: <Login />
    })
  }
})

FlowRouter.route('/register', {
  name: 'Register',
  action() {
    mount(App, {
      content: <Register />
    })
  }
})

FlowRouter.route('/dashboard', {
  name: 'Dashboard',
  action() {
    mount(App, {
      content: (<NeedsAuth><Dashboard /></NeedsAuth>)
    })
  }
});