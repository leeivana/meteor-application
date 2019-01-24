import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App';
import Login from '../imports/ui/Login';
import Register from '../imports/ui/Register';

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
